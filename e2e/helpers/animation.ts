import type { Page } from '@playwright/test'

export interface RevealState {
  opacity: number
  translateY: number
  scaleX: number
}

export const IMMEDIATE_OPACITY_SELECTOR =
  '[data-reveal-immediate]:not([data-reveal-draw-x])'

export async function getRevealStates(
  page: Page,
  selector: string = IMMEDIATE_OPACITY_SELECTOR,
): Promise<RevealState[]> {
  return page.evaluate((sel) => {
    return [...document.querySelectorAll(sel)].map((el) => {
      const { opacity, transform } = getComputedStyle(el)
      let translateY = 0
      let scaleX = 1

      const match = transform.match(/matrix\(([^)]+)\)/)
      if (match) {
        const parts = match[1]!.split(',').map((value) => parseFloat(value.trim()))
        scaleX = parts[0] ?? 1
        translateY = parts[5] ?? 0
      }

      return {
        opacity: parseFloat(opacity),
        translateY,
        scaleX,
      }
    })
  }, selector)
}

export function isAnimatingIn(state: RevealState): boolean {
  return (
    state.opacity < 0.95 ||
    Math.abs(state.translateY) > 2 ||
    state.scaleX < 0.95
  )
}

export function isFullyRevealed(state: RevealState): boolean {
  return (
    state.opacity >= 0.99 &&
    Math.abs(state.translateY) < 1 &&
    state.scaleX >= 0.99
  )
}

export async function waitForRevealProgress(page: Page): Promise<void> {
  await page.waitForFunction((selector) => {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 0) return false

    return [...elements].some((el) => {
      const { opacity, transform } = getComputedStyle(el)
      const translateY = transform.match(/matrix\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,\s*(-?\d+\.?\d*)\)/)?.[1]
      return parseFloat(opacity) < 0.95 || (translateY != null && Math.abs(parseFloat(translateY)) > 2)
    })
  }, IMMEDIATE_OPACITY_SELECTOR)
}

export async function sampleHeroRevealMidpoint(
  page: Page,
): Promise<RevealState[]> {
  await page.goto('/', { waitUntil: 'commit' })
  await waitForRevealProgress(page)
  return getRevealStates(page)
}
