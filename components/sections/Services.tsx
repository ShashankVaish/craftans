import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="section-spacing relative">
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What we build for you."
            description="Pick one to start, or get all three working together."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.1} className="h-full">
                <article className="card-glow group relative flex h-full flex-col gap-5 overflow-hidden rounded-lg border border-charcoal-800 bg-charcoal-900 p-7 transition-transform duration-200 ease-out hover:-translate-y-1 md:p-8">
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-copper-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-copper-400/20 bg-copper-400/10 transition-transform duration-200 ease-out group-hover:-rotate-6 group-hover:scale-110">
                      <Icon aria-hidden="true" className="h-6 w-6 text-copper-400" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-caption text-ash-400">0{index + 1}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-h3-mobile md:text-h3 text-paper-50">{service.title}</h3>
                    <p className="text-body text-ash-400">{service.description}</p>
                  </div>

                  <ul className="flex flex-col gap-2 border-t border-charcoal-800 pt-5 text-body text-paper-50/90">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-[15px]">
                        <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-copper-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {service.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
