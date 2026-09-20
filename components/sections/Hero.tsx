"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { FacetedMark } from "@/components/ui/FacetedMark";
import { SITE, CURRENT_QUARTER_LABEL } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(72px+64px)] md:pt-[calc(72px+96px)] pb-section-mobile md:pb-section-desktop">
      <GlowBackdrop className="top-0" />

      <div className="container-page grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="font-mono text-caption uppercase tracking-wide text-copper-400"
          >
            {CURRENT_QUARTER_LABEL}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-h1-mobile md:text-h1 text-paper-50"
          >
            Software business ecosystems, not one-off projects.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-prose text-body-lg-mobile md:text-body-lg text-ash-400"
          >
            {SITE.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <ButtonLink href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a call
            </ButtonLink>
            <ButtonLink href="#work" variant="ghost">
              See our work
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto w-full max-w-xs md:max-w-sm"
        >
          <FacetedMark className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
