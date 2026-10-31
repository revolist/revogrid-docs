import { expect, test } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

for (const theme of ['light', 'dark']) {
  test(`shared Pivot inspector uses neutral surfaces and honors accent overrides in ${theme}`, async ({ page }) => {
    await page.addInitScript(value => localStorage.setItem('vitepress-theme-appearance', value), theme)
    await page.goto('/demo/pivot')
    await expect(page.locator('revogr-data .rgCell').first()).toBeVisible()
    await page.getByRole('button', { name: 'Fields', exact: true }).click()
    const inspector = page.locator('.pivot-config').filter({ visible: true }).first()
    await expect(inspector).toBeVisible()
    const colors = await inspector.evaluate(element => {
      const style = getComputedStyle(element)
      return ['--pv-inspector-bg', '--pv-inspector-surface', '--pv-inspector-text', '--pv-inspector-muted']
        .map(token => style.getPropertyValue(token).trim())
    })
    for (const color of colors) {
      const raw = color.replace('#', '')
      const hex = raw.length === 3 ? [...raw].map(channel => channel + channel).join('') : raw
      const channels = [0, 2, 4].map(index => parseInt(hex.slice(index, index + 2), 16))
      expect(Math.max(...channels) - Math.min(...channels), color).toBeLessThanOrEqual(6)
    }
    const accentControl = inspector.locator('.pivot-inspector-tabs [aria-selected=true]').first()
    const selectedText = await accentControl.evaluate(element => {
      // Canvas resolves color-mix values as well as legacy rgb/hex values.
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')!
      const channels = (color: string) => {
        context.fillStyle = color
        context.fillRect(0, 0, 1, 1)
        return Array.from(context.getImageData(0, 0, 1, 1).data).slice(0, 3)
      }
      const style = getComputedStyle(element)
      const luminance = (rgb: number[]) => rgb.map(channel => channel / 255)
        .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4)
        .reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0)
      const values = [luminance(channels(style.color)), luminance(channels(style.backgroundColor))].sort((a, b) => a - b)
      return (values[1] + .05) / (values[0] + .05)
    })
    expect(selectedText).toBeGreaterThanOrEqual(4.5)
    const before = await accentControl.evaluate(element => getComputedStyle(element).color)
    await inspector.evaluate(element => (element as HTMLElement).style.setProperty('--rv-ui-accent', '#8040a0'))
    const custom = await accentControl.evaluate(element => getComputedStyle(element).color)
    expect(custom).not.toBe(before)
  })
}

// Resolve translucent backgrounds against their actual ancestors and CSS color-mix
// through canvas, so contrast matches the visible component rather than raw tokens.
async function textContrast(locator: import('@playwright/test').Locator) {
  return locator.evaluate(element => {
    const context = document.createElement('canvas').getContext('2d')!
    const rgba = (color: string) => {
      context.clearRect(0, 0, 1, 1)
      context.fillStyle = color
      context.fillRect(0, 0, 1, 1)
      return Array.from(context.getImageData(0, 0, 1, 1).data)
    }
    const stack: number[][] = []
    let node: Element | null = element
    while (node) { stack.push(rgba(getComputedStyle(node).backgroundColor)); node = node.parentElement }
    let background = [255, 255, 255]
    for (const color of stack.reverse()) background = background.map((value, index) => color[index] * color[3] / 255 + value * (1 - color[3] / 255))
    const luminance = (rgb: number[]) => rgb.slice(0, 3).map(channel => channel / 255)
      .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4)
      .reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0)
    const values = [luminance(rgba(getComputedStyle(element).color)), luminance(background)].sort((a, b) => a - b)
    return (values[1] + .05) / (values[0] + .05)
  })
}

for (const theme of ['light', 'dark']) {
  test(`shared filter count and embedded chart selection have readable text in ${theme}`, async ({ page }) => {
    await page.addInitScript(value => localStorage.setItem('vitepress-theme-appearance', value), theme)
    await page.goto('/demo/pivot')
    const rows = page.locator('revo-grid').first().locator('revogr-header .rgHeaderCell').filter({ hasText: 'Rows' }).first()
    await rows.locator('.rv-filter:not(.filter-header-selection-trigger)').first().click()
    await page.getByRole('button', { name: 'Category', exact: true }).click()
    const dialog = page.locator('.rv-value-selection-dialog')
    const count = dialog.locator('.rv-value-selection-editor__selected-count')
    await expect(count).toBeVisible()
    expect.soft(await textContrast(count)).toBeGreaterThanOrEqual(4.5)
    await mkdir('output/playwright/pivot-full-audit/shared-final', { recursive: true })
    await page.screenshot({ path: `output/playwright/pivot-full-audit/shared-final/filter-${theme}.png` })
    const defaultCountColor = await count.evaluate(element => getComputedStyle(element).color)
    await dialog.evaluate(element => (element as HTMLElement).style.setProperty('--rv-ui-accent', '#8040a0'))
    expect(await count.evaluate(element => getComputedStyle(element).color)).not.toBe(defaultCountColor)
    await dialog.getByRole('button', { name: 'Cancel', exact: true }).click()
    await page.getByRole('button', { name: 'Chart', exact: true }).click()
    const selected = page.locator('.financial-pivot-chart .rv-segmented-switch-item.on').first()
    await expect(selected).toBeVisible()
    expect.soft(await textContrast(selected)).toBeGreaterThanOrEqual(4.5)
    const galleryCaption = page.locator('.financial-pivot-chart .rv-pivot-chart-dialog__gallery-card[aria-pressed=true] > span').first()
    await expect(galleryCaption).toBeVisible()
    expect.soft(await textContrast(galleryCaption)).toBeGreaterThanOrEqual(4.5)
    await page.screenshot({ path: `output/playwright/pivot-full-audit/shared-final/chart-${theme}.png` })
    const defaultTabColor = await selected.evaluate(element => getComputedStyle(element).color)
    await selected.locator('..').evaluate(element => (element as HTMLElement).style.setProperty('--rv-ui-accent', '#8040a0'))
    expect(await selected.evaluate(element => getComputedStyle(element).color)).not.toBe(defaultTabColor)
  })
}

test('shared pagination disables every direction for an empty ticket scope and recovers after reset', async ({ page }) => {
  await page.goto('/demo/pivot-operations')
  const scope = page.getByRole('region', { name: 'Ticket scope' })
  const team = scope.getByRole('combobox', { name: 'Team', exact: true })
  const priority = scope.getByRole('combobox', { name: 'Priority', exact: true })
  await expect(team).toBeVisible()
  await expect(priority).toBeVisible()
  await team.selectOption('Integrations')
  await priority.selectOption('Critical')
  const source = page.locator('.detail-panel')
  await expect(source.locator('.detail-page-info')).toHaveText('Showing 0–0 of 0')
  for (const name of ['First', 'Previous', 'Next', 'Last']) {
    await expect(source.getByRole('button', { name, exact: true })).toBeDisabled()
  }
  await scope.getByRole('button', { name: 'Reset scope', exact: true }).click()
  await expect(source.locator('.detail-page-info')).toHaveText('Showing 1–15 of 480')
  await expect(source.getByRole('button', { name: 'Next', exact: true })).toBeEnabled()
})
