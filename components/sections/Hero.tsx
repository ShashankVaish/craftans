import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { BookCallButton } from "@/components/BookCallButton";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { CountUp } from "@/components/ui/CountUp";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { CURRENT_QUARTER_LABEL, STATS } from "@/lib/constants";

function delay(ms: number) {
  return { ["--hero-delay" as string]: `${ms}ms` };
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <GlowBackdrop className="top-0" />

      <div className="container-page grid grid-cols-1 items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
        <div className="flex flex-col items-start gap-7">
          <span
            className="hero-in inline-flex items-center gap-2 rounded-full border border-charcoal-800 bg-charcoal-900/70 px-3 py-1.5 font-mono text-caption uppercase tracking-wide text-copper-400 backdrop-blur"
            style={delay(0)}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-steel-300 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-steel-300" />
            </span>
            {CURRENT_QUARTER_LABEL}
          </span>

          <h1
            className="hero-in max-w-[15ch] text-[40px] leading-[1.05] tracking-tight text-paper-50 sm:text-[52px] lg:text-[60px] xl:text-[68px]"
            style={delay(100)}
          >
            Websites, automation, and{" "}
            <span className="text-gradient-copper">AI — built for your business.</span>
          </h1>

          <p
            className="hero-in max-w-[46ch] text-body-lg-mobile text-ash-400 md:text-body-lg"
            style={delay(200)}
          >
            We design your website, automate your daily tasks, and build AI helpers
            that talk to your customers — all working together, so you deal with one
            team instead of three.
          </p>

          <div className="hero-in flex flex-wrap items-center gap-3" style={delay(300)}>
            <BookCallButton className="min-h-[48px] px-7">Book a free 15-min call</BookCallButton>
            <ButtonLink href="#work" variant="ghost" className="min-h-[48px]">
              See our work
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
          </div>

          <dl
            className="hero-in mt-2 grid w-full max-w-md grid-cols-3 divide-x divide-charcoal-800 border-t border-charcoal-800 pt-6"
            style={delay(420)}
          >
            {STATS.map((stat, index) => (
              <div key={stat.label} className={`flex flex-col ${index === 0 ? "pr-4" : "px-4"}`}>
                <dt className="order-2 text-[12px] leading-snug text-ash-400 sm:text-caption">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl font-semibold text-paper-50 sm:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in w-full" style={delay(250)}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
