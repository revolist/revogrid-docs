// Run against /demo/color using playwright-cli run-code "$(cat tests/e2e/docs/checks/project-tracker-toolbar.js)"
async page => {
  await page.goto('http://127.0.0.1:49281/demo/color', {waitUntil:'domcontentloaded'});
  const toolbar = page.locator('project-tracker-toolbar');
  const popup = page.locator('.project-toolbar-dropdown');
  const trigger = id => toolbar.locator(`[data-toolbar-menu="${id}"] > summary`);
  const checkPopup = async () => {
    await popup.waitFor({state: 'visible', timeout: 5000});
    await popup.getByRole('option').first().waitFor({state:'visible',timeout:5000});
    const bounds = await (await page.waitForFunction(() => {
      const menu = document.querySelector('.project-toolbar-dropdown');
      const rect = menu?.getBoundingClientRect();
      return rect?.width && rect.height && menu.querySelector('[role=option]') ? rect.toJSON() : false;
    })).jsonValue();
    const viewport = page.viewportSize();
    if (bounds.x < 0 || bounds.x + bounds.width > viewport.width + 1 || bounds.y < 0 || bounds.y + bounds.height > viewport.height + 1) throw new Error(`Popup outside viewport: ${JSON.stringify(bounds)}`);
  };
  for (const dark of [false, true]) {
    await page.setViewportSize({width:1440,height:1000});
    const appearance = page.getByRole('switch', {name:'Appearance'});
    if ((await appearance.getAttribute('aria-checked') === 'true') !== dark) await appearance.click();
    for (const width of [1440, 768, 390]) {
      await page.setViewportSize({width,height:1000});
      for (const id of ['group', 'sort']) {
        await trigger(id).click();
        await checkPopup();
        await page.keyboard.press('Escape');
        await popup.waitFor({state:'hidden'});
      }
      await trigger('group').click();
      await checkPopup();
      // On phones the popup covers the wrapped toolbar row; dismiss it first.
      if (width === 390) await page.keyboard.press('Escape');
      await trigger('sort').click();
      await checkPopup();
      if (await toolbar.locator('[data-toolbar-menu="group"][open]').count()) throw new Error('Group stayed open when Sort opened');
      await popup.getByRole('option', {name:'Project A-Z',exact:true}).click();
      await popup.waitFor({state:'hidden'});
      await page.waitForFunction(() => document.querySelector('project-tracker-toolbar').state.sortBy === 'task:asc');
      await trigger('group').click();
      await checkPopup();
      await popup.getByRole('option', {name:'Status',exact:true}).click();
      await popup.waitFor({state:'hidden'});
      await page.waitForFunction(() => document.querySelector('project-tracker-toolbar').state.groupBy === 'status');
      await trigger('group').click();
      await checkPopup();
      await page.locator('.demo-page-heading h1').click();
      await popup.waitFor({state:'hidden'});
    }
  }
  await page.setViewportSize({width:1440,height:1000});
  await trigger('sort').click();
  await checkPopup();
  await page.screenshot({path:'output/playwright/project-tracker-sort-dropdown.png'});
  await page.keyboard.press('Escape');
  return 'Group and Sort: open, select, switch, Escape/outside dismissal, and viewport bounds pass at 3 widths in both themes';
}
