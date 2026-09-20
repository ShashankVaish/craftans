interface GlowBackdropProps {
  className?: string;
}

export function GlowBackdrop({ className = "" }: GlowBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 glow-copper ${className}`}
    />
  );
}
