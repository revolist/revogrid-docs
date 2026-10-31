import { expect, test } from '@playwright/test'

test('Sales Overview starts with one visible header row while all quarters are collapsed', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')

  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  await expect(grid.getByRole('button', { name: 'Expand Q1' })).toBeVisible()
  for (const quarter of ['Q1', 'Q2', 'Q3', 'Q4']) {
    await expect(grid.getByRole('button', { name: `Expand ${quarter}` })).toBeVisible()
  }

  const initialRows = await grid.evaluate(element => {
    const header = [...element.querySelectorAll('revogr-header')]
      .find(candidate => candidate.textContent?.includes('Q1'))
    if (!header) throw new Error('Missing quarter header')
    const groupRows = [...header.querySelectorAll('.group-rgRow > .header-rgRow.group')]
      .filter(row => row.getBoundingClientRect().height > 0)
    const leafRow = header.querySelector('.header-rgRow.actual-rgRow')
    return {
      groupRows: groupRows.length,
      leafHeight: leafRow?.getBoundingClientRect().height,
    }
  })
  expect(initialRows.groupRows, JSON.stringify(initialRows)).toBe(0)
  expect(initialRows.leafHeight).toBeGreaterThan(0)

  await grid.getByRole('button', { name: 'Expand Q1' }).click()
  await expect(grid.getByRole('button', { name: 'Collapse Q1' })).toBeVisible()
  await expect(grid.locator('.header-rgRow.actual-rgRow').filter({ hasText: 'January' })).toBeVisible()
  await grid.getByRole('button', { name: 'Collapse Q1' }).click()
  await expect(grid.getByRole('button', { name: 'Expand Q1' })).toBeVisible()
  await expect.poll(async () => grid.evaluate(element => {
    const header = [...element.querySelectorAll('revogr-header')]
      .find(candidate => candidate.textContent?.includes('Q1'))
    return [...(header?.querySelectorAll('.group-rgRow > .header-rgRow.group') ?? [])]
      .filter(row => row.getBoundingClientRect().height > 0).length
  })).toBe(0)
})
