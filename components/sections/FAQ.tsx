import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { BookCallButton } from "@/components/BookCallButton";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="section-spacing relative">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions."
              description="Still unsure about something? A quick call is the fastest way to find out."
            />
            <div>
              <BookCallButton variant="ghost">Ask us on a 15-min call</BookCallButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
