---
name: update-design-system
description: >-
  Syncs Tailwind v4 theme tokens and Nuxt UI config from DESIGN.md after design changes. Use when the user edited DESIGN.md, asks to update the design system.
---

# Update Design System

Propagate changes from `DESIGN.md` (repo root) into the codebase. Do not edit `DESIGN.md` unless the user asks — treat it as the source of truth.

## Files to update

| Concern | File |
|--------|------|
| Tailwind `@theme` (colors, fonts) | `app/assets/css/main.css` |
| Nuxt UI semantic colors + component slots | `app/app.config.ts` |
| Google Fonts loading | `nuxt.config.ts` → `googleFonts.families` |
| Brand utility classes (tagline, headlines) | `app/assets/css/main.css` → `@layer components` |

Nuxt UI maps `primary` → Tailwind color `brand` and `neutral` → `neutral` in `app/app.config.ts`. Custom tokens live in `@theme` as `--color-{name}` and `--font-{name}`.

## Workflow

Copy and track progress:

```
- [ ] 1. Read DESIGN.md and list changed tokens
- [ ] 2. Update app/assets/css/main.css @theme
- [ ] 3. Regenerate palettes where a full scale is needed
- [ ] 4. Update nuxt.config.ts googleFonts if typography changed
- [ ] 5. Update app/app.config.ts if component specs changed
- [ ] 6. Verify (dev server or build)
```

### 1. Parse `DESIGN.md`

Extract hex values from the **Colors** tables:

| DESIGN token | Maps to |
|--------------|---------|
| Primary | `--color-brand` (base); optional `brand-50`…`950` scale |
| Background | Page background → `neutral-900` / `body` `bg-neutral-900` |
| Surface | Cards, panels → `neutral-800` |
| Text Primary | Headlines on dark → `neutral-100` |
| Text Secondary | Muted copy → `neutral-400` |
| Text Tertiary | Placeholders → lighter neutral or `neutral-400` |

**Typography** table → `--font-display`, `--font-body` in `@theme`, plus matching `googleFonts.families` keys (use `+` for spaces, e.g. `Source+Sans+3`).

**Components** (buttons, tooltips, etc.) → `app/app.config.ts` slots/variants. Prefer extending existing patterns over new abstractions.

If a DESIGN table row duplicates another token or conflicts with the live site (e.g. wrong Neutral hex), follow the token **name/role**, ask the user only when ambiguous.

### 2. Update `main.css` `@theme`

```css
@theme {
  --font-display: …;
  --font-body: …;
  --color-brand: #…;
  /* neutral scale: --color-neutral-{shade} */
}
```

Keep shades the project already uses unless DESIGN implies a full scale: `100`, `300`, `400`, `700`, `800`, `900`.

### 3. Generate color scales

For brand (or any token needing 50–950):

```bash
pnpm palette <hex> --name brand --format css
```

Example: `pnpm palette #de241b --name brand --format css`

Merge the script output into `@theme` in `main.css`. If the command fails with a missing module error, run `node scripts/build-color-palette-dep.mjs` once, then retry.

For **single hex anchors** (no full scale), set only `--color-brand: #hex` as today.

Map surface/background hexes to the nearest existing neutral shades (`--color-neutral-*` in `@theme`).

Update `body` `@apply` in `@layer base` if default page background or text color changed (e.g. `bg-neutral-900`, `text-neutral-300`).

### 4. Google Fonts (`nuxt.config.ts`)

When display or body font families change:

1. Add/update `googleFonts.families` with weights from DESIGN (or sensible defaults: display 600–800, body 400–600).
2. Keep `ui.fonts: false` — fonts are loaded via `@nuxtjs/google-fonts`, not Nuxt UI font provider.

### 5. Nuxt UI (`app/app.config.ts`)

Update when DESIGN **Components** section changes:

- `ui.colors` — only if primary/neutral **names** change (rare)
- `ui.button`, `ui.card`, `ui.input`, `ui.textarea`, `ui.formField` — slots and variant classes

Use existing Tailwind tokens (`bg-brand`, `text-neutral-100`, `border-neutral-700`, etc.). Match editorial rules from DESIGN: uppercase labels, sharp corners where specified, no extra shadows if DESIGN says flat.

### 6. Verify

```bash
pnpm dev
```

Confirm: home page, a page with `UButton` / forms, sidebar/hero brand color, focus rings (`ring-brand`). Run `pnpm build` if the user wants a production check.

## Scope rules

- **Do** update theme config and shared brand classes in `main.css`.
- **Do not** refactor unrelated components or “fix” DESIGN copy.
- **Do not** change content markdown or images unless the user asked.
- Mention font mismatches (e.g. DESIGN says Work Sans but code uses `font-display`/Raleway) and align to DESIGN only if the user wants full parity.

## Token reference

See [reference.md](reference.md) for the full DESIGN → code mapping and current defaults.
