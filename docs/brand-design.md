# Brand Design — Objectif Sport

Design system for the Objectif Sport website. **Primary source:** [`docs/design/objectif-sport.pdf`](design/objectif-sport.pdf) (8-page brand brochure, May 2026). Logo colors from [`docs/design/logo.svg`](design/logo.svg). Web layout patterns also informed by [`docs/design/inspiration.png`](design/inspiration.png).

---

## Brand essence

- **Tone:** Professional, intense, performance-driven — pure black backgrounds, high-contrast photography, italic condensed headlines.
- **Tagline:** « Santé • Performance • Résultats » (red bullet separators).
- **Footer line:** « Chaque minute compte. »
- **Audience:** Enterprises, clubs, and athletes (see [sitemap](sitemap.md)).
- **Language:** French-first UI copy; brand name **Objectif Sport** in Latin characters.

---

## Logo

**Source files:** `docs/design/logo.svg` · `public/logo.svg` · `public/images/brand/logo-banner.png`

| Element                | Role                                                                     |
| ---------------------- | ------------------------------------------------------------------------ |
| Red ribbon banner      | « OBJECTIF » wordmark container; concave top/bottom edges                |
| Charcoal oval          | « SPORT » secondary lockup below the banner                              |
| Red ribbon mark (icon) | Standalone mark; athlete badge, favicon, decorative « O » in backgrounds |
| White wordmark paths   | Letterforms on dark or photographic heroes                               |

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

### Core (from logo SVG)

| Token             | Hex       | RGB             | Usage                                                   |
| ----------------- | --------- | --------------- | ------------------------------------------------------- |
| `brand-red`       | `#DE241B` | `222, 36, 27`   | CTAs, accent words, logo banner, dividers, icon circles |
| `brand-red-hover` | `#C41F17` | —               | Button hover (darken ~8%)                               |
| `brand-charcoal`  | `#222527` | `34, 37, 39`    | Logo oval, elevated surfaces, cards                     |
| `brand-white`     | `#FFFFFF` | `255, 255, 255` | Headlines on dark, logo wordmark, button labels         |

### Backgrounds (from brochure)

| Token         | Hex                   | Usage                                    |
| ------------- | --------------------- | ---------------------------------------- |
| `bg-base`     | `#000000`             | Page background — pure black per PDF     |
| `bg-elevated` | `#141414`             | Cards, header/footer bands, form panels  |
| `bg-card`     | `#222527`             | Primary cards, panels (`brand-charcoal`) |
| `bg-overlay`  | `rgba(0, 0, 0, 0.75)` | Hero image scrims                        |

### Text

| Token            | Hex       | Usage                  |
| ---------------- | --------- | ---------------------- |
| `text-primary`   | `#FFFFFF` | Headlines, navigation  |
| `text-secondary` | `#E0E0E0` | Body on dark           |
| `text-muted`     | `#9CA3AF` | Captions, legal, meta  |
| `border-subtle`  | `#2E3236` | Dividers, card borders |

### Service categories (brochure p.2 — Consulting / Soins / Coaching)

| Token               | Hex       | Usage                                |
| ------------------- | --------- | ------------------------------------ |
| `accent-consulting` | `#FCEE21` | Entreprise, audit, consulting blobs  |
| `accent-care`       | `#B0B0B0` | Soins, maintenance, neutral services |
| `accent-coaching`   | `#00AEEF` | Coaching, sportif parcours           |

### Pillars — Le Gym / Le Lab / Le Studio (brochure p.4)

| Token           | Hex       | Usage                                |
| --------------- | --------- | ------------------------------------ |
| `pillar-gym`    | `#4CAF50` | Le Gym borders, icons, highlights    |
| `pillar-lab`    | `#FFC107` | Le Lab borders, icons, highlights    |
| `pillar-studio` | `#2196F3` | Le Studio borders, icons, highlights |

### Light mode (deferred — PRD v1 is dark only)

Accent color stays **`#DE241B`** in both themes when light mode ships.

### CSS custom properties

