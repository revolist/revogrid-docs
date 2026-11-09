import { expect, test } from '@playwright/test'

test('hero native views share grid edits and guided filtering', async ({ page }) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  const panel = hero.getByRole('tabpanel')
  await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName(
    'JavaScript Data Grid for complex web apps',
  )
  await expect(hero.locator('.live-chart')).toHaveAttribute('data-status', 'ready')
  await expect(panel.getByRole('gridcell', { name: 'Commerce API', exact: true })).toBeVisible()
  await panel.getByRole('gridcell', { name: '$180,000', exact: true }).dblclick()
  await panel.locator('revogr-edit').getByRole('textbox').fill('200000')
  await panel.locator('revogr-edit').getByRole('textbox').press('Enter')
  await expect(
    panel.getByRole('button', { name: 'Commerce API, Budget: 200,000', exact: true }),
  ).toBeVisible()

  for (const name of ['Gantt', 'Scheduler', 'Kanban']) {
    await hero.getByRole('tab', { name, exact: true }).click()
    await expect(
      panel
        .locator(`[data-hero-view="${name.toLowerCase()}"]`)
        .getByText('Commerce API', { exact: true })
        .first(),
    ).toBeVisible()
  }
  await hero.getByRole('tab', { name: 'Pivot', exact: true }).click()
  await expect(panel.getByRole('gridcell', { name: '$890,000', exact: true })).toBeVisible()
  await hero.getByRole('button', { name: 'Show projects over $100k', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('4 / 6 projects')
  await expect(
    panel
      .getByRole('row', { name: /^Visible portfolio \$710,000/ })
      .getByRole('gridcell', { name: '$710,000', exact: true }),
  ).toBeVisible()
  await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
  await expect(panel.getByRole('textbox', { name: 'Filter Budget', exact: true })).toHaveValue(
    '100000',
  )
  await expect(panel.getByRole('gridcell', { name: 'Design', exact: true })).toHaveCount(0)
  await hero.getByRole('button', { name: 'Show all projects', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('6 / 6 projects')
  await expect(panel.getByRole('textbox', { name: 'Filter Budget', exact: true })).toHaveValue('')
})

test('hero tabs support arrow keys and keep their panel relationship', async ({ page }) => {
  await page.goto('/')
  const tabs = page.getByRole('tablist', { name: 'Explore data views' })
  await tabs.getByRole('tab', { name: 'Data grid', exact: true }).focus()
  await page.keyboard.press('ArrowRight')
  const gantt = tabs.getByRole('tab', { name: 'Gantt', exact: true })
  await expect(gantt).toBeFocused()
  await expect(gantt).toHaveAttribute('aria-selected', 'true')
  await expect(gantt).toHaveAttribute('aria-controls', 'hero-panel-gantt')
  await page.keyboard.press('End')
  await expect(tabs.getByRole('tab', { name: 'Charts', exact: true })).toBeFocused()
  await expect(page.locator('#hero-panel-charts')).toBeVisible()
})

test('mobile hero contains its native views and preserves the chart', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await expect(hero.locator('.live-chart')).toHaveAttribute('data-status', 'ready')
  await expect(
    hero.getByRole('tabpanel').getByRole('gridcell', { name: 'Commerce API', exact: true }),
  ).toBeVisible()
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    .toBe(true)
  await hero.getByRole('tab', { name: 'Kanban', exact: true }).click()
  await expect(hero.getByRole('tabpanel').getByText('Design', { exact: true })).toBeVisible()
})

test('workspace header filters update the chart, count, and survive tab changes', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  const filter = hero.getByRole('textbox', { name: 'Filter Project', exact: true })
  await filter.fill('Mobile')
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('1 / 6 projects')
  await hero.getByRole('tab', { name: 'Gantt', exact: true }).click()
  await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
  await expect(filter).toHaveValue('Mobile')
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('1 / 6 projects')
  await filter.fill('No matching project')
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('0 / 6 projects')
  await expect(hero.locator('.live-chart')).toHaveAttribute('data-status', 'ready')
  await filter.fill('')
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('6 / 6 projects')
})

test('workspace editors use photos, right-aligned currency and shared status/progress', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  const row = hero.getByRole('tabpanel').getByRole('row', { name: /^Commerce API/ })
  await expect(row.locator('img')).toHaveAttribute('alt', 'Alex Nguyen')
  await expect(row.getByRole('slider', { name: 'Progress', exact: true })).toHaveCSS(
    '--slider-thumb-size',
    '14px',
  )
  await expect(hero.getByRole('columnheader', { name: /^Progress/ })).toHaveCSS('width', '190px')
  await expect(row.getByRole('gridcell', { name: '$180,000', exact: true })).toHaveCSS(
    'text-align',
    'right',
  )
  await expect(hero.getByRole('link', { name: 'Open demo', exact: true })).toHaveCount(0)
  await row.getByRole('combobox').nth(1).click()
  await page.getByRole('option', { name: 'Blocked', exact: true }).click()
  await row.getByRole('slider', { name: 'Progress', exact: true }).focus()
  await page.keyboard.press('End')
  await expect(row.getByRole('slider', { name: 'Progress', exact: true })).toHaveValue('100')
  await hero.getByRole('tab', { name: 'Kanban', exact: true }).click()
  const blocked = hero.getByRole('group', { name: 'Blocked, Cards', exact: true }).first()
  await expect(blocked.getByText('Commerce API', { exact: true })).toBeVisible()
  await expect(blocked.getByRole('progressbar', { name: 'Progress', exact: true })).toHaveAttribute(
    'aria-valuenow',
    '100',
  )
})

