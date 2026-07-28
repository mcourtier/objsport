import gsap from 'gsap'

gsap.config({ force3D: true })

export const ANIMATION = {
  duration: {
    micro: 0.4,
    /** Matches `page-transitions.css` leave duration. */
    page: 0.35,
    standard: 0.7,
    emphasis: 1,
  },
  ease: {
    default: 'power3.out',
    exit: 'power3.in',
  },
  distance: {
    y: 48,
    /** 1rem — matches `page-transitions.css` translateY. */
    pageY: 16,
  },
  stagger: {
    default: 0.08,
    page: 0.15,
  },
} as const

export const ANIMATE_SELECTOR = '[data-animate]'

/** Top-level `[data-animate]` only (nested markers are ignored). */
export function getAnimateTargets(root: ParentNode): Element[] {
  return [...root.querySelectorAll(ANIMATE_SELECTOR)].filter((el) => {
    let parent = el.parentElement
    while (parent && parent !== root) {
      if (parent.matches(ANIMATE_SELECTOR)) return false
      parent = parent.parentElement
    }
    return true
  })
}

export function prefersReducedMotion(): boolean {
  if (import.meta.server) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function reveal(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
): gsap.core.Tween | gsap.core.Timeline {
  if (prefersReducedMotion()) {
    return gsap.set(targets, {
      opacity: 1,
      y: 0,
      x: 0,
      force3D: true,
    })
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
