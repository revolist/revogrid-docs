import { expect, test } from '@playwright/test'

test('Pivot overview fills the workspace without a second scrollbar', async ({ page }) => {
  await page.goto('/demo/pivot')
  const grid = page.locator('.financial-pivot-showcase .pivot-grid-container')
  await expect(grid).toBeVisible()
  await expect(page.locator('.financial-pivot-header__dataset-note')).toHaveCount(0)
  const sections = await page.locator('.financial-pivot-header__surface').evaluate(surface => {
    const selectedTab = surface.querySelector('[role="tab"][aria-selected="true"]')!
    const toolbar = surface.querySelector('.financial-pivot-header__toolbar')!
    const presets = surface.querySelector('.financial-pivot-header__preset-switch')!
    const tab = selectedTab.getBoundingClientRect()
    const switchBox = presets.getBoundingClientRect()
    const toolbarBox = toolbar.getBoundingClientRect()
    return { tabBottom: tab.bottom, switchBottom: switchBox.bottom, toolbarBottom: toolbarBox.bottom }
  })
  expect(Math.abs(sections.switchBottom - sections.tabBottom)).toBeLessThanOrEqual(1)
  expect(sections.tabBottom).toBeLessThanOrEqual(sections.toolbarBottom + 1)
  await expect(page.locator('.financial-pivot-header__guidance')).toHaveCount(0)

  const layout = await page.evaluate(() => {
    const workspace = document.querySelector('.demo-page-workspace') as HTMLElement
    const wrapper = document.querySelector('.financial-pivot-showcase > .overflow-auto') as HTMLElement
    const grid = document.querySelector('.pivot-grid-container') as HTMLElement
    return {
      workspaceOverflow: workspace.scrollHeight - workspace.clientHeight,
      wrapperOverflow: wrapper.scrollHeight - wrapper.clientHeight,
      bottomGap: workspace.getBoundingClientRect().bottom - grid.getBoundingClientRect().bottom,
    }
  })
  expect(layout.workspaceOverflow).toBeLessThanOrEqual(2)
  expect(layout.wrapperOverflow).toBeLessThanOrEqual(2)
  expect(layout.bottomGap).toBeGreaterThanOrEqual(0)
  expect(layout.bottomGap).toBeLessThanOrEqual(2)
})

test('Pivot chart fills the workspace without showing the grid below', async ({ page }) => {
  let releaseDataset!: () => void
  const datasetReady = new Promise<void>(resolve => { releaseDataset = resolve })
  await page.route('**/contoso-retail-v2.json.gz*', async route => {
    await datasetReady
    await route.continue()
  })
  await page.goto('/demo/pivot')
  const showcase = page.locator('.financial-pivot-showcase')
  await expect(showcase).toBeVisible()
  const views = page.getByRole('group', { name: 'Report view', exact: true })
  const pivotButton = views.getByRole('button', { name: 'Pivot', exact: true })
  const chartButton = views.getByRole('button', { name: 'Chart', exact: true })
  await expect(pivotButton).toHaveAttribute('aria-pressed', 'true')
  await pivotButton.click()
  await expect(pivotButton).toHaveAttribute('aria-pressed', 'true')
  await chartButton.click()
  releaseDataset()

  const chart = showcase.locator('.financial-pivot-chart')
  const grid = showcase.locator('.pivot-grid-container')
  await expect(chart).toBeVisible()
  await expect(grid).toBeAttached()
  await expect(grid).toBeHidden()
  await expect(page.locator('.rv-filter:visible')).toHaveCount(0)
  await expect(showcase.locator('.financial-pivot-chart')).toContainText('Pivot Table Demo')
  const chartPanel = chart.locator('.rv-pivot-chart-embedded')
  await expect(chartPanel).toHaveCSS('border-top-width', '0px')
  await expect(chartPanel).toHaveCSS('border-radius', '0px')
  await expect(chartPanel.locator('.rv-dialog__heading')).toHaveCount(0)
  await expect(chartPanel.locator('[data-pivot-chart-title]')).toHaveCount(1)
  await expect(chartButton).toHaveAttribute('aria-pressed', 'true')
  await expect(pivotButton).toHaveAttribute('aria-pressed', 'false')
  await chartButton.click()
  await expect(chart).toBeVisible()

  const chartBox = (await chart.boundingBox())!
  const showcaseBox = (await showcase.boundingBox())!
  expect(chartBox.height).toBeGreaterThan(300)
  expect(showcaseBox.y + showcaseBox.height - chartBox.y - chartBox.height).toBeLessThanOrEqual(12)
  expect(await chart.evaluate(element => getComputedStyle(element).overflowY)).toBe('auto')

  const workspace = page.locator('.demo-page-workspace')
  expect(await workspace.evaluate(element => element.scrollHeight - element.clientHeight)).toBeLessThanOrEqual(2)

  await pivotButton.focus()
  await pivotButton.press('Enter')
  await expect(chart).toBeHidden()
  await expect(grid).toBeVisible()
  await expect(pivotButton).toBeFocused()
  await expect(pivotButton).toHaveAttribute('aria-pressed', 'true')
})

