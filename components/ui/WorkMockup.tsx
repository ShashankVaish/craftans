interface WorkMockupProps {
  variant: number;
  wide?: boolean;
  className?: string;
}

const PALETTES = [
  { accent: "#E08A4B", accentSoft: "#B9662E" },
  { accent: "#9FB4C7", accentSoft: "#6E8CA3" },
  { accent: "#E08A4B", accentSoft: "#9FB4C7" },
];

const BAR_SETS = [
  [38, 70, 46, 88, 60, 34, 52, 74, 44, 66, 58, 82],
  [64, 40, 82, 50, 68, 30, 58, 46, 72, 36, 60, 78],
  [50, 58, 34, 76, 42, 90, 48, 62, 38, 70, 54, 84],
  [72, 44, 60, 36, 80, 52, 40, 66, 48, 84, 56, 62],
  [40, 66, 48, 84, 56, 62, 44, 70, 52, 86, 60, 76],
  [58, 34, 74, 48, 66, 40, 62, 36, 78, 50, 68, 88],
];

/**
 * Abstract dark-mode dashboard mockup rendered as inline SVG (no binary
 * screenshot assets exist yet for placeholder case studies — see
 * requirement.md assumption #2). Swap for real project screenshots later.
 */
export function WorkMockup({ variant, wide = false, className = "" }: WorkMockupProps) {
  const seed = variant % 6;
  const palette = PALETTES[seed % PALETTES.length];
  const gradientId = `work-grad-${variant}`;

  const width = wide ? 800 : 400;
  const barCount = wide ? 12 : 6;
  const barGap = (width - 48) / barCount;
  const barWidth = barGap * 0.6;
  const bars = BAR_SETS[seed].slice(0, barCount);
  const activeBar = (seed * 2 + 3) % barCount;

  const linePoints = bars
    .map((h, i) => `${24 + i * barGap + barWidth / 2},${150 - h * 0.7}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} 240`}
      className={className}
      role="img"
      aria-label="Abstract dark-mode dashboard mockup with a bar chart, trend line, and status readouts"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={palette.accentSoft} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`${gradientId}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#17171b" />
          <stop offset="100%" stopColor="#0e0e11" />
        </linearGradient>
        <linearGradient id={`${gradientId}-area`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width={width} height="240" fill={`url(#${gradientId}-bg)`} />

      <rect x="0" y="0" width={width} height="32" fill="#1C1C21" />
      <circle cx="18" cy="16" r="4" fill={palette.accent} opacity="0.7" />
      <circle cx="33" cy="16" r="4" fill="#9FB4C7" opacity="0.35" />
      <circle cx="48" cy="16" r="4" fill="#8B8B92" opacity="0.35" />
      <rect x={width - 80} y="9" width="62" height="14" rx="7" fill={palette.accent} opacity="0.16" />
      <circle
        cx={width - 70}
        cy="16"
        r="2.5"
        fill={palette.accent}
        className="animate-pulse motion-reduce:animate-none"
      />
      <text x={width - 44} y="19" textAnchor="middle" fontSize="8" fill={palette.accent} fontFamily="monospace">
        LIVE
      </text>

      <rect x="24" y="50" width="120" height="10" rx="2" fill="#26262d" />
      <rect x="24" y="66" width="72" height="7" rx="2" fill="#1C1C21" />

      <polygon
        points={`24,150 ${linePoints} ${24 + (barCount - 1) * barGap + barWidth / 2},150`}
        fill={`url(#${gradientId}-area)`}
      />
      <polyline
        points={linePoints}
        fill="none"
        stroke={palette.accent}
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {bars.map((h, i) => (
        <rect
          key={i}
          x={24 + i * barGap}
          y={216 - h * 0.6}
          width={barWidth}
          height={h * 0.6}
          rx="3"
          fill={i === activeBar ? `url(#${gradientId})` : "#202027"}
        />
      ))}
      <line x1="24" y1="216" x2={width - 24} y2="216" stroke="#2a2a31" strokeWidth="1" />
    </svg>
  );
}
