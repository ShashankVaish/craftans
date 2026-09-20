import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-spacing border-t border-charcoal-800">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading eyebrow="Testimonials" title="What it's like to work with us." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col gap-6">
              <p className="text-body-lg text-paper-50">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-auto flex flex-col">
                <span className="text-body font-semibold text-paper-50">{testimonial.name}</span>
                <span className="text-caption text-ash-400">
                  {testimonial.role}, {testimonial.company}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
