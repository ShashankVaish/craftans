import { ButtonLink } from "@/components/ui/Button";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center py-section-mobile md:py-section-desktop">
      <GlowBackdrop />
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-caption uppercase tracking-wide text-copper-400">
          404
        </span>
        <h1 className="text-h2-mobile md:text-h2 text-paper-50">
          This page hasn&apos;t been forged yet.
        </h1>
        <p className="max-w-prose text-body-lg-mobile md:text-body-lg text-ash-400">
          The page you're looking for doesn't exist. Head back to the homepage.
        </p>
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
