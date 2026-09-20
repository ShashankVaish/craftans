import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/data/techStack";

export function TechStack() {
  return (
    <section className="section-spacing border-t border-charcoal-800">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading eyebrow="Built with" title="Tools we build on." />

        <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {techStack.map((tech) => (
            <li key={tech.name} className="font-mono text-body text-ash-400">
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
