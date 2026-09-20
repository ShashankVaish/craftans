import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0C",
          backgroundImage:
            "radial-gradient(circle at 75% 30%, rgba(224,138,75,0.35) 0%, rgba(224,138,75,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: "#E08A4B",
            marginBottom: 24,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "#F5F3EF",
            maxWidth: 900,
            lineHeight: 1.1,
          }}
        >
          Software business ecosystems, not one-off projects.
        </div>
      </div>
    ),
    { ...size }
  );
}
