import { expect, test } from '@playwright/test'

for (const dark of [false, true]) {
  test(`Pivot chart disclosures keep package spacing in ${dark ? 'dark' : 'light'} demos`, async ({ page }, testInfo) => {
    await page.addInitScript(theme => localStorage.setItem('vitepress-theme-appearance', theme), dark ? 'dark' : 'light')
    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.goto('/demo/pivot')
    await expect(page.getByRole('row', { name: /Australia/ }).first()).toBeVisible()
    await page.getByRole('button', { name: 'Chart', exact: true }).click()
    const chart = page.locator('.financial-pivot-chart')
    await chart.getByRole('tab', { name: 'Customize', exact: true }).click()
    const appearance = chart.locator('summary').filter({ hasText: 'Chart appearance' })
    await expect(appearance).toBeVisible()
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 1000 })
      const summaries = chart.locator('summary.rv-configurator-summary')
      expect(await summaries.count()).toBeGreaterThan(5)
      for (const summary of await summaries.all()) {
        await expect(summary).toHaveCSS('margin-top', '0px')
        await expect(summary).toHaveCSS('margin-bottom', '0px')
      }
      const section = appearance.locator('..')
      await expect(section).not.toHaveAttribute('open', '')
      const height = (await section.boundingBox())!.height
      expect(height).toBeLessThanOrEqual(54)
      await appearance.click()
      await expect(section).toHaveAttribute('open', '')
      await appearance.click()
      await expect(section).not.toHaveAttribute('open', '')
      await page.screenshot({ path: testInfo.outputPath(`customize-${width}.png`) })
    }
  })
}
