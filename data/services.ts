import type { LucideIcon } from "lucide-react";
import { Globe, Workflow, Bot } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Marketing sites and product front-ends built fast, on a real design system — not a page builder you'll fight later.",
    tags: ["Next.js", "TypeScript", "SEO"],
  },
  {
    icon: Workflow,
    title: "Automations",
    description:
      "We map your manual ops — orders, support, onboarding — and replace the busywork with workflows that run themselves.",
    tags: ["n8n", "Zapier", "APIs"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Chat, voice, and WhatsApp agents wired into your real data, so customers get answers without waiting on a human.",
    tags: ["Claude", "WhatsApp", "Voice"],
  },
];
