import gsap from 'gsap'
import {
  ANIMATION,
  parseRevealDelay,
  prefersReducedMotion,
  registerScrollTrigger,
  SCROLL_TRIGGER_DEFAULTS,
} from '~/utils/animation'

const TWEEN_DEFAULTS = {
  ease: ANIMATION.ease.default,
  force3D: true,
} as const

function setVisible(targets: gsap.TweenTarget) {
  gsap.set(targets, {
    opacity: 1,
    y: 0,
    x: 0,
    scaleX: 1,
    force3D: true,
  })
}

function isDrawReveal(target: Element): boolean {
  return target.matches('[data-reveal-draw-x]')
}

function staggerStart(targets: Element[], index: number): number {
  return (
    index * ANIMATION.stagger.default + parseRevealDelay(targets[index]!)
  )
}

function revealStaggered(
  targets: Element[],
  vars: gsap.TweenVars,
  scrollTrigger: ScrollTrigger.Vars,
  baseDelay: number,
) {
  targets.forEach((target, index) => {
    gsap.from(target, {
      ...vars,
      delay: baseDelay + staggerStart(targets, index),
      scrollTrigger,
    })
  })
}

function parseScrollTriggerViewportRatio(start: string): number {
  const match = start.match(/(\d+(?:\.\d+)?)%\s*$/)
  return match ? Number(match[1]) / 100 : 0.85
}

function triggersOnLoad(section: Element): boolean {
  const ratio = parseScrollTriggerViewportRatio(SCROLL_TRIGGER_DEFAULTS.start)
  return section.getBoundingClientRect().top <= window.innerHeight * ratio
}

export function useScrollAnimations(root: Ref<HTMLElement | null>) {
  onMounted(async () => {
    if (!import.meta.client || !root.value) return

    await registerScrollTrigger()

    const ctx = gsap.context(() => {
      const el = root.value!
      const reduced = prefersReducedMotion()

      if (reduced) {
        setVisible(el.querySelectorAll('[data-reveal-hero-section], [data-reveal-section], [data-reveal], [data-reveal-immediate], [data-reveal-draw-x], [data-reveal-hero-img], [data-reveal-scale-x], [data-reveal-from-x]'))
        return
      }

      let initialRevealDelay = 0

      const heroSection = el.querySelector('[data-reveal-hero-section]')
      const heroImg = el.querySelector('[data-reveal-hero-img]')
      const immediate = el.querySelectorAll('[data-reveal-immediate]')

      if (heroSection || heroImg || immediate.length) {
        const heroTl = gsap.timeline({ defaults: TWEEN_DEFAULTS })

        if (heroImg) {
          heroTl.from(heroImg, {
            opacity: 0,
            x: ANIMATION.distance.y * 2,
            duration: ANIMATION.duration.emphasis,
          }, 0)
        }

        if (heroSection) {
          const heroReveals = heroSection.querySelectorAll('[data-reveal-immediate]')

          heroReveals.forEach((target, index) => {
            const start =
              index * ANIMATION.stagger.default + parseRevealDelay(target)

            if (isDrawReveal(target)) {
              heroTl.fromTo(
                target,
                { scaleX: 0, transformOrigin: 'left center' },
                { scaleX: 1, duration: ANIMATION.duration.emphasis },
                start,
              )
              return
            }

            heroTl.from(
              target,
              {
                opacity: 0,
                y: ANIMATION.distance.y,
                duration: ANIMATION.duration.emphasis,
              },
              start,
            )
          })
        } else if (immediate.length) {
          heroTl.from(immediate, {
            opacity: 0,
            y: ANIMATION.distance.y,
            duration: ANIMATION.duration.emphasis,
            stagger: ANIMATION.stagger.default,
          }, 0)
        }

        initialRevealDelay = Math.max(
          0,
          heroTl.duration() - ANIMATION.duration.standard,
        )
      }

      const scrollRevealDelay = (section: Element) =>
        initialRevealDelay > 0 && triggersOnLoad(section) ? initialRevealDelay : 0

      el.querySelectorAll('[data-reveal-section]').forEach((section) => {
        const delay = scrollRevealDelay(section)
        const scrollTrigger = {
          trigger: section,
          ...SCROLL_TRIGGER_DEFAULTS,
          onLeaveBack: (self: ScrollTrigger) => {
            self.animation?.delay(0)
          },
        }

        const items = section.querySelectorAll('[data-reveal]')
        if (items.length) {
          revealStaggered(
            [section, ...items],
            {
              opacity: 0,
              y: ANIMATION.distance.y,
              duration: ANIMATION.duration.standard,
              ease: ANIMATION.ease.default,
              force3D: true,
            },
            scrollTrigger,
            delay,
          )
        }

        const fromX = section.querySelectorAll('[data-reveal-from-x]')
        if (fromX.length) {
          revealStaggered(
            [...fromX],
            {
              opacity: 0,
              x: ANIMATION.distance.y,
              duration: ANIMATION.duration.standard,
              ease: ANIMATION.ease.default,
              force3D: true,
            },
            scrollTrigger,
            delay,
          )
        }

        const scaleX = section.querySelectorAll('[data-reveal-scale-x]')
        if (scaleX.length) {
          revealStaggered(
            [...scaleX],
            {
              scaleX: 0,
              duration: ANIMATION.duration.standard,
              ease: ANIMATION.ease.default,
              force3D: true,
              transformOrigin: 'left center',
            },
            scrollTrigger,
            delay,
          )
        }
      })
    }, root)

    onUnmounted(() => ctx.revert())
  })
}
