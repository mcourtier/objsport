import { test, expect } from '@playwright/test'

test('homepage loads hero with highlighted title words', async ({ page }) => {
  const pageErrors: string[] = []
  page.on('pageerror', (error) => pageErrors.push(error.message))

  const response = await page.goto('/')
  expect(response?.status()).toBe(200)
  expect(pageErrors).toEqual([])

  const hero = page.locator('#hero-heading')
  await expect(hero).toBeVisible()
  await expect(hero).toContainText('Un objectif')
  await expect(hero).toContainText('commun')
  await expect(hero).toContainText('performance')

  await expect(hero.locator('.text-primary').filter({ hasText: 'commun' })).toHaveCount(1)
  await expect(hero.locator('.hero-title-line--closing')).toHaveText('votre performance.')
})
