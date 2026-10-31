import { expect, test } from '@playwright/test'

test('Pivot presets stay aligned after returning from Project workspace', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/demo/pivot')
  await expect(page.getByRole('tablist', { name: 'Financial report presets' })).toBeVisible()
  const sidebar = page.getByRole('complementary', { name: 'Demo examples' })
  await sidebar.getByRole('link', { name: 'Project workspace Advanced' }).click()
  await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', 'planning')
  await expect(page.locator('.demo-page-workspace revo-grid').first()).toBeVisible()

  await sidebar.getByRole('button', { name: 'Pivot & Charts', exact: true }).click()
  await sidebar.getByRole('link', { name: 'Pivot table Advanced' }).click()
  await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', 'pivot')
  await page.waitForLoadState('networkidle')

  const tabs = page.getByRole('tablist', { name: 'Financial report presets' })
  await expect(tabs.getByRole('tab', { name: 'Sales Overview' })).toBeVisible()
  await expect(page.locator('.financial-pivot-header__dataset-note')).toHaveCount(0)
  const layout = await tabs.evaluate((switchElement) => {
    const switchRect = switchElement.getBoundingClientRect()
    const activeTab = switchElement.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]')!
    const activeRect = activeTab.getBoundingClientRect()
    const activeStyle = getComputedStyle(activeTab)
    return {
      switchTop: switchRect.top,
      switchBottom: switchRect.bottom,
      activeTop: activeRect.top,
      activeBottom: activeRect.bottom,
      background: activeStyle.backgroundColor,
      shadow: activeStyle.boxShadow,
      color: activeStyle.color,
      switchColor: getComputedStyle(switchElement).color,
    }
  })
  expect(layout.activeTop).toBeGreaterThanOrEqual(layout.switchTop)
  expect(layout.activeBottom).toBeLessThanOrEqual(layout.switchBottom)
  expect(layout.background).toBe('rgba(0, 0, 0, 0)')
  expect(layout.shadow).toBe('none')
  expect(layout.color).toBe(layout.switchColor)

  await tabs.getByRole('tab', { name: 'Profitability' }).click()
  await expect(tabs.getByRole('tab', { name: 'Profitability' })).toHaveAttribute('aria-selected', 'true')
  const selectedColor = await tabs.evaluate((switchElement) => ({
    color: getComputedStyle(switchElement.querySelector('[aria-selected="true"]')!).color,
    switchColor: getComputedStyle(switchElement).color,
  }))
  expect(selectedColor.color).toBe(selectedColor.switchColor)
  await expect(page.locator('.pivot-summary-panel')).toContainText('Gross Profit')
  await expect(page.locator('.financial-pivot-header__guidance')).toHaveCount(0)
})

test('Pivot presets keep a scrollable full-width switch on a narrow screen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/demo/pivot')
  const tabs = page.getByRole('tablist', { name: 'Financial report presets' })
  await expect(tabs.getByRole('tab', { name: 'Sales Overview' })).toBeVisible()
  const layout = await tabs.evaluate((switchElement) => {
    const switchRect = switchElement.getBoundingClientRect()
    const toolbarRect = switchElement.parentElement!.getBoundingClientRect()
    const tabRect = switchElement.querySelector('[role="tab"]')!.getBoundingClientRect()
    return {
      switchWidth: switchRect.width,
      toolbarWidth: toolbarRect.width,
      switchTop: switchRect.top,
      switchBottom: switchRect.bottom,
      tabTop: tabRect.top,
      tabBottom: tabRect.bottom,
    }
  })
  expect(layout.switchWidth).toBe(layout.toolbarWidth)
  expect(layout.tabTop).toBeGreaterThanOrEqual(layout.switchTop)
  expect(layout.tabBottom).toBeLessThanOrEqual(layout.switchBottom)
  await tabs.getByRole('tab', { name: 'Product Performance' }).click()
  await expect(tabs.getByRole('tab', { name: 'Product Performance' })).toHaveAttribute('aria-selected', 'true')
})
