"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BookCallButton } from "@/components/BookCallButton";
import { FacetedMark } from "@/components/ui/FacetedMark";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS, MOBILE_NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-all duration-200 ${
        isScrolled
          ? "border-charcoal-800 bg-charcoal-950/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-full items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold text-paper-50">
          <FacetedMark className="h-7 w-7" />
          {SITE.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-body text-paper-50 transition-colors duration-150 hover:text-copper-400"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper-400 transition-all duration-200 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookCallButton className="px-5 py-2.5">Book a call</BookCallButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm text-paper-50 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={MOBILE_NAV_LINKS}
      />
    </header>
  );
}
