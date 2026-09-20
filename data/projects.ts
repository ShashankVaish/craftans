export interface Project {
  slug: string;
  name: string;
  problem: string;
  result: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "northgate-orders",
    name: "Northgate Orders",
    problem: "D2C brand manually re-keyed orders from 4 sales channels into one spreadsheet.",
    result: "Order sync time dropped from 3 hrs/day to 4 min, automated.",
    tags: ["Next.js", "n8n", "Shopify API"],
    featured: true,
  },
  {
    slug: "haven-support",
    name: "Haven Support",
    problem: "Support inbox backlog of 200+ tickets, most answerable from existing docs.",
    result: "68% of tickets now resolved by an AI agent before a human sees them.",
    tags: ["Claude", "WhatsApp", "Zendesk"],
  },
  {
    slug: "ferro-fitness",
    name: "Ferro Fitness",
    problem: "Booking site couldn't handle class waitlists or no-show follow-ups.",
    result: "Waitlist automation recovered ₹4.2L in bookings in the first quarter.",
    tags: ["Next.js", "n8n", "Stripe"],
  },
  {
    slug: "clearlane-logistics",
    name: "Clearlane Logistics",
    problem: "Dispatch team tracked shipments across 6 disconnected spreadsheets.",
    result: "One dashboard now reflects live status across every carrier, no manual entry.",
    tags: ["Next.js", "APIs", "n8n"],
  },
  {
    slug: "birchwood-clinic",
    name: "Birchwood Clinic",
    problem: "Reception fielded 40+ daily calls for appointment booking and reminders.",
    result: "Voice agent now handles booking and reminders, cutting call volume by half.",
    tags: ["Voice AI", "Claude", "Calendar API"],
  },
  {
    slug: "modal-studio",
    name: "Modal Studio",
    problem: "Portfolio site was slow to update and scored poorly on mobile performance.",
    result: "Rebuilt site hits a 98 Lighthouse score and ships new case studies in minutes.",
    tags: ["Next.js", "TypeScript", "SEO"],
  },
];
