import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/data/techStack";

export function TechStack() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative py-16 md:py-20">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="container-page flex flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow="Built with"
            title="Trusted tools, not experiments."
            description="We build on well-known platforms your team can keep using long after launch."
          />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="marquee mt-10 overflow-hidden">
        <ul className="marquee-track flex w-max gap-3 motion-reduce:animate-none" aria-label="Tools we use">
          {items.map((tech, index) => (
            <li
              key={`${tech.name}-${index}`}
              aria-hidden={index >= techStack.length}
              className="shrink-0 rounded-sm border border-charcoal-800 bg-charcoal-900 px-5 py-2.5 font-mono text-body text-ash-400"
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
