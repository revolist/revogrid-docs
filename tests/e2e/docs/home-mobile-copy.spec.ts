import { expect, test } from '@playwright/test'

for (const width of [390, 1440]) {
  test(`hero copy at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const claim = page.locator('.rg-hero-performance')
    const benchmark = claim.getByRole('link', { name: '60fps, 3x less memory.' })
    if (width <= 640) {
      await expect(claim).toBeHidden()
      await expect(benchmark).toBeHidden()
    } else {
      await expect(claim).toBeVisible()
      await expect(benchmark).toBeVisible()
    }
    await expect(page.locator('.rg-hero-sub')).toContainText('Inline editing, virtual scroll, and custom cells for every major framework.')
    await expect(page.locator('.rg-hero-sub')).toBeVisible()
  })
}
