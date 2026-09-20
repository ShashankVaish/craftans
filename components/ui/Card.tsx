import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-md border border-charcoal-800 bg-charcoal-900 p-8 transition-colors duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
