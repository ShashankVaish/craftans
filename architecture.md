# Craftans — Frontend Architecture

Scope reminder: **frontend only** — no backend, no database, no auth. Any "live data"
in the UI (dashboard mockups, stats) is static/hardcoded content.

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | File-based routing, image optimization, easy static export or Vercel deploy, good SEO defaults |
| Language | **TypeScript** | Catches prop/type errors early, self-documenting components |
| Styling | **Tailwind CSS** + a small `tokens.css`/`tailwind.config` layer | Fast iteration, keeps design tokens (see `ui.md`) in one place, avoids one-off CSS drift |
| Animation | **Framer Motion** (used sparingly, per `ui.md` motion rules) | Declarative, good scroll/reveal + hover primitives |
| Icons | **lucide-react** | Consistent stroke-based icon set, tree-shakeable |
| Forms | **React Hook Form** + client-side validation | Lightweight, no backend needed |
| Form submission | **Formspree / Getform / EmailJS** (pick one) or `mailto:` fallback | No backend allowed, so a third-party form endpoint receives submissions |
| Fonts | Self-hosted via `next/font` (see `ui.md` for typeface choices) | Avoids layout shift, no external font CDN dependency |
| Deployment | **Vercel** (or Netlify) | Zero-config Next.js hosting, preview deployments per branch |

> If a build-tool-free setup is preferred instead of Next.js (e.g. plain Vite + React,
> or static HTML/CSS/JS), the component/section breakdown below still applies — only
> the routing/rendering layer changes. Recommendation stands: **Next.js** for the
> image optimization and SEO wins alone.

## 2. Project Structure
```
craftans/
├─ app/
│  ├─ layout.tsx              # Root layout: fonts, <html>, global providers
│  ├─ page.tsx                # Home — composes all sections
│  ├─ globals.css             # Tailwind directives + CSS custom properties (tokens)
│  └─ not-found.tsx           # 404
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  └─ MobileMenu.tsx
│  ├─ sections/
│  │  ├─ Hero.tsx
│  │  ├─ TrustStrip.tsx
│  │  ├─ Services.tsx
│  │  ├─ Work.tsx
│  │  ├─ Process.tsx
│  │  ├─ TechStack.tsx
│  │  ├─ Pricing.tsx
│  │  ├─ Testimonials.tsx
│  │  ├─ FAQ.tsx
│  │  └─ Contact.tsx
│  └─ ui/                     # Reusable primitives (design-system layer)
│     ├─ Button.tsx
│     ├─ Badge.tsx            # pill/tag chips (e.g. "Next.js", "IRL")
│     ├─ Card.tsx
│     ├─ SectionHeading.tsx
│     ├─ Accordion.tsx
│     ├─ Input.tsx / Textarea.tsx
│     └─ GlowBackdrop.tsx     # reusable ambient-glow background element
│
├─ data/
│  ├─ services.ts             # service pillar content
│  ├─ projects.ts             # case-study data
│  ├─ process.ts               # process steps
│  ├─ techStack.ts             # partner/tool logos
│  ├─ testimonials.ts
│  └─ faq.ts
│
├─ lib/
│  ├─ validators.ts           # form validation schema (e.g. zod)
│  └─ constants.ts            # nav links, site metadata, social links
│
├─ public/
│  ├─ images/                 # project mockups, logos, favicon, og-image
│  └─ fonts/                  # self-hosted font files (if not using next/font/google)
│
├─ tailwind.config.ts
├─ next.config.js
└─ tsconfig.json
```

