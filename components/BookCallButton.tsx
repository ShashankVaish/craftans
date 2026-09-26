"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ButtonLink } from "@/components/ui/Button";
import { CAL } from "@/lib/constants";
import type { AnchorHTMLAttributes } from "react";

/**
 * Loads the Cal.com embed once and themes the popup to match the site.
 * Rendered once in the root layout.
 */
export function CalInit() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL.namespace });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#E08A4B" },
          light: { "cal-brand": "#B9662E" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}

interface BookCallButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
}

/**
 * Opens the 15-minute Cal.com booking popup. The href is a real link to the
 * same event, so it still works if the embed script hasn't loaded (or JS is off).
 */
export function BookCallButton({
  variant = "primary",
  children = "Book a 15-min call",
  onClick,
  ...props
}: BookCallButtonProps) {
  return (
    <ButtonLink
      href={CAL.url}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      data-cal-namespace={CAL.namespace}
      data-cal-link={CAL.link}
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      onClick={(event) => {
        // Let the embed handle the click; fall through to the href only if
        // the embed hasn't attached (e.g. script blocked).
        if ((window as Window & { Cal?: unknown }).Cal) {
          event.preventDefault();
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </ButtonLink>
  );
}
