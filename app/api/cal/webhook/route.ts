import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type CalTrigger =
  | "BOOKING_CREATED"
  | "BOOKING_RESCHEDULED"
  | "BOOKING_CANCELLED"
  | "MEETING_ENDED"
  | "PING";

interface CalWebhookPayload {
  triggerEvent: CalTrigger;
  createdAt: string;
  payload: {
    uid?: string;
    title?: string;
    startTime?: string;
    endTime?: string;
    status?: string;
    cancellationReason?: string;
    attendees?: { name: string; email: string; timeZone?: string }[];
    responses?: Record<string, { label?: string; value?: unknown }>;
    metadata?: { videoCallUrl?: string };
    eventTypeId?: number;
    length?: number;
  };
}

function verifySignature(rawBody: string, signature: string | null, secret: string) {
  if (!signature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}

function formatMessage(event: CalWebhookPayload) {
  const { triggerEvent, payload } = event;
  const who = payload.attendees?.[0];
  const when = payload.startTime
    ? new Date(payload.startTime).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: who?.timeZone ?? "Asia/Kolkata",
      })
    : "unknown time";

  const headline: Record<CalTrigger, string> = {
    BOOKING_CREATED: "New 15-min call booked",
    BOOKING_RESCHEDULED: "Call rescheduled",
    BOOKING_CANCELLED: "Call cancelled",
    MEETING_ENDED: "Call finished",
    PING: "Cal.com webhook test ping",
  };

  const lines = [
    `*${headline[triggerEvent] ?? triggerEvent}*`,
    who ? `${who.name} <${who.email}>` : null,
    payload.title ? `Event: ${payload.title}` : null,
    payload.startTime ? `When: ${when}` : null,
    payload.metadata?.videoCallUrl ? `Join: ${payload.metadata.videoCallUrl}` : null,
    payload.cancellationReason ? `Reason: ${payload.cancellationReason}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

/**
 * Receives Cal.com booking webhooks. Verifies the HMAC signature, then
 * forwards a short summary to an optional Slack/Discord incoming-webhook URL.
 * See README section "Cal.com booking + webhook" for setup steps.
 */
export async function POST(request: Request) {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "CAL_WEBHOOK_SECRET is not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-cal-signature-256");

  if (!verifySignature(rawBody, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: CalWebhookPayload;
  try {
    event = JSON.parse(rawBody) as CalWebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = formatMessage(event);
  console.log(`[cal-webhook] ${event.triggerEvent}`, message.replace(/\n/g, " | "));

  const notifyUrl = process.env.BOOKING_NOTIFY_WEBHOOK_URL;
  if (notifyUrl) {
    // Slack expects {text}, Discord expects {content}; send both keys.
    await fetch(notifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message, content: message }),
    }).catch((error) => console.error("[cal-webhook] notify failed", error));
  }

  return NextResponse.json({ ok: true, received: event.triggerEvent });
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "cal.com webhook" });
}
