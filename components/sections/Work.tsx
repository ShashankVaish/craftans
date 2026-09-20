import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { WorkMockup } from "@/components/ui/WorkMockup";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="section-spacing">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Work"
            title="Proof, not promises."
            description="A sample of what shipped — the problem, and the number that moved."
          />
          <a
            href="#contact"
            className="whitespace-nowrap text-body text-copper-400 hover:underline"
          >
            View all &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              tabIndex={0}
              className={`group flex flex-col overflow-hidden rounded-md border border-charcoal-800 bg-charcoal-900 transition-colors duration-200 hover:border-copper-400/40 focus-visible:border-copper-400/40 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="overflow-hidden">
                <WorkMockup
                  variant={index}
                  className="w-full transition-transform duration-200 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-h3-mobile md:text-h3 text-paper-50">{project.name}</h3>
                <p className="text-body text-ash-400">{project.problem}</p>
                <p className="font-mono text-caption text-copper-400">{project.result}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
