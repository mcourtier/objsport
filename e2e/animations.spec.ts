import { test, expect } from '@playwright/test'
import {
  getRevealStates,
  isAnimatingIn,
  isFullyRevealed,
  sampleHeroRevealMidpoint,
  waitForRevealProgress,
} from './helpers/animation'

const PROD_URL = process.env.ANIMATION_BASELINE_URL ?? 'https://objsport.vercel.app'

test.describe('hero reveal animations', () => {
  test('immediate reveals are visible on load', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })

    const states = await getRevealStates(page)
    expect(states.length).toBeGreaterThan(0)
    expect(states.every(isFullyRevealed)).toBe(true)
  })

  test('immediate reveals finish visible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1500)

    const states = await getRevealStates(page)
    expect(states.length).toBeGreaterThan(0)
    expect(states.every(isFullyRevealed)).toBe(true)
  })

  test('hero image is visible on load', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })

    const [state] = await getRevealStates(page, '[data-reveal-hero-img]')
    expect(state).toBeDefined()
    expect(isFullyRevealed(state!)).toBe(true)
  })
})

test.describe('scroll reveal animations', () => {
  test('in-viewport sections reveal after hero on homepage', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1500)

    const stuckInView = await page.evaluate(() => {
      const viewportThreshold = window.innerHeight * 0.85

      return [...document.querySelectorAll('[data-reveal-section]')].filter((el) => {
        const { opacity, transform } = getComputedStyle(el)
        const inView = el.getBoundingClientRect().top <= viewportThreshold
        const translateY = transform.match(
          /matrix\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,\s*(-?\d+\.?\d*)\)/,
        )?.[1]

        return (
          inView &&
          (parseFloat(opacity) < 0.9 ||
            (translateY != null && Math.abs(parseFloat(translateY)) > 2))
        )
      }).length
    })

    expect(stuckInView).toBe(0)
  })

  test('entreprise in-viewport sections reveal completely', async ({ page }) => {
    await page.goto('/entreprise', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1500)

    const stuckInView = await page.evaluate(() => {
      const viewportThreshold = window.innerHeight * 0.85

      return [...document.querySelectorAll('[data-reveal-section]')].filter((el) => {
        const { opacity, transform } = getComputedStyle(el)
        const inView = el.getBoundingClientRect().top <= viewportThreshold
        const translateY = transform.match(
          /matrix\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,\s*(-?\d+\.?\d*)\)/,
        )?.[1]

        return (
          inView &&
          (parseFloat(opacity) < 0.9 ||
            (translateY != null && Math.abs(parseFloat(translateY)) > 2))
        )
      }).length
    })

    expect(stuckInView).toBe(0)
  })
})

test.describe('prod parity', () => {
  test('hero midpoint matches production motion profile', async ({ browser }) => {
    test.skip(true, 'Scroll animations disabled — re-enable SCROLL_ANIMATIONS_ENABLED to run parity checks')
    test.skip(!process.env.ANIMATION_BASELINE_URL, 'Set ANIMATION_BASELINE_URL to run parity checks')

    const localContext = await browser.newContext()
    const prodContext = await browser.newContext()

    const localPage = await localContext.newPage()
    const prodPage = await prodContext.newPage()

    const localPromise = sampleHeroRevealMidpoint(localPage)
    const prodPromise = (async () => {
      await prodPage.goto(PROD_URL, { waitUntil: 'commit' })
      await waitForRevealProgress(prodPage)
      return getRevealStates(prodPage)
    })()

    const [localStates, prodStates] = await Promise.all([
      localPromise,
      prodPromise,
    ])

    await localContext.close()
    await prodContext.close()

    expect(localStates.length).toBeGreaterThan(0)
    expect(prodStates.length).toBeGreaterThan(0)

    const compareCount = Math.min(localStates.length, prodStates.length, 3)
    for (let index = 0; index < compareCount; index += 1) {
      const local = localStates[index]!
      const prod = prodStates[index]!

      expect(isAnimatingIn(local)).toBe(true)
      expect(isAnimatingIn(prod)).toBe(true)
    }
  })
})
