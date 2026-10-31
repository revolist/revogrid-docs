import { expect, test } from '@playwright/test'

for (const theme of ['light', 'dark']) {
  test(`authored segment and datum examples (${theme})`, async ({ page }, info) => {
    await page.addInitScript(
      theme => localStorage.setItem('vitepress-theme-appearance', theme),
      theme,
    )
    await page.goto('/charts/')
    const examples = page.locator('.datum-styling-examples')
    await examples.scrollIntoViewIfNeeded()
    await expect(examples.locator('.live-chart[data-status="ready"]')).toHaveCount(2)
    const line = examples.locator('article').nth(0)
    const bars = examples.locator('article').nth(1)
    await expect(line.locator('use[data-chart-segment-from]')).toHaveCount(2)
    await expect(line.locator('use[stroke-dasharray="6 4"]')).toHaveCount(1)
    await expect(bars.locator('pattern')).toHaveCount(1)
    const march = bars.locator('[data-category-index="2"][data-series-index="0"]')
    const rawLabel = await march.getAttribute('aria-label')
    const height = await march.getAttribute('height')
    expect(rawLabel).toContain('50')
    await examples.getByRole('checkbox', { name: 'Show authored styles' }).uncheck()
    await expect(examples.locator('.live-chart[data-status="ready"]')).toHaveCount(2)
    await expect(line.locator('use[data-chart-segment-from]')).toHaveCount(0)
    await expect(bars.locator('pattern')).toHaveCount(0)
    await expect(march).toHaveAttribute('aria-label', rawLabel!)
    await expect(march).toHaveAttribute('data-chart-stack-end', '50')
    expect(Number(await march.getAttribute('height'))).toBeCloseTo(Number(height), 1)
    await examples.getByRole('checkbox', { name: 'Show authored styles' }).check()
    await expect(line.locator('use[data-chart-segment-from]')).toHaveCount(2)
    await examples.screenshot({ path: info.outputPath('desktop.png') })
    await page.setViewportSize({ width: 390, height: 844 })
    await expect(examples.locator('svg.rv-pivot-chart')).toHaveCount(2)
    expect(await examples.evaluate(node => node.scrollWidth <= node.clientWidth)).toBe(true)
    await examples.getByRole('checkbox', { name: 'Show authored styles' }).uncheck()
    await expect(line.locator('use[data-chart-segment-from]')).toHaveCount(0)
    await examples.getByRole('checkbox', { name: 'Show authored styles' }).check()
    await expect(line.locator('use[data-chart-segment-from]')).toHaveCount(2)
    await examples.screenshot({ path: info.outputPath('mobile.png') })
  })
}
