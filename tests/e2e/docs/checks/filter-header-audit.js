// Prerequisites: docs preview on 49281 and Pro portal preview on 4329.
// Run with playwright-cli run-code "$(cat tests/e2e/docs/checks/filter-header-audit.js)"
async page => {
  const fixtures = [
    { path: '/demo/color' },
    { path: '/demo/filtering' },
    { path: '/demo/column-collapse' },
    { path: '/demo/excel' },
    { path: '/demo/' },
    { path: '/', tab: 'tree' },
    { path: '/', tab: 'control' },
    { path: '/guides/data-filter/filter-header/', portal: true },
    { path: '/guides/data-filter/filter-types/date-filter/', portal: true },
    { path: '/guides/columns/column-collapse/', portal: true },
    { path: '/guides/cells/sticky-cells/', portal: true },
  ];
  const report = [];
  const inspect = async grid => {
    const headers = await grid.locator('.filter-header-content').evaluateAll(rows => rows.map(row => {
      const label = row.querySelector('.filter-header-label') ?? row.firstElementChild ?? row;
      const box = row.getBoundingClientRect();
      const range = document.createRange();
      range.selectNodeContents(label);
      const text = range.getBoundingClientRect();
      const labelBox = label.getBoundingClientRect();
      const filter = row.closest('.rgHeaderCell').querySelector('.rv-filter:not(.filter-header-selection-trigger)');
      const control = filter?.getBoundingClientRect();
      return {
        label: label.textContent?.trim(),
        visible: box.width > 0 && box.height > 0,
        offset: Math.abs((text.top + text.bottom - box.top - box.bottom) / 2),
        overlap: !!control && control.width > 0 && Math.min(text.right, labelBox.right) > control.left && Math.max(text.left, labelBox.left) < control.right && text.bottom > control.top && text.top < control.bottom,
      };
    }));
    for (const h of headers) {
      if (h.visible && h.label && (h.offset > 3 || h.overlap)) throw new Error(JSON.stringify(h));
    }
    return headers.filter(h => h.visible && h.label).length;
  };
  for (const fixture of fixtures) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`http://127.0.0.1:${fixture.portal ? 4329 : 49281}${fixture.path}`, {waitUntil: 'domcontentloaded'});
    if (fixture.tab) await page.locator(`#rg-showcase-tab-${fixture.tab}`).click();
    const grid = page.locator(fixture.tab ? `#rg-showcase-panel-${fixture.tab} revo-grid.filter-header` : 'revo-grid.filter-header').first();
    await grid.locator('.filter-header-content').first().waitFor({ timeout: 30000 });
    for (const dark of [false, true]) {
      await page.setViewportSize({ width: 1440, height: 1000 });
      if (fixture.portal) {
        await page.locator('select:visible').first().selectOption(dark ? 'dark' : 'light');
      } else {
        const appearance = page.getByRole('switch', { name: 'Appearance' });
        if ((await appearance.getAttribute('aria-checked') === 'true') !== dark) await appearance.click();
      }
      await grid.locator('.filter-header-content').first().waitFor();
      for (const width of [1440, 768, 390]) {
        await page.setViewportSize({ width, height: 1000 });
        await grid.scrollIntoViewIfNeeded();
        const count = await inspect(grid);
        if (!count) throw new Error(`Missing header labels: ${fixture.path}`);
        report.push({ path: fixture.path, tab: fixture.tab, dark, width, labels: count });
      }
    }
    await grid.screenshot({ path: `output/playwright/filter-header-${fixture.path.replace(/\W/g, '-')}${fixture.tab ?? ''}.png` });
    await page.setViewportSize({ width: 1440, height: 1000 });
    const sortable = grid.locator('.rgHeaderCell.sortable .filter-header-label').first();
    if (await sortable.count()) {
      await sortable.click();
      await inspect(grid);
    }
  }
  return { checked: report.length, layouts: report };
}
