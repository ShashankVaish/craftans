export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Craftans shipped our site and order automation as one project. We stopped losing orders to manual entry in the first week.",
    name: "Priya Nair",
    role: "Founder",
    company: "Northgate Orders",
  },
  {
    quote:
      "The process page wasn't marketing — that's actually how they worked. We knew what was happening at every stage.",
    name: "Daniel Cho",
    role: "Ops Lead",
    company: "Haven Support",
  },
  {
    quote:
      "Our support agent handles two-thirds of tickets now. The team finally has time for the hard ones.",
    name: "Meera Iyer",
    role: "Co-founder",
    company: "Haven Support",
  },
];
