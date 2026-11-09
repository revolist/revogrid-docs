import { expect, test } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

async function expectNeutral(locator: import('@playwright/test').Locator, property = 'backgroundColor') {
  const colors = await locator.evaluateAll((elements, key) => elements.map(element => getComputedStyle(element)[key as 'backgroundColor']), property)
  expect(colors.length).toBeGreaterThan(0)
  for (const color of colors) {
    const channels = color.match(/[\d.]+/g)!.slice(0, 3).map(Number)
    expect(Math.max(...channels) - Math.min(...channels), color).toBeLessThanOrEqual(6)
  }
}

for (const dark of [false, true]) for (const width of [1440, 390]) {
  test(`neutral Pivot UI ${dark ? 'dark' : 'light'} at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.addInitScript(theme => localStorage.setItem('vitepress-theme-appearance', theme), dark ? 'dark' : 'light')
    await mkdir('output/playwright/pivot-neutral', { recursive: true })
    for (const route of ['pivot-charts', 'pivot-operations']) {
      await page.goto(`/demo/${route}`)
      await expect(page.locator('revo-grid').filter({ visible: true }).first().locator('revogr-data .rgCell').first()).toBeVisible()
      const surfaces = route === 'pivot-charts'
        ? '.dashboard-card,.dashboard-controls select,.dashboard-controls button'
        : '.operations-demo .controls,.operations-demo .controls select,.operations-demo .controls button'
      await expectNeutral(page.locator(surfaces))
      if (route === 'pivot-charts') {
        await expect(page.locator('svg.rv-pivot-chart').first()).toBeAttached()
        await expectNeutral(page.locator('svg.rv-pivot-chart'))
        await page.locator('.pivot-dashboard').evaluate(element => element.scrollTop = element.scrollHeight)
      }
      await page.screenshot({ path: `output/playwright/pivot-neutral/${route}-${width}-${dark ? 'dark' : 'light'}.png`, fullPage: true })
    }
    await page.goto('/demo/pivot')
    const rows = page.locator('revo-grid').first().locator('revogr-header .rgHeaderCell').filter({ hasText: 'Rows' }).first()
    await rows.locator('.rv-filter:not(.filter-header-selection-trigger)').first().click()
    await page.getByRole('button', { name: 'Category', exact: true }).click()
    const dialog = page.locator('.rv-value-selection-dialog')
    await expect(dialog).toBeVisible()
    await expectNeutral(page.locator('.rv-dialog-overlay'))
    await expectNeutral(dialog.locator('.rv-form-description'), 'color')
    await expect(dialog.locator('.rv-value-selection-editor__option').first()).toBeVisible()
    await expectNeutral(dialog.locator('.rv-value-selection-editor__option.is-selected'))
    const accent = await dialog.locator('input[type=checkbox]').first().evaluate(element => getComputedStyle(element).accentColor)
    const channels = accent.match(/[\d.]+/g)!.map(Number)
    expect(channels[1], `package green accent: ${accent}`).toBeGreaterThan(channels[0])
    expect(channels[1], `package green accent: ${accent}`).toBeGreaterThan(channels[2])
    const apply = dialog.getByRole('button', { name: 'Apply', exact: true })
    const contrast = await apply.evaluate(button => {
      const luminance = (color: string) => color.match(/[\d.]+/g)!.slice(0, 3).map(Number).map(channel => {
        const value = channel / 255
        return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4
      }).reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0)
      const style = getComputedStyle(button)
      const values = [luminance(style.color), luminance(style.backgroundColor)].sort((a, b) => a - b)
      return (values[1] + .05) / (values[0] + .05)
    })
    expect(contrast).toBeGreaterThanOrEqual(4.5)
    await page.screenshot({ path: `output/playwright/pivot-neutral/filter-${width}-${dark ? 'dark' : 'light'}.png` })
    // Keep the public accent override working after changing the package defaults.
    await dialog.evaluate(element => (element as HTMLElement).style.setProperty('--rv-ui-accent', '#8040a0'))
    await expect(apply).toHaveCSS('background-color', 'rgb(128, 64, 160)')
    await dialog.getByRole('button', { name: 'Cancel', exact: true }).click()
    await expect(dialog).toHaveCount(0)
  })
}
