import type { LucideIcon } from "lucide-react";
import { Globe, Workflow, Bot } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "A fast, good-looking website that works well on phones, tablets, and computers.",
    bullets: ["Designed just for your brand", "Shows up in Google search", "Easy for you to update"],
    tags: ["Next.js", "TypeScript", "SEO"],
  },
  {
    icon: Workflow,
    title: "Automations",
    description:
      "We take repeated tasks — like order updates or replying to customers — and make them happen automatically.",
    bullets: ["Orders, invoices, and reminders sent on their own", "Works with tools you already use", "Saves hours every week"],
    tags: ["n8n", "Zapier", "APIs"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "A smart assistant that answers customer questions by chat, voice, or WhatsApp, any time of day.",
    bullets: ["Answers common questions instantly", "Books appointments and takes orders", "Hands over to a human when needed"],
    tags: ["Claude", "WhatsApp", "Voice"],
  },
];
