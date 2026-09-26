# Craftans — UI / Design System

## 0. Design Direction (read this first)

The brief asked for something with the *energy* of ETHGlobal (bold, colorful, confident,
illustrated) blended with the *feel* of the Ferrofold reference (black background,
glowing accent, technical/dashboard motifs). Copying either one directly would make
Craftans look like a reskin. Instead, the concept below — **"the forge"** — is built
specifically for the name *Craftans* (craft + tonnage/weight): a black-steel backdrop
with a molten-copper accent, like metal being worked. It borrows the *structural* ideas
that make the references work (big confident hero, faceted geometric illustration,
glowing gradient arcs, technical readouts) but gives them a single, original visual
metaphor instead of scattered "dark SaaS" defaults.

**Avoid, unless intentionally reused below:** generic dark-mode clichés — a single flat
neon accent with no texture, identical rounded cards everywhere with the same soft
shadow, decorative gradients with no relationship to content, ALL-CAPS labels used
purely as decoration rather than to mark something genuinely technical/systemic.

---

## 1. Design Tokens

### 1.1 Color
| Token | Hex | Use |
|---|---|---|
| `charcoal-950` | `#0A0A0C` | Primary background (near-black, slightly warm, not pure `#000`) |
| `charcoal-900` | `#121215` | Elevated surface (cards, nav-on-scroll) |
| `charcoal-800` | `#1C1C21` | Borders, dividers, input backgrounds |
| `copper-400` | `#E08A4B` | Primary accent — CTAs, glow, active states ("molten metal") |
| `copper-600` | `#B9662E` | Accent hover/pressed state, gradient depth |
| `steel-300` | `#9FB4C7` | Secondary accent — cool contrast used sparingly (links, small icons, "in-progress" states) |
| `paper-50` | `#F5F3EF` | Primary text on dark, and light-section background if a light band is used |
| `ash-400` | `#8B8B92` | Secondary/muted text, captions, meta |

Rule: **one dominant accent (copper) + one cool counter-accent (steel), used sparingly.**
Steel should appear far less often than copper — it exists to stop the palette from
feeling one-note, not to compete with it (e.g., a single "status: live" dot, a link
underline on hover).

### 1.2 Typography
| Role | Typeface | Notes |
|---|---|---|
| Display / Headlines | **Fraktion Mono** or **Space Grotesk** (pick one; Space Grotesk is the safer free/Google Fonts pick) | Geometric grotesk with slightly mechanical character — reinforces the "forged/built" idea without going full monospace |
| Body | **Inter** | Neutral, highly legible at small sizes, pairs cleanly with Space Grotesk |
| Technical labels only (stat readouts, tags, "system" chips) | **JetBrains Mono** or **IBM Plex Mono** | Used *only* where content is genuinely technical/data-like (stats, tech-stack tags, status pills) — not for section eyebrows generally |

Type scale (desktop / mobile):
| Level | Desktop | Mobile | Weight |
|---|---|---|---|
| H1 (hero) | 72px / 1.05 | 40px / 1.1 | 600 |
| H2 (section) | 44px / 1.1 | 30px / 1.15 | 600 |
| H3 (card title) | 22px / 1.3 | 20px / 1.3 | 600 |
| Body large | 18px / 1.6 | 16px / 1.6 | 400 |
| Body | 16px / 1.6 | 15px / 1.6 | 400 |
| Caption/mono | 13px / 1.4 | 12px / 1.4 | 500, letter-spacing 0.02em |

Line length: cap body copy at ~70–76 characters (`max-w-prose`-style constraint).

### 1.3 Spacing & Layout
- Base unit: **4px**. Section vertical rhythm: 96px desktop / 64px mobile between
  major sections; 24–32px between sub-elements.
- Grid: 12-column, max content width **1280px**, gutters 24px desktop / 16px mobile.
- Container padding: 80px desktop sides / 20px mobile.

