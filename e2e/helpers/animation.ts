import type { Page } from '@playwright/test'

export interface AnimateState {
  opacity: number
  translateY: number
}

export const ANIMATE_SELECTOR = '[data-animate]'

export async function getAnimateStates(
  page: Page,
  selector: string = ANIMATE_SELECTOR,
): Promise<AnimateState[]> {
  return page.evaluate((sel) => {
    return [...document.querySelectorAll(sel)].map((el) => {
      const { opacity, transform } = getComputedStyle(el)
      let translateY = 0

      const match = transform.match(/matrix\(([^)]+)\)/)
      if (match) {
        const parts = match[1]!.split(',').map((value) => parseFloat(value.trim()))
        translateY = parts[5] ?? 0
      }

      return {
        opacity: parseFloat(opacity),
        translateY,
      }
    })
  }, selector)
}

export function isAnimatingIn(state: AnimateState): boolean {
  return state.opacity < 0.95 || Math.abs(state.translateY) > 2
}

export function isFullyRevealed(state: AnimateState): boolean {
  return state.opacity >= 0.99 && Math.abs(state.translateY) < 1
}

export async function waitForAnimateProgress(page: Page): Promise<void> {
  await page.waitForFunction((selector) => {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 0) return false

    return [...elements].some((el) => {
      const { opacity, transform } = getComputedStyle(el)
      const translateY = transform.match(
        /matrix\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,\s*(-?\d+\.?\d*)\)/,
      )?.[1]
      return (
        parseFloat(opacity) < 0.95 ||
        (translateY != null && Math.abs(parseFloat(translateY)) > 2)
      )
    })
  }, ANIMATE_SELECTOR)
}

export async function waitForAnimateComplete(page: Page): Promise<void> {
  await page.waitForFunction((selector) => {
    const root = document.querySelector('[data-anim-ready]')
    if (!root) return false

    return [...document.querySelectorAll(selector)].every((el) => {
      const { opacity, transform } = getComputedStyle(el)
      const translateY = transform.match(
        /matrix\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,\s*(-?\d+\.?\d*)\)/,
      )?.[1]
      return (
        parseFloat(opacity) >= 0.99 &&
        (translateY == null || Math.abs(parseFloat(translateY)) < 1)
      )
    })
  }, ANIMATE_SELECTOR)
}
