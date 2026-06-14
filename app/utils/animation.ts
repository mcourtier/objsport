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
    default: 0.04,
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

export const SCROLL_TRIGGER_DEFAULTS = {
  start: 'top 85%',
  toggleActions: 'play reverse play reverse',
} as const

export function reveal(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
): gsap.core.Tween | gsap.core.Timeline {
  if (prefersReducedMotion()) {
    return gsap.set(targets, { opacity: 1, y: 0, x: 0, scaleX: 1, force3D: true })
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

export async function scrollReveal(
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
): Promise<gsap.core.Tween | gsap.core.Timeline> {
  await registerScrollTrigger()

  const { scrollTrigger: scrollTriggerOptions, ...tweenOptions } = options
  const scrollTrigger =
    typeof scrollTriggerOptions === 'object' && scrollTriggerOptions !== null
      ? scrollTriggerOptions
      : {}

  return reveal(targets, {
    ...tweenOptions,
    scrollTrigger: {
      trigger: targets as gsap.DOMTarget,
      ...SCROLL_TRIGGER_DEFAULTS,
      ...scrollTrigger,
    },
  })
}