**Why `data/` is separate from `components/`:** every section component should be a
"dumb" renderer that maps over content from `data/*.ts`. This means updating a case
study, FAQ answer, or tech-stack logo never requires touching JSX — it keeps content
edits low-risk and is a natural seam if a CMS is added later (out of scope for now, but
the structure shouldn't fight it).

## 3. Component Architecture

- **Sections** (`components/sections/*`) = one per §6 block in `requirement.md`.
  Each section is self-contained: it imports its own data, renders its own heading via
  `SectionHeading`, and owns its own local layout. `app/page.tsx` simply composes them
  in order — it should contain no business logic.
- **UI primitives** (`components/ui/*`) = the actual design system: `Button`, `Card`,
  `Badge`, `Accordion`, form inputs, and the `GlowBackdrop` ambient-light component
  used behind the hero and CTA sections. These take `variant` props (e.g.
  `<Button variant="primary" | "ghost">`) rather than being re-styled ad hoc per usage.
- **Layout** (`components/layout/*`) = `Navbar`, `Footer`, `MobileMenu` — rendered once
  in `app/layout.tsx`, outside the scrolling section stack.

## 4. Routing
- v1 ships as a **single route** (`/`) with anchor-based in-page navigation
  (`#services`, `#work`, `#process`, `#pricing`, `#faq`, `#contact`).
- `MOBILE_NAV_LINKS` / `NAV_LINKS` live in `lib/constants.ts` as a single source of
  truth shared by `Navbar` and `MobileMenu`.
- If `/work` and `/process` are later split into real pages (trigger: case-study count
  grows past ~8, or process needs its own long-form page), each becomes an
  `app/work/page.tsx` / `app/process/page.tsx` reusing the same section components.

## 5. State Management
No global state library needed for v1. Local component state (`useState`) is sufficient for:
- Mobile menu open/close.
- Navbar "scrolled" style toggle (via `IntersectionObserver` or scroll listener).
- Active FAQ accordion item(s).
- Contact form field state + submit status (`idle | loading | success | error`),
  managed by React Hook Form.

If a future feature needs shared state across many components (e.g. a theme toggle),
introduce React Context at that point — don't pre-install Redux/Zustand for a static site.

## 6. Styling Architecture
- Tailwind is the primary styling method; avoid inline `style={{}}` except for
  computed values (e.g. dynamic gradient positions).
- All design tokens (color, type scale, spacing, radii, shadows) are defined **once**
  in `tailwind.config.ts` under `theme.extend`, sourced from `ui.md`. Components
  reference token names (`bg-charcoal-950`, `text-copper-400`) — never raw hex values
  in component files.
- Global resets, font-face declarations, and CSS custom properties for anything
  Tailwind can't express (e.g. the ambient glow gradients) live in `app/globals.css`.

## 7. Asset Management
- Project mockup images: optimized WebP/AVIF, served via `next/image` for automatic
  sizing/lazy-loading.
- Logos (tech stack, partner-style strip): SVG where possible for crispness at any size.
- Favicon + OG image: generated once, placed in `public/`, referenced in
  `app/layout.tsx` metadata.

## 8. Performance Plan
- `next/image` for all raster images (auto lazy-load, responsive `srcset`).
- `next/font` for self-hosted fonts (no external font request waterfall, no CLS).
- Code-split heavy sections (e.g. any animated hero graphic) with `next/dynamic` if
  bundle size becomes an issue.
- Keep Framer Motion usage scoped to specific components, not a blanket wrapper —
  avoids shipping animation JS to sections that don't need it.
- Static export or Vercel's static optimization — since there's no backend, the whole
  site should be statically generated (`output: 'export'` if hosting outside Vercel).

## 9. SEO & Metadata
- `app/layout.tsx` exports a `metadata` object: title template, description, OG image,
  Twitter card, `robots`, canonical URL.
- One `<h1>` on the page (hero headline); subsequent sections use `<h2>`.
- Descriptive `alt` text on every case-study mockup (e.g. "Craftans — dark-mode
  dashboard mockup for [Project], showing order sync overview").

## 10. Deployment
- Connect repo to Vercel → automatic preview deployments per PR, production deploy on
  merge to `main`.
- Environment variables (form endpoint key, if any) stored in Vercel project settings,
  never committed.
- No CI/CD pipeline beyond Vercel's built-in build step is required for a static
  frontend of this size.
