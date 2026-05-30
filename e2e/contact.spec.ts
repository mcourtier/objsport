import { test, expect } from '@playwright/test'

test('contact page loads hero and form', async ({ page }) => {
  const pageErrors: string[] = []
  page.on('pageerror', (error) => pageErrors.push(error.message))

  const response = await page.goto('/contact')
  expect(response?.status()).toBe(200)
  expect(pageErrors).toEqual([])

  await expect(page.locator('#hero-heading')).toBeVisible()
  await expect(page.locator('#hero-heading')).toContainText('Contact')
  await expect(
    page.getByRole('heading', { name: 'Contactez-nous' }),
  ).toBeVisible()

  await expect(page.getByLabel('Nom')).toBeVisible()
  await expect(page.getByLabel('E-mail')).toBeVisible()
  await expect(page.getByLabel('Message')).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'Envoyer le message' }),
  ).toBeVisible()
})