test('Gantt task pane is compact and Pivot row labels remain readable', async ({ page }) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('tab', { name: 'Gantt', exact: true }).click()
  const gantt = hero.getByRole('tabpanel', { name: 'Gantt', exact: true })
  await expect(
    gantt.getByRole('gridcell', { name: 'Commerce API', exact: true }).first(),
  ).toBeVisible()
  await expect
    .poll(() =>
      gantt
        .getByRole('columnheader', { name: 'Project', exact: true })
        .evaluate(el => Math.round(el.getBoundingClientRect().width)),
    )
    .toBe(220)
  await hero.getByRole('tab', { name: 'Pivot', exact: true }).click()
  const pivot = hero.getByRole('tabpanel', { name: 'Pivot', exact: true })
  await expect
    .poll(() =>
      pivot
        .getByRole('columnheader', { name: 'Rows', exact: true })
        .evaluate(el => el.getBoundingClientRect().width),
    )
    .toBeGreaterThanOrEqual(260)
  await expect(pivot.getByText('In progress', { exact: true })).toBeVisible()
  await expect(pivot.getByText('Visible portfolio', { exact: true })).toBeVisible()
})

test('Kanban stretches expanded columns equally across the board', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 })
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('tab', { name: 'Kanban', exact: true }).click()
  const panel = hero.getByRole('tabpanel', { name: 'Kanban', exact: true })
  await expect(panel.getByRole('columnheader')).toHaveCount(4)
  await expect
    .poll(async () => {
      return panel.getByRole('columnheader').evaluateAll(headers => {
        const widths = headers.map(header => header.getBoundingClientRect().width)
        const board = headers[0].closest('revo-grid')!.clientWidth
        return (
          Math.max(...widths) - Math.min(...widths) <= 1 &&
          widths.reduce((sum, width) => sum + width, 0) >= board - 20
        )
      })
    })
    .toBe(true)
})

test('unrelated edits leave the budget chart untouched and a budget edit changes only its bar', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  const chart = hero.locator('.hero-budget-chart')
  await expect(chart.locator('.live-chart')).toHaveAttribute('data-status', 'ready')
  const svg = chart.locator('svg')
  const identity = await svg.getAttribute('aria-describedby')
  const bars = chart.locator('rect[role="button"]')
  await expect(bars).toHaveCount(6)
  const before = await bars.evaluateAll(elements =>
    elements.map(el => Number(el.getAttribute('width'))),
  )
  const progress = hero.getByRole('slider', { name: 'Progress', exact: true }).first()
  await progress.focus()
  await page.keyboard.press('ArrowRight')
  await expect(progress).toHaveValue('65')
  await expect(svg).toHaveAttribute('aria-describedby', identity!)
  await hero.getByRole('gridcell', { name: '$180,000', exact: true }).dblclick()
  const editor = hero.locator('revogr-edit').getByRole('textbox')
  await editor.fill('200000')
  await editor.press('Enter')
  await expect
    .poll(async () => {
      const after = await bars.evaluateAll(elements =>
        elements.map(el => Number(el.getAttribute('width'))),
      )
      return (
        after[0] > before[0] &&
        after.slice(1).every((width, index) => Math.abs(width - before[index + 1]) < 0.01)
      )
    })
    .toBe(true)
})