### 1.4 Radius, Elevation, Border
- Radius scale: `sm=6px` (chips/inputs), `md=12px` (cards), `lg=20px` (hero panels/CTA blocks).
  **Not every element gets the same radius** — hierarchy: bigger, more important
  containers get larger radius; small functional elements (tags, buttons) stay tighter.
- Borders over shadows on dark backgrounds: `1px solid charcoal-800`, brightening to
  `copper-400/40` on hover — shadows read poorly on near-black, so hairline borders +
  glow do the elevation work instead.
- The one recurring "glow": a soft radial `copper-400` gradient at ~15–25% opacity,
  used behind the hero and behind the contact/CTA section only — **not** behind every
  card. Restraint keeps it meaningful.

### 1.5 Iconography & Illustration
- Icons: `lucide-react`, 1.5px stroke, sized 20–24px inline, up to 32px in service cards.
- Hero illustration: one original **faceted/low-poly geometric mark** (anvil, spark, or
  angular "C" monogram built from triangular facets, echoing the crystalline style
  referenced but as an original Craftans mark, not a copy of any specific artwork) —
  rendered as inline SVG, using the copper/steel palette. This is the single "bold
  illustrated moment" of the page (per the restraint principle in §6).

---

## 2. Layout Concept (ASCII wireframe — desktop)

```
┌──────────────────────────────────────────────────────────────┐
│ [Craftans]      Services  Work  Process  Pricing  FAQ  [Book →]│  ← sticky nav, transparent→solid on scroll
├──────────────────────────────────────────────────────────────┤
│                                                                │
│   Eyebrow: "Now booking Q_ 20__"                              │
│   ██████████████████████████  (H1, left-aligned, 2 lines)     │       ⟋ faceted
│   Supporting line, one sentence.                               │      ⟋  mark /
│   [ Book a call ]   [ See our work ]                           │     glow behind it
│                                                                │
├──────────────────────────────────────────────────────────────┤
│  SERVICES   (H2, left-aligned)                                 │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐                │
│  │ Websites  │   │ Automation │   │ AI Agents │  ← 3 cards,    │
│  │ desc, tags│   │ desc, tags │   │ desc, tags│    equal width │
│  └───────────┘   └───────────┘   └───────────┘                │
├──────────────────────────────────────────────────────────────┤
│  WORK   (H2)                    view all →                     │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                 │
│  │ dark mockup│ │ dark mockup│ │ dark mockup│  ← asymmetric:   │
│  │ Project A  │ │ Project B  │ │ Project C  │    first card    │
│  │ result stat│ │ result stat│ │ result stat│    spans 2 cols  │
│  └────────────┘ └────────────┘ └────────────┘    on desktop    │
├──────────────────────────────────────────────────────────────┤
│  PROCESS  (H2)                                                 │
│  ①──────②──────③──────④   ← horizontal stepped line,          │
│  Scope  Build  Review Launch   numbers justified (real sequence)│
├──────────────────────────────────────────────────────────────┤
│  BUILT WITH   logo · logo · logo · logo · logo   (marquee row) │
├──────────────────────────────────────────────────────────────┤
│  PRICING (optional)      FAQ (accordion)                       │
├──────────────────────────────────────────────────────────────┤
│      glow backdrop                                              │
│      "Tell us what the business needs."  (H2, centered)         │
│      [ form: name / email / company / need / budget ]           │
│      or → [ Book a 15-min call ]                                 │
├──────────────────────────────────────────────────────────────┤
│ Footer: logo · nav · social · email · © Craftans 20__           │
└──────────────────────────────────────────────────────────────┘
```
Alignment: **left-aligned** headlines/body throughout (matches a technical/confident
tone and keeps long headlines scannable); the **final CTA section is centered** to mark
it as the page's closing moment — the one deliberate alignment shift.

## 3. Component Specs

### Navbar
- Height 72px. Transparent over hero, becomes `charcoal-900` + `1px charcoal-800`
  border-bottom after ~40px scroll (mirrors the "solid on scroll" pattern from the
  references, done via a scroll listener, not a hardcoded background).
