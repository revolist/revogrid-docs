import { expect, test } from '@playwright/test'

for (const width of [390, 1440]) {
  test(`homepage sections use backgrounds without separator lines at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const sections = page.locator('.rg-home > section')
    expect(await sections.count()).toBeGreaterThan(5)
    expect(await sections.evaluateAll(elements => elements.flatMap(el => {
      const css = getComputedStyle(el)
      return css.borderTopWidth !== '0px' || css.borderBottomWidth !== '0px' ? [el.className] : []
    }))).toEqual([])
  })
}
