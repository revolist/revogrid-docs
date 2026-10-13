import { expect, test } from '@playwright/test'

test('Pivot underline meets the summary divider after Ticket investigation navigation', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/demo/pivot')
  const tabs = page.getByRole('tablist', { name: 'Financial report presets' })
  const assertDivider = async () => {
    await expect(tabs).toBeVisible()
    await expect(page.locator('.pivot-summary-panel')).toBeVisible()
    await expect.poll(async () => page.locator('.financial-pivot-showcase').evaluate(showcase => {
      const tab = showcase.querySelector('[role="tab"][aria-selected="true"]')!
      const summary = showcase.querySelector('.pivot-summary-panel')!
      return Math.abs(summary.getBoundingClientRect().top - tab.getBoundingClientRect().bottom)
    })).toBeLessThanOrEqual(1)
  }
  await assertDivider()
  const sidebar = page.getByRole('complementary', { name: 'Demo examples' })
  await sidebar.getByRole('link', { name: 'Ticket investigation Advanced' }).click()
  await expect(page.locator('.operations-demo')).toBeVisible()
  await sidebar.getByRole('link', { name: 'Pivot table Advanced' }).click()
  await assertDivider()
})
