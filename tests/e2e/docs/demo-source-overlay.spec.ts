import { expect, test } from '@playwright/test'

test('mobile source panel covers the scheduler grid and its overlays', async ({ page }) => {
  await page.setViewportSize({ width: 495, height: 1000 })
  await page.goto('/demo/scheduler-basic')
  await expect(page.locator('revo-grid').first()).toBeVisible()
  await page.getByRole('button', { name: 'Code', exact: true }).click()
  const source = page.getByRole('dialog', { name: 'Example source code' })
  await expect(source).toBeVisible()
  await expect(source.locator('pre')).toBeVisible()
  const uncovered = await source.evaluate(panel => {
    const box = panel.getBoundingClientRect()
    const leaks: string[] = []
    for (let y = box.top + 10; y < Math.min(box.bottom, innerHeight); y += 20) {
      for (let x = box.left + 2; x < box.right - 2; x += 2) {
        const top = document.elementFromPoint(x, y)
        if (top?.closest('.demo-page-workspace')) leaks.push(top.tagName + '.' + top.className)
      }
    }
    return [...new Set(leaks)]
  })
  expect(uncovered).toEqual([])
  await page.screenshot({ path: '/tmp/mobile-source-overlay.png' })
})

for (const nativeFullscreen of [true, false]) {
  test(`mobile Code opens fullscreen with native support=${nativeFullscreen}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    if (!nativeFullscreen) {
      await page.addInitScript(() => {
        HTMLElement.prototype.requestFullscreen = () => Promise.reject(new Error('Fullscreen unavailable'))
      })
    }
    await page.goto('/demo/calendar')
    await page.getByRole('button', { name: 'Code', exact: true }).click()
    const source = page.getByRole('dialog', { name: 'Example source code' })
    await expect(source).toHaveClass(/demo-source--mobile-fullscreen/)
    await expect.poll(() => source.evaluate(el => {
      const box = el.getBoundingClientRect()
      return Math.abs(box.x) + Math.abs(box.y) + Math.abs(box.width - innerWidth) + Math.abs(box.height - innerHeight)
    })).toBeLessThan(2)
    if (nativeFullscreen) {
      await expect.poll(() => page.evaluate(() => document.fullscreenElement?.classList.contains('demo-source'))).toBe(true)
    }
    await source.getByRole('button', { name: 'Back to demo', exact: true }).click()
    await expect(source).toHaveCount(0)
    await expect(page.getByRole('heading', { name: 'Calendar Demo', exact: true })).toBeVisible()
  })
}

test('desktop Code keeps the embedded panel', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/demo/calendar')
  await page.getByRole('button', { name: 'Code', exact: true }).click()
  const source = page.getByRole('dialog', { name: 'Example source code' })
  await expect(source).toBeVisible()
  await expect(source).not.toHaveClass(/demo-source--mobile-fullscreen/)
  expect(await page.evaluate(() => document.fullscreenElement)).toBeNull()
})
