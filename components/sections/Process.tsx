"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="section-spacing relative">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How we work, step by step."
            description="Four simple stages, so you always know what happens next."
          />
        </Reveal>

        <ol className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <li className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-copper-400/40 bg-copper-400/10 font-mono text-caption text-copper-400">
                    {step.number}
                  </span>
                  <div
                    className={`h-px flex-1 origin-left overflow-hidden bg-charcoal-800 ${
                      index === processSteps.length - 1 ? "hidden md:block md:opacity-0" : "hidden md:block"
                    }`}
                    aria-hidden="true"
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                      className="h-full w-full origin-left bg-gradient-to-r from-copper-400 to-transparent"
                    />
                  </div>
                </div>
                <h3 className="text-h3-mobile md:text-h3 text-paper-50">{step.title}</h3>
                <p className="text-body text-ash-400">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
