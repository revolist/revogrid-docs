import { expect, test } from '@playwright/test'

for (const width of [390, 495]) {
  test(`hero film fills mobile width at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const film = page.locator('.rg-product-film')
    await expect(film).toBeVisible()
    const box = (await film.boundingBox())!
    expect(box.x).toBeCloseTo(0, 0)
    expect(box.width).toBeCloseTo(width, 0)
    expect(box.height).toBeCloseTo(width * 157 / 480, 0)
    await expect(page.locator('.rg-hero-visual--film')).toHaveCSS('border-radius', '0px')
    await expect(page.locator('.rg-hero-visual--film')).toHaveCSS('border-left-width', '0px')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await page.screenshot({ path: `/tmp/mobile-hero-film-${width}.png` })
  })
}
