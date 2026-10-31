import { expect, test } from '@playwright/test'

test.setTimeout(90_000)

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
]) {
  test(`scheduler showcase columns and portraits at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
    await page.clock.install({ time: new Date('2026-10-24T12:00:00Z') })
    await page.goto('/demo/event-scheduler')
    const grid = page.locator('revo-grid.event-scheduler-shift-week-grid')
    await expect(grid).toBeVisible({ timeout: 45_000 })
    await expect(grid.getByRole('columnheader', { name: 'Resource', exact: true })).toHaveCSS('height', '35px')
    for (const name of ['Resource', 'Role', 'Ward']) {
      await expect(grid.getByRole('columnheader', { name, exact: true })).toBeVisible()
    }
    await expect(
      grid.locator('[data-event-scheduler-time-annotation="shift-start-0"]').first(),
    ).toBeVisible()
    const portraits = grid.locator('.event-scheduler-resource-cell img')
    await expect(portraits).toHaveCount(4)
    await expect
      .poll(() =>
        portraits.evaluateAll(images =>
          images.every(image => (image as HTMLImageElement).naturalWidth > 0),
        ),
      )
      .toBe(true)
    await expect(grid.locator('.event-scheduler-event--conflict')).toHaveCount(0)
    if (viewport.width > 1000) {
      const progress = grid.locator('[data-event-scheduler-event-id="showcase-0-0"][data-event-scheduler-progress="65"] .event-scheduler-event__progress--horizontal').first()
      await expect(progress).toBeVisible()
      await expect(progress).toHaveCSS('--event-scheduler-event-progress', '65%')
      for (const title of ['Patient rounds', 'Clinical skills lab', 'Ward handoff']) {
        await expect(grid.getByText(title, { exact: true }).first()).toBeVisible()
      }
      await page.screenshot({ path: '/tmp/scheduler-demo-desktop.png', animations: 'disabled' })
    }
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
      .toBe(true)
    await page.getByRole('tab', { name: 'Table', exact: true }).click()
    const table = page.locator('.event-scheduler-shift-week-table')
    await expect(table).toBeVisible()
    await expect(table.getByText('Patient rounds', { exact: true }).first()).toBeVisible()
    await expect
      .poll(() =>
        table
          .locator('img')
          .evaluateAll(
            images =>
              images.length > 0 &&
              images.every(image => (image as HTMLImageElement).naturalWidth > 0),
          ),
      )
      .toBe(true)
    await page.getByRole('tab', { name: 'Calendar', exact: true }).click()
    await expect(grid).toBeVisible({ timeout: 45_000 })
    await expect(grid.locator('.avatar-cell img').first()).toBeVisible()
    await expect(grid.locator('.event-scheduler-event--conflict')).toHaveCount(0)
    const dayHeader = grid.locator('.event-scheduler-day-header').first()
    await expect(dayHeader).toHaveCSS('height', '35px')
    expect(await dayHeader.evaluate(header => {
      const bounds = header.getBoundingClientRect()
      return [...header.querySelectorAll('.event-scheduler-day-header__main, .event-scheduler-day-header__count')].every(label => {
        const rect = label.getBoundingClientRect()
        return rect.top >= bounds.top && rect.bottom <= bounds.bottom
      })
    })).toBe(true)
    await expect(grid.locator('[data-event-scheduler-event-id="showcase-0-0"] .event-scheduler-event__progress--vertical').first()).toBeVisible()
    await page.getByRole('tab', { name: 'Resource', exact: true }).click()
    await expect(grid.getByRole('columnheader', { name: 'Ward', exact: true })).toBeVisible()
    await page.evaluate(() => {
      document.documentElement.classList.add('dark')
      document.documentElement.dataset.theme = 'dark'
    })
    await expect(grid).toHaveAttribute('theme', 'darkMaterial')
    if (viewport.width > 1000)
      await expect(grid.locator('.shift-week-event--break').first()).toBeVisible()
    await page.screenshot({
      path: `/tmp/scheduler-demo-dark-${viewport.width}.png`,
      animations: 'disabled',
    })
  })
}

test('scheduler special events render in both views and reserved empty slots reject creation', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1680, height: 1100 })
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.clock.install({ time: new Date('2026-10-24T12:00:00Z') })
  await page.goto('/demo/event-scheduler')
  const grid = page.locator('revo-grid.event-scheduler-shift-week-grid')
  await expect(grid).toBeVisible({ timeout: 45_000 })
  for (const type of ['briefing', 'wellbeing']) {
    await expect(
      grid
        .locator(`[data-event-scheduler-appearance="line"][data-event-scheduler-type="${type}"]`)
        .first(),
    ).toBeVisible()
  }
  await expect(
    grid.locator('[data-event-scheduler-time-annotation="shift-start-0"]').first(),
  ).toBeVisible()
  await expect(
    grid.locator('[data-event-scheduler-time-annotation="lunch-0"]').first(),
  ).toBeVisible()
  const headerFlag = grid.locator(
    '.event-scheduler-time-annotation--header[data-event-scheduler-time-annotation="shift-start-0"]',
  )
  const bodyFlag = grid
    .locator(
      '.event-scheduler-time-annotation--vertical[data-event-scheduler-time-annotation="shift-start-0"]',
    )
    .first()
  await expect
    .poll(async () => {
      const header = await headerFlag.boundingBox()
      const body = await bodyFlag.boundingBox()
      return Math.abs((header?.x ?? -100) - (body?.x ?? 100))
    })
    .toBeLessThan(2)
  const lunchBand = grid.locator(
    '.event-scheduler-time-annotation--header[data-event-scheduler-time-annotation="lunch-0"]',
  )
  expect(
    await lunchBand.evaluate(element =>
      Math.abs(
        element.getBoundingClientRect().width -
          element.closest('.rgHeaderCell')!.getBoundingClientRect().width,
      ),
    ),
  ).toBeLessThan(2)
  const wellbeing = grid.locator('[data-event-scheduler-type="wellbeing"]').first()
  const lineGeometry = await wellbeing.locator('.event-scheduler-event__button').evaluate(button => {
    const line = getComputedStyle(button, '::before')
    return { style: line.borderTopStyle, y: parseFloat(line.top), center: button.clientHeight / 2 }
  })
  expect(lineGeometry.style).toBe('dashed')
  expect(Math.abs(lineGeometry.y - lineGeometry.center)).toBeLessThan(2)
  await expect(headerFlag.locator('.event-scheduler-time-annotation__icon')).toBeVisible()
  const fireBand = grid
    .locator(
      '.event-scheduler-time-annotation--header[data-event-scheduler-time-annotation="staff-training-0"]',
    )
    .first()
  await expect(fireBand.locator('.event-scheduler-time-annotation__icon')).toBeVisible()
  const fireExtent = await fireBand.evaluate(element => ({
    band: element.getBoundingClientRect().width,
    slot: element.closest('.rgHeaderCell')!.getBoundingClientRect().width,
  }))
  expect(fireExtent.band / fireExtent.slot).toBeCloseTo(3, 1)
  const reserved = grid.locator(
    '[data-event-scheduler-resource="alex"][data-event-scheduler-date="2026-10-19"][data-event-scheduler-slot="4"]',
  )
  await expect(reserved).toHaveAttribute('data-event-scheduler-availability-available', 'false')
  await expect(reserved).toContainText('Reserved')
  await reserved.click()
  const editor = page.locator('[data-event-scheduler-editor]')
  await expect(editor).toBeHidden()
  const openSlot = grid.locator(
    '[data-event-scheduler-resource="alex"][data-event-scheduler-date="2026-10-19"][data-event-scheduler-slot="6"]',
  )
  await openSlot.click()
  await expect(editor).toBeVisible()
  await editor.locator('[data-event-scheduler-editor-action="cancel"]').click()
  await expect(editor).toBeHidden()
  await expect(
    grid.locator('[data-event-scheduler-time-annotation="staff-training-0"]').first(),
  ).toBeVisible()
  await page.screenshot({ path: '/tmp/scheduler-special-timeline.png', animations: 'disabled' })
  await page.getByRole('tab', { name: 'Calendar', exact: true }).click()
  await page.getByRole('button', { name: 'Day', exact: true }).click()
  await expect(
    grid
      .locator('[data-event-scheduler-appearance="line"][data-event-scheduler-type="briefing"]')
      .first(),
  ).toBeVisible()
  await expect(
    grid
      .locator('[data-event-scheduler-appearance="line"][data-event-scheduler-type="wellbeing"]')
      .first(),
  ).toBeVisible()
  await expect(
    grid.locator('[data-event-scheduler-time-annotation="shift-start-0"]').first(),
  ).toBeVisible()
  await page.screenshot({ path: '/tmp/scheduler-special-calendar.png', animations: 'disabled' })
})

test('compact events stay readable and the current-time flag appears above header bands', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1680, height: 1000 })
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.clock.install({ time: new Date('2026-10-19T16:20:00Z') })
  await page.goto('/demo/event-scheduler')
  const grid = page.locator('revo-grid.event-scheduler-shift-week-grid')
  await expect(grid.locator('[data-event-scheduler-type="wellbeing"]').first()).toBeVisible({
    timeout: 45_000,
  })
  await grid.evaluate(element => {
    const scheduler = element as HTMLElement & {
      eventScheduler: Record<string, unknown>
      source: Record<string, unknown>[]
    }
    scheduler.eventScheduler = {
      view: 'resourceTimeline',
      weekStartDate: '2026-10-19',
      dateRange: { start: '2026-10-19', end: '2026-10-19' },
      timeZone: 'UTC',
      slotMinutes: 60,
      timeRange: { start: '06:00', end: '18:00' },
      rowSize: 64,
      timelineColumnSize: 76,
      eventLayout: 'stack',
      maxStackedEvents: 4,
      resourceTimelineRowSizing: { enabled: false },
      conflicts: { enabled: true, policy: 'mark', scope: 'same-resource' },
      currentTimeMarker: { enabled: true, dateTime: '2026-10-19T16:20:00Z' },
      timeAnnotations: [
        {
          id: 'wide-band',
          startDateTime: '2026-10-19T15:00:00Z',
          endDateTime: '2026-10-19T18:00:00Z',
          label: 'Staff training',
          color: '#38bdf8',
        },
      ],
    }
    scheduler.source = [
      {
        id: 'compact-skills',
        resourceId: 'mina',
        title: 'Clinical skills lab',
        startDateTime: '2026-10-19T09:00:00Z',
        endDateTime: '2026-10-19T11:30:00Z',
        type: 'training',
        color: '#047857',
      },
      {
        id: 'compact-lunch',
        resourceId: 'mina',
        title: 'Lunch',
        startDateTime: '2026-10-19T12:00:00Z',
        endDateTime: '2026-10-19T13:00:00Z',
        type: 'break',
        color: '#64748b',
      },
      {
        id: 'compact-wellbeing',
        resourceId: 'mina',
        title: 'Wellbeing break',
        startDateTime: '2026-10-19T13:00:00Z',
        endDateTime: '2026-10-19T15:00:00Z',
        type: 'wellbeing',
        appearance: 'line',
        icon: '☕',
        color: '#ef4444',
      },
      {
        id: 'compact-research',
        resourceId: 'mina',
        title: 'Field Research',
        startDateTime: '2026-10-19T09:00:00Z',
        endDateTime: '2026-10-19T16:00:00Z',
        type: 'training',
        color: '#047857',
      },
    ]
  })
  const warning = grid
    .locator(
      '[data-event-scheduler-resource-id="mina"] .event-scheduler-event__state-icon--conflict',
    )
    .first()
  await expect(warning).toBeVisible()
  expect((await warning.boundingBox())!.width).toBeLessThanOrEqual(14)
  const wellbeing = grid.locator('[data-event-scheduler-type="wellbeing"]').first()
  const title = wellbeing.locator('.event-scheduler-event__title')
  const button = wellbeing.locator('.event-scheduler-event__button')
  const labelBounds = await title.boundingBox()
  const barBounds = await button.boundingBox()
  expect(labelBounds!.y + labelBounds!.height).toBeLessThanOrEqual(
    barBounds!.y + barBounds!.height + 1,
  )
  const nowFlag = grid.locator('[data-event-scheduler-current-time-header="true"]')
  await expect(nowFlag).toContainText('Today')
  await expect(nowFlag).toContainText('16:20')
  const flagLabel = nowFlag.locator('.event-scheduler-time-annotation').filter({ hasText: 'Today' })
  await expect(flagLabel).toBeVisible()
  expect(
    await flagLabel.evaluate(element => {
      const bounds = element.getBoundingClientRect()
      const previous = (element as HTMLElement).style.pointerEvents
      ;(element as HTMLElement).style.pointerEvents = 'auto'
      const front = document.elementFromPoint(
        bounds.x + bounds.width / 2,
        bounds.y + bounds.height / 2,
      )
      ;(element as HTMLElement).style.pointerEvents = previous
      return front === element || element.contains(front)
    }),
  ).toBe(true)
  await page.screenshot({ path: '/tmp/scheduler-compact-now.png', animations: 'disabled' })
})

test('vertical cards keep narrow icons and badges inside their bounds', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1100 })
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.clock.install({ time: new Date('2026-10-24T12:00:00Z') })
  await page.goto('/demo/event-scheduler')
  const grid = page.locator('revo-grid.event-scheduler-shift-week-grid')
  await expect(grid).toBeVisible({ timeout: 45_000 })
  await page.getByRole('tab', { name: 'Calendar', exact: true }).click()
  await expect(grid.locator('.event-scheduler-event--vertical').first()).toBeVisible()
  const inspect = () => grid.locator('.event-scheduler-event--vertical').evaluateAll(events => {
    let narrow = 0
    let icons = 0
    const problems: string[] = []
    for (const event of events) {
      const bounds = event.getBoundingClientRect()
      if (bounds.width < 24 || bounds.width >= 44) continue
      narrow++
      const primary = event.querySelector('[data-event-scheduler-primary], .event-scheduler-event__title-text')
      if (primary && getComputedStyle(primary).display !== 'none') problems.push('truncated title')
      for (const icon of event.querySelectorAll('.event-scheduler-event__chip-icon, [data-event-scheduler-icon]')) {
        const rect = icon.getBoundingClientRect()
        if (!rect.width) continue
        icons++
        let parent = icon.parentElement
        while (parent && parent !== event) {
          const clip = parent.getBoundingClientRect()
          if (getComputedStyle(parent).overflow === 'hidden' && (rect.left < clip.left - 1 || rect.right > clip.right + 1 || rect.bottom > clip.bottom + 1)) problems.push('cropped icon')
          parent = parent.parentElement
        }
      }
    }
    return { narrow, icons, problems }
  })
  await expect.poll(async () => (await inspect()).narrow).toBeGreaterThan(0)
  expect((await inspect()).icons).toBeGreaterThan(0)
  expect((await inspect()).problems).toEqual([])
  await page.screenshot({ path: '/tmp/scheduler-vertical-compact.png', animations: 'disabled' })
})

test('read-only events have no hover elevation or mutation handles', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-10-24T12:00:00Z') })
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/demo/event-scheduler')
  const grid = page.locator('revo-grid.event-scheduler-shift-week-grid')
  const event = grid.locator('[data-event-scheduler-locked="true"]').first()
  await expect(event).toBeVisible({ timeout: 45_000 })
  const appearance = () => event.evaluate(element => {
    element.getAnimations({ subtree: true }).forEach(animation => animation.finish())
    return { filter: getComputedStyle(element).filter, transform: getComputedStyle(element).transform, shadow: getComputedStyle(element.querySelector('button')!).boxShadow }
  })
  const normal = await appearance()
  await event.locator('button').hover()
  await page.clock.runFor(250)
  expect(await appearance()).toEqual(normal)
  await expect(event.locator('.event-scheduler-event__resize')).toHaveCount(0)
  for (const type of ['briefing', 'wellbeing']) {
    const special = grid.locator(`[data-event-scheduler-type="${type}"]`).first()
    await expect(special).toHaveAttribute('data-event-scheduler-readonly', 'true')
    await expect(special.locator('.event-scheduler-event__resize')).toHaveCount(0)
    await special.locator('button').hover()
    await expect(special.locator('button')).toHaveCSS('box-shadow', 'none')
    await expect(special).toHaveCSS('filter', 'none')
  }
})

test('vertical read-only events reject drag and edge resize gestures in week and day views', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-10-24T12:00:00Z') })
  await page.setViewportSize({ width: 1680, height: 1200 })
  await page.goto('/demo/event-scheduler')
  const grid = page.locator('revo-grid.event-scheduler-shift-week-grid')
  await expect(grid).toBeVisible({ timeout: 45_000 })
  await page.getByRole('tab', { name: 'Calendar', exact: true }).click()
  for (const view of ['Week', 'Day']) {
    await page.getByRole('button', { name: view, exact: true }).click()
    // Exercise an ordinary filled event alongside the readonly special intervals.
    await grid.evaluate(element => {
      const scheduler = element as HTMLElement & { source: Array<{ id: string; readonly?: boolean }> }
      scheduler.source = scheduler.source.map(event => event.id === 'showcase-0-0' ? { ...event, readonly: true } : event)
    })
    for (const id of ['showcase-0-0', 'showcase-0-6', 'showcase-0-7']) {
      const event = grid.locator(`[data-event-scheduler-event-id="${id}"]`).first()
      await expect(event).toHaveAttribute('data-event-scheduler-readonly', 'true')
      await expect(event).toHaveClass(/event-scheduler-event--vertical/)
      await expect(event.locator('.event-scheduler-event__resize')).toHaveCount(0)
      const button = event.locator('button')
      const normal = await button.evaluate(element => getComputedStyle(element).boxShadow)
      await button.hover()
      await page.clock.runFor(250)
      await expect(button).toHaveCSS('box-shadow', normal)
      await expect(event).toHaveCSS('filter', 'none')
      const original = await grid.evaluate(element => JSON.stringify((element as HTMLElement & { source: unknown }).source))
      for (const edge of ['center', 'start', 'end']) {
        await button.scrollIntoViewIfNeeded()
        const bounds = (await button.boundingBox())!
        const x = bounds.x + bounds.width / 2
        const y = edge === 'start' ? bounds.y + 3 : edge === 'end' ? bounds.y + bounds.height - 3 : bounds.y + bounds.height / 2
        await page.mouse.move(x, y)
        await page.mouse.down()
        await page.mouse.move(x + 18, y + 70, { steps: 8 })
        await expect(grid.locator('.event-scheduler-day-cell__slot--ghost')).toHaveCount(0)
        await page.mouse.up()
        await page.clock.runFor(100)
        expect(await grid.evaluate(element => JSON.stringify((element as HTMLElement & { source: unknown }).source))).toBe(original)
        await expect(page.locator('[data-event-scheduler-editor]')).toBeHidden()
      }
    }
  }
})
