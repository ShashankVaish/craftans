export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What exactly does Craftans build?",
    answer:
      "Three things: websites, automation for your daily tasks, and AI helpers for chat, voice, or WhatsApp. You can start with just one, or get all three together.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A website alone usually takes 2–3 weeks. Adding automation or an AI helper takes a bit longer — we'll give you a clear timeline after we talk.",
  },
  {
    question: "Do we need to change the tools we already use?",
    answer:
      "No. We build around the tools you already use, like your store, calendar, or support desk. We rarely ask you to switch systems.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "One fixed price for the whole project, agreed after a quick call. No surprise hourly bills. See the pricing section above for starting prices.",
  },
  {
    question: "Who owns everything after launch?",
    answer:
      "You do. We hand over everything with clear instructions, so you're never stuck needing us for small changes.",
  },
  {
    question: "Can you help after the project launches?",
    answer:
      "Yes, if you want ongoing help — but it's optional. We explain everything clearly so your own team can take over any time.",
  },
  {
    question: "Not sure which service you need?",
    answer:
      "Just book a call. We'll listen and tell you honestly whether a website is enough, or if automation or AI would help more.",
  },
];
