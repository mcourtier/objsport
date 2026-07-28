import gsap from 'gsap'
import {
  ANIMATION,
  getAnimateTargets,
  prefersReducedMotion,
} from '~/utils/animation'

/** First SSR/hydration mount — skip enter animation (assets still loading). */
let isInitialPageLoad = true

/**
 * Stagger-fades every top-level `[data-animate]` inside `root` on mount.
 * Skips the first page load; runs on subsequent client-side navigations.
 */
export function usePageAnimations(root: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | null = null
  let active = false

  onMounted(async () => {
    if (!import.meta.client) return
    active = true

    await nextTick()
    if (!active || !root.value) return

    const skipAnimation = isInitialPageLoad
    isInitialPageLoad = false

    ctx?.revert()
    ctx = gsap.context(() => {
      const el = root.value!
      const targets = getAnimateTargets(el)

      if (
        skipAnimation ||
        prefersReducedMotion() ||
        !targets.length
      ) {
        if (targets.length) {
          gsap.set(targets, { opacity: 1, y: 0, force3D: true })
        }
        // Ready before enabling nav-hide CSS so the first paint never flashes.
        el.setAttribute('data-anim-ready', '')
        document.documentElement.setAttribute('data-page-anim', '')
        return
      }

      // Claim state immediately so CSS handoff cannot flash.
      gsap.set(targets, {
        opacity: 0,
        y: ANIMATION.distance.pageY,
        force3D: true,
      })

      gsap
        .timeline({
          onComplete: () => {
            if (active) el.setAttribute('data-anim-ready', '')
          },
        })
        .to(targets, {
          opacity: 1,
          y: 0,
          duration: ANIMATION.duration.page,
          ease: ANIMATION.ease.default,
          stagger: ANIMATION.stagger.page,
          force3D: true,
        })
    }, root)
  })

  onUnmounted(() => {
    active = false
    // Mark ready before revert so CSS does not re-hide blocks during page leave.
    root.value?.setAttribute('data-anim-ready', '')
    ctx?.revert()
    ctx = null
  })
}
