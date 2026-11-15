import { expect, test } from '@playwright/test'

for (const width of [390, 495, 768]) {
  test(`homepage sections fit the viewport at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const developer = page.locator('#developer')
    await developer.scrollIntoViewIfNeeded()
    await expect(developer.locator('pre')).toBeVisible()
    const overflowing = await page.locator('.rg-section > .rg-container, .rg-dev-grid > div, .rg-dev-title, .rg-dev-desc, .rg-dev-grid .rg-actions, .rg-dev-grid .rg-tabs, .rg-code-panel').evaluateAll(elements =>
      elements.flatMap(el => {
        const box = el.getBoundingClientRect()
        return box.left < -1 || box.right > innerWidth + 1 ? [{ class: el.className, left: box.left, right: box.right }] : []
      }),
    )
    expect(overflowing).toEqual([])
    await page.screenshot({ path: `/tmp/home-developer-${width}.png` })
  })
}
