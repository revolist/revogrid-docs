async page=>{
  page.setDefaultTimeout(8000);
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('http://127.0.0.1:49283/demo/color',{waitUntil:'domcontentloaded'});
  const grid=page.locator('revo-grid.project-tracker-grid');
  await grid.locator('.rgCell').first().waitFor();
  const results=[];
  const assertHitTargets=async checkboxes=>{
    const options=await checkboxes.evaluateAll(es=>es.map(e=>{
      const box=e.getBoundingClientRect(),list=e.closest('.filter-list').getBoundingClientRect();
      return {label:e.closest('label').textContent.trim(),visible:box.top>=list.top&&box.bottom<=list.bottom,hit:document.elementFromPoint(box.x+box.width/2,box.y+box.height/2)===e};
    }).filter(r=>r.visible));
    if(!options.length)throw new Error('No checkbox options are visible');
    const covered=options.filter(r=>!r.hit);
    if(covered.length)throw new Error(`Option checkboxes are covered: ${JSON.stringify(covered)}`);
  };
  for(const dark of [false,true]){
    await page.setViewportSize({width:1440,height:1000});
    const appearance=page.getByRole('switch',{name:'Appearance'});
    if((await appearance.getAttribute('aria-checked')==='true')!==dark)await appearance.click();
    for(const width of [1440,768]){
      await page.setViewportSize({width,height:1000});
      for(const prop of ['priority','status','risk','department','skills','owner']){
        await grid.evaluate((g,prop)=>g.scrollToColumnProp(prop),prop);
        const trigger=grid.locator(`[data-filter-header-prop="${prop}"]`);
        await trigger.click();
        const checkboxes=page.locator('.filter-list:visible input[type=checkbox]');
        await checkboxes.first().waitFor({state:'visible'});
        await assertHitTargets(checkboxes);
        await checkboxes.first().uncheck();
        if(await checkboxes.first().isChecked())throw new Error(`${prop} option stayed checked`);
        await assertHitTargets(checkboxes);
        await checkboxes.first().check();
        if(!await checkboxes.first().isChecked())throw new Error(`${prop} option stayed unchecked`);
        await assertHitTargets(checkboxes);
        if(prop==='priority'&&width===1440)await page.screenshot({path:`output/playwright/project-priority-checkboxes-${dark?'dark':'light'}.png`});
        await page.keyboard.press('Escape');
        await page.locator('.filter-list:visible').waitFor({state:'hidden'});
        results.push({prop,dark,width});
      }
    }
  }
  return {passed:results.length,results};
}
