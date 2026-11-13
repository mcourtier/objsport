import { expect, test, type Page } from '@playwright/test'
import { waitForApp } from './helpers/app'

const publicPages = [
  { path: '/', heading: 'Un objectif' },
  { path: '/entreprise', heading: 'La prévention' },
  { path: '/club', heading: 'Des pros de terrain' },
  { path: '/sportif', heading: 'La performance professionnelle' },
  { path: '/sportif/le-gym', heading: 'Le Gym' },
  { path: '/sportif/le-lab', heading: 'Le Lab' },
  { path: '/sportif/le-studio', heading: 'Le Studio' },
  { path: '/equipe', heading: 'Nos équipes' },
  { path: '/stations', heading: 'Nos stations' },
  { path: '/rdv', heading: 'Prendre RDV' },
  { path: '/mentions-legales', heading: 'Mentions légales' },
  { path: '/cgu', heading: 'Conditions générales' },
] as const

function trackPageErrors(page: Page) {
  const pageErrors: string[] = []
  page.on('pageerror', (error) => pageErrors.push(error.message))
  return pageErrors
}

test('public pages render their hero without script errors', async ({
  page,
}) => {
  const pageErrors = trackPageErrors(page)

  for (const entry of publicPages) {
    const response = await page.goto(entry.path)
    expect(response?.status(), entry.path).toBe(200)
    await expect(page.locator('#hero-heading')).toContainText(entry.heading)
  }

  expect(pageErrors).toEqual([])
})

test('unknown routes respond with 404', async ({ page }) => {
  for (const path of ['/page-qui-nexiste-pas', '/sportif/inconnu']) {
    const response = await page.goto(path)
    expect(response?.status(), path).toBe(404)
    await expect(
      page.getByRole('heading', { name: 'Page introuvable' }),
    ).toBeVisible()
  }
})

test('sidebar reaches a sportif pillar', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Navigation principale' })

  await nav.getByRole('link', { name: 'Sportif', exact: true }).click()
  await expect(page).toHaveURL(/\/sportif$/)

  await nav.getByRole('link', { name: 'Le Gym', exact: true }).click()
  await expect(page).toHaveURL(/\/sportif\/le-gym$/)
  await expect(page.locator('#hero-heading')).toContainText('Le Gym')
  await expect(page.getByText('Préhab (dès 45 min)')).toBeVisible()
})

test('mobile menu reaches the entreprise page', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await waitForApp(page)

  await page.getByRole('button', { name: 'Ouvrir le menu' }).click()
  await expect(
    page.getByRole('button', { name: 'Fermer le menu' }),
  ).toBeVisible()
  await page
    .getByRole('navigation', { name: 'Navigation principale' })
    .getByRole('link', { name: 'Entreprise', exact: true })
    .click()

  await expect(page).toHaveURL(/\/entreprise$/)
  await expect(page.locator('#hero-heading')).toContainText('La prévention')
})

test('footer legal link opens the mentions page', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Mentions légales' }).click()
  await expect(page).toHaveURL(/\/mentions-legales$/)
  await expect(page.locator('#hero-heading')).toContainText('Mentions légales')
  await expect(page.getByText('Contenu à venir.')).toBeVisible()
})

test('stations list pages twelve cards at a time', async ({ page }) => {
  await page.goto('/stations', { waitUntil: 'domcontentloaded' })
  await waitForApp(page)
  const cards = page.locator('[aria-label="Liste des stations"] > li')

  await expect(cards).toHaveCount(12)
  await page.getByRole('button', { name: 'Afficher plus' }).click()
  await expect(cards).toHaveCount(24)
})
