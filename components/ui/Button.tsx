import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-body font-display font-semibold transition-all duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-400 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-copper-400 text-charcoal-950 hover:bg-copper-600 hover:-translate-y-0.5",
  ghost:
    "bg-transparent border border-charcoal-800 text-paper-50 hover:border-copper-400/50",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = "primary", className = "", ...props }, ref) => (
    <a
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
);
ButtonLink.displayName = "ButtonLink";
