import { Quote, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-spacing relative bg-charcoal-900/30">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say."
            description="Names are kept private, so these are shared by role and industry."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 0.1} className="h-full">
              <Card className="card-glow flex h-full flex-col gap-6 hover:border-copper-400/30">
                <Quote aria-hidden="true" className="h-7 w-7 text-copper-400/70" strokeWidth={1.5} />
                <p className="text-body-lg text-paper-50">{testimonial.quote}</p>
                <div className="mt-auto flex items-center gap-3 border-t border-charcoal-800 pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copper-400 to-copper-600">
                    <Building2 aria-hidden="true" className="h-5 w-5 text-charcoal-950" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-body font-semibold text-paper-50">{testimonial.role}</span>
                    <span className="text-caption text-ash-400">{testimonial.sector}</span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
