# DESIGN.md

## Overview
This document defines the design system foundations for the project, including color tokens, typography, and TailwindCSS usage conventions.

---

## Design Principles
- Use TailwindCSS utility classes exclusively for styling.
- Favor consistency, clarity, and strong visual hierarchy.
- Maintain high contrast between background and text for accessibility.
- Keep UI minimal, modern, and dark-themed.

---

## Color System (Tailwind Tokens)

### Brand Color
- `brand`: `#DE241B`
  - Primary accent color
  - Used for CTAs, highlights, active states, and key UI elements

### Neutral Palette
- `neutral-900`: `#222527` (Base background)
- `neutral-800`: slightly lighter surfaces (cards, elevated containers)
- `neutral-700`: borders and dividers
- `neutral-300`: muted text
- `neutral-100`: primary text (very light neutral)

### Background
- Default background should use:
  - `bg-neutral-900`

### Text
- Primary text: `text-neutral-100`
- Secondary text: `text-neutral-300`
- Muted text: `text-neutral-400` (optional usage)

### Brand Usage
- Buttons: `bg-brand text-neutral-100`
- Hover states: slightly darker or reduced opacity of `brand`
- Focus rings: `ring-brand`

---

## Typography

### Font Families

#### Display Font
Used for headings, hero sections, and large typography.
```css
font-display: "Raleway", ui-sans-serif, system-ui, sans-serif;