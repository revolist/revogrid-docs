import { expect, test } from '@playwright/test'

for (const width of [390, 768, 1024, 1440]) {
  test(`GitHub count stays in navigation at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.addInitScript(() => {
      if (!localStorage.getItem('vitepress-theme-appearance')) {
        localStorage.setItem('vitepress-theme-appearance', 'light')
      }
    })
    await page.goto('/')
    const header = page.locator('.VPNavBar')
    const link = header.getByRole('link', { name: 'GitHub · 3.4K ★' })
    if (width < 768) {
      await expect(link).toBeHidden()
      await header.getByRole('button', { name: 'Menu', exact: true }).click()
      await expect(
        page.locator('.VPNavScreen').getByRole('link', { name: 'GitHub · 3.4K ★' }),
      ).toBeVisible()
    } else {
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', 'https://github.com/revolist/revogrid')
      await expect(link.locator('svg')).toBeVisible()
      const bounds = await link.boundingBox()
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width)
      await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'dark'))
      await page.reload()
      await expect(page.locator('html')).toHaveClass(/dark/)
      await expect(link).toBeVisible()
      await link.focus()
      await expect(link).toBeFocused()
    }
    await expect(page.locator('.rg-hero-proof-badges a[href*="github.com"]')).toHaveCount(0)
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      width,
    )
  })
}
