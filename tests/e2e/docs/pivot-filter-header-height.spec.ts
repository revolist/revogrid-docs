import { expect, test, type Locator } from '@playwright/test'

/** Measure the visible menu-based header used by the demos, including after expansion. */
async function expectHeaderControls(header: Locator) {
  await expect(header).toBeVisible()
  const geometry = await header.evaluate(cell => {
    // Prefer the leaf label: a selector list picks the earlier ancestor in DOM
    // order, whose flex box may extend behind controls even when its text does not.
    const labelElement = cell.querySelector('.column-label')
      ?? cell.querySelector('.header-text')
      ?? cell.querySelector('.header-content')!
    const labelRange = cell.ownerDocument.createRange()
    labelRange.selectNodeContents(labelElement)
    const label = labelRange.getBoundingClientRect()
    const sort = cell.querySelector('.sort-indicator')!.getBoundingClientRect()
    const filter = cell.querySelector('.rv-filter')!.getBoundingClientRect()
    const hit = document.elementFromPoint(filter.left + filter.width / 2, filter.top + filter.height / 2)
    return {
      height: cell.getBoundingClientRect().height,
      labelRight: label.right, sortLeft: sort.left, sortRight: sort.right, filterLeft: filter.left,
      sortCenter: Math.abs((sort.top + sort.bottom - label.top - label.bottom) / 2),
      filterCenter: Math.abs((filter.top + filter.bottom - label.top - label.bottom) / 2),
      hittable: hit === cell.querySelector('.rv-filter') || !!cell.querySelector('.rv-filter')?.contains(hit),
    }
  })
  expect(geometry.height).toBeLessThanOrEqual(90)
  expect(geometry.sortCenter).toBeLessThanOrEqual(4)
  expect(geometry.filterCenter).toBeLessThanOrEqual(4)
  expect(geometry.labelRight).toBeLessThanOrEqual(geometry.sortLeft)
  expect(geometry.sortRight).toBeLessThanOrEqual(geometry.filterLeft + 1)
  expect(geometry.hittable).toBe(true)
}

test('Pivot menu filters and sort controls stay aligned before and after quarter expansion', async ({ page }) => {
  await page.goto('/demo/pivot')
  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  const rows = grid.getByRole('columnheader', { name: /^Rows(?:\s*[↑↓])?$/ })
  await expectHeaderControls(rows)
  await expect(grid.locator('revogr-header input[type="text"]')).toHaveCount(0)
  await page.getByRole('button', { name: 'Expand Q1', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Collapse Q1', exact: true })).toBeVisible()
  await expectHeaderControls(rows)
  await rows.locator('.rv-filter').click()
  await expect(page.getByRole('dialog', { name: /Filter.*Rows/ })).toBeVisible()
})

test('financial Pivot keeps generated value headers free of inline filters', async ({ page }) => {
  await page.goto('/demo/pivot-financial')
  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: 'Grand Total' }).last()).toBeVisible()
  await expect(grid.locator('revogr-header input[type="text"]')).toHaveCount(0)
  const year = grid.locator('.rgHeaderCell').filter({ has: page.getByRole('button', { name: 'Expand 2024' }) }).first()
  const alignment = await year.evaluate(cell => {
    const label = cell.querySelector('.header-text')!.getBoundingClientRect()
    const count = cell.querySelector('.column-collapse-group-hint')!.getBoundingClientRect()
    return Math.abs((label.top + label.bottom - count.top - count.bottom) / 2)
  })
  expect(alignment).toBeLessThanOrEqual(3)
})

test('Running total Country label leaves its menu filter reachable', async ({ page }) => {
  await page.goto('/demo/pivot-financial')
  await page.getByRole('tab', { name: 'Running total', exact: true }).click()
  const country = page.getByRole('columnheader', { name: /^Country(?:\s*[↑↓])?$/ }).first()
  await expectHeaderControls(country)
  await country.locator('.rv-filter').click()
  await expect(page.getByRole('dialog', { name: /Filter.*Country/ })).toBeVisible()
})

test('Profitability Rows sort arrow stays aligned across expanded year headers', async ({ page }) => {
  await page.goto('/demo/pivot')
  await page.getByRole('tab', { name: 'Profitability', exact: true }).click()
  await page.getByRole('button', { name: 'Expand 2025', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Collapse 2025', exact: true })).toBeVisible()
  const rows = page.getByRole('columnheader', { name: /^Rows(?:\s*[↑↓])?$/ }).first()
  await expectHeaderControls(rows)
  const firstRow = page.locator('.financial-pivot-showcase revogr-data [role="row"]').first()
  await expect(firstRow).toContainText('Audio')
  await rows.click()
  await expect(rows).toHaveClass(/desc/)
  await expect(firstRow).toContainText('TV and Video')
  // Core sorting cycles ascending → descending → unsorted → ascending.
  await rows.click()
  await expect(rows).not.toHaveClass(/(?:^|\s)(?:asc|desc)(?:\s|$)/)
  await rows.click()
  await expect(rows).toHaveClass(/asc/)
  await expect(firstRow).toContainText('Audio')
})
