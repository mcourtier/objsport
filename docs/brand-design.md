# Brand Design — Objectif Sport

Design system for the Objectif Sport website. Colors are extracted from [`docs/design/logo.svg`](design/logo.svg). Layout, tone, and UI patterns are inspired by [`docs/design/inspiration.png`](design/inspiration.png).

---

## Brand essence

- **Tone:** Professional, intense, performance-driven — dark industrial aesthetic with high contrast.
- **Audience:** Enterprises, clubs, and athletes (see [sitemap](sitemap.md)).
- **Language:** French-first UI copy; brand name **Objectif Sport** in Latin characters.

---

## Logo

**Source file:** `docs/design/logo.svg`

| Element | Role |
|--------|------|
| Red ribbon mark | Primary brand accent; use on dark backgrounds |
| Charcoal arc | Secondary mark fill; pairs with red on light backgrounds |
| White wordmark | Full logo on dark or photographic heroes |

### Clear space

Keep padding around the logo equal to the height of the red mark (≈ 1× mark height on all sides).

### Minimum size

- Digital: 120px wide minimum
- Print: 25mm wide minimum

### Don’t

- Stretch or skew the mark
- Change logo colors outside the palette below
- Place the full-color logo on busy imagery without a dark scrim

---

## Color palette

Colors below are taken directly from the logo SVG fills.

### Core (from logo)

| Token | Hex | RGB | Usage |
|-------|-----|-----|--------|
| `brand-red` | `#DE241B` | `222, 36, 27` | CTAs, accent words in headlines, logo mark, links on hover |
| `brand-charcoal` | `#222527` | `34, 37, 39` | Logo secondary fill, dark UI surfaces, primary text on light mode |
| `brand-white` | `#FFFFFF` | `255, 255, 255` | Headlines on dark, logo wordmark, button label text |

### Extended (UI — aligned with inspiration mockup)

| Token | Hex | Usage |
|-------|-----|--------|
| `bg-base` | `#0F1011` | Page background (dark mode default) |
| `bg-elevated` | `#1A1C1E` | Cards, header, footer bands |
| `bg-overlay` | `rgba(15, 16, 17, 0.75)` | Hero image scrims |
| `text-primary` | `#FFFFFF` | Headlines, navigation (dark mode) |
| `text-secondary` | `#E0E0E0` | Body copy on dark |
| `text-muted` | `#9CA3AF` | Captions, footer legal, meta |
| `border-subtle` | `#2E3236` | Dividers, card borders |

### Light mode (optional — per product roadmap)

| Token | Hex | Usage |
|-------|-----|--------|
| `bg-base-light` | `#F5F5F5` | Page background |
| `bg-elevated-light` | `#FFFFFF` | Cards, sections |
| `text-primary-light` | `#222527` | Headlines, body |
| `text-muted-light` | `#6B7280` | Secondary text |

Accent color stays **`#DE241B`** in both themes.

### CSS custom properties

```css
:root {
  --color-brand-red: #de241b;
  --color-brand-charcoal: #222527;
  --color-brand-white: #ffffff;

  --color-bg-base: #0f1011;
  --color-bg-elevated: #1a1c1e;
  --color-text-primary: #ffffff;
  --color-text-secondary: #e0e0e0;
  --color-text-muted: #9ca3af;
  --color-border-subtle: #2e3236;
}

[data-theme="light"] {
  --color-bg-base: #f5f5f5;
  --color-bg-elevated: #ffffff;
  --color-text-primary: #222527;
  --color-text-secondary: #374151;
  --color-text-muted: #6b7280;
  --color-border-subtle: #e5e7eb;
}
```

### Tailwind v4 theme extension (reference)

```css
@theme {
  --color-brand-red: #de241b;
  --color-brand-charcoal: #222527;
  --color-brand-white: #ffffff;
  --color-bg-base: #0f1011;
  --color-bg-elevated: #1a1c1e;
  --color-text-muted: #9ca3af;
}
```

---

## Typography

The logo is set in outlined paths (no embedded font). Web fonts should **match the logo’s bold, geometric, slightly condensed sans** and the mockup’s **impact headlines + readable body**.

### Recommended pairing

| Role | Font | Weight | Notes |
|------|------|--------|--------|
| Display / H1–H2 | [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) | 700–800 | Close to logo proportions; athletic, French-friendly |
| Headings / nav | Barlow Condensed | 600–700 | All-caps for nav and section titles |
| Body | [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) | 400–500 | Long-form readability |
| UI labels / buttons | Barlow Condensed | 600 | All-caps, letter-spacing `0.04em` |

