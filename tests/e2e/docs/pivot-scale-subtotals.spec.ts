import { expect, test } from '@playwright/test'
import { generateScaleRows } from '../../../revogrid-demos/pro-advanced-pivot/examples/scale/src/data'

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

// Sum raw transactions in integer cents, independently of Pivot's aggregation/export model.
function expectedGroups(count: number, field: 'region' | 'category') {
  const groups = new Map<string, { years: Map<number, number>, total: number }>()
  for (const transaction of generateScaleRows(count)) {
    const name = transaction[field]
    const group = groups.get(name) ?? { years: new Map<number, number>(), total: 0 }
    const cents = Math.round(transaction.sales * 100)
    group.years.set(transaction.year, (group.years.get(transaction.year) ?? 0) + cents)
    group.total += cents
    groups.set(name, group)
  }
  return groups
}

for (const theme of ['light', 'dark']) {
  test(`Scale shows collapsed group subtotals in ${theme}`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 })
    await page.goto('/demo/pivot-scale')
    const demo = page.locator('.scale-client-demo')
    const grid = demo.locator('.scale-grid')
    async function checkGroups(count: number, field: 'region' | 'category') {
      for (const [name, expected] of expectedGroups(count, field)) {
        const row = grid.getByRole('row').filter({ hasText: name }).first()
        await expect(row).toBeVisible()
        for (const cents of [...expected.years.values(), expected.total]) {
          await expect(row).toContainText(money.format(cents / 100))
        }
      }
    }
    await expect(demo.locator('#status')).toHaveText('10,000 rows ready')
    // Set the preference after hydration so VitePress does not restore its stored mode over it.
    await page.evaluate(theme => {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      document.documentElement.classList.toggle('light', theme === 'light')
      document.documentElement.dataset.theme = theme
    }, theme)
    await expect(demo).toHaveClass(theme === 'dark' ? /is-dark/ : /^(?!.*is-dark)/)
    await checkGroups(10_000, 'region')
    await page.screenshot({ path: `output/playwright/pivot-full-audit/scale/fixed-subtotals-10k-${theme}.png`, fullPage: true })
    await demo.getByRole('button', { name: 'Switch row hierarchy' }).click()
    await expect(demo.locator('#status')).toContainText('Rows: category')
    await checkGroups(10_000, 'category')
    await demo.getByRole('tab', { name: '100K rows', exact: true }).click()
    await expect(demo.locator('#status')).toHaveText('100,000 rows ready', { timeout: 60_000 })
    await checkGroups(100_000, 'region')
    await page.screenshot({ path: `output/playwright/pivot-full-audit/scale/fixed-subtotals-100k-${theme}.png`, fullPage: true })
  })
}
