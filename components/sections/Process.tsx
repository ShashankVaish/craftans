import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="section-spacing">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Process"
          title="How a project actually moves."
          description="Scope before build, review before launch — nothing skipped to hit a date."
        />

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.number} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-caption text-copper-400">{step.number}</span>
                <div
                  className={`h-px flex-1 bg-charcoal-800 ${index === 0 ? "hidden md:block" : ""}`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-h3-mobile md:text-h3 text-paper-50">{step.title}</h3>
              <p className="text-body text-ash-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
