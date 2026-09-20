import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Services"
          title="Three pillars. One connected system."
          description="Each one works standalone — most clients end up wanting all three connected."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="flex flex-col gap-4 hover:border-copper-400/40"
              >
                <Icon aria-hidden="true" className="h-8 w-8 text-copper-400" strokeWidth={1.5} />
                <h3 className="text-h3-mobile md:text-h3 text-paper-50">{service.title}</h3>
                <p className="text-body text-ash-400">{service.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
