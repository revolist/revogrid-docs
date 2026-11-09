import { expect, test } from '@playwright/test'

test('expanded Pivot column header tiers have the same height', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')
  await page.getByRole('button', { name: 'Expand Q1' }).first().click()
  await expect(page.getByRole('button', { name: 'Collapse Q1' }).first()).toBeVisible()

  const heights = await page.locator('.financial-pivot-showcase revo-grid').first().evaluate(grid => {
    const header = [...grid.querySelectorAll('revogr-header')]
      .find(candidate => candidate.textContent?.includes('January'))
    if (!header) throw new Error('Missing expanded Q1 header')
    const groupRows = [...header.querySelectorAll('.group-rgRow > .header-rgRow.group')]
      .map(row => row.getBoundingClientRect().height)
    const leafRow = header.querySelector('.header-rgRow.actual-rgRow')
    if (groupRows.length !== 1 || !leafRow) throw new Error('Expected quarter and month header tiers')
    return [...groupRows, leafRow.getBoundingClientRect().height]
  })

  expect(Math.max(...heights) - Math.min(...heights), JSON.stringify(heights)).toBeLessThanOrEqual(1)
  await page.getByRole('button', { name: 'Collapse Q1' }).first().click()
  await expect(page.getByRole('button', { name: 'Expand Q1' }).first()).toBeVisible()
})
