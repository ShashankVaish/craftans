import { FacetedMark } from "@/components/ui/FacetedMark";
import { NAV_LINKS, SOCIAL_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative">
      <div className="divider-seam absolute inset-x-0 top-0" />
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FacetedMark className="h-6 w-6" />
            <span className="font-display text-xl font-semibold text-paper-50">
              {SITE.name}
            </span>
          </div>
          <p className="max-w-xs text-body text-ash-400">{SITE.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body text-ash-400 transition-colors duration-150 hover:text-copper-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="text-body text-paper-50 transition-colors duration-150 hover:text-copper-400"
          >
            {SITE.email}
          </a>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-ash-400 transition-colors duration-150 hover:text-copper-400"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page border-t border-charcoal-800 py-6">
        <p className="text-caption text-ash-400">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
