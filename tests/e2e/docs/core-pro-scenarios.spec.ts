import { expect, test } from '@playwright/test'

/**
 * Release-gate coverage for the Core and Pro examples in the docs host.
 * These checks deliberately use the rendered controls and fixture text only;
 * grid plugins and providers are never reached through page evaluation.
 */
async function openDemo(page: import('@playwright/test').Page, path: string, grid: string) {
  await page.goto(path)
  await expect(page.locator('.demo-page-layout')).toBeVisible()
  await expect(page.locator(grid)).toBeVisible()
}

test.describe('Core and Pro demo scenarios', () => {
  test('grid at scale changes dataset and resets a saved view', async ({ page }) => {
    await openDemo(page, '/demo/grid-at-scale', '.hr-scale-grid')
    const source = page.locator('.hr-toolbar select').first()
    await expect(source).toHaveValue('10000x100')
    await expect(page.getByRole('region', { name: 'Browser performance metrics' })).toContainText(
      '10,000 × 100',
    )

    await source.selectOption('1000x100')
    await expect(page.locator('.hr-loading-overlay')).toBeHidden()
    await expect(page.getByRole('region', { name: 'Browser performance metrics' })).toContainText(
      '1,000 × 100',
    )
    await page.getByRole('button', { name: 'Save view' }).click()
    await expect(page.locator('.hr-workspace-status')).toContainText('Saved locally')
    await page.getByRole('button', { name: 'Reset view' }).click()
    await expect(page.locator('.hr-workspace-status')).toContainText('View reset')
  })

  test('grid at scale exposes readable metric help and theme choices', async ({ page }) => {
    await openDemo(page, '/demo/grid-at-scale', '.hr-scale-grid')
    const theme = page.locator('.hr-toolbar select').nth(1)
    const originalTheme = await theme.inputValue()
    await expect(page.getByRole('button', { name: /About dataset size/i })).toBeVisible()
    await page.getByRole('button', { name: /About dataset size/i }).focus()
    await expect(page.getByRole('tooltip')).toContainText('rows')

    const options = await theme
      .locator('option')
      .evaluateAll(items => items.map(item => (item as HTMLOptionElement).value))
    const alternateTheme = options.find(value => value !== originalTheme)
    expect(alternateTheme).toBeTruthy()
    await theme.selectOption(alternateTheme!)
    await expect(theme).toHaveValue(alternateTheme!)
    await expect(page.locator('.hr-scale-grid')).toBeVisible()
  })

  test('SCALE-006 preserves the joined date display when it is edited from the docs grid', async ({
    page,
  }) => {
    await openDemo(page, '/demo/grid-at-scale', '.hr-scale-grid')
    const grid = page.locator('.hr-scale-grid')
    const joined = grid.locator('.rgCell[data-rgcol="5"][data-rgrow="2"]').first()
    await expect(joined).toHaveText('3/3/2020')
    await joined.dblclick()
    const input = page.locator('.duet-date__input')
    await expect(input).toHaveValue('3/3/2020')
    await expect(input).toHaveAttribute('placeholder', 'M/D/YYYY')
    await page.getByRole('button', { name: '4 March', exact: true }).click()
    await expect(joined).toHaveText('3/4/2020')
    await joined.dblclick()
    await input.fill('12/25/2021')
    await input.press('Tab')
    await expect(joined).toHaveText('12/25/2021')
    await joined.dblclick()
    await expect(input).toHaveValue('12/25/2021')
  })

  test('PROMPT-001 renders the authored first prompt with its attached category and tags', async ({
    page,
  }) => {
    await openDemo(page, '/demo/ai-prompts', '.prompt-grid')
    const grid = page.locator('.prompt-grid')
    await expect(page.getByPlaceholder('Role, prompt, or tag…')).toBeVisible()
    await expect(page.getByLabel('Category')).toBeVisible()
    for (const header of ['Prompt role', 'Category', 'Prompt', 'Tags']) {
      await expect(grid.getByText(header, { exact: true })).toBeVisible()
    }
    await expect(grid.getByText('Minimal grid starter', { exact: true })).toBeVisible()
    await expect(grid.getByText('Setup', { exact: true }).first()).toBeVisible()
    await expect(grid.getByText('quickstart, typescript', { exact: true })).toBeVisible()
    await expect(
      grid.getByText('Create the smallest working RevoGrid example', { exact: false }),
    ).toBeVisible()
  })

  test('AI prompt library filters by search and category', async ({ page }) => {
    await openDemo(page, '/demo/ai-prompts', '.prompt-grid')
    const search = page.getByPlaceholder('Role, prompt, or tag…')
    await expect(page.getByText('Minimal grid starter', { exact: true })).toBeVisible()

    await search.fill('quickstart, typescript')
    await expect(page.getByText('Minimal grid starter', { exact: true })).toBeVisible()
    await page.getByLabel('Category').selectOption('Extensions')
    await expect(page.getByText('Minimal grid starter', { exact: true })).toBeHidden()
    await search.fill('')
    await expect(page.getByText('Plugin scaffold', { exact: true })).toBeVisible()
    await page.getByLabel('Category').selectOption('All')
    await expect(page.getByText('Minimal grid starter', { exact: true })).toBeVisible()
  })

  test('AI prompt editor commits text and discards an Escape draft', async ({ page }) => {
    await openDemo(page, '/demo/ai-prompts', '.prompt-grid')
    await page.getByPlaceholder('Role, prompt, or tag…').fill('Minimal grid starter')
    const original = 'Create the smallest working RevoGrid example'
    const prompt = page.getByText(original, { exact: false }).first()
    await prompt.dblclick()
    const editor = page.locator('.prompt-editor')
    await expect(editor).toBeVisible()
    await editor.fill('E2E prompt: preserve this exact text.')
    await editor.press('Enter')
    await expect(
      page.getByText('E2E prompt: preserve this exact text.', { exact: true }),
    ).toBeVisible()
    await page.getByText('E2E prompt: preserve this exact text.', { exact: true }).dblclick()
    await editor.fill('discard this prompt draft')
    await editor.press('Escape')
    await expect(
      page.getByText('E2E prompt: preserve this exact text.', { exact: true }),
    ).toBeVisible()
    await expect(page.getByText('discard this prompt draft', { exact: true })).toHaveCount(0)
  })

  test('project portfolio collapses and re-expands grouped projects', async ({ page }) => {
    await openDemo(page, '/demo/project-portfolio', '.portfolio-grid')
    await expect(page.getByText('Mobile onboarding', { exact: true })).toBeVisible()
    const toggle = page.getByRole('button', { name: 'Collapse all groups' })
    await toggle.click()
    await expect(page.getByRole('button', { name: 'Expand all groups' })).toBeVisible()
    await expect(page.getByText('Mobile onboarding', { exact: true })).toBeHidden()
    await expect(page.getByText('Engineering', { exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Expand all groups' }).click()
    await expect(page.getByText('Mobile onboarding', { exact: true })).toBeVisible()
  })

  test('PORTFOLIO-001 keeps project attributes attached to the grouped record', async ({
    page,
  }) => {
    await openDemo(page, '/demo/project-portfolio', '.portfolio-grid')
    const grid = page.locator('.portfolio-grid')
    await expect(page.getByText('Grouped by', { exact: true })).toBeVisible()
    await expect(page.getByText('Department → Status', { exact: true })).toBeVisible()
    await expect(grid.getByText('Mobile onboarding', { exact: true })).toBeVisible()
    await expect(grid.getByText('Priya Shah', { exact: true })).toBeVisible()
    await expect(grid.getByText('82%', { exact: true })).toBeVisible()
    await expect(grid.getByText('$180k', { exact: true })).toBeVisible()
    await expect(grid.getByText('Sep 18', { exact: true })).toBeVisible()
    await expect(grid.getByText('Low', { exact: true }).first()).toBeVisible()
  })

  test('PORTFOLIO-003 collapses one department and then one status branch independently', async ({
    page,
  }) => {
    await openDemo(page, '/demo/project-portfolio', '.portfolio-grid')
    const grid = page.locator('.portfolio-grid')
    const product = grid.locator('.rgRow.groupingRow').filter({ hasText: /^Product$/ })
    const mobileOnboarding = grid.getByText('Mobile onboarding', { exact: true })
    const engineeringProject = grid.getByText('Grid rendering v5', { exact: true })

    await expect(mobileOnboarding).toBeVisible()
    await expect(engineeringProject).toBeVisible()
    await product.locator('.group-expand').click()
    await expect(mobileOnboarding).toBeHidden()
    await expect(engineeringProject).toBeVisible()

    await product.locator('.group-expand').click()
    const productOnTrack = grid.locator('.rgRow.groupingRow').filter({ hasText: /^On track$/ }).first()
    await expect(productOnTrack).not.toHaveAttribute('expanded')
    await productOnTrack.locator('.group-expand').click()
    await expect(mobileOnboarding).toBeVisible()
    const productAtRisk = grid.locator('.rgRow.groupingRow').filter({ hasText: /^At risk$/ }).first()
    await expect(productAtRisk).not.toHaveAttribute('expanded')
    await productAtRisk.locator('.group-expand').click()
    const pricingExperiments = grid.getByText('Pricing experiments', { exact: true })
    await expect(pricingExperiments).toBeVisible()

    await productOnTrack.locator('.group-expand').click()
    await expect(mobileOnboarding).toBeHidden()
    await expect(pricingExperiments).toBeVisible()
    await productOnTrack.locator('.group-expand').click()
    await expect(mobileOnboarding).toBeVisible()
    await expect(grid.getByText('Priya Shah', { exact: true })).toBeVisible()
    await expect(grid.getByText('82%', { exact: true })).toBeVisible()
  })

  test('TRACKER-001 renders the initial Mobile checkout project and bulk controls', async ({
    page,
  }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    const toolbar = page.locator('project-tracker-toolbar')
    await expect(toolbar.locator('[data-toolbar-action="new"]')).toBeVisible()
    await expect(toolbar.locator('[data-toolbar-menu="group"] > summary')).toBeVisible()
    await expect(toolbar.locator('[data-toolbar-menu="sort"] > summary')).toBeVisible()
    await expect(toolbar.locator('[data-toolbar-action="filter"]')).toBeVisible()
    await expect(toolbar.locator('[data-toolbar-menu="hide"] > summary')).toBeVisible()
    await expect(toolbar.locator('.project-selection-count')).toContainText('0 / 16')
    const grid = page.locator('.project-tracker-grid')
    await expect(grid.getByText('Mobile checkout launch', { exact: true })).toBeVisible()
    await expect(grid.getByText('High', { exact: true }).first()).toBeVisible()
    await expect(grid.getByText('Medium', { exact: true }).first()).toBeVisible()
    await expect(grid.getByText('Product', { exact: true }).first()).toBeVisible()
    await expect(grid.getByText('20%', { exact: true })).toBeVisible()
    await expect(grid.getByText('$75,000', { exact: true })).toBeVisible()
  })

  test('project tracker opens and cancels the new-project workflow', async ({ page }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    await expect(page.getByText('Mobile checkout', { exact: true })).toBeVisible()
    await page.locator('[data-toolbar-action="new"]').click()
    const dialog = page.locator('.project-modal')
    await expect(dialog).toBeVisible()
    await expect(dialog.getByPlaceholder('Describe the project')).toBeVisible()
    await dialog.getByPlaceholder('Describe the project').fill('E2E draft project')
    await dialog.getByRole('button', { name: 'Cancel' }).click()
    await expect(dialog).toBeHidden()
    await expect(page.getByText('E2E draft project', { exact: true })).toHaveCount(0)
  })

  test('TRACKER-002 creates a valid project and keeps a later cancelled draft out of the grid', async ({
    page,
  }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    const toolbar = page.locator('project-tracker-toolbar')
    await expect(toolbar.locator('.project-selection-count')).toContainText('0 / 16')
    await toolbar.locator('[data-toolbar-action="new"]').click()
    const dialog = page.locator('.project-modal')
    await dialog.getByPlaceholder('Describe the project').fill('E2E release checklist')
    await dialog.getByPlaceholder('Short project summary').fill('E2E fixture summary')
    await dialog.getByRole('button', { name: 'Create project' }).click()
    await expect(dialog).toBeHidden()
    await expect(page.getByText('E2E release checklist', { exact: true })).toBeVisible()
    await expect(page.getByText('E2E fixture summary', { exact: true })).toBeVisible()
    await expect(toolbar.locator('.project-selection-count')).toContainText('0 / 17')

    await toolbar.locator('[data-toolbar-action="new"]').click()
    await dialog.getByPlaceholder('Describe the project').fill('E2E cancelled project')
    await dialog.getByRole('button', { name: 'Cancel' }).click()
    await expect(page.getByText('E2E cancelled project', { exact: true })).toHaveCount(0)
    await expect(page.getByText('E2E release checklist', { exact: true })).toBeVisible()
  })

  test('project tracker enables and clears bulk actions with its selection', async ({ page }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    const toolbar = page.locator('project-tracker-toolbar')
    const markReady = toolbar.locator('[data-bulk-action="markReady"]')
    await expect(markReady).toBeDisabled()

    const rows = page.locator('.project-tracker-grid .row-select-checkbox')
    await expect(rows.nth(1)).toBeVisible()
    await rows.nth(1).check()
    await expect(toolbar.locator('.project-selection-count')).toContainText('1 / 16')
    await expect(markReady).toBeEnabled()
    await markReady.click()
    await expect(toolbar.locator('.project-selection-count')).toContainText('0 / 16')
    await expect(markReady).toBeDisabled()
  })

  test('TRACKER-004 changes grouping and sorting through rendered toolbar menus', async ({
    page,
  }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    const toolbar = page.locator('project-tracker-toolbar')
    const group = toolbar.locator('[data-toolbar-menu="group"]')
    await group.locator('summary').click()
    await group.getByRole('button', { name: 'Status', exact: true }).click()
    await expect(group.locator('.is-selected')).toHaveText('Status')
    await expect(toolbar.getByRole('button', { name: 'Collapse all groups' })).toBeEnabled()

    const sort = toolbar.locator('[data-toolbar-menu="sort"]')
    await sort.locator('summary').click()
    await sort.getByRole('button', { name: 'Project A-Z', exact: true }).click()
    await expect(sort.locator('.is-selected')).toHaveText('Project A-Z')
    await expect(page.getByText('Mobile checkout', { exact: true })).toBeVisible()
  })

  test('TRACKER-004 keeps a hidden column reversible from the rendered Hide menu', async ({
    page,
  }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    const toolbar = page.locator('project-tracker-toolbar')
    const hide = toolbar.locator('.project-hide-menu')
    await hide.locator('summary').click()
    const owner = hide.locator('[data-hide-column="owner"]')
    await expect(owner).toBeChecked()
    await owner.uncheck()
    await expect(owner).not.toBeChecked()
    await expect(page.getByText('Owner', { exact: true })).toHaveCount(0)
    await hide.locator('summary').click()
    await owner.check()
    await expect(owner).toBeChecked()
    await expect(page.getByText('Owner', { exact: true })).toBeVisible()
  })

  test('tree data expands and collapses the organization', async ({ page }) => {
    await openDemo(page, '/demo/tree-data', '.tree-grid')
    await expect(page.getByText('Maya Chen', { exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Collapse all' }).click()
    await expect(page.getByText('Eva Green', { exact: true })).toBeHidden()
    await expect(page.getByText('Ava Martin', { exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Expand all' }).click()
    await expect(page.getByText('Eva Green', { exact: true })).toBeVisible()
  })

  test('TREE-001 shows the authored organization controls and recognizable roots', async ({
    page,
  }) => {
    await openDemo(page, '/demo/tree-data', '.tree-grid')
    const showcase = page.getByRole('region', { name: 'Tree Data organization explorer' })
    await expect(showcase.getByRole('button', { name: 'Expand all' })).toBeVisible()
    await expect(showcase.getByRole('button', { name: 'Collapse all' })).toBeVisible()
    await expect(showcase.getByRole('button', { name: 'Export to Excel' })).toBeVisible()
    await expect(showcase.getByLabel('Sticky parents')).toBeChecked()
    await expect(page.getByText('Maya Chen', { exact: true })).toBeVisible()
    await expect(page.getByText('Ava Martin', { exact: true })).toBeVisible()
    await expect(page.getByText('Noah Smith', { exact: true })).toBeVisible()
    await expect(page.getByText('Platform', { exact: true })).toBeVisible()
  })

  test('tree data keeps the sticky-parent preference reversible', async ({ page }) => {
    await openDemo(page, '/demo/tree-data', '.tree-grid')
    const stickyParents = page.getByLabel('Sticky parents')
    await expect(stickyParents).toBeChecked()
    await stickyParents.uncheck()
    await expect(stickyParents).not.toBeChecked()
    await page.getByRole('button', { name: 'Collapse all' }).click()
    await page.getByRole('button', { name: 'Expand all' }).click()
    await stickyParents.check()
    await expect(stickyParents).toBeChecked()
    await expect(page.getByText('Eva Green', { exact: true })).toBeVisible()
  })

  test('tree data exports from the visible docs control', async ({ page }) => {
    await openDemo(page, '/demo/tree-data', '.tree-grid')
    const download = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Export to Excel' }).click()
    expect((await download).suggestedFilename()).toBe('tree-data.xlsx')
    await expect(page.getByRole('button', { name: 'Export to Excel' })).toBeEnabled()
  })

  test('advanced filtering applies and clears the documented quick filter', async ({ page }) => {
    await openDemo(page, '/demo/filtering', '.order-explorer revo-grid')
    const count = page.locator('.order-explorer__count')
    await expect(count).toContainText('217 of 10,000')
    await page.getByRole('button', { name: 'Try example' }).click()
    await expect(count).toContainText('335 of 10,000')
    await expect(page.getByLabel('Search all visible columns')).toHaveValue('Lisbon pending')
    await page.getByRole('button', { name: 'Clear All' }).click()
    await expect(count).toContainText('10,000 of 10,000')
  })

  test('advanced filtering replaces presets and clears their badges', async ({ page }) => {
    await openDemo(page, '/demo/filtering', '.order-explorer revo-grid')
    const explorer = page.getByRole('region', { name: 'Advanced Filtering: Order Explorer' })
    const count = explorer.locator('.order-explorer__count')
    await explorer.getByRole('button', { name: 'Review queue' }).click()
    await expect(count).not.toContainText('217 of 10,000')
    await expect(explorer.locator('.order-explorer__filter-badge')).toHaveCount(3)
    await explorer.getByRole('button', { name: 'Clear All' }).click()
    await expect(count).toContainText('10,000 of 10,000')
    await expect(explorer.locator('.order-explorer__filter-badge')).toHaveCount(0)
  })

  test('advanced filtering recovers from an unmatched global search', async ({ page }) => {
    await openDemo(page, '/demo/filtering', '.order-explorer revo-grid')
    const search = page.getByLabel('Search all visible columns')
    const count = page.locator('.order-explorer__count')
    await search.fill('zz-no-order-qa-2026')
    await expect(count).toContainText('0 of 10,000')
    await search.fill('')
    await expect(count).toContainText('217 of 10,000')
  })

  test('infinite scroll keeps its remote directory status while scrolling', async ({ page }) => {
    await openDemo(page, '/demo/infinity-scroll', '.infinity-grid')
    const status = page.locator('.infinity-status')
    await expect(status).toContainText('Loaded 1,000 matching records')
    await page.locator('.infinity-grid').hover()
    await page.mouse.wheel(0, 1800)
    await expect(status).toContainText('Loaded 1,000 matching records')
    await expect(page.getByText('Remote User 010', { exact: false }).first()).toBeVisible()
  })

  test('INFINITY-003 replaces buffered rows when the remote ID sort changes', async ({ page }) => {
    await openDemo(page, '/demo/infinity-scroll', '.infinity-grid')
    const grid = page.locator('.infinity-grid')
    const status = page.locator('.infinity-status')

    await expect(status).toContainText('Loaded 1,000 matching records')
    await grid.hover()
    await page.mouse.wheel(0, 6000)
    await expect(status).toContainText('Loaded 1,000 matching records')

    const idHeader = grid.getByRole('columnheader', { name: /ID/ })
    await idHeader.click()
    await expect(status).toContainText('Fetching rows')
    await expect(status).toContainText('Loaded 1,000 matching records')

    await idHeader.click()
    await expect(status).toContainText('Fetching rows')
    await expect(status).toContainText('Loaded 1,000 matching records')
    await grid.hover()
    await page.mouse.wheel(0, -6000)
    await expect(grid.getByRole('gridcell', { name: '1000', exact: true })).toBeVisible()

    await idHeader.click()
    await expect(status).toContainText('Fetching rows')
    await expect(status).toContainText('Loaded 1,000 matching records')
    await expect(grid.getByRole('gridcell', { name: '1', exact: true })).toBeVisible()
    await expect(grid.getByText('Pinned status', { exact: true })).toBeVisible()
    await expect(grid.getByText('Pinned support', { exact: true })).toBeVisible()
  })

  test('infinite scroll exports the whole directory from its initial window', async ({ page }) => {
    await openDemo(page, '/demo/infinity-scroll', '.infinity-grid')
    await expect(page.locator('.infinity-status')).toContainText('Loaded 1,000 matching records')
    const download = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Export all to Excel' }).click()
    expect((await download).suggestedFilename()).toBe('infinity-scroll.xlsx')
    await expect(page.locator('.infinity-status')).toContainText('Exported 1000 rows')
  })

  test('column collapse exposes a collapsed contact group', async ({ page }) => {
    await openDemo(page, '/demo/column-collapse', '.column-collapse-grid')
    await expect(page.getByText('John', { exact: true })).toBeVisible()
    await expect(page.getByText('First Name', { exact: true })).toHaveCount(0)
    await page.getByText('Personal Information', { exact: true }).click()
    await expect(page.getByText('First Name', { exact: true })).toBeVisible()
    await expect(page.getByText('John', { exact: true })).toBeVisible()
  })

  test('column collapse restores the compact group after a second toggle', async ({ page }) => {
    await openDemo(page, '/demo/column-collapse', '.column-collapse-grid')
    const personal = page.getByText('Personal Information', { exact: true })
    await personal.click()
    await expect(page.getByText('First Name', { exact: true })).toBeVisible()
    await personal.click()
    await expect(page.getByText('First Name', { exact: true })).toHaveCount(0)
    await expect(page.getByText('John', { exact: true })).toBeVisible()
  })

  test('column collapse changes Contact independently of Personal Information', async ({
    page,
  }) => {
    await openDemo(page, '/demo/column-collapse', '.column-collapse-grid')
    await page.getByText('Contact', { exact: true }).click()
    await expect(page.getByText('Phone', { exact: true })).toBeVisible()
    await expect(page.getByText('123-456-7890', { exact: true })).toBeVisible()
    await expect(page.getByText('First Name', { exact: true })).toHaveCount(0)
    await page.getByText('Contact', { exact: true }).click()
    await expect(page.getByText('Phone', { exact: true })).toHaveCount(0)
    await expect(page.getByText('john@example.com', { exact: true })).toBeVisible()
  })

  test('context menu opens for a selected employee and closes with Escape', async ({ page }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const employee = page.getByText('Ada', { exact: true }).first()
    await expect(employee).toBeVisible()
    await employee.click({ button: 'right' })
    await expect(page.getByText('Edit cell', { exact: true })).toBeVisible()
    await expect(page.getByText('Copy', { exact: true }).first()).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.getByText('Edit cell', { exact: true })).toBeHidden()
  })

  test('CONTEXT-001 renders the authored employee fields before interaction', async ({ page }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    for (const header of [
      'ID',
      'Name',
      'Team',
      'Status',
      'Score',
      'Owner',
      'Approved',
      'Schedule',
      'Joined',
    ]) {
      await expect(grid.getByText(header, { exact: true }).first()).toBeVisible()
    }
    await expect(grid.getByText('Ada Lovelace', { exact: true }).first()).toBeVisible()
    await expect(grid.getByText('Platform', { exact: true }).first()).toBeVisible()
    await expect(grid.getByText('Active', { exact: true }).first()).toBeVisible()
    await expect(grid.locator('.rgCell[data-rgcol="4"][data-rgrow="0"]').first()).toHaveText('98%')
    await expect(grid.getByText('Avery Stone', { exact: true }).first()).toBeVisible()
  })

  test('CONTEXT-001 keeps ID and archived scores out of the editing command path', async ({
    page,
  }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const adaId = grid
      .locator('revogr-data[type="rgRow"][col-type="rgCol"] .rgCell[data-rgcol="0"][data-rgrow="0"]')
      .first()
    const adaScore = grid.locator('.rgCell[data-rgcol="4"][data-rgrow="0"]').first()
    const alanScore = grid.locator('.rgCell[data-rgcol="4"][data-rgrow="4"]').first()
    const editCell = page.getByRole('menuitem', { name: 'Edit cell', exact: true })

    await expect(adaId).toHaveText('101')
    await adaId.click({ button: 'right' })
    await expect(editCell).toHaveCount(0)
    await page.keyboard.press('Escape')

    await expect(alanScore).toHaveClass(/disabled/)
    await alanScore.click({ button: 'right' })
    await expect(editCell).toHaveCount(0)
    await page.keyboard.press('Escape')

    await adaScore.click({ button: 'right' })
    await expect(editCell).toBeVisible()
    await page.keyboard.press('Escape')
  })

  test('context menu opens and dismisses the employee profile dialog', async ({ page }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const employee = page.getByText('Ada', { exact: true }).first()
    await employee.click({ button: 'right' })
    await page.getByText('View employee profile', { exact: true }).click()
    const dialog = page.getByRole('dialog', { name: 'Employee profile' })
    await expect(dialog).toContainText('Employee #')
    await expect(dialog).toContainText('Selected field')
    await dialog.getByRole('button', { name: 'Done' }).click()
    await expect(dialog).toBeHidden()
    await expect(employee).toBeFocused()
  })

  test('CONTEXT-006 enables selection-aware formatting and clears only presentation changes', async ({
    page,
  }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const workspace = page.getByRole('region', {
      name: 'Data Grid Context Menu & Formatting workspace',
    })
    const toolbar = workspace.getByRole('toolbar', { name: 'Formatting toolbar' })
    const bold = toolbar.getByRole('button', { name: 'Bold' })
    await expect(bold).toBeDisabled()
    await workspace.getByText('Ada Lovelace', { exact: true }).click()
    await expect(bold).toBeEnabled()
    await bold.click()
    await expect(bold).toHaveAttribute('aria-pressed', 'true')
    await toolbar.getByRole('button', { name: 'Clear formatting' }).click()
    await expect(bold).toHaveAttribute('aria-pressed', 'false')
    await expect(workspace.getByText('Ada Lovelace', { exact: true })).toBeVisible()
  })

  test('CONTEXT-003 edits Ada score, restores it through History, and keeps Alan score readonly', async ({
    page,
  }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const adaScore = grid.locator('.rgCell[data-rgcol="4"][data-rgrow="0"]').first()
    const alanScore = grid.locator('.rgCell[data-rgcol="4"][data-rgrow="4"]').first()

    await expect(adaScore).toHaveText('98%')
    const historyCaptured = grid.evaluate(
      element =>
        new Promise<void>(resolve => {
          const onHistoryChanged = (event: Event) => {
            if (!(event as CustomEvent<{ canUndo?: boolean }>).detail?.canUndo) return
            element.removeEventListener('historychanged', onHistoryChanged)
            resolve()
          }
          element.addEventListener('historychanged', onHistoryChanged)
        }),
    )
    await adaScore.dblclick()
    const editor = grid.locator('input').last()
    await editor.fill('88')
    await editor.press('Enter')
    await expect(adaScore).toHaveText('88%')
    await historyCaptured
    await expect(editor).toBeHidden()
    await grid.focus()
    await page.keyboard.press('Control+z')
    await expect(adaScore).toHaveText('98%')

    await expect(alanScore).toHaveClass(/disabled/)
    await expect(alanScore.getByRole('img')).toHaveAttribute('aria-label', '99/5')
    await alanScore.dblclick()
    await expect
      .poll(() => grid.evaluate(element => (element as HTMLRevoGridElement).source[4]?.score))
      .toBe(99)
    await expect(alanScore.getByRole('img')).toHaveAttribute('aria-label', '99/5')
  })

  test('CONTEXT-002 scopes custom details actions to cells, rows, headers, and column groups', async ({
    page,
  }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const adaName = grid.locator('.rgCell[data-rgcol="1"][data-rgrow="0"]').first()

    await adaName.click({ button: 'right' })
    for (const item of [
      'Edit cell',
      'Copy options',
      'Clear contents',
      'Format',
      'Rows',
      'Filter',
      'Export',
      'Inspect cell',
      'View employee profile',
    ]) {
      await expect(page.getByRole('menuitem', { name: item, exact: true })).toBeVisible()
    }
    await page.keyboard.press('Escape')
    await expect(
      page.getByRole('menuitem', { name: 'View employee profile', exact: true }),
    ).toBeHidden()

    await adaName.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'View employee profile', exact: true }).click()
    const profile = page.getByRole('dialog', { name: 'Employee profile' })
    await expect(profile).toContainText('Employee #101')
    await expect(profile).toContainText('Ada Lovelace · Platform')
    await expect(profile).toContainText('Score')
    await expect(profile.locator('[data-detail="Score"]')).toHaveText('98 / 100')
    await profile.getByRole('button', { name: 'Done' }).click()

    const rowHeader = grid
      .locator('revogr-data[col-type="rowHeaders"] .rgCell[data-rgrow="0"]')
      .first()
    await expect(rowHeader).toBeVisible()
    await rowHeader.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'View row details', exact: true }).click()
    const rowDetails = page.getByRole('dialog', { name: 'Row details' })
    await expect(rowDetails.locator('[data-detail="Employee ID"]')).toHaveText('101')
    await expect(rowDetails.locator('[data-detail="Owner"]')).toHaveText('Avery Stone')
    await rowDetails.getByRole('button', { name: 'Done' }).click()

    const nameHeader = grid.locator('revogr-header .rgHeaderCell[data-rgcol="1"]').first()
    await expect(nameHeader).toHaveText('Name')
    await nameHeader.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'View column summary', exact: true }).click()
    const columnDetails = page.getByRole('dialog', { name: 'Column summary' })
    await expect(columnDetails.locator('[data-detail="Property"]')).toHaveText('name')
    await expect(columnDetails.locator('[data-detail="Visible rows"]')).toHaveText('9')
    await columnDetails.getByRole('button', { name: 'Done' }).click()

    const identityGroup = grid
      .locator('.group-rgRow .rgHeaderCell')
      .filter({
        hasText: 'Identity',
      })
      .first()
    await expect(identityGroup).toBeVisible()
    await identityGroup.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'View column-group summary', exact: true }).click()
    const groupDetails = page.getByRole('dialog', { name: 'Column-group summary' })
    await expect(groupDetails).toContainText('Identity')
    await expect(groupDetails.locator('[data-detail="Child columns"]')).toHaveText('2')
    await expect(groupDetails.locator('[data-detail="Properties"]')).toHaveText('id, name')
    await groupDetails.getByRole('button', { name: 'Done' }).click()
  })

  test('CONTEXT-004 duplicates, edits, inserts, and resets fixture rows through the docs menu', async ({
    page,
  }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const adaName = grid.locator('.rgCell[data-rgcol="1"][data-rgrow="0"]').first()

    await adaName.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'Rows', exact: true }).hover()
    await page.getByRole('menuitem', { name: 'Duplicate row(s)', exact: true }).click()
    await expect(grid.getByText('110', { exact: true })).toBeVisible()
    await expect(grid.locator('.rgCell[data-rgcol="1"][data-rgrow="1"]').first()).toHaveText(
      'Ada Lovelace',
    )

    const duplicateName = grid.locator('.rgCell[data-rgcol="1"][data-rgrow="1"]').first()
    await duplicateName.dblclick()
    const editor = grid.locator('input').last()
    await editor.fill('Ada duplicate')
    await editor.press('Enter')
    await expect(duplicateName).toHaveText('Ada duplicate')
    await expect(adaName).toHaveText('Ada Lovelace')

    await adaName.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'Rows', exact: true }).hover()
    await page.getByRole('menuitem', { name: 'Insert row below', exact: true }).click()
    const insertedName = grid.locator('.rgCell[data-rgcol="1"][data-rgrow="1"]').first()
    await expect(grid.getByText('111', { exact: true })).toBeVisible()
    await expect(insertedName).toHaveText('')
    await expect(grid.locator('.rgCell[data-rgcol="3"][data-rgrow="1"]').first()).toHaveText('')
    await expect(grid.locator('.rgCell[data-rgcol="4"][data-rgrow="1"]').first()).toHaveText('')

    await page.reload()
    await expect(grid).toBeVisible()
    await expect(grid.getByText('Ada Lovelace', { exact: true })).toHaveCount(1)
    await expect(grid.getByText('110', { exact: true })).toHaveCount(0)
    await expect(grid.getByText('111', { exact: true })).toHaveCount(0)
  })

  test('CONTEXT-005 applies a cell advanced format and omits the disabled Pie option', async ({
    page,
  }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const graceScore = grid.locator('.rgCell[data-rgcol="4"][data-rgrow="1"]').first()

    await graceScore.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'Format', exact: true }).hover()
    await page.getByRole('menuitem', { name: 'More formats…', exact: true }).click()
    const dialog = page.getByRole('dialog', { name: 'Format cells' })
    await expect(dialog.getByRole('option', { name: 'Pie chart', exact: true })).toHaveCount(0)
    await dialog.getByRole('option', { name: 'Circular progress', exact: true }).click()
    await dialog.getByRole('button', { name: 'Apply', exact: true }).click()
    await expect(graceScore.locator('.circular-progress-container')).toBeVisible()
    await expect(graceScore).toContainText('95%')
    await expect(
      grid
        .locator('.rgCell[data-rgcol="4"][data-rgrow="0"]')
        .first()
        .locator('.circular-progress-container'),
    ).toBeVisible()
  })

  test('CONTEXT-005 changes a Status cell through its dropdown presentation', async ({ page }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const adaStatus = grid.locator('.rgCell[data-rgcol="3"][data-rgrow="0"]').first()

    await expect(adaStatus).toHaveText('Active')
    await adaStatus.dblclick()
    const reviewOption = page.getByRole('option', { name: 'Review', exact: true })
    await expect(reviewOption).toBeVisible()
    await reviewOption.click()
    await expect(adaStatus).toHaveText('Review')

    await adaStatus.dblclick()
    await expect(page.getByRole('option', { name: 'Review', exact: true })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await page.keyboard.press('Escape')
    await expect(adaStatus).toHaveText('Review')
  })

  test('CONTEXT-005 omits column formatting for the mixed-readonly Score column', async ({
    page,
  }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const scoreHeader = grid.locator('revogr-header .rgHeaderCell[data-rgcol="4"]').first()
    const adaScore = grid.locator('.rgCell[data-rgcol="4"][data-rgrow="0"]').first()
    const graceScore = grid.locator('.rgCell[data-rgcol="4"][data-rgrow="1"]').first()

    await scoreHeader.click({ button: 'right' })
    await expect(page.getByRole('menuitem', { name: 'Format', exact: true })).toHaveCount(0)
    await page.keyboard.press('Escape')
    await expect(adaScore.locator('.circular-progress-container')).toBeVisible()
    await expect(graceScore).toHaveText('95.0%')
  })

  test('CONTEXT-005 pins and unpins a row through the row-header menu', async ({ page }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const adaRowHeader = grid
      .locator('revogr-data[col-type="rowHeaders"] .rgCell[data-rgrow="0"]')
      .first()
    await adaRowHeader.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'Pin', exact: true }).hover()
    await page.getByRole('menuitem', { name: 'Pin to top', exact: true }).click()
    await expect(
      grid.locator('revogr-data[type="rowPinStart"]').getByText('Ada Lovelace', { exact: true }),
    ).toBeVisible()
    await expect(
      grid.locator('revogr-data[type="rgRow"]').getByText('Ada Lovelace', { exact: true }),
    ).toHaveCount(0)

    const pinnedAdaRowHeader = grid
      .locator('revogr-data[type="rowPinStart"][col-type="rowHeaders"] .rgCell[data-rgrow="0"]')
      .first()
    await pinnedAdaRowHeader.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'Pin', exact: true }).hover()
    await page.getByRole('menuitem', { name: 'Unpin row(s)', exact: true }).click()
    await expect(
      grid.locator('revogr-data[type="rgRow"]').getByText('Ada Lovelace', { exact: true }),
    ).toBeVisible()
    await expect(
      grid.locator('revogr-data[type="rowPinStart"]').getByText('Ada Lovelace', { exact: true }),
    ).toHaveCount(0)
  })

  test('CONTEXT-006 keeps owner typography selection-scoped and clearable', async ({ page }) => {
    await openDemo(page, '/demo/context-menu', '.data-grid-context-menu-grid')
    const grid = page.locator('.data-grid-context-menu-grid')
    const toolbar = page.getByRole('toolbar', { name: 'Formatting toolbar' })
    const bold = toolbar.getByRole('button', { name: 'Bold' })
    const italic = toolbar.getByRole('button', { name: 'Italic' })
    const underline = toolbar.getByRole('button', { name: 'Underline' })
    const adaOwner = grid.locator('.rgCell[data-rgcol="5"][data-rgrow="0"]').first()
    const graceOwner = grid.locator('.rgCell[data-rgcol="5"][data-rgrow="1"]').first()

    await adaOwner.click()
    await bold.click()
    await italic.click()
    await underline.click()
    await expect(bold).toHaveAttribute('aria-pressed', 'true')
    await expect(italic).toHaveAttribute('aria-pressed', 'true')
    await expect(underline).toHaveAttribute('aria-pressed', 'true')
    await expect(adaOwner).toHaveText('Avery Stone')

    await graceOwner.click()
    await expect(bold).toHaveAttribute('aria-pressed', 'false')
    await expect(italic).toHaveAttribute('aria-pressed', 'false')
    await expect(underline).toHaveAttribute('aria-pressed', 'false')
    await adaOwner.click()
    await expect(bold).toHaveAttribute('aria-pressed', 'true')
    await expect(italic).toHaveAttribute('aria-pressed', 'true')
    await expect(underline).toHaveAttribute('aria-pressed', 'true')

    await toolbar.getByRole('button', { name: 'Clear formatting' }).click()
    await expect(bold).toHaveAttribute('aria-pressed', 'false')
    await expect(italic).toHaveAttribute('aria-pressed', 'false')
    await expect(underline).toHaveAttribute('aria-pressed', 'false')
    await expect(adaOwner).toHaveText('Avery Stone')
    await expect(graceOwner).toHaveText('Morgan Lee')
  })

  test('row master opens the correct project detail and closes it', async ({ page }) => {
    await openDemo(page, '/demo/row-master', '.row-master-grid')
    await expect(page.getByText('Warehouse Routing Console', { exact: true })).toBeVisible()
    await page.getByText('Warehouse Routing Console', { exact: true }).click()
    await expect(page.getByText('Sam Rivera', { exact: true })).toBeVisible()
    await expect(page.getByText('$620K', { exact: true })).toBeVisible()
    await page.getByRole('button', { name: /close/i }).click()
    await expect(page.getByText('$620K', { exact: true })).toBeHidden()
  })

  test('row master reopens the same detail without attaching it to another project', async ({
    page,
  }) => {
    await openDemo(page, '/demo/row-master', '.row-master-grid')
    const openWarehouse = page.getByRole('button', {
      name: 'Open details for Warehouse Routing Console',
    })
    await openWarehouse.click()
    await expect(page.locator('.row-master-panel')).toContainText('Warehouse Routing Console')
    await expect(page.locator('.row-master-panel')).toContainText('Route simulation approved')
    await page.getByRole('button', { name: /close/i }).click()
    await expect(page.locator('.row-master-panel')).toHaveCount(0)
    await openWarehouse.click()
    await expect(page.locator('.row-master-panel')).toContainText('Owner: Sam Rivera')
  })

  test('MASTER-005 opens and closes a detail through its keyboard-operable control', async ({
    page,
  }) => {
    await openDemo(page, '/demo/row-master', '.row-master-grid')
    const details = page.getByRole('button', { name: 'Open details for Warehouse Routing Console' })
    await details.focus()
    await expect(details).toBeFocused()
    await details.press('Enter')
    await expect(page.locator('.row-master-panel')).toContainText('Warehouse Routing Console')
    await page.getByRole('button', { name: /close/i }).click()
    await expect(page.locator('.row-master-panel')).toHaveCount(0)
  })

  test('MASTER-001 keeps the hierarchy affordance on parents and details on leaves', async ({
    page,
  }) => {
    await openDemo(page, '/demo/row-master', '.row-master-grid')
    const grid = page.locator('.row-master-grid')
    await expect(grid.getByText('North Star Operations', { exact: true })).toBeVisible()
    await expect(grid.getByText('Fulfillment Modernization', { exact: true })).toBeVisible()
    await expect(grid.getByText('Warehouse Routing Console', { exact: true })).toBeVisible()
    await expect(grid.getByText('Sam Rivera', { exact: true })).toBeVisible()
    await expect(grid.getByText('82', { exact: true })).toBeVisible()
    await expect(grid.getByText('$620K', { exact: true })).toBeVisible()
    await expect(grid.getByText('Mar–Jul', { exact: true })).toBeVisible()
    await expect(
      page.getByRole('button', {
        name: 'Open details for Warehouse Routing Console',
      }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', {
        name: 'Open details for North Star Operations',
      }),
    ).toHaveCount(0)
  })

  test('MASTER-003 replaces a closed detail with the independently selected project detail', async ({
    page,
  }) => {
    await openDemo(page, '/demo/row-master', '.row-master-grid')
    await page.getByRole('button', { name: 'Open details for Warehouse Routing Console' }).click()
    await expect(page.locator('.row-master-panel')).toContainText('Warehouse Routing Console')
    await page.getByRole('button', { name: /close/i }).click()
    await page.getByRole('button', { name: 'Open details for Inventory Pulse' }).click()
    await expect(page.locator('.row-master-panel')).toContainText('Inventory Pulse')
    await expect(page.locator('.row-master-panel')).toContainText('Owner: Priya Shah')
    await expect(page.locator('.row-master-panel')).not.toContainText('Warehouse Routing Console')
  })

  test('audit history renders the ledger and records a committed edit', async ({ page }) => {
    await openDemo(page, '/demo/audit-history', '.audit-grid')
    const panel = page.locator('.audit-panel-host')
    await expect(panel).toContainText('Change ledger')
    await expect(page.getByText('INV-2048', { exact: true })).toBeVisible()
    await expect(panel).toContainText('Submitted for finance review')

    const customer = page.getByText('Northwind', { exact: true }).first()
    await customer.dblclick()
    const editor = page.locator('input').filter({ hasValue: 'Northwind' })
    await editor.fill('Northwind Labs')
    await editor.press('Enter')
    await expect(page.getByText('Northwind Labs', { exact: true })).toBeVisible()
    await expect(panel).toContainText('Northwind Labs')
    await page.getByText('Northwind Labs', { exact: true }).first().dblclick()
    await page.locator('.audit-grid input').fill('Northwind Labs draft')
    await page.keyboard.press('Escape')
    await expect(page.getByText('Northwind Labs', { exact: true })).toBeVisible()
    await expect(panel).not.toContainText('Northwind Labs draft')
  })

  test('audit history exposes compare, restore and JSON export for a live edit', async ({
    page,
  }) => {
    await openDemo(page, '/demo/audit-history', '.audit-grid')
    const panel = page.getByTestId('audit-history-panel')
    const customer = page.getByText('Northwind', { exact: true }).first()
    await customer.dblclick()
    await page.locator('.audit-grid input').fill('Northwind Labs')
    await page.keyboard.press('Enter')
    await panel.getByText('Northwind Labs', { exact: true }).click()
    await panel.getByRole('button', { name: 'Compare' }).click()
    await expect(page.getByRole('complementary', { name: 'Compare changes' })).toContainText(
      'Northwind Labs',
    )
    await page.getByRole('button', { name: 'Close compare' }).click()
    await panel.getByRole('button', { name: 'Restore cell' }).click()
    await expect(page.getByText('Northwind', { exact: true }).first()).toBeVisible()

    await panel.getByRole('button', { name: 'Export' }).click()
    const download = page.waitForEvent('download')
    await panel.getByRole('menuitem', { name: 'Export JSON' }).click()
    expect((await download).suggestedFilename()).toBe('revogrid-audit-history.json')

    await panel.getByRole('button', { name: 'Export' }).click()
    const csvDownload = page.waitForEvent('download')
    await panel.getByRole('menuitem', { name: 'Export CSV' }).click()
    expect((await csvDownload).suggestedFilename()).toBe('revogrid-audit-history.csv')
  })

  test('Excel workbench exposes formula controls and undo state after an edit', async ({
    page,
  }) => {
    await openDemo(page, '/demo/excel', '.spreadsheet-grid')
    await expect(page.getByTestId('spreadsheet-sheet-budget')).toBeVisible()
    await expect(page.getByLabel('Live collaborators')).toBeVisible()
    await expect(page.getByTestId('spreadsheet-formula-host')).toBeVisible()
    await expect(page.getByText('Avery Stone', { exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: /Undo 0/ })).toBeDisabled()
  })

  test('Excel workbench commits a visible edit and makes undo and redo available', async ({
    page,
  }) => {
    await openDemo(page, '/demo/excel', '.spreadsheet-grid')
    const grid = page.locator('.spreadsheet-grid')
    const owner = grid.getByText('Avery Stone', { exact: true })
    await owner.dblclick()
    const editor = grid.locator('input').last()
    await editor.fill('Avery E2E')
    await editor.press('Enter')
    await expect(grid.getByText('Avery E2E', { exact: true })).toBeVisible()
    const undo = page.getByRole('button', { name: /Undo 1/ })
    await expect(undo).toBeEnabled()
    await undo.click()
    await expect(grid.getByText('Avery Stone', { exact: true })).toBeVisible()
    const redo = page.getByRole('button', { name: /Redo 1/ })
    await expect(redo).toBeEnabled()
    await redo.click()
    await expect(grid.getByText('Avery E2E', { exact: true })).toBeVisible()
  })

  test('EXCEL-003 rejects a negative currency edit and keeps the readonly trend protected', async ({
    page,
  }) => {
    await page.clock.install({ time: new Date('2026-01-01T00:00:00Z') })
    await openDemo(page, '/demo/excel', '.spreadsheet-grid')
    const grid = page.locator('.spreadsheet-grid')
    const jan = grid.locator('.rgCell[data-rgcol="2"][data-rgrow="0"]').first()
    const total = grid.locator('.rgCell[data-rgcol="5"][data-rgrow="0"]').first()
    const trend = grid.locator('.rgCell[data-rgcol="9"][data-rgrow="0"]').first()
    const originalJan = await jan.textContent()
    const originalTotal = await total.textContent()
    const originalTrend = await trend.textContent()

    await jan.dblclick()
    const editor = grid.locator('input').last()
    await editor.fill('-1')
    await editor.press('Enter')
    await expect(jan).toHaveAttribute('invalid', '')
    await expect(jan.locator('.validation-indicator')).toHaveAttribute(
      'aria-label',
      'Enter a non-negative number.',
    )
    await expect(jan).toHaveText(originalJan ?? '')
    await expect(total).toHaveText(originalTotal ?? '')

    await trend.dblclick()
    await expect(trend).toHaveText(originalTrend ?? '')
  })

  test('EXCEL-007 commits, cancels, revisits, and undoes Avery Stone Q1 through the formula bar', async ({
    page,
  }) => {
    await page.clock.install({ time: new Date('2026-01-01T00:00:00Z') })
    await openDemo(page, '/demo/excel', '.spreadsheet-grid')
    const grid = page.locator('.spreadsheet-grid')
    const formulaHost = page.getByTestId('spreadsheet-formula-host')
    const f1 = grid.locator('.rgCell[data-rgcol="5"][data-rgrow="0"]').first()
    const f2 = grid.locator('.rgCell[data-rgcol="5"][data-rgrow="1"]').first()

    await f1.click()
    await expect(page.locator('.spreadsheet-cell-badge')).toHaveText('F1')
    await formulaHost.getByRole('button', { name: 'Edit formula' }).click()
    const formula = formulaHost.getByTestId('formula-bar-input')
    await expect(formula).toHaveValue('=SUM(C1:E1)')
    await formula.fill('=SUM(C1:E1)+1000')
    await formula.press('Enter')
    await expect(formula).toHaveValue('=SUM(C1:E1)+1000')

    await formula.fill('=1')
    await formula.press('Escape')
    await expect(formula).toHaveValue('=SUM(C1:E1)+1000')

    await grid.hover()
    await page.mouse.wheel(0, 1_000)
    await page.mouse.wheel(0, -1_000)
    await f2.click()
    await expect(page.locator('.spreadsheet-cell-badge')).toHaveText('F2')
    await expect(formula).toHaveValue('=SUM(C2:E2)')
    await f1.click()
    await expect(page.locator('.spreadsheet-cell-badge')).toHaveText('F1')
    await expect(formula).toHaveValue('=SUM(C1:E1)+1000')

    await expect(page.getByRole('button', { name: /Undo 1/ })).toBeEnabled()
    await page.getByRole('button', { name: /Undo 1/ }).click()
    await expect(formula).toHaveValue('=SUM(C1:E1)')
  })

  test('Excel workbench exports the current workbook through its rendered ribbon', async ({
    page,
  }) => {
    await openDemo(page, '/demo/excel', '.spreadsheet-grid')
    const download = page.waitForEvent('download')
    await page.getByTestId('spreadsheet-export').click()
    expect((await download).suggestedFilename()).toBe('revogrid-spreadsheet-workbench.xlsx')
    await expect(page.getByTestId('spreadsheet-workbook-status')).toContainText('Budget')
  })

  test('EXCEL-005 keeps the workbook and collaborator indicator usable while its local feed runs', async ({
    page,
  }) => {
    await openDemo(page, '/demo/excel', '.spreadsheet-grid')
    const workbench = page.getByTestId('spreadsheet-workbench')
    const status = workbench.locator('.spreadsheet-status-row')
    await expect(page.getByLabel('Live collaborators')).toBeVisible()
    await expect(status).not.toBeEmpty()
    await page.waitForTimeout(1_900)
    await expect(page.getByLabel('Live collaborators')).toBeVisible()
    await expect(page.getByTestId('spreadsheet-workbook-status')).toContainText('Budget')
  })
})

test.describe('Project Tracker narrow layout', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('keeps every bulk action within distinct, readable mobile targets', async ({ page }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    const controls = page.locator('project-tracker-toolbar .project-bulk-bar > *')
    await expect(controls).toHaveCount(5)
    for (let index = 0; index < 5; index += 1) {
      await expect(controls.nth(index)).toBeVisible()
    }

    const boxes = await controls.evaluateAll(elements =>
      elements.map(element => {
        const { left, right, top, bottom } = element.getBoundingClientRect()
        return { left, right, top, bottom }
      }),
    )

    expect(boxes.every(({ left, right }) => left >= 0 && right <= 390)).toBe(true)
    for (let index = 0; index < boxes.length; index += 1) {
      for (let other = index + 1; other < boxes.length; other += 1) {
        const first = boxes[index]
        const second = boxes[other]
        const overlaps =
          first.left < second.right &&
          first.right > second.left &&
          first.top < second.bottom &&
          first.bottom > second.top
        expect(overlaps).toBe(false)
      }
    }
  })
})
