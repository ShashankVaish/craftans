import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#0A0A0C",
          900: "#121215",
          800: "#1C1C21",
        },
        copper: {
          400: "#E08A4B",
          600: "#B9662E",
        },
        steel: {
          300: "#9FB4C7",
        },
        paper: {
          50: "#F5F3EF",
        },
        ash: {
          400: "#8B8B92",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "1.05", fontWeight: "600" }],
        "h1-mobile": ["40px", { lineHeight: "1.1", fontWeight: "600" }],
        h2: ["44px", { lineHeight: "1.1", fontWeight: "600" }],
        "h2-mobile": ["30px", { lineHeight: "1.15", fontWeight: "600" }],
        h3: ["22px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3-mobile": ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg-mobile": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile": ["15px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: [
          "13px",
          { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.02em" },
        ],
        "caption-mobile": [
          "12px",
          { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.02em" },
        ],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        "section-desktop": "96px",
        "section-mobile": "64px",
        "container-desktop": "80px",
        "container-mobile": "20px",
      },
      transitionDuration: {
        150: "150ms",
        200: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
