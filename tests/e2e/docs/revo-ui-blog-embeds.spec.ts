import { expect, test } from '@playwright/test'

test('Revo UI blog examples load and respond inside their articles', async ({ page }) => {
  await page.goto('/blog/revo-ui-components')
  await page.locator('iframe[title="Interactive Revo UI weekly planner"]').scrollIntoViewIfNeeded()
  const finder = page.frameLocator('iframe[title="Interactive Revo UI weekly planner"]')
  await expect(finder.getByLabel('Planned focus hours')).toHaveText('14h / 40h')
  await finder.getByRole('gridcell', { name: 'Monday 08:00–10:00, selected' }).click()
  await expect(finder.getByLabel('Planned focus hours')).toHaveText('12h / 40h')
  await expect(
    page.getByRole('link', { name: 'Open the weekly planner in its own tab' }),
  ).toHaveAttribute('href', '/blog-examples/revo-ui-invoices/index.html?example=quick-start')
  const finderPopupPromise = page.waitForEvent('popup')
  await page.getByRole('link', { name: 'Open the weekly planner in its own tab' }).click()
  const finderPopup = await finderPopupPromise
  await expect(
    finderPopup.getByRole('heading', { name: 'A little structure. A better week.' }),
  ).toBeVisible()
  await finderPopup.close()

  await page.goto('/blog/react-invoice-dashboard')
  await page
    .locator('iframe[title="Interactive React invoice dashboard with Revo UI and RevoGrid"]')
    .scrollIntoViewIfNeeded()
  const dashboard = page.frameLocator(
    'iframe[title="Interactive React invoice dashboard with Revo UI and RevoGrid"]',
  )
  await dashboard.getByRole('textbox', { name: 'Search invoices' }).fill('Acme')
  await expect(dashboard.getByRole('status')).toContainText('$3,600')
  await dashboard.getByRole('radio', { name: 'Pending' }).click()
  await expect(dashboard.getByRole('status')).toContainText('$2,400')
  await dashboard.getByRole('radio', { name: 'Pending' }).press('ArrowRight')
  await expect(dashboard.getByRole('status')).toContainText('$1,200')
  await expect(
    page.getByRole('link', { name: 'Open the dashboard in its own tab' }),
  ).toHaveAttribute('href', '/blog-examples/revo-ui-invoices/index.html')
  const dashboardPopupPromise = page.waitForEvent('popup')
  await page.getByRole('link', { name: 'Open the dashboard in its own tab' }).click()
  const dashboardPopup = await dashboardPopupPromise
  await expect(dashboardPopup.getByRole('heading', { name: 'Invoice overview' })).toBeVisible()
})
