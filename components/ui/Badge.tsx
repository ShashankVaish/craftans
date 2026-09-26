interface BadgeProps {
  children: React.ReactNode;
  tone?: "ash" | "steel";
}

export function Badge({ children, tone = "ash" }: BadgeProps) {
  const toneClasses = tone === "steel" ? "text-steel-300" : "text-ash-400";

  return (
    <span
      className={`inline-flex items-center rounded-sm border border-charcoal-800 bg-charcoal-800/60 px-2.5 py-1 font-mono text-caption ${toneClasses}`}
    >
      {children}
    </span>
  );
}
