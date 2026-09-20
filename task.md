# Craftons — Task Checklist

Legend: **P0** = blocks everything else · **P1** = needed for v1 launch · **P2** = nice
to have / can ship post-launch. Grouped to match the phases in `process.md`.

## Phase 0 — Brief Confirmation
- [ ] **P0** Confirm Craftons' actual 3 service pillars (assumed: Websites / Automation / AI Agents)
- [ ] **P0** Confirm "black colour photo content" = dark-mode mockup cards (or correct interpretation)
- [ ] **P0** Confirm frontend-only scope and chosen form-submission service
- [ ] **P0** Lock final site map / section list

## Phase 1 — Content
- [ ] **P0** Write hero headline + subhead (Craftons value prop, own voice — not a copy of any reference site's copy)
- [ ] **P1** Write 3 service descriptions (2–3 lines each) + relevant tags
- [ ] **P1** Collect/write 3–6 case studies: project name, problem line, result stat, 3–4 tech tags
- [ ] **P1** Source or create dark-mode mockup images for each case study
- [ ] **P1** Write process step labels (Scope → Build → Review → Launch, or similar)
- [ ] **P1** Write 5–8 FAQ question/answer pairs
- [ ] **P2** Write 2–3 testimonial quotes (name, role, company) — if available
- [ ] **P1** Write footer copy, contact email, social links
- [ ] **P0** Collect tech-stack / tool logos to display (Next.js, n8n, Claude, WhatsApp, etc.)
- [ ] **P1** Draft pricing framing (tiers, or "starts at X") — if pricing section included in v1

## Phase 2 — Design Plan
- [ ] **P0** Finalize color tokens in `ui.md` (charcoal / copper / steel / paper / ash)
- [ ] **P0** Confirm typefaces (Space Grotesk or Fraktion Mono + Inter + mono for tags) and license/availability
- [ ] **P0** Review design plan against brief — flag/revise anything that reads generic
- [ ] **P1** Rough hero comp (Figma or quick code spike) — validate faceted-mark illustration concept
- [ ] **P1** Approve final layout wireframe (ui.md §2)

## Phase 3 — Build

### Setup
- [ ] **P0** Scaffold Next.js + TypeScript + Tailwind project
- [ ] **P0** Wire design tokens into `tailwind.config.ts`
- [ ] **P0** Set up `next/font` for chosen typefaces
- [ ] **P0** Create `data/*.ts` files and populate with Phase 1 content

### UI primitives
- [ ] **P0** `Button` (primary/ghost variants)
- [ ] **P0** `Card`
- [ ] **P0** `Badge` / tag chip
- [ ] **P1** `Accordion`
- [ ] **P1** `Input` / `Textarea`
- [ ] **P1** `SectionHeading`
- [ ] **P1** `GlowBackdrop`

### Layout shell
- [ ] **P0** `Navbar` (transparent → solid on scroll, CTA button)
- [ ] **P0** Mobile hamburger menu (keyboard accessible)
- [ ] **P0** `Footer`

### Sections (build in this order)
- [ ] **P0** Hero (headline, subhead, 2 CTAs, faceted illustration, glow)
- [ ] **P1** Trust/status strip
- [ ] **P0** Services (3 cards)
- [ ] **P0** Work / case studies grid
- [ ] **P1** Process timeline
- [ ] **P1** Tech stack logo strip
- [ ] **P2** Pricing
- [ ] **P2** Testimonials
- [ ] **P1** FAQ accordion
- [ ] **P0** Contact form + submit handling (loading/success/error states)
- [ ] **P0** 404 page

### Meta
- [ ] **P0** Favicon
- [ ] **P0** OG/Twitter card image
- [ ] **P0** `metadata` in `app/layout.tsx` (title, description, canonical)

## Phase 4 — Cross-Cutting QA
- [ ] **P0** Responsive check at 375 / 768 / 1024 / 1440px — no overlap, no horizontal scroll
- [ ] **P0** Keyboard-only navigation pass (tab order, focus rings visible everywhere)
- [ ] **P0** Screen-reader spot check (landmarks, alt text, form labels)
- [ ] **P0** Lighthouse run — Performance ≥ 90 mobile, fix flagged issues
- [ ] **P1** Automated a11y audit (axe DevTools) — resolve criticals
- [ ] **P1** Confirm `prefers-reduced-motion` disables all non-essential animation
- [ ] **P1** Cross-browser check: Chrome, Safari, Firefox
- [ ] **P2** Decide whether `/work` or `/process` need to split into real routes

## Phase 5 — Self-Critique
- [ ] **P1** Screenshot every section, review for repeated/unintentional visual patterns
- [ ] **P1** Confirm glow effect is used only in hero + contact sections, not elsewhere
- [ ] **P1** Confirm only hero has an entrance animation sequence
- [ ] **P1** Re-read all copy for placeholder text, typos, and tone consistency

## Phase 6 — Launch
- [ ] **P0** Final proofread (copy, links, external URLs)
- [ ] **P0** Deploy to Vercel production
- [ ] **P0** Send a real test submission through the contact form end-to-end
- [ ] **P0** Verify all anchor links scroll correctly on production
- [ ] **P0** Verify OG image renders when URL is shared (test in a link-preview tool)
- [ ] **P2** Add analytics script (Vercel Analytics / Plausible)

## Phase 7 — Handoff
- [ ] **P1** Update all 5 docs to match as-built state
- [ ] **P2** Log deferred items below as v2 backlog

---

## v2 Backlog (deferred, not required for v1 launch)
- [ ] Pricing section (if skipped in v1)
- [ ] Testimonials section (if skipped in v1)
- [ ] Split `/work` and `/process` into dedicated routes
- [ ] Blog / CMS integration
- [ ] Multi-language support
- [ ] Analytics dashboard / real backend for dashboard mockup (currently static UI only)
