// Prerequisites: docs preview on 49283; Pro portal preview on 4329.
// Run with playwright-cli run-code "$(cat tests/e2e/docs/checks/dropdown-interactions-audit.js)"
async page => {
  page.setDefaultTimeout(5000);
  const fixtures = [
    {path:'/demo/', controls:[{name:'Project',option:'Customer portal'},{name:'Status',option:'In progress'},{name:'Priority',option:'High'}]},
    {path:'/demo/property-booking',controls:[{name:'Property type',option:'Cabin'},{name:'Minimum sleeps',option:'4+ guests'}]},
    {path:'/demo/event-scheduler',controls:[{name:'Calendar preset'}]},
    {path:'/demo/grid-at-scale',controls:[{name:'Data Source',option:'1,000 rows × 100 columns'},{name:'Theme',option:'Material'}]},
    {path:'/demo/pivot-charts',controls:[{name:'Year',option:'2024'},{name:'Brand',option:'Fabrikam'}]},
    {path:'/demo/context-menu',controls:[{name:'Font'}]},
    {path:'/demo/excel',controls:[{selector:'revo-grid .rgCell [role=combobox]',option:'Sales'}]},
    {path:'/guides/editors/editor-dropdown/',portal:true,controls:[
      {cell:'revo-grid .rgCell[data-rgcol="1"][data-rgrow="0"]',option:'Complete'},
      {cell:'revo-grid .rgCell[data-rgcol="2"][data-rgrow="0"]',option:'QA',multi:true},
    ]},
  ];
  const results = [], runtimeErrors = [];
  const onError = error => { if (/__H|Invalid hook|Cannot read properties/.test(error.message)) runtimeErrors.push(error.message); };
  page.on('pageerror',onError);
  try {
    for (const fixture of fixtures) {
      await page.setViewportSize({width:1440,height:1000});
      await page.goto(`http://127.0.0.1:${fixture.portal ? 4329 : 49283}${fixture.path}`,{waitUntil:'domcontentloaded'});
      await page.locator('revo-grid .rgCell').first().waitFor({timeout:30000});
      if (fixture.path === '/demo/event-scheduler') await page.locator('revogr-scheduler-header').getByRole('tab',{name:'Calendar',exact:true}).click();
      for (const dark of [false,true]) {
        await page.setViewportSize({width:1440,height:1000});
        if (fixture.portal) await page.locator('select:visible').first().selectOption(dark?'dark':'light');
        else {
          const theme=page.getByRole('switch',{name:'Appearance'});
          if ((await theme.getAttribute('aria-checked') === 'true') !== dark) await theme.click();
        }
        for (const width of [1440,390]) {
          await page.setViewportSize({width,height:1000});
          for (const control of fixture.controls) {
            const label=control.name ?? control.cell ?? control.selector;
            try {
              const trigger=control.cell ? page.locator(control.cell).first() : control.selector ? page.locator(control.selector).first() : page.getByRole('combobox',{name:control.name,exact:true});
              const open=async()=>{
                if(fixture.path === '/demo/context-menu') {
                  await page.locator('.data-grid-context-menu-grid .rgCell').filter({hasText:'Grace Hopper'}).first().click();
                  if(!await trigger.isVisible())await page.getByRole('button',{name:'More formatting options',exact:true}).click();
                }
                const controlElement=control.cell?trigger.getByRole('combobox'):trigger;
                await controlElement.waitFor({state:'visible'});
                await controlElement.scrollIntoViewIfNeeded();
                // Grid dropdowns intentionally close on viewport scrolling. Let
                // revealing an offscreen control settle before opening it.
                await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
                await controlElement.click();
              };
              await open();
              const options=page.locator('.revo-dropdown-menu:visible').getByRole('option');
              const option=control.option ? page.locator('.revo-dropdown-menu:visible').getByRole('option',{name:control.option,exact:true}) : options.nth(1);
              await option.waitFor({state:'visible',timeout:5000});
              const selected=(await option.textContent()).trim();
              const bounds=await (await page.waitForFunction(()=>{
                const menu=[...document.querySelectorAll('.revo-dropdown-menu')].find(e=>e.getBoundingClientRect().width>0);
                return menu?.getBoundingClientRect().toJSON();
              },null,{timeout:5000})).jsonValue();
              if(bounds.x<0||bounds.x+bounds.width>width+1||bounds.y<0||bounds.y+bounds.height>1001)throw new Error(`Popup outside viewport: ${JSON.stringify(bounds)}`);
              const alreadySelected=(await trigger.textContent()).includes(selected);
              await option.click();
              if(control.multi)await page.keyboard.press('Escape');
              await page.waitForFunction(({selector,name,text,multi,alreadySelected})=>{
                const element=selector ? document.querySelector(selector) : [...document.querySelectorAll('[role=combobox]')].find(e=>e.getAttribute('aria-label')===name);
                return !!element && (multi ? element.textContent.includes(text) !== alreadySelected : element.textContent.includes(text));
              },{selector:control.cell??control.selector,name:control.name,text:selected,multi:!!control.multi,alreadySelected},{timeout:5000});
              await open();
              await page.locator('.revo-dropdown-menu:visible').getByRole('option').first().waitFor({state:'visible',timeout:5000});
              await page.keyboard.press('Escape');
              await page.locator('.revo-dropdown-menu [role=option]:visible').first().waitFor({state:'hidden',timeout:5000});
              await open();
              await page.locator('.revo-dropdown-menu:visible').getByRole('option').first().waitFor({state:'visible',timeout:5000});
              await page.locator('h1').first().click();
              await page.locator('.revo-dropdown-menu [role=option]:visible').first().waitFor({state:'hidden',timeout:5000});
              results.push({path:fixture.path,label,dark,width,pass:true});
            } catch(error) {
              results.push({path:fixture.path,label,dark,width,pass:false,error:error.message});
              await page.keyboard.press('Escape');
            }
          }
        }
      }
    }
  } finally {page.removeListener('pageerror',onError);}
  return {passed:results.filter(r=>r.pass).length,failed:results.filter(r=>!r.pass),runtimeErrors,results};
}
