interface FacetedMarkProps {
  className?: string;
}

/**
 * Original low-poly "anvil/spark" mark built from triangular facets in the
 * copper/steel palette — the hero's single bold illustrated moment (ui.md §1.5).
 */
export function FacetedMark({ className = "" }: FacetedMarkProps) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="Faceted low-poly Craftans anvil mark in copper and steel"
    >
      <defs>
        <linearGradient id="facet-copper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C89A" />
          <stop offset="55%" stopColor="#E08A4B" />
          <stop offset="100%" stopColor="#B9662E" />
        </linearGradient>
        <linearGradient id="facet-copper-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E08A4B" />
          <stop offset="100%" stopColor="#8A4E24" />
        </linearGradient>
        <linearGradient id="facet-steel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C7D6E1" />
          <stop offset="100%" stopColor="#9FB4C7" />
        </linearGradient>
        <filter id="facet-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#E08A4B" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter="url(#facet-shadow)">
        <polygon points="160,20 230,90 160,160 90,90" fill="url(#facet-copper)" />
        <polygon points="160,20 230,90 260,60" fill="url(#facet-copper-dark)" />
        <polygon points="160,20 90,90 60,60" fill="url(#facet-steel)" opacity="0.85" />
        <polygon
          points="90,90 160,160 60,200"
          fill="#16161a"
          stroke="#E08A4B"
          strokeOpacity="0.35"
        />
        <polygon
          points="230,90 160,160 260,200"
          fill="#121215"
          stroke="#E08A4B"
          strokeOpacity="0.35"
        />
        <polygon
          points="160,160 260,200 200,280 120,280 60,200"
          fill="#0A0A0C"
          stroke="#1C1C21"
        />
        <polygon points="160,160 200,280 120,280" fill="url(#facet-copper-dark)" opacity="0.6" />
        <line x1="160" y1="20" x2="160" y2="160" stroke="#F5F3EF" strokeOpacity="0.15" strokeWidth="1" />
        <line x1="90" y1="90" x2="230" y2="90" stroke="#0A0A0C" strokeOpacity="0.4" strokeWidth="1" />
      </g>
    </svg>
  );
}
