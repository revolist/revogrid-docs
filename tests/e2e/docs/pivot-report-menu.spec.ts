import { expect, test } from '@playwright/test'

test('Report menu performs actions without status badges', async ({ page }) => {
  await page.goto('/demo/pivot')
  const report = page.locator('summary', { hasText: 'Report' })
  await report.click()
  const menu = page.locator('.financial-pivot-header__menu-items')
  await expect(menu).toContainText('Saved layouts')
  await expect(menu).toContainText('Share and export')
  await expect(menu).toContainText('Remember the current layout in this browser.')

  await page.getByRole('button', { name: 'Save this report' }).click()
  expect(await page.locator('.financial-pivot-header__feedback').count()).toBe(0)

  await report.click()
  await expect(page.getByRole('button', { name: 'Restore saved report' })).toBeEnabled()
  await page.getByRole('button', { name: 'Restore saved report' }).click()

  await report.click()
  await page.getByRole('textbox', { name: 'Report name' }).fill('Quarter view')
  await page.getByRole('button', { name: 'Save named report' }).click()
  await report.click()
  await expect(page.getByRole('button', { name: 'Open Quarter view' })).toBeVisible()
  await page.getByRole('button', { name: 'Delete Quarter view' }).click()
  await expect(page.getByRole('button', { name: 'Open Quarter view' })).toHaveCount(0)

  const download = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download report JSON' }).click()
  expect((await download).suggestedFilename()).toBe('pivot-report.json')

  await report.click()
  const chooser = page.waitForEvent('filechooser')
  await page.getByRole('button', { name: 'Import report JSON' }).click()
  await (await chooser).setFiles({ name: 'invalid.json', mimeType: 'application/json', buffer: Buffer.from('{}') })
  await expect(page.getByRole('alert')).toContainText('invalid or incompatible')
  await expect(page.locator('.financial-pivot-header__feedback')).toHaveCount(0)
})
