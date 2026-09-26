import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { BookCallButton } from "@/components/BookCallButton";
import { Reveal } from "@/components/ui/Reveal";

const tiers = [
  {
    name: "Website",
    price: "$3,500", prefix: "Starts at",
    description: "A professional website made just for you, not a generic template.",
    features: ["Looks great on every device", "Set up to show in Google search", "Contact form included"],
  },
  {
    name: "Website + Automation",
    price: "$8,000", prefix: "Starts at",
    description: "Your website, plus automation that saves you time every day.",
    features: ["Everything in Website", "2–4 automated tasks", "Works with tools you already use"],
    highlighted: true,
  },
  {
    name: "Full Ecosystem",
    price: "Custom", prefix: "Quoted after a call",
    description: "Your website, automation, and an AI helper — all working together.",
    features: ["Everything in Website + Automation", "AI helper for chat, voice, or WhatsApp", "Ongoing support available"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-spacing relative">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="One price. No surprises."
            description="No hourly billing. We agree on a fixed price for the whole project before we start."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.1} className="h-full">
              <Card
                className={`card-glow relative flex h-full flex-col gap-4 ${
                  tier.highlighted
                    ? "is-active border-copper-400/50 shadow-[0_30px_80px_-40px_rgba(224,138,75,0.5)] md:-translate-y-3"
                    : ""
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-copper-400 px-3 py-1 font-mono text-caption font-semibold text-charcoal-950">
                    Most popular
                  </span>
                )}
                <h3 className="text-h3-mobile md:text-h3 text-paper-50">{tier.name}</h3>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-caption uppercase tracking-wide text-ash-400">{tier.prefix}</span>
                  <span className="font-display text-4xl font-semibold text-paper-50">{tier.price}</span>
                </div>
                <p className="text-body text-ash-400">{tier.description}</p>
                <ul className="flex flex-col gap-2 pt-2 text-body text-ash-400">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-copper-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <BookCallButton
                  variant={tier.highlighted ? "primary" : "ghost"}
                  className="mt-auto"
                >
                  Book a free call
                </BookCallButton>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
