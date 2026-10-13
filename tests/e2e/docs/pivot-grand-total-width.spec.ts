import { expect, test } from '@playwright/test'

test('financial Pivot Grand Total measure headers fit their labels', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot-financial')
  const totalHeaders = page.locator('.financial-pivot-showcase revogr-header .rgHeaderCell')
    .filter({ hasText: 'Grand Total' })
  await expect(totalHeaders).toHaveCount(2)

  for (const header of await totalHeaders.all()) {
    const layout = await header.evaluate(cell => {
      const label = cell.querySelector('.column-label')
      if (!label?.firstChild) throw new Error(`Missing Grand Total label: ${cell.outerHTML.slice(0, 700)}`)
      const range = document.createRange()
      range.selectNodeContents(label)
      const text = range.getBoundingClientRect()
      const box = cell.getBoundingClientRect()
      return {
        name: label.textContent,
        columnWidth: box.width,
        textRight: text.right,
        columnRight: box.right,
      }
    })
    expect(layout.columnWidth, JSON.stringify(layout)).toBeGreaterThanOrEqual(200)
    expect(layout.textRight, JSON.stringify(layout)).toBeLessThanOrEqual(layout.columnRight - 8)
  }
})
