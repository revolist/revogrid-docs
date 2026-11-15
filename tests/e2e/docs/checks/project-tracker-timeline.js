async page=>{
  page.setDefaultTimeout(8000);
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('http://127.0.0.1:49283/demo/color',{waitUntil:'domcontentloaded'});
  const grid=page.locator('revo-grid.project-tracker-grid');
  await grid.locator('.rgCell').first().waitFor();
  const results=[];
  for(const dark of [false,true]){
    await page.setViewportSize({width:1440,height:1000});
    const appearance=page.getByRole('switch',{name:'Appearance'});
    if((await appearance.getAttribute('aria-checked')==='true')!==dark)await appearance.click();
    for(const width of [1440,768]){
      await page.setViewportSize({width,height:1000});
      await grid.evaluate(g=>g.scrollToColumnProp('timeline'));
      const cell=grid.locator('.project-timeline-cell').first();
      const start=cell.getByRole('button',{name:'Edit start date',exact:true});
      await start.waitFor({state:'attached'});
      if(await start.isDisabled())throw new Error('Project timeline start-date control is disabled');
      const original=await grid.evaluate(g=>g.source.find(r=>r.task==='Mobile checkout launch'));
      await start.click();
      const picker=page.locator('.timeline-editor__picker');
      await picker.waitFor({state:'visible'});
      const from=dark?'2026-05-22':'2026-05-21';
      const to=width===768?'2026-06-13':'2026-06-12';
      await picker.getByRole('textbox',{name:'Start date',exact:true}).fill(from);
      await picker.getByRole('textbox',{name:'End date',exact:true}).fill(to);
      await picker.getByRole('textbox',{name:'End date',exact:true}).press('Enter');
      await picker.waitFor({state:'hidden'});
      await page.waitForFunction(({from,to})=>{
        const row=document.querySelector('revo-grid.project-tracker-grid').source.find(r=>r.task==='Mobile checkout launch');
        return row.timeline.from===from&&row.timeline.to===to&&row.timelineStart===from&&row.timelineEnd===to;
      },{from,to});
      const updated=await grid.evaluate(g=>g.source.find(r=>r.task==='Mobile checkout launch'));
      if(updated.progress!==original.progress||updated.timeline.progress!==original.timeline.progress)throw new Error('Date edit changed progress');
      await cell.getByRole('button',{name:'Edit end date',exact:true}).click();
      await picker.waitFor({state:'visible'});
      if(await picker.getByRole('textbox',{name:'Start date',exact:true}).inputValue()!==from)throw new Error('Saved start date did not persist');
      await picker.getByRole('textbox',{name:'End date',exact:true}).fill('2026-07-01');
      await page.keyboard.press('Escape');
      await picker.waitFor({state:'hidden'});
      const cancelled=await grid.evaluate(g=>g.source.find(r=>r.task==='Mobile checkout launch'));
      if(cancelled.timeline.to!==to)throw new Error('Escape saved a cancelled date');
      await cell.locator('.timeline-editor__range').click();
      await picker.waitFor({state:'visible'});
      await page.keyboard.press('Escape');
      await picker.waitFor({state:'hidden'});
      results.push({dark,width,from,to});
    }
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.getByRole('button',{name:'Add project column',exact:true}).click();
  await page.getByRole('dialog').getByRole('button',{name:/^Timeline/}).click();
  await page.waitForFunction(()=>document.querySelector('revo-grid.project-tracker-grid').columns.some(c=>c.prop==='custom_timeline'));
  await grid.evaluate(g=>g.scrollToColumnProp('custom_timeline'));
  const custom=grid.locator('.project-timeline-cell.project-cell-left').first();
  await custom.getByRole('button',{name:'Edit end date',exact:true}).click();
  const picker=page.locator('.timeline-editor__picker');
  await picker.waitFor({state:'visible'});
  await picker.getByRole('textbox',{name:'Start date',exact:true}).fill('2026-05-25');
  await picker.getByRole('textbox',{name:'End date',exact:true}).fill('2026-06-25');
  await picker.getByRole('textbox',{name:'End date',exact:true}).press('Enter');
  await picker.waitFor({state:'hidden'});
  await page.waitForFunction(()=>{
    const row=document.querySelector('revo-grid.project-tracker-grid').source.find(r=>r.task==='Mobile checkout launch');
    return row.custom_timeline.from==='2026-05-25'&&row.custom_timeline.to==='2026-06-25';
  });
  const final=await grid.evaluate(g=>g.source.find(r=>r.task==='Mobile checkout launch'));
  if(final.timeline.from!=='2026-05-22'||final.timeline.to!=='2026-06-13')throw new Error('Custom timeline edit changed the original timeline');
  results.push({dynamic:true,from:'2026-05-25',to:'2026-06-25'});
  return {passed:results.length,results};
}
