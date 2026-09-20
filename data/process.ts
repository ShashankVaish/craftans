export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Scope",
    description:
      "We map what you actually need — site, automations, agents — and lock a fixed price and timeline before any build starts.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Content and design come first, then we build in the open — you see working pieces weekly, not a single reveal at the end.",
  },
  {
    number: "03",
    title: "Review",
    description:
      "You test the real thing against the original scope. We fix what's off before it ships, not after.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy, verify everything end-to-end, and hand off documentation so your team isn't dependent on us to make changes.",
  },
];
