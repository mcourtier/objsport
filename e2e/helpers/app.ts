import type { Page } from '@playwright/test'

/**
 * Nuxt mounts the shell before the page suspense finishes hydrating.
 * Clicks during that gap hit server HTML and miss the Vue handlers.
 */
export async function waitForApp(page: Page) {
  await page.waitForFunction(() => {
    const root = document.querySelector('#__nuxt') as
      | (HTMLElement & { __vue_app__?: { $nuxt?: { isHydrating?: boolean } } })
      | null
    const nuxt = root?.__vue_app__?.$nuxt
    return Boolean(nuxt) && nuxt.isHydrating === false
  })
}