```css
:root {
  --color-brand-red: #de241b;
  --color-brand-red-hover: #c41f17;
  --color-brand-charcoal: #222527;
  --color-brand-white: #ffffff;

  --color-bg-base: #000000;
  --color-bg-elevated: #141414;
  --color-bg-card: #222527;
  --color-text-primary: #ffffff;
  --color-text-secondary: #e0e0e0;
  --color-text-muted: #9ca3af;
  --color-border-subtle: #2e3236;

  --color-accent-consulting: #fcee21;
  --color-accent-care: #b0b0b0;
  --color-accent-coaching: #00aeef;
  --color-pillar-gym: #4caf50;
  --color-pillar-lab: #ffc107;
  --color-pillar-studio: #2196f3;
}
```

---

## Typography

The brochure uses **heavy condensed italic** for hero headlines and **bold caps** for section titles. Body copy is a clean geometric sans.

### Recommended pairing (web)

| Role            | Font                                                                   | Weight / style     | Notes                                                |
| --------------- | ---------------------------------------------------------------------- | ------------------ | ---------------------------------------------------- |
| Display / H1–H2 | [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) | 700–800 **italic** | Matches « UN OBJECTIF COMMUN : VOTRE PERFORMANCE »   |
| Headings / nav  | Barlow Condensed                                                       | 600–700, caps      | Section titles, nav, buttons                         |
| Body            | [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3)       | 400–500            | Long-form, cards on white (entreprise pages)         |
| Tagline         | Barlow Condensed                                                       | 600, caps          | « Santé • Performance • Résultats » with red bullets |

**Alternates:** Oswald or Bebas Neue (display italic) + Inter (body).

### Scale

| Token          | Size                       | Line height | Use              |
| -------------- | -------------------------- | ----------- | ---------------- |
| `text-display` | `clamp(2.5rem, 5vw, 4rem)` | 1.05        | Hero headline    |
| `text-h2`      | `2rem` / 32px              | 1.15        | Section titles   |
| `text-h3`      | `1.5rem` / 24px            | 1.25        | Card titles      |
| `text-body`    | `1rem` / 16px              | 1.6         | Paragraphs       |
| `text-small`   | `0.875rem` / 14px          | 1.5         | Captions, footer |

### Typographic rules

- **Headlines:** ALL CAPS, often **italic** on marketing heroes; one keyword in `brand-red` (e.g. « UN OBJECTIF COMMUN : VOTRE **PERFORMANCE** »).
- **Tagline:** ALL CAPS with red `•` separators — not hyphens.
- **Navigation & buttons:** ALL CAPS, semi-bold condensed, `letter-spacing: 0.04em`.
- **Body:** Sentence case on dark; black text on white service cards (entreprise).
- **Max line length:** 65ch for body copy.

### Google Fonts (Nuxt `@nuxtjs/google-fonts`)

```ts
families: {
  'Barlow+Condensed': { wght: [600, 700, 800], ital: [1] },
  'Source+Sans+3': [400, 500, 600],
}
```

---

## UI components

### Buttons

| Variant       | Background  | Text          | Radius              |
| ------------- | ----------- | ------------- | ------------------- |
| Primary CTA   | `brand-red` | `brand-white` | `0` (sharp)         |
| Secondary     | transparent | `brand-white` | `0`, `border` white |
| On light card | `brand-red` | `brand-white` | `0`                 |

- Label: ALL CAPS, Barlow Condensed 600, `tracking-button` (`0.04em`).
- Padding: `0.875rem 1.75rem`.
- Hover: `brand-red-hover`; no drop shadow by default.

### Header

- Logo left; centered nav; red CTA right on desktop.
- Sticky; transparent at top of hero, `bg-elevated/95` + blur on scroll.
- Nav: white caps, hover/active `brand-red`.

### Hero

- Full-width brand photography (`public/images/brand/hero-cover.jpg`).
- Left stack: tagline → display headline (italic) → body → CTAs.
- Scrim: `linear-gradient(90deg, rgba(0,0,0,0.9) 35%, transparent 100%)`.
- Optional red brushstroke underline below headline (CSS pseudo-element).

### Section dividers

- Thin horizontal rules: `1px solid brand-red` or `border-subtle`.
- Section titles may sit on a red line (brochure org chart style).

### Audience cards

- Dark card (`bg-elevated`) with **top border accent** by audience:
  - Entreprise → `accent-consulting`
  - Club → `brand-red`
  - Sportif → `accent-coaching`

### Pillar row (Gym / Lab / Studio)

