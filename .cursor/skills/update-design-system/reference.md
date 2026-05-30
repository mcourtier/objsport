# Design token reference (objsport)

Source: `--DESIGN.md` → implementation files.

## Color mapping (current defaults)

| --DESIGN.md | Hex (as documented) | Implementation |
|-------------|---------------------|----------------|
| Primary | `#de241b` | `--color-brand` in `main.css`; `primary: 'brand'` in `app.config.ts` |
| Background | `#121214` | Closest: `--color-neutral-900` (`#222527` today) — align hex if DESIGN is authoritative |
| Surface | `#323232` | Closest: `--color-neutral-800` (`#2a2e31`) |
| Text Primary | `#0A0A0A` | Light-on-dark site uses `neutral-100` for headlines |
| Text Secondary | `#525252` | `neutral-400` / `--ui-text-muted` |
| Text Tertiary | `#A3A3A3` | Placeholders; often `neutral-400` |

## Typography mapping

| --DESIGN.md role | CSS variable | Tailwind utility | Google Fonts key |
|------------------|--------------|------------------|------------------|
| Display/Headings | `--font-display` | `font-display` | `Raleway` |
| UI/Body | `--font-body` | `font-body` | `Source+Sans+3` |

Button copy in DESIGN may list Work Sans; Nuxt UI buttons use `font-display` (Raleway) via `app.config.ts`. Change DESIGN or `app.config.ts` together if switching button face.

## Component mapping (Nuxt UI)

| DESIGN section | `app/app.config.ts` key |
|----------------|-------------------------|
| Buttons (primary/outline, padding, hover) | `ui.button.slots`, `ui.button.variants.variant` |
| Cards / surfaces | `ui.card.slots` |
| Form labels | `ui.formField.slots.label` |
| Inputs | `ui.input.slots`, `ui.textarea.slots` |

Shared brand utilities in `main.css` `@layer components`:

- `.brand-tagline`, `.brand-tagline-bullet`
- `.brand-headline`, `.brand-headline-accent`, `.brand-section-rule`

## Palette script

```bash
pnpm palette <hex> [--name brand] [--format css|json]
```

- `--format css` — paste into `@theme`
- `--format json` — inspect shades before merging
- Anchor shade is chosen automatically (uicolors algorithm)

## Related paths

- Design source: `--DESIGN.md`
- Palette generator: `scripts/generate-tailwind-palette.mjs`
- Dep build (postinstall): `scripts/build-color-palette-dep.mjs`
