import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { WorkMockup } from "@/components/ui/WorkMockup";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="section-spacing relative bg-charcoal-900/30">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Work"
              title="See what we've built."
              description="Real problems we've solved, and the results they got. We keep client names private, so each one is described by industry."
            />
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 whitespace-nowrap text-body text-copper-400 transition-colors hover:text-paper-50"
            >
              Start your project
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 3) * 0.08}
              className={
                project.featured
                  ? index === projects.length - 1
                    ? "md:col-span-2 lg:col-span-3"
                    : "md:col-span-2"
                  : ""
              }
            >
              <article
                tabIndex={0}
                className="card-glow group flex h-full flex-col overflow-hidden rounded-lg border border-charcoal-800 bg-charcoal-900 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(224,138,75,0.4)] focus-visible:border-copper-400/40"
              >
                <div className="relative overflow-hidden">
                  <WorkMockup
                    variant={index}
                    className={`w-full transition-transform duration-300 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] ${
                      project.featured ? "md:hidden" : ""
                    }`}
                  />
                  {project.featured && (
                    <WorkMockup
                      variant={index}
                      wide
                      className="hidden w-full transition-transform duration-300 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] md:block"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-transparent"
                  />
                  <div className="absolute bottom-4 left-5 flex flex-col">
                    <span className="font-display text-3xl font-semibold leading-none text-copper-400 md:text-4xl">
                      {project.stat}
                    </span>
                    <span className="mt-1.5 font-mono text-caption text-ash-400">
                      {project.statLabel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-h3-mobile md:text-h3 text-paper-50">{project.name}</h3>
                  <p className="text-body text-ash-400">{project.problem}</p>
                  <p className="text-[15px] text-paper-50/90">
                    <span className="mr-2 font-mono text-caption uppercase text-copper-400">Result</span>
                    {project.result}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
