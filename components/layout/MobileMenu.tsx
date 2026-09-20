"use client";

import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 top-[72px] z-40 flex flex-col bg-charcoal-950 md:hidden"
    >
      <nav aria-label="Mobile" className="flex flex-1 flex-col gap-2 px-container-mobile py-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="min-h-[44px] rounded-md px-2 py-3 text-h3-mobile text-paper-50 hover:text-copper-400"
          >
            {link.label}
          </a>
        ))}
        <ButtonLink
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="mt-4 w-full min-h-[44px]"
          onClick={onClose}
        >
          Book a call
        </ButtonLink>
      </nav>
    </div>
  );
}
