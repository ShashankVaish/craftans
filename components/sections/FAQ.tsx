import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="section-spacing border-t border-charcoal-800">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading eyebrow="FAQ" title="Common questions." />
        <div className="max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
