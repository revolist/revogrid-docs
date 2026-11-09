import { expect, test } from '@playwright/test'

const pages = [
  ['/', '.rg-final-cta'],
  ['/pro/', '.final-cta'],
  ['/pivot/', '.pro-cta'],
  ['/charts/', '.pro-cta'],
  ['/gantt', '.pro-cta'],
  ['/jsscheduler', '.pro-cta'],
  ['/kanban', '.pro-cta'],
  ['/excel-data-grid', '.excel-final-cta'],
] as const

for (const [route, finalCta] of pages) {
  test(`Revo UI sits before the final product decision on ${route}`, async ({ page }) => {
    await page.goto(route)
    const section = page.locator('[data-ui-library]')
    await expect(section).toHaveCount(1)
    await section.scrollIntoViewIfNeeded()
    await expect(section.getByRole('heading', { level: 2 })).toHaveText(
      'Build the interface around your data.',
    )
    await expect(
      section.getByRole('link', { name: 'Explore Revo UI', exact: true }),
    ).toHaveAttribute('href', 'https://ui.rv-grid.com/')
    await expect(
      section.getByRole('link', { name: 'View on GitHub', exact: true }),
    ).toHaveAttribute('href', 'https://github.com/revolist/revo-ui')
    await expect(section.getByText('Free · MIT licensed', { exact: true })).toBeVisible()
    expect(
      await section.evaluate((element, selector) => {
        const next = element.nextElementSibling
        return !!next && (next.matches(selector) || !!next.querySelector(selector))
      }, finalCta),
    ).toBe(true)
  })
}

test('Revo UI finance workspace connects chart, search and bulk actions', async ({
  page,
}, testInfo) => {
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.goto('/gantt')
  const section = page.locator('[data-ui-library]')
  await section.scrollIntoViewIfNeeded()
  const preview = section.locator('.revo-ui-preview')
  await expect(preview.getByRole('heading', { name: 'Finance workspace' })).toBeVisible()
  await expect(preview.locator('.revenue-total')).toHaveText('$228,790')
  await preview.getByRole('radio', { name: '6 months', exact: true }).focus()
  await page.keyboard.press('ArrowLeft')
  await expect(preview.getByRole('radio', { name: '3 months', exact: true })).toBeChecked()
  await expect(preview.locator('.revenue-total')).toHaveText('$128,190')
  await preview.getByRole('radio', { name: '6 months', exact: true }).click()
  await expect(preview.locator('.revenue-total')).toHaveText('$228,790')
  await expect(preview.locator('.rv-distribution-chart svg').first()).toBeVisible()
  const pay = preview.getByRole('button', { name: 'Mark as paid', exact: true })
  await expect(pay).toBeDisabled()
  await preview.getByRole('checkbox', { name: 'Select INV-1051', exact: true }).check()
  await preview.getByRole('checkbox', { name: 'Select INV-1052', exact: true }).check()
  await expect(preview.locator('.invoice-selection')).toHaveText('2 selected · $4,250')
  const search = preview.getByRole('searchbox', { name: 'Search client or invoice', exact: true })
  await search.fill('Forma')
  await expect(preview.locator('.invoice-list li')).toHaveCount(1)
  await pay.click()
  await expect(preview.getByLabel('Outstanding', { exact: true })).toHaveText('$3,200')
  await search.clear()
  await expect(preview.getByText('Paid', { exact: true })).toHaveCount(2)
  await expect(
    preview.getByRole('checkbox', { name: 'Select INV-1051', exact: true }),
  ).toBeDisabled()
  await expect(pay).toBeDisabled()
  await search.fill('No matching client')
  await expect(preview.getByRole('status')).toContainText([
    'No matching invoices.',
    'Invoices marked as paid in this example: 2.',
  ])
  await preview.getByRole('button', { name: 'Reset example', exact: true }).click()
  await expect(search).toHaveValue('')
  await expect(preview.getByLabel('Outstanding', { exact: true })).toHaveText('$7,450')
  await expect(preview.locator('.invoice-list li')).toHaveCount(3)
  await section.screenshot({ path: testInfo.outputPath('revo-ui-desktop.png') })
  await page.getByRole('switch', { name: 'Appearance', exact: true }).click()
  await section.screenshot({ path: testInfo.outputPath('revo-ui-dark.png') })
  await page.setViewportSize({ width: 390, height: 844 })
  await section.scrollIntoViewIfNeeded()
  await preview.getByRole('checkbox', { name: 'Select INV-1053', exact: true }).check()
  await pay.click()
  await expect(preview.getByLabel('Outstanding', { exact: true })).toHaveText('$4,250')
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    .toBe(true)
  await section.screenshot({ path: testInfo.outputPath('revo-ui-mobile.png') })
})
