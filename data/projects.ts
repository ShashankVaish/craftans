export interface Project {
  slug: string;
  name: string;
  problem: string;
  result: string;
  stat: string;
  statLabel: string;
  tags: string[];
  featured?: boolean;
}

// Client and project names are withheld under our confidentiality terms —
// each case study is described by industry only.
export const projects: Project[] = [
  {
    slug: "online-retail-orders",
    stat: "3h → 4min",
    statLabel: "daily order work",
    name: "Online retail store",
    problem: "The team copied every order from 4 sales channels into one spreadsheet by hand.",
    result: "Order updates now take 4 minutes instead of 3 hours a day.",
    tags: ["Next.js", "n8n", "Shopify API"],
    featured: true,
  },
  {
    slug: "software-company-support",
    stat: "68%",
    statLabel: "messages answered by AI",
    name: "Software company",
    problem: "Over 200 support messages were piling up, even though most answers already existed.",
    result: "An AI helper now answers 68% of messages before a person sees them.",
    tags: ["Claude", "WhatsApp", "Zendesk"],
  },
  {
    slug: "fitness-studio-bookings",
    stat: "₹4.2L",
    statLabel: "bookings recovered",
    name: "Fitness studio",
    problem: "The booking site couldn't handle waitlists or remind people who missed a class.",
    result: "Automatic waitlist reminders brought back ₹4.2L in bookings in one quarter.",
    tags: ["Next.js", "n8n", "Stripe"],
  },
  {
    slug: "logistics-dispatch",
    stat: "6 → 1",
    statLabel: "spreadsheets to one dashboard",
    name: "Logistics company",
    problem: "The dispatch team tracked shipments across 6 separate spreadsheets.",
    result: "One live dashboard now shows every shipment — no typing required.",
    tags: ["Next.js", "APIs", "n8n"],
  },
  {
    slug: "healthcare-clinic",
    stat: "−50%",
    statLabel: "phone calls to reception",
    name: "Healthcare clinic",
    problem: "Reception answered over 40 calls a day just for booking and reminders.",
    result: "A voice assistant now handles bookings, cutting phone calls in half.",
    tags: ["Voice AI", "Claude", "Calendar API"],
  },
  {
    slug: "creative-studio-site",
    stat: "98/100",
    statLabel: "speed score",
    name: "Creative studio",
    problem: "The old portfolio site was slow to update and loaded poorly on phones.",
    result: "The new site scores 98/100 for speed and adds new projects in minutes.",
    tags: ["Next.js", "TypeScript", "SEO"],
    featured: true,
  },
];
