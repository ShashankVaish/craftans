import { CURRENT_QUARTER_LABEL } from "@/lib/constants";
import { techStack } from "@/data/techStack";

export function TrustStrip() {
  return (
    <section className="border-y border-charcoal-800 py-8">
      <div className="container-page flex flex-wrap items-center justify-between gap-6">
        <span className="font-mono text-caption uppercase tracking-wide text-steel-300">
          {CURRENT_QUARTER_LABEL}
        </span>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {techStack.slice(0, 5).map((tech) => (
            <li key={tech.name} className="font-mono text-caption text-ash-400">
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
