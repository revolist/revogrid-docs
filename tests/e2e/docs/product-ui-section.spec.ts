import { expect, test } from '@playwright/test'

const pages = [
  ['/', '.rg-faq-list'],
  ['/pro/', '.final-cta'],
  ['/pivot/', '.commercial-faq'],
  ['/charts/', '.commercial-faq'],
  ['/gantt', '.commercial-faq'],
  ['/jsscheduler', '.commercial-faq'],
  ['/kanban', '.commercial-faq'],
  ['/excel-data-grid', '.commercial-faq'],
] as const

for (const [route, nextSection] of pages) {
  test(`Revo UI sits before FAQ or the final decision on ${route}`, async ({ page }) => {
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
    await expect(section.getByText('Open Source MIT License', { exact: true })).toBeVisible()
    await expect(
      section.getByRole('link', { name: 'Explore Revo UI', exact: true }),
    ).not.toHaveClass(/rg-btn-secondary/)
    await expect(section.locator('svg.revo-ui-github-icon')).toBeVisible()
    expect(
      await section.evaluate((element, selector) => {
        const next = element.nextElementSibling
        return !!next && (next.matches(selector) || !!next.querySelector(selector))
      }, nextSection),
    ).toBe(true)
  })
}

test('Revo UI finance workspace connects chart and bulk actions', async ({ page }, testInfo) => {
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.goto('/gantt')
  const section = page.locator('[data-ui-library]')
  await section.scrollIntoViewIfNeeded()
  const preview = section.locator('.revo-ui-preview')
  await expect(preview.locator('header')).toHaveCount(0)
  await expect(preview.getByRole('searchbox')).toHaveCount(0)
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
  await pay.click()
  await expect(preview.getByLabel('Outstanding', { exact: true })).toHaveText('$3,200')
  await expect(preview.getByText('Paid', { exact: true })).toHaveCount(2)
  await expect(
    preview.getByRole('checkbox', { name: 'Select INV-1051', exact: true }),
  ).toBeDisabled()
  await expect(pay).toBeDisabled()
  await expect(preview.locator('.invoice-result').getByRole('status')).toHaveText(
    'Invoices marked as paid in this example: 2.',
  )
  await expect(preview.getByRole('button', { name: 'Reset example', exact: true })).toHaveCount(0)
  const rowSpacing = await preview.locator('.invoice-list li').evaluateAll(rows =>
    rows.map(row => {
      const style = getComputedStyle(row)
      return {
        top: style.marginTop,
        bottom: style.marginBottom,
        left: style.paddingLeft,
        right: style.paddingRight,
      }
    }),
  )
  expect(rowSpacing).toEqual(
    Array(3).fill({ top: '0px', bottom: '0px', left: '12px', right: '12px' }),
  )
  await section.screenshot({ path: testInfo.outputPath('revo-ui-desktop.png') })
  await page.getByRole('switch', { name: 'Appearance', exact: true }).click()
  await section.screenshot({ path: testInfo.outputPath('revo-ui-dark.png') })
  await page.setViewportSize({ width: 390, height: 844 })
  await section.scrollIntoViewIfNeeded()
  await preview.getByRole('checkbox', { name: 'Select INV-1053', exact: true }).check()
  await pay.click()
  await expect(preview.getByLabel('Outstanding', { exact: true })).toHaveText('$0')
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    .toBe(true)
  await section.screenshot({ path: testInfo.outputPath('revo-ui-mobile.png') })
})
