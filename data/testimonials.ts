export interface Testimonial {
  quote: string;
  role: string;
  sector: string;
}

// Names and company names are withheld under our confidentiality terms —
// each quote is attributed by role and industry only.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Craftans built our website and order automation together. We stopped losing orders in the first week.",
    role: "Founder",
    sector: "Online retail store",
  },
  {
    quote:
      "They showed us real progress every week, not just promises. We always knew where things stood.",
    role: "Operations lead",
    sector: "Software company",
  },
  {
    quote:
      "Our AI helper now answers most messages on its own. Our team finally has time for the hard questions.",
    role: "Co-founder",
    sector: "Customer support team",
  },
];