- Primary CTA button always visible, right-aligned, `copper-400` fill.
- Mobile: hamburger → full-screen `charcoal-950` overlay, links stacked, large tap targets (≥44px).

### Buttons
- `primary`: `copper-400` bg, `charcoal-950` text, `md` radius, hover → `copper-600` + slight lift (2px translateY, 150ms ease).
- `ghost`: transparent bg, `1px charcoal-800` border, `paper-50` text, hover → border brightens to `copper-400/50`.
- No arrow glyph appended by default — only use `→` where it clarifies "this leaves the
  page" (e.g. external booking link), not on every button.

### Cards (Service / Work / Pricing)
- `charcoal-900` bg, `1px charcoal-800` border, `md` radius, 32px padding.
- Work cards specifically: image fills top ~60%, dark gradient overlay at the base for
  text legibility, project name + one result stat + 2–3 mono tag chips below.
- Hover/focus: border brightens to `copper-400/40`, image scales 1.02 (200ms ease) —
  **no shadow pop**, keep it flat and controlled.

### Badge / Tag chip
- `charcoal-800` bg, `steel-300` or `ash-400` text, mono font, 12px, `sm` radius,
  used for tech tags ("Next.js", "n8n") and status pills ("Live", "In progress").

### Accordion (FAQ)
- Single-open by default. Chevron rotates 180° on open (200ms). Answer expands with
  height auto-animation (Framer Motion `layout` or CSS grid-rows trick) — respect
  `prefers-reduced-motion` by disabling the rotate/expand animation, showing instant state change instead.

### Form (Contact)
- Stacked labels above inputs (not placeholder-only labels — placeholders supplement,
  never replace, a visible label, for accessibility).
- Inputs: `charcoal-900` bg, `1px charcoal-800` border, `copper-400` border on focus
  with visible focus ring.
- Submit button shows loading state (spinner replaces label) → success state (inline
  confirmation message, not just a toast) → error state (inline, specific: "Couldn't
  send — check your connection and try again," never a vague "Something went wrong").

## 4. The One Bold Moment
Per the restraint principle: the hero's faceted illustration + glow is the single
"loud" element on the page. Everything else — cards, nav, footer — stays quiet and
consistent so that moment keeps its weight. Do not add a second illustrated/animated
hero-level moment elsewhere on the page (e.g. don't also animate the tech-stack row
into a spinning 3D carousel).

## 5. Motion Guidelines
- One orchestrated entrance on the hero only (headline + CTA fade/rise in sequence,
  ~400ms staggered) on first load.
- Scroll-triggered reveals: subtle opacity/8px-rise on section entry, triggered once,
  not replayed on scroll-up — used consistently, not on every single child element.
- Hover transitions: 150–200ms ease, applied only to interactive elements (buttons,
  cards, nav links) — not decorative elements.
- All motion respects `prefers-reduced-motion: reduce` (swap to instant state changes).

## 6. Responsive Breakpoints
| Name | Width | Key changes |
|---|---|---|
| `sm` | 375px | Single column, nav → hamburger, hero illustration shrinks/repositions below headline |
| `md` | 768px | 2-column service/work grids |
| `lg` | 1024px | 3-column grids, full nav visible |
| `xl` | 1440px | Max content width reached (1280px container), extra space becomes margin |

## 7. Accessibility Checklist
- [ ] Color contrast: `paper-50` on `charcoal-950` ≈ 15:1 (pass); verify `ash-400` on
      `charcoal-950` meets 4.5:1 for body-sized text, bump lightness if not.
- [ ] All interactive elements reachable and operable via keyboard, visible focus ring
      (`copper-400` outline, not just a color change).
- [ ] `alt` text on every project mockup image describing what it shows, not just the filename.
- [ ] Form inputs have associated `<label>` elements (not placeholder-only).
- [ ] Landmarks: `<nav>`, `<main>`, `<footer>` used correctly; one `<h1>` per page.
