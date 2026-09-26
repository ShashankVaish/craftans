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
      "We talk about what you need, then agree on a price and timeline before we start.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and build step by step, showing you real progress every week.",
  },
  {
    number: "03",
    title: "Review",
    description:
      "You try the real thing and tell us what to change — before it goes live.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We launch it, check everything works, and show your team how to use it.",
  },
];
