// Run with playwright-cli run-code "$(cat tests/e2e/docs/checks/project-tracker-headers.js)"
async page => {
  const grid = page.locator('revo-grid.project-tracker-grid');
  await grid.locator('.filter-header-label').first().waitFor();
  const checkLabels = async () => {
    const results = await grid.locator('.filter-header-label').evaluateAll(labels =>
      labels.map(label => {
        const range = document.createRange();
        range.selectNodeContents(label);
        const text = range.getBoundingClientRect();
        const row = label.closest('.filter-header-content').getBoundingClientRect();
        return { label: label.textContent, offset: Math.abs((text.top + text.bottom - row.top - row.bottom) / 2) };
      })
    );
    for (const result of results) {
      if (result.offset > 2) throw new Error(`Header ${result.label} is off center by ${result.offset}px`);
    }
  };
  for (const width of [1440, 768]) {
    await page.setViewportSize({ width, height: 1000 });
    await checkLabels();
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  const name = grid.locator('.rgHeaderCell').filter({ has: page.locator('.filter-header-label', { hasText: 'Project name' }) });
  await name.locator('.filter-header-label').click();
  await checkLabels();
  if (!await name.locator('.sort-indicator .asc, .sort-indicator .desc').count()) throw new Error('Sorting did not activate');
  const search = grid.getByRole('textbox', { name: 'Filter Project name', exact: true });
  await search.fill('unlikely-project-name-no-results');
  await checkLabels();
  await search.fill('');
  await page.evaluate(() => document.documentElement.classList.add('dark'));
  await checkLabels();
  await page.evaluate(() => document.documentElement.classList.remove('dark'));
  console.log('Project tracker headers: centered at desktop/tablet widths, sorted, filtered, and dark theme');
}
