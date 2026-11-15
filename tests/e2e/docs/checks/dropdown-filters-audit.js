// Same preview prerequisites as dropdown-interactions-audit.js.
async page => {
  const fixtures=[
    {path:'/demo/filtering',trigger:'[data-filter-header-prop="status"]'},
    {path:'/',tab:'tree',trigger:'#rg-showcase-panel-tree [data-filter-header-prop="owner"]'},
    {path:'/guides/data-filter/filter-header/',portal:true,trigger:'[data-filter-header-prop="lastName"]'},
    {path:'/guides/data-filter/filter-types/filter-selection/',portal:true,trigger:'revo-grid .rgHeaderCell .rv-filter'},
  ];
  const results=[];
  for(const fixture of fixtures){
    await page.setViewportSize({width:1440,height:1000});
    await page.goto(`http://127.0.0.1:${fixture.portal?4329:49283}${fixture.path}`,{waitUntil:'domcontentloaded'});
    if(fixture.tab)await page.locator(`#rg-showcase-tab-${fixture.tab}`).click();
    for(const dark of [false,true]){
      await page.setViewportSize({width:1440,height:1000});
      if(fixture.portal)await page.locator('select:visible').first().selectOption(dark?'dark':'light');
      else{const theme=page.getByRole('switch',{name:'Appearance'});if((await theme.getAttribute('aria-checked')==='true')!==dark)await theme.click();}
      for(const width of [1440,390]){
        await page.setViewportSize({width,height:1000});
        try{
          const trigger=page.locator(fixture.trigger).first();
          await trigger.click();
          const list=page.locator('.filter-list:visible').first();
          await list.waitFor({timeout:5000});
          const checkbox=list.locator('input[type=checkbox]').first();
          await checkbox.waitFor({state:'visible',timeout:5000});
          const before=await checkbox.isChecked();
          await checkbox.setChecked(!before);
          if(await checkbox.isChecked()===before)throw new Error('Selection checkbox did not change');
          await checkbox.setChecked(before);
          await page.keyboard.press('Escape');
          await list.waitFor({state:'hidden',timeout:5000});
          await trigger.click();
          await list.waitFor({state:'visible',timeout:5000});
          await page.mouse.click(5,150);
          await list.waitFor({state:'hidden',timeout:5000});
          results.push({path:fixture.path,dark,width,pass:true});
        }catch(error){results.push({path:fixture.path,dark,width,pass:false,error:error.message});await page.keyboard.press('Escape');}
      }
    }
  }
  return {passed:results.filter(r=>r.pass).length,failed:results.filter(r=>!r.pass),results};
}
