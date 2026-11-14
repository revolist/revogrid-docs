import { expect, test } from '@playwright/test'

test('Pro products expand into external feature links on desktop and mobile', async ({ page }) => {
  test.setTimeout(90_000)
  await page.route('**/*', route =>
    new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort(),
  )
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 850 })
    await page.goto('/guide/', { waitUntil: 'domcontentloaded' })
    if (width < 960) await page.locator('button[aria-controls="VPSidebarNav"]').click()
    const sidebar = page.locator('.VPSidebar')
    await expect(sidebar.getByRole('heading', { name: 'RevoGrid Pro', exact: true })).toHaveCount(0)
    for (const name of [
      'Data Grid',
      'Gantt',
      'Kanban',
      'Scheduler',
      'Pivot',
      'Pivot Charts',
      'Charts',
    ]) {
      await expect(
        sidebar
          .locator('.VPSidebarItem.level-0 > .item > .text')
          .filter({ hasText: new RegExp(`^${name}(\\s+Pro)?$`) }),
      ).toBeVisible()
    }
    const grid = sidebar.locator('.VPSidebarItem.level-0').first()
    await expect(grid.getByText('Data Grid', { exact: true })).toBeVisible()
    await expect(grid.getByRole('link', { name: 'Quick Start', exact: true })).toBeVisible()
    for (const [name, local, remote] of [
      ['Rows', '/guide/row/height', 'https://pro.rv-grid.com/guides/rows/row-status/'],
      ['Columns', '/guide/column/resize', 'https://pro.rv-grid.com/guides/columns/column-hide/'],
      ['Cells', '/guide/cell/renderer', 'https://pro.rv-grid.com/guides/cells/cell-merge/'],
    ]) {
      await expect(grid.getByText(name, { exact: true })).toHaveCount(1)
      const section = grid
        .locator('.VPSidebarItem.level-1')
        .filter({ has: page.getByText(name, { exact: true }) })
      await section.locator(':scope > .item > .caret').click()
      await expect(section.locator(`a[href="${local}"]`)).toBeVisible()
      await expect(section.locator(`a[href="${local}"] .pro-sidebar-badge`)).toHaveCount(0)
      await expect(section.locator(`a[href="${remote}"] .pro-sidebar-badge`)).toHaveText('Pro')
      await expect(section.locator(`a[href="${remote}"]`)).toBeVisible()
      await expect(section.locator(`a[href="${remote}"]`)).toHaveAttribute('target', '_blank')
      await expect(section.locator(`a[href="${remote}"] .pro-sidebar-badge`)).toHaveCSS(
        'height',
        '14px',
      )
    }
    const gantt = sidebar
      .locator('.VPSidebarItem.level-0')
      .filter({ has: page.getByText('Gantt', { exact: true }) })
    await gantt.locator(':scope > .item').click()
    await expect(gantt.getByRole('link', { name: /^Overview/ })).toHaveCount(0)
    await expect(gantt.locator(':scope > .item .pro-sidebar-badge')).toHaveText('Pro')
    await expect(
      sidebar
        .locator('a[href^="https://pro.rv-grid.com"]')
        .filter({ hasText: /^Overview(?:\s|$)/ }),
    ).toHaveCount(0)
  }
})

test('free editor formats open separate pages with only their own format', async ({ page }) => {
  await page.route('**/*', route =>
    new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort(),
  )
  const formats = [
    ['string', 'String', 'No package or registration is required'],
    ['number', 'Number', '@revolist/revogrid-column-numeral'],
    ['select', 'Select Dropdown', 'syncCellTemplate'],
    ['date', 'Date', '@revolist/revogrid-column-date'],
  ] as const
  for (const [slug, title, content] of formats) {
    await page.goto(`/guide/editors/${slug}`, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.vp-doc h1')).toContainText(title)
    await expect(page.locator('.vp-doc')).toContainText(content)
    await expect(page.locator('.vp-doc')).not.toContainText('Available column formats')
    for (const [, other] of formats) {
      if (other !== title)
        await expect(
          page.locator('.vp-doc h1, .vp-doc h3').filter({ hasText: new RegExp(`^${other}$`) }),
        ).toHaveCount(0)
    }
    const link = page.locator(`.VPSidebar a[href="/guide/editors/${slug}"]`)
    await expect(link).toBeVisible()
    await expect(link.locator('.pro-sidebar-badge')).toHaveCount(0)
    const grid = page.locator('.format-example revo-grid')
    const cell = grid.getByRole('gridcell').first()
    await expect(cell).toBeVisible()
    await cell.dblclick()
    const expected = {
      string: 'Write release notes',
      number: 2500.75,
      select: 'Blocked',
      date: '2026-05-19',
    }[slug]
    if (slug === 'select') {
      await page.locator('.revo-dropdown-list').getByText('Blocked', { exact: true }).click()
    } else if (slug === 'date') {
      const input = page.locator('.duet-date__input')
      await input.fill('2026-05-19')
      await input.press('Tab')
    } else {
      const input = grid
        .locator('revogr-edit input, revogr-edit textarea')
        .filter({ visible: true })
        .first()
      await input.fill(String(expected))
      await input.press('Enter')
    }
    await expect
      .poll(() =>
        grid.evaluate(
          element =>
            (element as HTMLElement & { source: Array<{ value: string | number }> }).source[0]
              .value,
        ),
      )
      .toBe(expected)
  }
  await page.goto('/guide/column/types', { waitUntil: 'domcontentloaded' })
  for (const id of ['String', 'Number', 'Select-Dropdown', 'Date']) {
    await expect(page.locator(`.vp-doc h3[id="${id}"]`)).toBeVisible()
  }
})
