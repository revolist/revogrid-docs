import { expect, test } from '@playwright/test'

for (const width of [390, 495]) {
  test(`company logos share a compact aligned row at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const strip = page.locator('.trusted-logo-strip--home')
    await strip.scrollIntoViewIfNeeded()
    const logos = strip.locator('.trusted-logo-strip__logo')
    await expect(logos).toHaveCount(5)
    const boxes = await logos.evaluateAll(elements => elements.map(el => {
      const box = el.getBoundingClientRect()
      return { top: box.top, left: box.left, right: box.right, height: box.height }
    }))
    expect(new Set(boxes.map(b => b.top)).size).toBe(1)
    expect(boxes.every(b => b.height === 40 && b.left >= 0 && b.right <= width)).toBe(true)
    await strip.screenshot({ path: `/tmp/mobile-logos-${width}.png` })
  })
}
