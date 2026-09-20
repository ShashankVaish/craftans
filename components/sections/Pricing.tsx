import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const tiers = [
  {
    name: "Website",
    price: "Starts at $3,500",
    description: "A marketing site built on a real design system, not a template.",
    features: ["Responsive, accessible build", "On-page SEO baseline", "Contact form wired up"],
  },
  {
    name: "Website + Automation",
    price: "Starts at $8,000",
    description: "Your site plus the workflows that remove manual ops.",
    features: ["Everything in Website", "2–4 automated workflows", "Connected to your existing tools"],
    highlighted: true,
  },
  {
    name: "Full Ecosystem",
    price: "Custom",
    description: "Website, automations, and an AI agent as one connected system.",
    features: ["Everything in Website + Automation", "Chat, voice, or WhatsApp agent", "Ongoing retainer available"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-spacing border-t border-charcoal-800">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Pricing"
          title="Fixed price, scoped up front."
          description="No hourly billing. We scope on a call, then quote a fixed price for the whole project."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col gap-4 ${
                tier.highlighted ? "border-copper-400/40" : ""
              }`}
            >
              <h3 className="text-h3-mobile md:text-h3 text-paper-50">{tier.name}</h3>
              <p className="font-mono text-caption text-copper-400">{tier.price}</p>
              <p className="text-body text-ash-400">{tier.description}</p>
              <ul className="flex flex-col gap-2 pt-2 text-body text-ash-400">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant={tier.highlighted ? "primary" : "ghost"}
                className="mt-auto"
              >
                Book a call
              </ButtonLink>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
