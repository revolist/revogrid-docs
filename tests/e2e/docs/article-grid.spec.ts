import { expect, test } from '@playwright/test'

test('the data grid article gives readers an editable Core task queue', async ({ page }) => {
  await page.goto('/blog/datagrid')

  const frame = page.frameLocator('iframe[title="Interactive project task grid"]')
  await expect(frame.getByRole('treegrid')).toBeVisible()
  await expect(frame.getByText('Review onboarding flow', { exact: true })).toBeVisible()
  await expect(frame.getByText('Prepare release notes', { exact: true })).toBeVisible()

  const task = frame.getByRole('gridcell', { name: 'Review onboarding flow', exact: true })
  await task.dblclick()
  const editor = frame.getByRole('textbox')
  await editor.fill('Review welcome flow')
  await editor.press('Enter')
  await expect(
    frame.getByRole('gridcell', { name: 'Review welcome flow', exact: true }),
  ).toBeVisible()

  await frame.getByRole('columnheader', { name: /Due/i }).click()
  await expect(frame.getByRole('gridcell', { name: '2026-09-24', exact: true })).toBeVisible()
  await expect(frame.getByRole('columnheader', { name: /Status/i })).toBeVisible()
})