- Three columns; **colored top border** + circular icon area tinted per pillar token.
- Icons: minimalist line art (kettlebell, flask, group) — white on tinted circle.

### EZTM block (brochure p.8)

- Product name **EZTM** — « EasyTeam Cockpit Santé de Performance ».
- Hub-and-spoke stakeholder diagram on print; web uses text + placeholder store buttons until URLs exist.

### Entreprise service cards (brochure p.5)

- White cards on black: rounded corners, red circular header icon, checklist with red checkmarks.
- Used on `/entreprise` when built.

### Footer

- Full-width red CTA band above legal links (matches brochure closing slides).
- Copyright in `text-muted`.

---

## Imagery

| Asset          | Path                                  | Use                               |
| -------------- | ------------------------------------- | --------------------------------- |
| Hero composite | `public/images/brand/hero-cover.jpg`  | Homepage hero background          |
| Logo banner    | `public/images/brand/logo-banner.png` | Reference / OG fallback           |
| Category icons | `public/images/brand/icon-*.png`      | Consulting, Soins, Coaching blobs |

### Photography style (from PDF)

- High contrast, low-key lighting, slight desaturation.
- Subjects: sprint/coaching, gym, EMS/lab, studio classes, corporate wellness, team in ops room.
- Treatment: black scrim, sweat/particle effects acceptable on heroes.
- **Avoid:** Busy backgrounds behind logo without scrim; overly bright stock.

---

## Texture & atmosphere

- Subtle noise/grain on `bg-base` (CSS, 3–6% opacity) — mimics brochure concrete/grit.
- Faint brand « O » circle watermark optional in hero (`opacity-5`).
- Generous section padding: `5rem` desktop / `3rem` mobile.

---

## Icons and illustrations

### Style

- **Line icons:** 1.5–2px stroke, white on dark; or white inside solid red circles.
- **Category blobs:** Irregular organic shapes (yellow / grey / blue) with black pictograms — see extracted PNGs.
- **Pillar icons:** Line art inside solid colored circles (green / gold / blue per pillar).
- **Process steps:** Numbered red circles + red arrows (E-Crew flow, p.7).
- **Brand badge:** Red square, white concave frame, red center dot (apparel / EZTM).

### Brochure content map (for future pages)

| PDF page | Topic                         | Web route            |
| -------- | ----------------------------- | -------------------- |
| 1        | Brand hero — performance      | `/`                  |
| 2        | Consulting / Soins / Coaching | `/sportif`, services |
| 3        | Teams & organisation          | `/equipe`            |
| 4        | Gym / Lab / Studio            | `/sportif/*`         |
| 5        | Entreprise B2B                | `/entreprise`        |
| 6        | Club staffing & pricing       | `/club`              |
| 7        | E-Crew currency               | TBD                  |
| 8        | EZTM digital platform         | Homepage block       |

---

## Accessibility

- Body on black: `#E0E0E0` on `#000000` ≥ 4.5:1.
- `accent-consulting` (#FCEE21) on black: use for borders/large type only; pair with white text for small copy.
- Focus: `2px solid brand-white` offset `2px` on dark.
- Don’t rely on red alone for state; add weight, underline, or icon.

---

## Assets

| File                                      | Purpose                                  |
| ----------------------------------------- | ---------------------------------------- |
| `docs/design/objectif-sport.pdf`          | Master brand brochure                    |
| `docs/design/logo.svg`                    | Master logo vectors                      |
| `docs/design/inspiration.png`             | Web layout mood (dark coaching template) |
| `public/images/brand/hero-cover.jpg`      | Homepage hero                            |
| `public/images/brand/icon-consulting.png` | Consulting category                      |
| `public/images/brand/icon-soins.png`      | Soins category                           |
| `public/images/brand/icon-coaching.png`   | Coaching category                        |
| `public/logo.svg`                         | Site header / footer                     |

---

## Implementation checklist

- [x] Tailwind tokens for core, accents, pillars
- [x] Load Barlow Condensed (incl. italic) + Source Sans 3
- [x] Default theme: dark (`bg-base` black)
- [x] Brand hero image from PDF
- [x] Homepage: tagline, italic headline, pillar accents, audience borders
- [ ] Entreprise white cards + checklists
- [ ] Export favicon from logo mark
- [ ] Light theme toggle (post-v1)
