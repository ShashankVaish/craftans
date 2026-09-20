export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What exactly does Craftans build?",
    answer:
      "Three things, sold individually or together: marketing websites, workflow automations that replace manual ops, and AI agents for chat, voice, or WhatsApp. Most clients start with one and add the others once it's working.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A website alone usually ships in 2–3 weeks. Adding automations or an AI agent extends that depending on how many systems we're connecting to — we give you a fixed timeline after scoping.",
  },
  {
    question: "Do you work with an existing tech stack, or do we need to switch?",
    answer:
      "We build around what you already use — your CRM, storefront, support desk, calendar. Automations and agents connect via API; we rarely ask a client to migrate a system just to work with us.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Fixed price per project, scoped after a short call — not hourly billing. See the pricing section above for starting ranges by service.",
  },
  {
    question: "Who owns the code and workflows after launch?",
    answer:
      "You do. Everything is handed off with documentation — no vendor lock-in, no dependency on us to make future changes.",
  },
  {
    question: "Can you maintain or extend the project after launch?",
    answer:
      "Yes, on a retainer basis if you want it, but it's optional. Every handoff includes enough documentation that your own team (or another vendor) can pick it up.",
  },
  {
    question: "What if we're not sure which service we need yet?",
    answer:
      "Book a call. Most engagements start there — we'll tell you honestly if a website is enough, or if automation/AI would solve the actual bottleneck.",
  },
];
