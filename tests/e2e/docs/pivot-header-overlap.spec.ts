import { expect, test } from '@playwright/test'

test('collapsed quarter header keeps its arrow, name and count usable', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')
  await expect(page.locator('.financial-pivot-showcase')).toBeVisible()

  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 720 })
    const quarterButton = page.getByRole('button', { name: 'Expand Q1' }).first()
    await expect(quarterButton).toBeVisible()

    const header = page.locator('revogr-header .rgHeaderCell').filter({
      has: quarterButton,
    }).first()
    await expect(header.locator('.collapse-btn')).toHaveCount(1)
    await expect(header.locator('.header-text')).toHaveText('Q1')
    await expect(header.locator('.column-collapse-group-hint')).toHaveText('(3)')

    const parts = await header.evaluate(cell => {
      const selectors = [
        '.collapse-btn',
        '.header-text',
        '.column-collapse-group-hint',
      ]
      return selectors.map(selector => {
        const element = cell.querySelector(selector)
        if (!element) throw new Error(`Missing header part ${selector}`)
        const { left, right } = element.getBoundingClientRect()
        return { left, right }
      })
    })
    for (let index = 1; index < parts.length; index += 1) {
      expect(parts[index].left - parts[index - 1].right).toBeGreaterThanOrEqual(4)
    }

    await quarterButton.scrollIntoViewIfNeeded()
    if (width === 390) await page.evaluate(() => window.scrollBy(0, 140))
    const arrowHit = await quarterButton.evaluate(button => {
      const box = button.getBoundingClientRect()
      const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2)
      return {
        reachesArrow: hit === button || button.contains(hit),
        hit: hit?.outerHTML.slice(0, 240),
        owner: hit?.closest('.rgHeaderCell')?.textContent?.trim().slice(0, 80),
      }
    })
    expect(arrowHit.reachesArrow, JSON.stringify(arrowHit)).toBe(true)
    await quarterButton.click()
    await expect(page.getByRole('button', { name: 'Collapse Q1' }).first()).toBeVisible()
    await expect(page.locator('revogr-header .rgHeaderCell').filter({ hasText: 'January' }).first()).toBeVisible()
    await page.getByRole('button', { name: 'Collapse Q1' }).first().click()
    await expect(quarterButton).toBeVisible()

  }
})