test('empty demo filters explain recovery without discarding edits', async ({ page }) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero
    .getByRole('textbox', { name: 'Filter Project', exact: true })
    .fill('No matching project')
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('0 / 6 projects')
  await hero.getByRole('button', { name: 'Clear filters', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('6 / 6 projects')
  await expect(hero.getByRole('textbox', { name: 'Filter Project', exact: true })).toHaveValue('')
})

test('all six product tabs are visible on mobile without horizontal tab scrolling', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const tabs = page.locator('.rg-hero').getByRole('tab')
  await expect(tabs).toHaveCount(6)
  const bounds = await tabs.evaluateAll(elements =>
    elements.map(el => {
      const rect = el.getBoundingClientRect()
      return { left: rect.left, right: rect.right, height: rect.height }
    }),
  )
  expect(bounds.every(rect => rect.left >= 0 && rect.right <= 390 && rect.height >= 44)).toBe(true)
})

test('all product views use the native grid filter result and clear it together', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  const count = hero.locator('.hero-demo-footer').getByRole('status')
  await hero.getByRole('textbox', { name: 'Filter Project', exact: true }).fill('Mobile')
  await expect(count).toHaveText('1 / 6 projects')
  for (const name of ['Pivot', 'Gantt', 'Scheduler', 'Kanban', 'Charts', 'Data grid']) {
    await hero.getByRole('tab', { name, exact: true }).click()
    await expect(count).toHaveText('1 / 6 projects')
    if (name === 'Pivot') {
      await expect(
        hero.getByRole('tabpanel').getByRole('gridcell', { name: '$120,000', exact: true }),
      ).toBeVisible()
      await expect(
        hero.getByRole('tabpanel').getByRole('columnheader', { name: 'Avg progress', exact: true }),
      ).toBeVisible()
    }
    if (name === 'Charts') {
      await expect(
        hero.locator(
          '[data-hero-view="charts"] [data-chart-type="groupedColumn"] rect[role="button"]',
        ),
      ).toHaveCount(1)
      await expect(hero.locator('[data-hero-view="charts"]').getByRole('treegrid')).toHaveCount(0)
    }
  }
  await hero.getByRole('button', { name: 'Clear filters', exact: true }).click()
  await expect(count).toHaveText('6 / 6 projects')
})

test('each product has a distinct proof and commercial next step', async ({ page }) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await expect(
    hero.getByRole('link', { name: 'Start with free core', exact: true }),
  ).toHaveAttribute('href', '/guide/')
  await expect(
    hero.getByRole('link', { name: '60fps, 3x less memory.', exact: true }),
  ).toHaveAttribute('href', '/benchmarks')
  await hero.getByRole('tab', { name: 'Gantt', exact: true }).click()
  await expect(hero.locator('.gantt-dependency-layer__svg')).toBeVisible()
  await expect(
    hero.getByRole('tabpanel').getByRole('columnheader').filter({ hasText: 'Mon, Nov 23, 2026' }),
  ).toHaveCount(1)
  await expect(
    hero.getByRole('link', { name: 'Try Pro in your app', exact: true }),
  ).toHaveAttribute('href', '/trial')
  await hero.getByRole('tab', { name: 'Scheduler', exact: true }).click()
  await expect(
    hero
      .getByRole('tabpanel')
      .getByRole('button', { name: /Customer Portal.*Conflict \(overlap\)/ }),
  ).toBeVisible()
  await hero.getByRole('tab', { name: 'Pivot', exact: true }).click()
  await expect(
    hero.getByRole('tabpanel').getByRole('columnheader', { name: 'Avg progress', exact: true }),
  ).toBeVisible()
  await hero.getByRole('tab', { name: 'Charts', exact: true }).click()
  await expect(hero.locator('.hero-chart-gallery .live-chart[data-status="ready"]')).toHaveCount(3)
})

