# Animation reference

## `app/utils/animation.ts`

Create or keep this module as the single source of truth:

```ts
import gsap from 'gsap'

gsap.config({ force3D: true })

export const ANIMATION = {
  duration: {
    micro: 0.4,
    standard: 0.7,
    emphasis: 1,
  },
  ease: {
    default: 'power3.out',
    exit: 'power3.in',
  },
  distance: {
    y: 48,
  },
  stagger: {
    default: 0.08,
  },
} as const

export function prefersReducedMotion(): boolean {
  if (import.meta.server) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

let scrollTriggerRegistered = false

export async function registerScrollTrigger() {
  if (scrollTriggerRegistered || import.meta.server) return
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  scrollTriggerRegistered = true
}
```

## Reveal helper

Optional shared helper to avoid duplicating fade-up logic:

```ts
export function reveal(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
): gsap.core.Tween | gsap.core.Timeline {
  if (prefersReducedMotion()) {
    return gsap.set(targets, { opacity: 1, y: 0, force3D: true })
  }

  return gsap.from(targets, {
    opacity: 0,
    y: ANIMATION.distance.y,
    duration: ANIMATION.duration.standard,
    ease: ANIMATION.ease.default,
    force3D: true,
    ...options,
  })
}
```

## Staggered children

```ts
gsap.from('.card-item', {
  opacity: 0,
  y: ANIMATION.distance.y,
  duration: ANIMATION.duration.standard,
  ease: ANIMATION.ease.default,
  force3D: true,
  stagger: ANIMATION.stagger.default,
})
```

Use `duration.emphasis` only when stagger spans many items or the block is above-the-fold hero content.

## ScrollTrigger reveal

```ts
await registerScrollTrigger()

gsap.from(sectionRef.value, {
  opacity: 0,
  y: ANIMATION.distance.y,
  duration: ANIMATION.duration.standard,
  ease: ANIMATION.ease.default,
  force3D: true,
  scrollTrigger: {
    trigger: sectionRef.value,
    start: 'top 85%',
    toggleActions: 'play reverse play reverse',
  },
})
```

Always kill ScrollTrigger instances tied to unmounted elements (`ctx.revert()` handles this when triggers are created inside `gsap.context()`).

## Exit / hide

```ts
gsap.to(el, {
  opacity: 0,
  y: -ANIMATION.distance.y / 2,
  duration: ANIMATION.duration.micro,
  ease: ANIMATION.ease.exit,
  force3D: true,
})
```

## Timeline sequencing

```ts
const tl = gsap.timeline({ defaults: { ease: ANIMATION.ease.default, force3D: true } })

tl.from(titleRef.value, {
  opacity: 0,
  y: ANIMATION.distance.y,
  duration: ANIMATION.duration.standard,
})
  .from(subtitleRef.value, {
    opacity: 0,
    y: ANIMATION.distance.y,
    duration: ANIMATION.duration.standard,
  }, '-=0.2')
```

Timeline `defaults` must include `force3D: true`; individual tweens inherit ease but still pass `force3D: true` when overriding defaults.

## Alignment with existing CSS motion

| Existing | GSAP equivalent |
|----------|-----------------|
| `page-transitions.css` — `0.35s ease`, `translateY(1rem)` | GSAP uses `duration.standard` (`0.7`), `distance.y` (`48`), `power3` |
| Tailwind `duration-200` hovers | `duration.micro` (`0.4`) for quick GSAP feedback |
| `prefers-reduced-motion` in page CSS | `prefersReducedMotion()` guard |

Do not change `page-transitions.css` when adding GSAP — keep route transitions as CSS; new in-page motion uses GSAP with matching tokens.

## Anti-patterns

- Hardcoding `duration: 0.8` or `ease: 'elastic.out'` — breaks consistency
- Animating layout properties (`height`, `padding`) — jank; use transform scale or clip-path only if needed
- Missing cleanup — memory leaks and stale triggers
- `force3D: false` or omitting force3D — never acceptable in this project
- Mixing Framer Motion, `@vueuse/motion`, or anime.js — use GSAP only
