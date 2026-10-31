import { expect, test } from '@playwright/test'

for (const dark of [false, true]) {
  test(`Financial Pivot uses standard package accents in ${dark ? 'dark' : 'light'} mode`, async ({ page }, testInfo) => {
    await page.addInitScript(theme => localStorage.setItem('vitepress-theme-appearance', theme), dark ? 'dark' : 'light')
    await page.goto('/demo/pivot-financial')
    const chart = page.getByRole('button', { name: 'Chart', exact: true })
    await expect(chart).toBeVisible()
    await chart.click()
    const card = page.locator('.rv-pivot-chart-dialog__gallery-card[aria-pressed="true"]').first()
    await expect(card).toBeVisible()
    const accent = 'rgb(8, 126, 102)'
    await expect(card).toHaveCSS('border-top-color', accent)
    await expect(chart).toHaveCSS('background-color', accent)
    await page.screenshot({ path: testInfo.outputPath('standard-pivot-colors.png') })
    // Keep the public package accent customization working.
    await card.evaluate(element => {
      (element.closest('.rv-pivot-chart-ui-host') as HTMLElement).style.setProperty('--rv-ui-accent', '#8040a0')
    })
    await expect(card).toHaveCSS('border-top-color', 'rgb(128, 64, 160)')
  })
}