**Alternates (if Barlow is unavailable):** Oswald or Bebas Neue (display) + Inter (body).

### Scale

| Token | Size | Line height | Use |
|-------|------|-------------|-----|
| `text-display` | `clamp(2.5rem, 5vw, 4rem)` | 1.05 | Hero headline |
| `text-h2` | `2rem` / 32px | 1.15 | Section titles |
| `text-h3` | `1.5rem` / 24px | 1.25 | Card titles |
| `text-body` | `1rem` / 16px | 1.6 | Paragraphs |
| `text-small` | `0.875rem` / 14px | 1.5 | Captions, footer |

### Typographic rules (from mockup)

- **Headlines:** ALL CAPS on marketing blocks; one keyword in `brand-red` per headline (e.g. « ATTEIGNEZ VOS **OBJECTIFS** ! »).
- **Navigation & buttons:** ALL CAPS, semi-bold condensed sans.
- **Body:** Sentence case, regular weight, `text-secondary` on dark backgrounds.
- **Max line length:** 65ch for body copy.

### Google Fonts load snippet

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

---

## UI components (inspiration-driven)

Patterns from the performance-coaching mockup, adapted to Objectif Sport tokens.

### Buttons

| Variant | Background | Text | Border radius |
|---------|------------|------|----------------|
| Primary CTA | `brand-red` | `brand-white` | `0` (sharp corners) |
| Secondary | transparent | `brand-white` | `0` |
| On light bg | `brand-red` | `brand-white` | `0` |

- Label: ALL CAPS, Barlow Condensed 600, `0.04em` tracking.
- Padding: `0.875rem 1.75rem` (14px 28px).
- Hover: darken red ~8% (`#c41f17`); no drop shadow by default.

### Header

- Logo left, centered nav, primary CTA right (red button).
- Sticky on scroll; `bg-elevated` with subtle bottom border `border-subtle`.
- Nav links: white, caps, hover underline or red accent.

### Hero

- Full-width photography (gym, coaching, performance).
- Left-aligned stack: display headline → subheadline → primary CTA.
- Dark gradient scrim: `linear-gradient(90deg, bg-overlay 40%, transparent 100%)`.

### Service / feature cards

- Dark card on `bg-elevated`, optional background image with overlay.
- Title in caps; short description in `text-secondary`.
- Red text link or small CTA per card.

### Icon row (mission / pillars)

- Simple white line icons (~32px), label below in caps.
- Three-column grid on desktop; stack on mobile.

### Testimonials

- Portrait photo + dark overlay card.
- Large quotation mark in white at low opacity.
- Client name in caps, `text-muted`.

### Footer

- Centered social icons (white), copyright in `text-muted`.
- Optional final full-width red CTA above footer band.

---

## Imagery

- **Style:** High contrast, slightly desaturated, dramatic gym lighting.
- **Subjects:** Coaching, strength training, team/club environments, corporate wellness where relevant.
- **Treatment:** Dark scrim or vignette so white/red type stays readable.
- **Avoid:** Overly bright stock, cluttered backgrounds behind the logo.

---

## Texture & atmosphere

- Subtle concrete or brushed-metal noise on `bg-base` / `bg-elevated` (opacity 3–6%).
- Thin horizontal rules (`border-subtle`) between major sections.
- Generous vertical rhythm: section padding `5rem` desktop / `3rem` mobile.

---

## Accessibility

- Body text on dark: minimum contrast **4.5:1** (`#E0E0E0` on `#0F1011` passes).
- Red on white for small text: use `brand-charcoal` links with red underline, or darken red for `<14px` text.
- Focus rings: `2px solid brand-white` offset `2px` on dark; `2px solid brand-red` on light.
- Don’t rely on red alone for state; pair with weight, underline, or icon.

---

## Assets

| File | Purpose |
|------|---------|
| `docs/design/logo.svg` | Master logo |
| `docs/design/inspiration.png` | Layout & mood reference |

---

## Implementation checklist

- [ ] Add CSS variables or Tailwind `@theme` tokens from this doc
- [ ] Load Barlow Condensed + Source Sans 3 in Nuxt (`@nuxt/fonts` or `app.vue` head)
- [ ] Default site theme: **dark**; support `data-theme="light"` toggle when ready
- [ ] Export logo variants (SVG favicon, PNG social) from `logo.svg`
