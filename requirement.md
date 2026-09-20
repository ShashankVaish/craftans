# Craftons — Requirements Document

## 1. Project Summary
Craftons is a digital agency that builds **software business ecosystems** for
clients — marketing websites, workflow automations, and AI agents (chat/voice/WhatsApp)
— delivered as one connected system rather than separate one-off projects.

This document defines what the **Craftons marketing website** (frontend only,
no backend/CMS) needs to do, for whom, and how success is measured.

> **Assumptions made from the brief** (confirm or correct before build starts):
> 1. Craftons' core services are: (a) websites, (b) automation workflows, (c) AI agents —
>    sold individually or as a bundled "ecosystem" package.
> 2. "Black colour photo content" for projects = each portfolio/case-study item is shown
>    as a **dark-mode product mockup / screenshot** on a black card, not literal B&W photography.
> 3. The site is **frontend-only**: static marketing site, no login, no real dashboard data.
>    Any "dashboard preview" seen in the UI is a *visual mockup*, not a working app.
> 4. Primary CTA is lead generation (a contact/enquiry form + "Book a call" link), not e-commerce.

---

## 2. Goals & Objectives
- Position Craftons as a **premium, technically credible** build studio (not a template shop).
- Convert visitors into qualified leads via a contact form and/or booking link.
- Showcase range: websites, automations, AI agents — with real (or realistic placeholder)
  proof of work.
- Feel fast, modern, and a little bold — memorable in a sea of generic agency sites.

## 3. Target Audience
| Segment | Need | What they check first |
|---|---|---|
| Startup founders | Ship a site + automations fast, fixed budget | Pricing, timeline, past work |
| SME / D2C business owners | Reduce manual ops (orders, support, bookings) | Case studies, "what problem does this solve" |
| Product/marketing leads at mid-size cos | Vendor credibility, process, scope clarity | Process page, team/founders, FAQ |

## 4. Scope

### In scope
- Fully responsive **static frontend** (desktop, tablet, mobile).
- Pages/sections listed in §6.
- Working **client-side** contact form (no backend — submits via a form service such as
  Formspree/Getform, or `mailto:` fallback — see `architecture.md`).
- Placeholder/sample case-study content (client supplies real content later).
- Basic on-page SEO (meta tags, semantic HTML, OpenGraph image).
- Light performance + accessibility baseline (see §8).

### Out of scope (explicitly not built now)
- CMS / admin panel / blog engine.
- Real authentication, dashboards, or live data.
- Payment processing.
- Multi-language support.
- Backend API, database, server-side logic of any kind.

## 5. Site Map
```
/                     → Home (single long-scroll landing page, primary deliverable)
/work  (optional)     → Full case-study grid (can start as a section on Home, split later)
/process (optional)   → Detailed process page (can start as a section on Home)
/#contact             → Contact section (anchor, not a separate route, for v1)
404                    → Not-found page
```
For v1, build as a **single-page site with anchor navigation** (Home, Services, Work,
Process, Pricing, FAQ, Contact). Split into real routes later only if content volume
demands it — see `process.md` Phase 4 for the split trigger.

## 6. Page/Section Requirements (Home)

| # | Section | Purpose | Must include |
|---|---|---|---|
| 1 | Nav bar | Wayfinding + primary CTA | Logo, 5–6 links, "Book a call" button, mobile hamburger |
| 2 | Hero | First impression, one clear promise | Headline, subhead, primary + secondary CTA, hero visual |
| 3 | Trust/status strip | Credibility signal | e.g. "Now booking Q_ 20__", or client logo row |
| 4 | Services | What we do (3 pillars) | Websites / Automations / AI Agents — icon, 2–3 line desc, tag chips |
| 5 | Work / Case studies | Proof | 3–6 project cards, dark mockup image, name, one-line result, tags |
| 6 | Process | Reduce perceived risk | 3–5 step timeline (scope → build → review → launch) |
| 7 | Tech stack | Technical credibility | Logo strip of tools used (Next.js, n8n, Claude, WhatsApp, etc.) |
| 8 | Pricing (optional v1) | Set expectations | 2–3 tiers or "fixed price, starts at ₹/$X" |
| 9 | Testimonials (optional v1) | Social proof | 2–3 quotes, name/role/company |
| 10 | FAQ | Handle objections | 5–8 accordion items |
| 11 | Contact / CTA | Convert | Form (name, email, company, project need, budget) + direct email/booking link |
| 12 | Footer | Navigation + legal | Logo, nav links, social, contact email, copyright |

## 7. Functional Requirements
- FR1: Sticky/transparent-to-solid nav that changes on scroll.
- FR2: Mobile nav collapses into an accessible hamburger menu (keyboard + screen-reader safe).
- FR3: Smooth-scroll anchor navigation to in-page sections.
- FR4: Contact form validates required fields client-side before submit.
- FR5: Contact form shows a success/error state without page reload.
- FR6: Case-study cards support hover/focus states revealing extra detail (result stat, tags).
- FR7: FAQ accordion — single or multi-open, keyboard operable.
- FR8: All CTAs ("Book a call", "See our work") route to the correct section or external booking link.
- FR9: Site works with JavaScript disabled for core content (progressive enhancement) —
  animations degrade gracefully.

## 8. Non-Functional Requirements
- **Performance:** Lighthouse Performance ≥ 90 (mobile), LCP < 2.5s, CLS < 0.1.
- **Responsiveness:** Breakpoints at 375 / 768 / 1024 / 1440px minimum; no horizontal scroll at any width.
- **Accessibility:** WCAG 2.1 AA where feasible — color contrast ≥ 4.5:1 for body text,
  visible focus states, semantic landmarks, alt text on all meaningful images.
- **Browser support:** Latest 2 versions of Chrome, Safari, Firefox, Edge; graceful
  degradation on older browsers (no hard breakage).
- **SEO baseline:** Unique `<title>`/meta description, OG/Twitter card image, semantic
  heading hierarchy (one `<h1>` per page), descriptive link text.
- **Motion:** Respect `prefers-reduced-motion`; no motion that blocks reading.
- **Maintainability:** Component-based, no inline styles, single source of truth for
  design tokens (see `ui.md`).

## 9. Content Requirements
- Real or realistic placeholder copy for every section (no "Lorem ipsum" in final build —
  see `process.md` Phase 1 for copywriting pass).
- 3–6 case studies minimum, each with: project name, one-line problem, one-line result,
  3–4 tech tags, dark-mode mockup image.
- Team/founder section is optional for v1 but structure should allow adding it later.

## 10. Success Criteria (definition of done for v1)
- [ ] All 12 sections in §6 built, responsive, and content-complete.
- [ ] Contact form successfully delivers a test submission.
- [ ] Lighthouse scores meet §8 targets on the deployed build.
- [ ] Passes a manual keyboard-only navigation pass.
- [ ] Reviewed against `ui.md` design tokens — no ad-hoc colors/fonts introduced during build.
