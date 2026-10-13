import { expect, test } from '@playwright/test'

test('Pivot Charts shows charts directly below the controls without a report summary', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/demo/pivot-charts')

  const dashboard = page.locator('.pivot-dashboard')
  await expect(dashboard.locator('.pivot-summary-panel')).toHaveCount(0)
  await expect(dashboard.locator('.dashboard-pivot-summary')).toHaveCount(0)
  await expect(dashboard.locator('.dashboard-summary')).toContainText('filtered lines')
  await expect(dashboard.locator('.dashboard-summary')).not.toContainText('revenue')
  await expect(dashboard.getByRole('heading', { name: 'Pivot report' })).toHaveCount(0)
  await expect(page.locator('.dashboard-card')).toHaveCount(4)
  expect(await dashboard.locator('.dashboard-report').evaluate(element => getComputedStyle(element).borderTopWidth)).toBe('0px')
  for (const card of await dashboard.locator('.dashboard-charts .dashboard-card').all()) {
    expect(await card.evaluate(element => getComputedStyle(element).borderTopWidth)).toBe('1px')
    expect(await card.locator('h2').evaluate(element => getComputedStyle(element).borderTopWidth)).toBe('0px')
  }

  await page.getByRole('radio', { name: 'Categories' }).check()
  await expect(page.getByRole('heading', { name: 'Quarterly revenue by category' })).toBeVisible()

  await page.setViewportSize({ width: 390, height: 844 })
  await expect(dashboard.locator('.pivot-summary-panel')).toHaveCount(0)
})

test('Pivot Charts starts with fields closed and opens the Pivot table fields drawer', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/demo/pivot-charts')

  const fieldsButton = page.getByRole('button', { name: 'Fields', exact: true })
  const dialog = page.getByRole('dialog', { name: 'Pivot fields' })
  await expect(fieldsButton).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator('.dashboard-report .pivot-config')).toHaveCount(0)
  await expect(dialog).toBeHidden()

  await fieldsButton.click()
  await expect(fieldsButton).toHaveAttribute('aria-expanded', 'true')
  await expect(dialog).toBeVisible()
  await expect(dialog.locator('.financial-pivot-fields-drawer__mount.pivot-config')).toBeVisible()
  expect(await dialog.evaluate(element => getComputedStyle(element).position)).toBe('fixed')
  await expect(page.locator('.dashboard-report .pivot-config')).toHaveCount(0)

  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(fieldsButton).toHaveAttribute('aria-expanded', 'false')
  await expect(fieldsButton).toBeFocused()

  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload()
  await expect(page.getByRole('button', { name: 'Fields', exact: true })).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator('.dashboard-report .pivot-config')).toHaveCount(0)
})

test('Pivot Charts controls align and keep the filtered count in the borderless bar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/demo/pivot-charts')

  const controls = page.locator('.dashboard-controls')
  const summary = controls.locator('.dashboard-summary')
  await expect(summary).toContainText('filtered lines')
  expect(await controls.evaluate(element => getComputedStyle(element).borderTopWidth)).toBe('0px')

  const controlBoxes = await Promise.all([
    controls.getByRole('combobox', { name: 'Year' }),
    controls.getByRole('combobox', { name: 'Brand' }),
    controls.locator('.dashboard-compare-options'),
    controls.getByRole('button', { name: 'Reset report' }),
    controls.getByRole('button', { name: 'Fields' }),
  ].map(locator => locator.boundingBox()))
  expect(controlBoxes.every(Boolean)).toBe(true)
  const heights = controlBoxes.map(box => box!.height)
  expect(Math.max(...heights) - Math.min(...heights)).toBeLessThanOrEqual(1)
  const bottoms = controlBoxes.map(box => box!.y + box!.height)
  expect(Math.max(...bottoms) - Math.min(...bottoms)).toBeLessThanOrEqual(1)
  const summaryBox = await summary.boundingBox()
  const countGap = summaryBox!.x - controlBoxes[4]!.x - controlBoxes[4]!.width
  expect(countGap).toBeGreaterThanOrEqual(0)
  expect(countGap).toBeLessThanOrEqual(11)
  const gridBox = await page.locator('.dashboard-grid revo-grid').boundingBox()
  const controlsBox = await controls.boundingBox()
  expect(Math.abs(gridBox!.x - controlsBox!.x)).toBeLessThanOrEqual(1)
  expect(summaryBox!.y + summaryBox!.height).toBeLessThanOrEqual(Math.max(...bottoms) + 1)
  const yearLabel = await controls.locator(':scope > label').first().boundingBox()
  const compareLabel = await controls.locator('.dashboard-compare-label').boundingBox()
  expect(Math.abs(compareLabel!.y - yearLabel!.y)).toBeLessThanOrEqual(2)

  await page.setViewportSize({ width: 390, height: 844 })
  await expect(summary).toBeVisible()
  const overflow = await controls.evaluate(element => element.scrollWidth - element.clientWidth)
  expect(overflow).toBeLessThanOrEqual(1)
})

test('Pivot Charts omits the repeated single-measure subheaders', async ({ page }) => {
  await page.goto('/demo/pivot-charts')

  const grid = page.locator('.dashboard-grid > revo-grid')
  const headers = grid.locator('revogr-header .rgHeaderCell')
  await expect(headers.filter({ hasText: /Q1/ }).first()).toBeVisible()
  await expect(headers.filter({ hasText: /Revenue \(USD\)/ })).toHaveCount(0)
  await expect(headers.filter({ hasText: /Grand Total/ }).first()).toBeVisible()
  await expect(grid.getByRole('row', { name: /Australia/ })).toBeVisible()
  const quarter = await headers.filter({ hasText: /^\s*Q1\s*$/ }).first().boundingBox()
  const total = await headers.filter({ hasText: /^\s*Grand Total\s*$/ }).first().boundingBox()
  const host = await page.locator('.dashboard-grid').boundingBox()
  expect(Math.abs(total!.y - quarter!.y)).toBeLessThanOrEqual(1)
  expect(Math.abs(total!.height - quarter!.height)).toBeLessThanOrEqual(1)
  expect(host!.x + host!.width - total!.x - total!.width).toBeLessThanOrEqual(8)
})

test('Pivot Charts keeps currency values readable at desktop and mobile widths', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/demo/pivot-charts')
  const grid = page.locator('.dashboard-grid > revo-grid')
  const amount = grid.getByRole('gridcell', { name: '$1,051,956.10', exact: true })
  await expect(amount).toBeVisible()
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 })
    await expect.poll(() => amount.evaluate(element => element.clientWidth)).toBeGreaterThanOrEqual(148)
    const textWidth = await amount.evaluate(element => {
      const range = document.createRange()
      range.selectNodeContents(element)
      return range.getBoundingClientRect().width
    })
    expect(textWidth).toBeLessThanOrEqual(await amount.evaluate(element => element.clientWidth - 24))
  }
  const chart = page.getByTestId('comparison-chart')
  await expect(chart.locator('svg')).toBeVisible()
  await expect(chart.locator('svg')).toContainText('3.6M')
})
