interface WorkMockupProps {
  variant: number;
  className?: string;
}

/**
 * Abstract dark-mode dashboard mockup rendered as inline SVG (no binary
 * screenshot assets exist yet for placeholder case studies — see
 * requirement.md assumption #2). Swap for real project screenshots later.
 */
export function WorkMockup({ variant, className = "" }: WorkMockupProps) {
  const seed = variant % 3;
  const barHeights = [
    [40, 65, 30, 80, 55],
    [70, 45, 60, 35, 85],
    [50, 50, 75, 40, 60],
  ][seed];

  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      role="img"
      aria-label="Abstract dark-mode dashboard mockup with a bar chart and status readouts"
    >
      <rect width="400" height="240" fill="#121215" />
      <rect x="0" y="0" width="400" height="28" fill="#1C1C21" />
      <circle cx="16" cy="14" r="4" fill="#E08A4B" opacity="0.6" />
      <circle cx="30" cy="14" r="4" fill="#9FB4C7" opacity="0.4" />
      <circle cx="44" cy="14" r="4" fill="#8B8B92" opacity="0.4" />

      {barHeights.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 65}
          y={200 - h}
          width="36"
          height={h}
          rx="3"
          fill={i === seed ? "#E08A4B" : "#1C1C21"}
          stroke="#1C1C21"
        />
      ))}

      <line x1="24" y1="200" x2="376" y2="200" stroke="#1C1C21" strokeWidth="1" />
      <rect x="24" y="48" width="120" height="10" rx="2" fill="#1C1C21" />
      <rect x="24" y="66" width="80" height="8" rx="2" fill="#1C1C21" />
      <rect x="300" y="48" width="76" height="20" rx="10" fill="#9FB4C7" opacity="0.15" />
    </svg>
  );
}
