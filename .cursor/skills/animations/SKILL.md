---
name: animations
description: >-
  Implements GSAP animations. Use when adding or editing animations, scroll effects, page reveals,
  staggered entrances, or when the user mentions GSAP, motion, or animate.
---

# Animations

All JavaScript-driven motion uses **GSAP**. Do not add CSS `@keyframes`, Vue `<Transition>` for complex sequences, or other animation libraries for new work.

Match existing site motion: page route transitions (`app/assets/css/page-transitions.css`) and Tailwind `duration-200` hovers.

## Setup

Install once if `gsap` is not in `package.json`:

```bash
pnpm add gsap
```

Shared tokens live in `app/utils/animation.ts`. Create or extend that file — never hardcode duration/ease strings in components.

## Canonical tokens

| Token | Value | Use |
|-------|-------|-----|
| `duration.micro` | `0.4` | Hover feedback, toggles, small UI shifts |
| `duration.standard` | `0.7` | Fades, slides, most reveals |
| `duration.emphasis` | `1` | Hero stagger, large section entrances — sparingly |
| `ease.default` | `'power3.out'` | **Every** GSAP tween unless explicitly an exit |
| `ease.exit` | `'power3.in'` | Leave / hide / reverse only |
| `distance.y` | `48` | Vertical offset in px |

Do not introduce new durations or easing curves without user approval. When in doubt, use `duration.standard` + `ease.default`.

## force3D (required)

Always enable GPU compositing:

1. **Global** — call once in `app/utils/animation.ts`:

```ts
import gsap from 'gsap'

gsap.config({ force3D: true })
```

2. **Per tween** — still pass `force3D: true` on every `gsap.to` / `from` / `fromTo` / `timeline` child tween.

3. **Animate GPU-friendly props only**: `transform` (`x`, `y`, `scale`, `rotation`) and `opacity`. Avoid animating `width`, `height`, `top`, `left`, `margin`, or `filter` unless the user explicitly asks.

## Reduced motion

Respect `prefers-reduced-motion: reduce` the same way `page-transitions.css` does:

- Skip or instant-complete animations (`duration: 0`)
- Set final visible state immediately (`opacity: 1`, `y: 0`)
- Never rely on motion alone to convey meaning

Use `prefersReducedMotion()` from `app/utils/animation.ts` (see [reference.md](reference.md)).

## Vue / Nuxt pattern

```vue
<script setup lang="ts">
import gsap from 'gsap'
import { ANIMATION, prefersReducedMotion } from '~/utils/animation'

const root = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!root.value) return

  const ctx = gsap.context(() => {
    if (prefersReducedMotion()) {
      gsap.set(root.value, { opacity: 1, y: 0, force3D: true })
      return
    }

    gsap.from(root.value, {
      opacity: 0,
      y: ANIMATION.distance.y,
      duration: ANIMATION.duration.standard,
      ease: ANIMATION.ease.default,
      force3D: true,
    })
  }, root)

  onUnmounted(() => ctx.revert())
})
</script>
```

Rules:

- Wrap GSAP in `gsap.context()` scoped to a root ref; call `ctx.revert()` on unmount.
- Run DOM animations in `onMounted` (client only). Guard with `import.meta.client` if logic runs outside lifecycle hooks.
- Register plugins (`ScrollTrigger`, etc.) once in `animation.ts`, not per component.

## ScrollTrigger

Use for scroll-linked reveals. Defaults: `start: 'top 85%'`, `toggleActions: 'play reverse play reverse'` (reverses on scroll away, replays on scroll back), same duration/ease tokens. See [reference.md](reference.md).

## Checklist

Before finishing animation work:

```
- [ ] GSAP used (not ad-hoc CSS keyframes for JS-driven motion)
- [ ] Tokens from app/utils/animation.ts — no magic numbers
- [ ] force3D: true globally and on each tween
- [ ] Only transform + opacity animated
- [ ] prefers-reduced-motion handled
- [ ] gsap.context() + revert() on unmount
- [ ] New animation feels consistent with site motion (0.7s standard, 48px y slide, power3)
```

## Additional resources

- Token module, stagger, and ScrollTrigger patterns: [reference.md](reference.md)
