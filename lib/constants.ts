export const SITE = {
  name: "Craftans",
  tagline: "We build websites, automate your work, and add AI helpers.",
  description:
    "Craftans builds your website, automates the boring daily tasks, and creates AI helpers that talk to your customers — all working together as one system.",
  url: "https://craftans.com",
  email: "hello@craftans.com",
};

// Cal.com booking. Set NEXT_PUBLIC_CAL_LINK to "<username>/<event-slug>"
// (e.g. "craftans/15min") — see .env.example.
const calLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "shashank-vaish-snw03h/15min";

export const CAL = {
  link: calLink,
  url: `https://cal.com/${calLink}`,
  namespace: "15min",
};

export const STATS = [
  { value: 40, suffix: "+", label: "Projects shipped" },
  { value: 68, suffix: "%", label: "Support handled by AI" },
  { value: 3, suffix: " wks", label: "Average site launch" },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const MOBILE_NAV_LINKS = [...NAV_LINKS, { label: "Contact", href: "#contact" }];

export const SOCIAL_LINKS = [
  { label: "X / Twitter", href: "https://twitter.com/craftans" },
  { label: "LinkedIn", href: "https://linkedin.com/company/craftans" },
  { label: "GitHub", href: "https://github.com/craftans" },
];

export const CURRENT_QUARTER_LABEL = "Now booking Q1 2026";
