import gsap from 'gsap'
import {
  ANIMATION,
  prefersReducedMotion,
  registerScrollTrigger,
  SCROLL_TRIGGER_DEFAULTS,
} from '~/utils/animation'

const TWEEN_DEFAULTS = {
  ease: ANIMATION.ease.default,
  force3D: true,
} as const

function setVisible(targets: gsap.TweenTarget) {
  gsap.set(targets, { opacity: 1, y: 0, x: 0, scaleX: 1, force3D: true })
}

export function useScrollAnimations(root: Ref<HTMLElement | null>) {
  onMounted(async () => {
    if (!import.meta.client || !root.value) return

    await registerScrollTrigger()

    const ctx = gsap.context(() => {
      const el = root.value!
      const reduced = prefersReducedMotion()

      if (reduced) {
        setVisible(el.querySelectorAll('[data-reveal], [data-reveal-immediate], [data-reveal-hero-img], [data-reveal-scale-x], [data-reveal-from-x]'))
        return
      }

      const heroImg = el.querySelector('[data-reveal-hero-img]')
      if (heroImg) {
        gsap.from(heroImg, {
          opacity: 0,
          x: ANIMATION.distance.y * 2,
          duration: ANIMATION.duration.emphasis,
          ease: ANIMATION.ease.default,
          force3D: true,
        })
      }

      const immediate = el.querySelectorAll('[data-reveal-immediate]')
      if (immediate.length) {
        const tl = gsap.timeline({ defaults: TWEEN_DEFAULTS })

        tl.from(immediate, {
          opacity: 0,
          y: ANIMATION.distance.y,
          duration: ANIMATION.duration.emphasis,
          stagger: ANIMATION.stagger.default,
        })
      }

      el.querySelectorAll('[data-reveal-section]').forEach((section) => {
        const items = section.querySelectorAll('[data-reveal]')
        if (!items.length) return

        gsap.from(items, {
          opacity: 0,
          y: ANIMATION.distance.y,
          duration: ANIMATION.duration.standard,
          ease: ANIMATION.ease.default,
          force3D: true,
          stagger: ANIMATION.stagger.default,
          scrollTrigger: {
            trigger: section,
            ...SCROLL_TRIGGER_DEFAULTS,
          },
        })

        const fromX = section.querySelectorAll('[data-reveal-from-x]')
        if (fromX.length) {
          gsap.from(fromX, {
            opacity: 0,
            x: ANIMATION.distance.y,
            duration: ANIMATION.duration.standard,
            ease: ANIMATION.ease.default,
            force3D: true,
            stagger: ANIMATION.stagger.default,
            scrollTrigger: {
              trigger: section,
              ...SCROLL_TRIGGER_DEFAULTS,
            },
          })
        }

        const scaleX = section.querySelectorAll('[data-reveal-scale-x]')
        if (scaleX.length) {
          gsap.from(scaleX, {
            scaleX: 0,
            duration: ANIMATION.duration.standard,
            ease: ANIMATION.ease.default,
            force3D: true,
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: section,
              ...SCROLL_TRIGGER_DEFAULTS,
            },
          })
        }
      })
    }, root)

    onUnmounted(() => ctx.revert())
  })
}
