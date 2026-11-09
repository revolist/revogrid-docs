import { expect, test } from '@playwright/test'

test('Pivot country rows collapse and expand their categories', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')

  const australia = page.locator('.pivot-group-cell-label').filter({ hasText: 'Australia' }).first()
  const toggle = australia.locator('button.group-expand')
  const australiaAudio = page.getByRole('row', { name: /Audio \$2,835\.41/ })
  await expect(australiaAudio).toBeVisible()
  await toggle.click()
  await expect(australiaAudio).toBeHidden()
  await toggle.click()
  await expect(australiaAudio).toBeVisible()
})