test('native budget editing works on touch layouts', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('gridcell', { name: '$180,000', exact: true }).dblclick()
  const editor = hero.locator('revogr-edit').getByRole('textbox')
  await expect(editor).toHaveValue('180000')
  await editor.fill('200000')
  await editor.press('Enter')
  await expect(
    hero.getByRole('button', { name: 'Commerce API, Budget: 200,000', exact: true }),
  ).toBeVisible()
})

test('hero analytics records evaluation intent without recording edited values', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('gridcell', { name: '$180,000', exact: true }).dblclick()
  const editor = hero.locator('revogr-edit').getByRole('textbox')
  await editor.fill('234567')
  await editor.press('Enter')
  await hero.getByRole('tab', { name: 'Charts', exact: true }).click()
  const events = await page.evaluate(() =>
    ((window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer ?? []).filter(event =>
      String(event.event).startsWith('hero_demo_'),
    ),
  )
  expect(events).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        event: 'hero_demo_interaction',
        action_id: 'edit',
        demo_name: 'grid',
      }),
      expect.objectContaining({ event: 'hero_demo_view', demo_name: 'charts' }),
    ]),
  )
  expect(JSON.stringify(events)).not.toContain('234567')
  expect(JSON.stringify(events)).not.toContain('Commerce API')
})

