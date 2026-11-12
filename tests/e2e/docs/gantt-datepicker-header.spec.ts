import { expect, test } from '@playwright/test'

test('Gantt datepicker keeps both date entries on the same header row', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1100 })
  await page.goto('/demo/gantt', { waitUntil: 'domcontentloaded' })
  const cell = page.getByText('Apr 24, 2026', { exact: true })
  await cell.dblclick()
  const popup = page.getByRole('dialog', { name: 'Edit task date' })
  const raw = popup.getByRole('textbox', { name: 'startDate', exact: true })
  const date = popup.getByRole('textbox', { name: 'Date', exact: true })
  await expect(raw).toBeVisible()
  await expect(date).toBeVisible()
  const first = (await raw.boundingBox())!
  const second = (await date.boundingBox())!
  expect(Math.abs(first.y - second.y)).toBeLessThanOrEqual(1)
  expect(second.x).toBeGreaterThanOrEqual(first.x + first.width)
  await expect(popup.getByRole('grid')).toBeVisible()
  await date.fill('2026-04-27')
  await popup.getByRole('button', { name: 'Apply', exact: true }).click()
  await expect(popup).toBeHidden()
  await expect(page.getByText('Apr 27, 2026', { exact: true })).toBeVisible()
})
