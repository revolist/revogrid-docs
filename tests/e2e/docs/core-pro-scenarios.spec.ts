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

  test('project tracker enables and clears bulk actions with its selection', async ({ page }) => {
    await openDemo(page, '/demo/color', '.project-tracker-grid')
    const toolbar = page.locator('project-tracker-toolbar')
    const markReady = toolbar.locator('[data-bulk-action="markReady"]')
    await expect(markReady).toBeDisabled()

    const rows = page.locator('.project-tracker-grid .row-select-checkbox')
    await expect(rows.nth(1)).toBeVisible()
    await rows.nth(1).check()
    await expect(toolbar.locator('.project-selection-count')).toContainText('1 of 16 selected')
    await expect(markReady).toBeEnabled()
    await markReady.click()
    await expect(toolbar.locator('.project-selection-count')).toContainText('0 of 16 selected')
    await expect(markReady).toBeDisabled()
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

  test('infinite scroll keeps its remote directory status while scrolling', async ({ page }) => {
    await openDemo(page, '/demo/infinity-scroll', '.infinity-grid')
    const status = page.locator('.infinity-status')
    await expect(status).toContainText('Loaded 1,000 matching records')
    await page.locator('.infinity-grid').hover()
    await page.mouse.wheel(0, 1800)
    await expect(status).toContainText('Loaded 1,000 matching records')
    await expect(page.getByText('Remote User 010', { exact: false }).first()).toBeVisible()
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
})