for (const width of [390, 775, 1280]) {
  test(`every chart project is visible at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const chart = page.locator('.rg-hero [data-hero-view="grid"] .hero-budget-chart')
    await expect(chart.locator('.live-chart')).toHaveAttribute('data-status', 'ready')
    await expect(chart.locator('rect[role="button"]')).toHaveCount(6)
    await expect(
      chart.getByRole('button', { name: 'Research, Budget: 100,000', exact: true }),
    ).toBeVisible()
    await expect(chart.locator('[data-pivot-chart-category-scroll]')).toHaveCount(0)
  })
}

test('native dropdowns are labeled by field and project and keep their editor behavior', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('combobox', { name: 'Owner for Commerce API', exact: true }).click()
  await page.getByRole('option', { name: 'Nina Patel', exact: true }).click()
  await expect(
    hero.getByRole('row', { name: /^Commerce API/ }).locator('img[alt="Nina Patel"]'),
  ).toBeVisible()
  await hero.getByRole('combobox', { name: 'Status for Commerce API', exact: true }).click()
  await page.getByRole('option', { name: 'Blocked', exact: true }).click()
  await expect(
    hero.getByRole('combobox', { name: 'Status for Commerce API', exact: true }),
  ).toContainText('Blocked')
})

test('portaled resource dropdown keeps avatars and names aligned', async ({ page }) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('combobox', { name: 'Owner for Mobile App', exact: true }).click()
  const options = page.getByRole('option')
  await expect(options).toHaveCount(6)
  const alignment = await options.locator('.hero-owner').evaluateAll(rows =>
    rows.map(row => {
      const image = row.querySelector('img')!.getBoundingClientRect()
      const label = row.lastElementChild!.getBoundingClientRect()
      return {
        gap: label.left - image.right,
        centerDifference: Math.abs(image.top + image.height / 2 - (label.top + label.height / 2)),
      }
    }),
  )
  expect(alignment.every(row => row.gap >= 7.5 && row.centerDifference <= 1)).toBe(true)
  await page.getByRole('option', { name: 'Sofia Garcia', exact: true }).click()
  await expect(
    hero.getByRole('combobox', { name: 'Owner for Mobile App', exact: true }),
  ).toContainText('Sofia Garcia')
})

test('hero keeps VitePress CTAs and uses Revo UI for demo actions without extra labels', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await expect(hero.getByRole('link', { name: 'Try live demo', exact: true })).toHaveAttribute(
    'href',
    '/demo/',
  )
  await expect(hero.getByRole('link', { name: 'Try live demo', exact: true })).toHaveClass(
    /VPButton/,
  )
  await expect(hero.getByRole('link', { name: 'Start with free core', exact: true })).toHaveClass(
    /VPButton/,
  )
  await expect(hero.locator('.hero-demo-guide')).toHaveCount(0)
  await expect(hero.locator('.hero-budget-chart strong')).toHaveCount(0)
  await expect(hero.locator('.hero-demo-panel')).toHaveCSS('border-bottom-width', '0px')
  await expect(hero.locator('.hero-budget-chart')).toHaveCSS('border-bottom-width', '1px')
  await expect(hero.getByRole('button', { name: 'Reset demo', exact: true })).toHaveCount(0)
  await expect(hero.getByRole('link', { name: 'Grid integration guide', exact: true })).toHaveCount(
    0,
  )
  await expect(hero.getByRole('link', { name: 'Try Pro in your app', exact: true })).toHaveClass(
    /rv-btn/,
  )
  await expect(
    hero.getByRole('button', { name: 'Show projects over $100k', exact: true }),
  ).toHaveClass(/rv-btn/)
  await expect(hero.locator('.rg-hero-platform, .hero-demo-tier')).toHaveCount(0)
  await hero.getByRole('button', { name: 'Show projects over $100k', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('4 / 6 projects')
  await hero.getByRole('button', { name: 'Clear filters', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('6 / 6 projects')
})

test('Charts tab presents three connected chart types and filters every card', async ({ page }) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('tab', { name: 'Charts', exact: true }).click()
  const gallery = hero.locator('.hero-chart-gallery')
  await expect(gallery.locator('.live-chart[data-status="ready"]')).toHaveCount(3)
  await expect(gallery.getByRole('heading')).toHaveText([
    /^Budget by project\s*USD$/,
    /^Progress by project\s*%$/,
    /^Budget by status\s*USD$/,
  ])
  await expect(
    gallery.locator('[data-chart-type="groupedColumn"] rect[role="button"]'),
  ).toHaveCount(6)
  await expect(gallery.locator('[data-chart-type="donut"]')).toBeVisible()
  await hero.getByRole('button', { name: 'Show projects over $100k', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('4 / 6 projects')
  await expect(
    gallery.locator('[data-chart-type="groupedColumn"] rect[role="button"]'),
  ).toHaveCount(4)
  await expect(
    gallery.getByRole('button', { name: 'Done, Budget: 240,000', exact: true }),
  ).toBeVisible()
  await hero.getByRole('button', { name: 'Clear filters', exact: true }).click()
  await expect(
    gallery.locator('[data-chart-type="groupedColumn"] rect[role="button"]'),
  ).toHaveCount(6)
  await page.setViewportSize({ width: 390, height: 844 })
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    .toBe(true)
})

test('Progress supports native multi-row range paste and shares values with Charts', async ({
  page,
}) => {
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero
    .getByRole('row', { name: /^Commerce API/ })
    .getByText('64%', { exact: true })
    .click()
  await page.evaluate(() => navigator.clipboard.writeText('25\n50\n75'))
  await page.keyboard.press('ControlOrMeta+V')
  for (const [name, value] of [
    ['Commerce API', 25],
    ['Mobile App', 50],
    ['Data Platform', 75],
  ] as const) {
    await expect(
      hero
        .getByRole('row', { name: new RegExp(`^${name}`) })
        .getByRole('slider', { name: 'Progress', exact: true }),
    ).toHaveValue(String(value))
  }
  await hero.getByRole('tab', { name: 'Charts', exact: true }).click()
  await expect(
    hero.getByRole('button', { name: 'Commerce API, Completed: 25', exact: true }),
  ).toBeVisible()
  await expect(
    hero.getByRole('button', { name: 'Mobile App, Completed: 50', exact: true }),
  ).toBeVisible()
  await expect(
    hero.getByRole('button', { name: 'Data Platform, Completed: 75', exact: true }),
  ).toBeVisible()
})

test('headline rotates products without changing its SEO name or reduced-motion experience', async ({
  page,
}) => {
  await page.clock.install()
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  const product = hero.locator('.rg-hero-product-label')
  await expect(hero.getByRole('heading', { level: 1 })).toHaveAccessibleName(
    'JavaScript Data Grid for complex web apps',
  )
  await expect(product).toHaveText('Data Grid')
  await page.clock.fastForward(3300)
  await expect(product).toHaveText('Gantt')
  await expect(hero.getByRole('heading', { level: 1 })).toHaveText(
    'JavaScript Data Grid for complex web apps',
  )
  await expect(hero.getByRole('heading', { level: 1 })).toHaveCount(1)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await expect(product).toHaveText('Data Grid')
  await page.clock.fastForward(6300)
  await expect(product).toHaveText('Data Grid')
})

test('homepage enables ready-to-use Pro popup conditions without applying on open', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('columnheader', { name: 'Project', exact: true }).getByRole('button').click()
  const popup = page.locator('revogr-filter-panel')
  await expect(popup.locator('.select-filter').first()).toHaveValue('contains')
  await expect(popup.getByRole('textbox', { name: 'Enter value...', exact: true })).toHaveValue('')
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('6 / 6 projects')
  await popup.getByRole('textbox', { name: 'Enter value...', exact: true }).fill('Mobile')
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('1 / 6 projects')
  await hero.getByRole('button', { name: 'Clear filters', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('6 / 6 projects')
})

test('overflowing demo tabs hide the scrollbar and expose the correct scroll edges', async ({
  page,
}) => {
  await page.setViewportSize({ width: 700, height: 900 })
  await page.goto('/')
  const menu = page.locator('.hero-demo-menu')
  const tabs = menu.getByRole('tablist')
  await expect(tabs).toHaveCSS('scrollbar-width', 'none')
  await expect.poll(() => tabs.evaluate(el => el.scrollWidth > el.clientWidth)).toBe(true)
  await tabs.getByRole('tab', { name: 'Data grid', exact: true }).focus()
  await page.keyboard.press('End')
  await expect(tabs.getByRole('tab', { name: 'Charts', exact: true })).toBeFocused()
  await expect.poll(() => menu.evaluate(el => getComputedStyle(el, '::after').opacity)).toBe('0')
  await expect.poll(() => menu.evaluate(el => getComputedStyle(el, '::before').opacity)).toBe('1')
  await page.keyboard.press('Home')
  await expect.poll(() => tabs.evaluate(el => el.scrollLeft)).toBe(0)
  await expect.poll(() => menu.evaluate(el => getComputedStyle(el, '::before').opacity)).toBe('0')
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.getByRole('switch').click()
  await expect(menu).toHaveCSS('--hero-menu-edge', '#000')
})

test('Pivot starts expanded and can regroup the same projects by owner', async ({
  page,
}, testInfo) => {
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await hero.getByRole('tab', { name: 'Pivot', exact: true }).click()
  const panel = hero.getByRole('tabpanel')
  await expect(
    panel.getByRole('gridcell', { name: /^(Commerce API|Mobile App)$/ }).first(),
  ).toBeVisible()
  await panel.screenshot({ path: testInfo.outputPath('pivot-status.png') })
  const statusGroup = panel.getByRole('row', { name: /In progress/ })
  await statusGroup.getByRole('button').click()
  await expect(panel.getByRole('gridcell', { name: 'Commerce API', exact: true })).toHaveCount(0)
  await statusGroup.getByRole('button').click()
  await expect(panel.getByRole('gridcell', { name: 'Commerce API', exact: true })).toBeVisible()
  const grouping = panel.getByRole('group', { name: 'Group by', exact: true })
  await expect(grouping.getByRole('button', { name: 'Status', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await grouping.getByRole('button', { name: 'Owner', exact: true }).click()
  await expect(grouping.getByRole('button', { name: 'Owner', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await expect(panel.getByText('Alex Nguyen', { exact: true })).toBeVisible()
  await expect(
    panel
      .getByRole('row', { name: /Alex Nguyen/ })
      .getByRole('gridcell', { name: '$330,000', exact: true }),
  ).toBeVisible()
  await expect(panel.getByRole('gridcell', { name: 'Commerce API', exact: true })).toBeVisible()
  await hero.getByRole('button', { name: 'Show projects over $100k', exact: true }).click()
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('4 / 6 projects')
  await expect(grouping.getByRole('button', { name: 'Owner', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await expect(panel.getByRole('gridcell', { name: 'Design', exact: true })).toHaveCount(0)
  await grouping.getByRole('button', { name: 'Status', exact: true }).click()
  await expect(panel.getByText('In progress', { exact: true }).first()).toBeVisible()
  await page.getByRole('switch').click()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await panel.screenshot({ path: testInfo.outputPath('pivot-dark.png') })
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(grouping.getByRole('button', { name: 'Owner', exact: true })).toBeVisible()
  await grouping.getByRole('button', { name: 'Owner', exact: true }).click()
  await expect(grouping.getByRole('button', { name: 'Owner', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await panel.screenshot({ path: testInfo.outputPath('pivot-mobile.png') })
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    .toBe(true)
})
