# Craftans — Build Process

This describes *how* the frontend gets designed, built, reviewed, and shipped —
sequenced so each phase produces something the next phase can react to, rather than
building everything blind and discovering problems at the end.

## Phase 0 — Confirm the Brief (½ day)
- Validate the assumptions listed at the top of `requirement.md` (services offered,
  "black photo content" interpretation, frontend-only scope) with the actual stakeholder.
- Lock the site map and section list (§6 of `requirement.md`) — changes after Phase 2
  are expensive, changes now are free.
- **Exit criteria:** requirement.md signed off, no open questions on scope.

## Phase 1 — Content First (1–2 days)
Content dictates layout, not the other way around — writing headlines/copy before
visuals prevents the classic "beautiful template, empty content" trap.
- Draft real (or realistic placeholder) copy for every section: hero headline/subhead,
  3 service descriptions, 3–6 case-study blurbs + result stats, process step labels,
  FAQ questions/answers, footer copy.
- Gather or mock assets: project mockup images (dark-mode screenshots), tech-stack
  logos, favicon concept.
- **Exit criteria:** a single content doc (or the `data/*.ts` files stubbed with real
  strings) covering every section in `requirement.md` §6.

## Phase 2 — Design Plan → Review → Revise (1–2 days)
Following the plan → review → build → critique loop:
1. Produce the design plan (this is `ui.md` — tokens, layout wireframe, principles).
2. **Review against the brief:** for each design decision, ask "would I have produced
   this for any dark-themed agency site, or is it specific to Craftans?" Anything that
   reads as generic gets revised (this is why `ui.md` opens with the "forge" concept
   instead of a plain black+accent default).
3. Optional: rough static comps (Figma, or a quick HTML/CSS spike) for the hero and
   one card section to sanity-check the concept before full build.
- **Exit criteria:** `ui.md` finalized, one hero mock reviewed and approved.

## Phase 3 — Build (in section order, ~1–2 weeks depending on scope)
Build in this order so each piece is checkable in isolation and early sections
establish the design-token usage patterns later sections follow:
1. Project scaffold (`architecture.md` §2) + design tokens wired into `tailwind.config.ts`.
2. UI primitives (`Button`, `Card`, `Badge`, `Accordion`, form inputs, `GlowBackdrop`).
3. Layout shell: `Navbar` + `Footer` + mobile menu.
4. Hero + trust strip.
5. Services.
6. Work/case studies.
7. Process.
8. Tech stack strip.
9. Pricing + Testimonials (if included in v1).
10. FAQ.
11. Contact/CTA + form wiring (form endpoint from `architecture.md` §1).
12. 404 page, favicon, OG image, metadata.

Each section, once built, gets checked against:
- Its requirement row in `requirement.md` §6.
- Its component spec in `ui.md` §3.
- Responsive behavior at the four breakpoints in `ui.md` §6.

## Phase 4 — Cross-Cutting Pass (2–3 days)
Done once all sections exist, because these concerns only make sense in full-page context:
- **Responsive QA:** full scroll-through at 375 / 768 / 1024 / 1440px — no overlap,
  no horizontal scroll, tap targets ≥44px on mobile.
- **Accessibility pass:** run through `ui.md` §7 checklist manually + an automated
  pass (axe DevTools or Lighthouse accessibility audit).
- **Performance pass:** Lighthouse run (mobile + desktop), fix anything below the
  targets in `requirement.md` §8 — usually image sizing/format and font loading.
- **Motion audit:** confirm `prefers-reduced-motion` is respected everywhere; confirm
  only the hero has an entrance sequence (no stray animation creep from Phase 3).
- **Cross-browser spot check:** latest Chrome, Safari, Firefox at minimum.
- **Route-split decision point:** if `/work` has grown past ~8 case studies or
  `/process` needs long-form content, split into real routes now (per
  `architecture.md` §4) rather than mid-build.

## Phase 5 — Self-Critique Pass (½–1 day)
Before calling it done, a deliberate "what would I cut" review (per the restraint
principle in `ui.md` §4):
- Screenshot every section; look for repeated visual moves that have become filler
  rather than intentional (e.g. glow effects sneaking onto more than the two approved
  sections, motion added "because it looked cool" rather than to answer an action).
- Remove or simplify one thing per major section if nothing obvious needs removing,
  that's a signal the page is already disciplined — don't force a cut.
- Confirm copy still matches the "plain, active-voice" writing guidance — no leftover
  placeholder or overly salesy filler.

## Phase 6 — Launch (½ day)
- Final content proofread (typos, broken links, correct external URLs for booking link/email).
- Deploy to production (Vercel) from `main`.
- Verify: contact form delivers a real test submission end-to-end, all anchor links
  scroll correctly, OG image renders correctly when the URL is shared, favicon shows
  in browser tab.
- Set up basic analytics (optional — e.g. Vercel Analytics or Plausible) if desired;
  note this is a frontend-only addition (a script tag), not a backend requirement.

## Phase 7 — Handoff / Documentation
- Confirm all 5 docs (`requirement.md`, `architecture.md`, `ui.md`, `process.md`,
  `task.md`) reflect the as-built state — update anything that changed during Phase 3.
- Note any deferred items (pricing section, testimonials, route split) as a "v2
  backlog" at the bottom of `task.md`.

---

## Tools
| Purpose | Tool |
|---|---|
| Code editor | VS Code (or Claude Code, if using an agentic coding workflow) |
| Version control | Git + GitHub |
| Design reference / quick mocks | Figma (optional — can also spike directly in code per Phase 2) |
| Hosting | Vercel |
| Form backend | Formspree / Getform / EmailJS (pick one in Phase 3, step 11) |
| Accessibility audit | axe DevTools browser extension, Lighthouse |
| Performance audit | Lighthouse (Chrome DevTools or PageSpeed Insights) |

## Estimated Timeline
| Phase | Duration |
|---|---|
| 0 — Confirm brief | 0.5 day |
| 1 — Content first | 1–2 days |
| 2 — Design plan + review | 1–2 days |
| 3 — Build | 5–10 days |
| 4 — Cross-cutting QA | 2–3 days |
| 5 — Self-critique | 0.5–1 day |
| 6 — Launch | 0.5 day |
| **Total** | **~2.5–3.5 weeks** for a solo builder, less with more hands |
