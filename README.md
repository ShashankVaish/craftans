# Craftans — marketing site

Next.js 14 · TypeScript · Tailwind. Design system and requirements live in
`ui.md`, `requirement.md`, `architecture.md`, `process.md`, `task.md`.

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Deploy to Vercel + craftans.com

### 1. Push the code

```bash
git add -A
git commit -m "Redesign site, add Cal.com booking + webhook"
git push origin dev
```

### 2. Create the Vercel project

Easiest is the dashboard (gives automatic deploys on every push):
vercel.com → **Add New → Project** → import `ShashankVaish/craftans` → **Deploy**.
Framework, build command and output are detected automatically.

Or with the CLI:

```bash
npm i -g vercel
vercel login
vercel link          # creates/links the project
vercel --prod        # deploy to production
```

### 3. Environment variables

**Settings → Environment Variables** (or `vercel env add <NAME> production`):

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_CAL_LINK` | `shashank-vaish-snw03h/15min` |
| `CAL_WEBHOOK_SECRET` | the secret you set in Cal.com |
| `BOOKING_NOTIFY_WEBHOOK_URL` | Slack/Discord webhook (optional) |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Formspree endpoint (optional) |

Redeploy after adding them.

### 4. Add the domain

Vercel → **Settings → Domains** → add `craftans.com` (accept the prompt to add
`www.craftans.com` too). Vercel then shows the exact DNS values **for this
project** — those are the source of truth; the A record IP and the `www` CNAME
host differ per project.

### 5. Point GoDaddy at Vercel

GoDaddy → **My Products → Domains → craftans.com → DNS → Manage DNS**.

1. Delete/edit the default parked records: the `A` record named `@` (points to a
   GoDaddy IP) and the `CNAME` named `www` (points to `@`).
2. Add the A record Vercel shows:

   | Type | Name | Value | TTL |
   | --- | --- | --- | --- |
   | A | `@` | *(IP from your Vercel domain card)* | 600 |

3. Add the www record Vercel shows:

   | Type | Name | Value | TTL |
   | --- | --- | --- | --- |
   | CNAME | `www` | *(unique host from your Vercel domain card)* | 600 |

4. Leave MX and other email records alone.

Usually live in 10–30 minutes. Vercel issues the HTTPS certificate on its own.

### 6. After the domain is live

- Cal.com → Settings → Developer → Webhooks → set the URL to
  `https://craftans.com/api/cal/webhook`, then **Ping test** (expect 200).
- Check `https://craftans.com` and `https://www.craftans.com` both load.

## Cal.com booking + webhook

Every "Book a call" button opens a Cal.com popup for a 15‑minute event. When
someone books, reschedules or cancels, Cal.com calls
`POST /api/cal/webhook`, which verifies the signature and (optionally) forwards a
message to Slack/Discord.

### 1. Create the event in Cal.com

1. Sign up at cal.com and pick a username (this site is wired to
   `shashank-vaish-snw03h`).
2. **Event Types → New** → Duration `15`, slug `15min`, title "Free 15‑min call".
3. Under **Availability** set your working hours and time zone.
4. (Optional) **Advanced → Booking questions**: add "What does your business need?"
   so you get context before the call.
5. Your link is now `cal.com/<username>/15min` — currently
   <https://cal.com/shashank-vaish-snw03h/15min>.

### 2. Point the site at it

The live event is already the default in `lib/constants.ts`, so nothing is
required. To point the site at a different event, override it in `.env.local`
(and in Vercel → Settings → Environment Variables):

```
NEXT_PUBLIC_CAL_LINK=shashank-vaish-snw03h/15min
```

All buttons (`components/BookCallButton.tsx`) read this value.

### 3. Add the webhook in Cal.com

1. **Settings → Developer → Webhooks → New webhook**.
2. Subscriber URL: `https://<your-domain>/api/cal/webhook`
   (for local testing use an `ngrok http 3000` URL).
3. Triggers: tick **Booking created**, **Booking rescheduled**, **Booking cancelled**
   (and **Meeting ended** if you want follow‑up reminders).
4. Secret: generate a long random string, paste it here **and** set it as
   `CAL_WEBHOOK_SECRET` in your env. Save.
5. Click **Ping test** — you should get a `200` and a `[cal-webhook] PING` line in
   the server logs.

### 4. Get notified (optional)

Set `BOOKING_NOTIFY_WEBHOOK_URL` to a Slack *Incoming Webhook* URL or a Discord
channel webhook URL. Each event is forwarded as a short message with the
attendee, time and video link.

### Managing bookings day to day

- **See / reschedule / cancel calls:** Cal.com → **Bookings** (Upcoming, Past,
  Cancelled). Rescheduling or cancelling from here fires the webhook again, so
  Slack/Discord stays in sync.
- **Change availability or block time off:** Cal.com → **Availability**.
  Connect Google/Outlook calendar under **Settings → Calendars** so existing
  meetings are treated as busy automatically.
- **Webhook not arriving?** Cal.com → Settings → Developer → Webhooks → your
  webhook → **Logs** shows every delivery and the response code. A `401` means
  the secret doesn't match; a `500` means `CAL_WEBHOOK_SECRET` isn't set on the
  server.
- **Rotate the secret:** update it in Cal.com and in your env at the same time,
  then redeploy.
- **Add automation later:** `app/api/cal/webhook/route.ts` already parses the
  event; extend the `switch`‑style handling there to e.g. create a CRM lead,
  send a WhatsApp confirmation, or add the booking to a sheet.

### Local test without Cal.com

```bash
CAL_WEBHOOK_SECRET=testsecret npm run dev
```

Then send a signed request (see `route.ts` for the payload shape):

```bash
node -e '
const c=require("crypto");
const body=JSON.stringify({triggerEvent:"BOOKING_CREATED",createdAt:new Date().toISOString(),
  payload:{title:"15 Min Meeting",startTime:"2026-10-01T09:30:00Z",
  attendees:[{name:"Test User",email:"test@example.com",timeZone:"Asia/Kolkata"}]}});
const sig=c.createHmac("sha256","testsecret").update(body).digest("hex");
fetch("http://localhost:3000/api/cal/webhook",{method:"POST",
  headers:{"content-type":"application/json","x-cal-signature-256":sig},body})
  .then(r=>r.text()).then(console.log)'
```

## Contact form

Set `NEXT_PUBLIC_FORM_ENDPOINT` to a Formspree/Getform endpoint. If unset, the
form falls back to a `mailto:` link so it still works.
