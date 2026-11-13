import { expect, test } from '@playwright/test'
import { waitForApp } from './helpers/app'

test('contact form rejects empty and invalid fields', async ({ page }) => {
  await page.goto('/contact')
  await waitForApp(page)
  await page.getByRole('button', { name: 'Envoyer le message' }).click()

  await expect(page.getByText('Le nom est requis.')).toBeVisible()
  await expect(page.getByText('L’adresse e-mail est requise.')).toBeVisible()
  await expect(page.getByText('Le message est requis.')).toBeVisible()

  await page.getByLabel('Nom').fill('A')
  await page.getByLabel('E-mail').fill('pas-un-email')
  await page.getByLabel('Téléphone').fill('123')
  await page.getByLabel('Message').fill('court')
  await page.getByRole('button', { name: 'Envoyer le message' }).click()

  await expect(
    page.getByText('Le nom doit contenir au moins 2 caractères.'),
  ).toBeVisible()
  await expect(page.getByText('L’adresse e-mail n’est pas valide.')).toBeVisible()
  await expect(
    page.getByText('Le numéro de téléphone n’est pas valide.'),
  ).toBeVisible()
  await expect(
    page.getByText('Le message doit contenir au moins 10 caractères.'),
  ).toBeVisible()
})

test('contact form confirms a valid message', async ({ page }) => {
  await page.goto('/contact')
  await waitForApp(page)
  await page.getByLabel('Nom').fill('Test E2E')
  await page.getByLabel('E-mail').fill('e2e@example.com')
  await page
    .getByLabel('Message')
    .fill('Message de test automatique, merci de l’ignorer.')

  await page.getByRole('button', { name: 'Envoyer le message' }).click()

  await expect(page.getByText('Votre message a bien été envoyé')).toBeVisible()
})

test('appointment form requires a practitioner', async ({ page }) => {
  await page.goto('/')
  await waitForApp(page)
  await page.getByRole('link', { name: 'Prendre RDV' }).click()
  await expect(page).toHaveURL(/\/rdv$/)
  await waitForApp(page)
  await expect(page.locator('#hero-heading')).toContainText('Prendre RDV')

  await page.getByRole('button', { name: 'Envoyer la demande' }).click()

  await expect(page.getByText('Le nom est requis.')).toBeVisible()
  await expect(page.getByText('L’adresse e-mail est requise.')).toBeVisible()
  await expect(page.getByText('Veuillez sélectionner un praticien.')).toBeVisible()
  await expect(page.getByText('Le message est requis.')).toBeVisible()
})
