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
      <polygon points="160,20 230,90 160,160 90,90" fill="#E08A4B" opacity="0.9" />
      <polygon points="160,20 230,90 260,60" fill="#B9662E" />
      <polygon points="160,20 90,90 60,60" fill="#9FB4C7" opacity="0.7" />
      <polygon points="90,90 160,160 60,200" fill="#1C1C21" stroke="#E08A4B" strokeOpacity="0.3" />
      <polygon points="230,90 160,160 260,200" fill="#121215" stroke="#E08A4B" strokeOpacity="0.3" />
      <polygon points="160,160 260,200 200,280 120,280 60,200" fill="#0A0A0C" stroke="#1C1C21" />
      <polygon points="160,160 200,280 120,280" fill="#B9662E" opacity="0.5" />
      <line x1="160" y1="20" x2="160" y2="160" stroke="#F5F3EF" strokeOpacity="0.15" strokeWidth="1" />
    </svg>
  );
}
