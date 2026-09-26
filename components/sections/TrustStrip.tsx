import { projects } from "@/data/projects";

export function TrustStrip() {
  return (
    <section className="relative py-8">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="divider-seam absolute inset-x-0 bottom-0" />
      <div className="container-page flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <span className="font-mono text-caption uppercase tracking-wide text-ash-400">
          Industries we work with
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {projects.slice(0, 5).map((project) => (
            <li
              key={project.slug}
              className="font-display text-base font-semibold text-ash-400/80 transition-colors hover:text-paper-50"
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
