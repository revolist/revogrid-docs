import { expect, test } from '@playwright/test'

test.setTimeout(120_000)

for (const theme of ['light', 'dark']) {
  test(`Gantt keeps scrollbar appearance and a complete track after Core-first navigation in ${theme}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.addInitScript(
      value => localStorage.setItem('vitepress-theme-appearance', value),
      theme,
    )
    const grid = page.locator('.gantt-showcase-grid')
    const bar = grid.locator('revogr-scroll-virtual.vertical')
    const ready = async () => {
      await expect(grid.getByRole('button', { name: 'Backend Setup', exact: true })).toBeVisible()
      await bar.hover()
    }
    const appearance = () =>
      bar.evaluate(el => {
        const style = getComputedStyle(el)
        const native = getComputedStyle(el, '::-webkit-scrollbar')
        const thumb = getComputedStyle(el, '::-webkit-scrollbar-thumb')
        return {
          width: native.width,
          height: native.height,
          background: thumb.backgroundColor,
          radius: thumb.borderRadius,
          border: thumb.borderWidth,
          scrollbar: style.scrollbarWidth,
          gutter: el.offsetWidth - el.clientWidth,
        }
      })
    await page.goto('/demo/gantt', { waitUntil: 'domcontentloaded' })
    await ready()
    const direct = await appearance()
    // A full load of Core first gives its custom elements/style injection the same
    // lifecycle order as entering Gantt from a regular grid in a fresh session.
    await page.goto('/demo/grid-at-scale', { waitUntil: 'domcontentloaded' })
    await expect(
      page.locator('revo-grid').first().locator('revogr-scroll-virtual.vertical'),
    ).toBeVisible()
    await page.getByRole('button', { name: 'Gantt', exact: true }).click()
    await page.getByRole('link', { name: 'Gantt chart Advanced', exact: true }).click()
    await ready()
    expect(await appearance()).toEqual(direct)
    await bar.evaluate(el => {
      el.scrollTop = el.scrollHeight
    })
    await expect.poll(() => bar.evaluate(el => el.scrollTop)).toBeGreaterThan(0)
    await grid.locator('.rv-panel-horizontal-scroll--panel').hover()
    // Wait for the resize observer when the platform changes the active hit area.
    await expect
      .poll(() =>
        grid.evaluate(el => {
          const vertical = el
            .querySelector('revogr-scroll-virtual.vertical')!
            .getBoundingClientRect()
          const horizontal = el
            .querySelector('.rv-panel-horizontal-scroll--panel')!
            .getBoundingClientRect()
          return Math.abs(vertical.bottom - horizontal.top)
        }),
      )
      .toBeLessThanOrEqual(1)
    const track = (await bar.boundingBox())!
    const point = { x: track.x + track.width / 2, y: track.y + track.height - 2 }
    expect(
      await bar.evaluate((el, p) => el.contains(document.elementFromPoint(p.x, p.y)), point),
    ).toBe(true)
    await page.screenshot({ path: test.info().outputPath(`gantt-navigation-${theme}.png`) })
    await page.reload({ waitUntil: 'domcontentloaded' })
    await ready()
    expect(await appearance()).toEqual(direct)
  })
}