test('Pivot chart view stays within the narrow workspace', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/demo/pivot')
  await page.getByRole('button', { name: 'Chart', exact: true }).click()

  const chart = page.locator('.financial-pivot-chart')
  await expect(chart).toBeVisible()
  await expect(page.locator('.pivot-grid-container')).toBeHidden()
  const bounds = (await chart.boundingBox())!
  expect(bounds.x).toBeGreaterThanOrEqual(0)
  expect(bounds.x + bounds.width).toBeLessThanOrEqual(391)
  expect(bounds.height).toBeGreaterThan(250)
})

test('Pivot compact Fields Layout tab keeps Filters reachable', async ({ page }) => {
  await page.goto('/demo/pivot')
  await page.getByRole('button', { name: 'Fields', exact: true }).click()
  const dialog = page.getByRole('dialog', { name: 'Pivot fields' })
  await dialog.getByRole('tab', { name: 'Layout', exact: true }).click()
  const addFilter = dialog.getByRole('button', { name: 'Add field to Filters', exact: true })
  await addFilter.scrollIntoViewIfNeeded()
  await expect(addFilter).toBeInViewport()
  await addFilter.click()
  await expect(page.getByRole('searchbox', { name: 'Search fields', exact: true }).last()).toBeVisible()
})


test('Financial chart defaults to the demo name across report presets', async ({ page }) => {
  await page.goto('/demo/pivot-financial')
  await page.getByRole('group', { name: 'Report view', exact: true })
    .getByRole('button', { name: 'Chart', exact: true }).click()
  const title = page.locator('.financial-pivot-chart [data-pivot-chart-title]')
  await expect(title).toHaveText('Pivot Financial Analysis Demo')
  const tabs = page.getByRole('tablist', { name: 'Financial report presets' })
  await tabs.getByRole('tab', { name: 'Contribution', exact: true }).click()
  await expect(title).toHaveText('Pivot Financial Analysis Demo')
})

test('Fields keyboard actions reorder the live row hierarchy and Reset restores it', async ({ page }) => {
  await page.goto('/demo/pivot')
  await page.getByRole('button', { name: 'Fields', exact: true }).click()
  const dialog = page.getByRole('dialog', { name: 'Pivot fields' })
  const category = dialog.getByRole('button', { name: /^Actions for Category, Rows/ })
  await category.focus()
  await category.press('Enter')
  const earlier = page.getByRole('button', { name: 'Move earlier', exact: true })
  await earlier.focus()
  await earlier.press('Enter')
  await expect(page.locator('.pivot-summary-panel__definition')).toContainText('Category › Country')
  await expect(dialog.locator('[data-pivot-area="rows"] li').first()).toContainText('Category')
  await page.getByRole('button', { name: 'Close fields', exact: true }).click()
  await page.getByRole('button', { name: 'Reset', exact: true }).click()
  await expect(page.locator('.pivot-summary-panel__definition')).toContainText('Country › Category')
})
