import { test, expect } from '@playwright/test'
import {
  getAnimateStates,
  isFullyRevealed,
  waitForAnimateComplete,
} from './helpers/animation'

test.describe('page enter animations', () => {
  test('blocks are visible immediately on first load', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await waitForAnimateComplete(page)

    const states = await getAnimateStates(page)
    expect(states.length).toBeGreaterThan(0)
    expect(states.every(isFullyRevealed)).toBe(true)
  })

  test('blocks finish visible after client navigation', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await waitForAnimateComplete(page)

    await page.locator('a[href="/entreprise"]').first().click()
    await page.waitForURL('**/entreprise')
    await waitForAnimateComplete(page)

    const states = await getAnimateStates(page)
    expect(states.length).toBeGreaterThan(0)
    expect(states.every(isFullyRevealed)).toBe(true)
  })

  test('in-viewport blocks are not stuck hidden on homepage', async ({
    page,
  }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await waitForAnimateComplete(page)

    const stuckInView = await page.evaluate(() => {
      return [...document.querySelectorAll('[data-animate]')].filter((el) => {
        const { opacity, transform } = getComputedStyle(el)
        const inView = el.getBoundingClientRect().top <= window.innerHeight
        const translateY = transform.match(
          /matrix\([^,]+,[^,]+,[^,]+,[^,]+,\s*(-?\d+\.?\d*)\)/,
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
