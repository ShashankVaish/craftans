import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-md border border-charcoal-800 bg-charcoal-900 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(224,138,75,0.35)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
