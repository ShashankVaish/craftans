import { Globe, Workflow, Bot, Check } from "lucide-react";
import { FacetedMark } from "@/components/ui/FacetedMark";

const nodes = [
  {
    icon: Globe,
    title: "Website",
    line: "Site is live",
    meta: "98/100 speed score",
    position: "left-0 top-[6%]",
    delay: "0s",
  },
  {
    icon: Workflow,
    title: "Automation",
    line: "42 orders synced",
    meta: "just now, no typing",
    position: "right-0 top-[30%]",
    delay: "1.4s",
  },
  {
    icon: Bot,
    title: "AI helper",
    line: "Replied to a customer",
    meta: "in 3 seconds, on WhatsApp",
    position: "left-[4%] bottom-[4%]",
    delay: "2.6s",
  },
];

/**
 * The hero's illustrated moment: the Craftans mark at the centre with the
 * three services orbiting it, to show "one connected system" at a glance.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[520px]">
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-copper-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full border border-dashed border-copper-400/25 animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[24%] rounded-full border border-charcoal-800"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path d="M22 16 L50 50" stroke="#E08A4B" strokeOpacity="0.35" strokeDasharray="2 3" />
        <path d="M82 40 L50 50" stroke="#E08A4B" strokeOpacity="0.35" strokeDasharray="2 3" />
        <path d="M24 84 L50 50" stroke="#E08A4B" strokeOpacity="0.35" strokeDasharray="2 3" />
      </svg>

      <div className="absolute inset-[31%] animate-float-slow sm:inset-[29%]">
        <FacetedMark className="h-full w-full" />
      </div>

      {nodes.map((node) => {
        const Icon = node.icon;
        return (
          <div
            key={node.title}
            className={`absolute ${node.position} animate-float w-[44%] sm:w-[42%]`}
            style={{ animationDelay: node.delay }}
          >
            <div className="rounded-md border border-charcoal-800 bg-charcoal-900/85 p-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-copper-400/15">
                  <Icon aria-hidden="true" className="h-4 w-4 text-copper-400" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-ash-400">
                  {node.title}
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[13px] font-semibold text-paper-50 sm:text-sm">
                <Check aria-hidden="true" className="h-3.5 w-3.5 text-copper-400" />
                {node.line}
              </p>
              <p className="mt-0.5 text-[11px] text-ash-400 sm:text-xs">{node.meta}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
