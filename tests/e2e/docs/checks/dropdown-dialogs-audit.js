// Verifies nested booking dropdowns keep their modal open and remain reachable.
async page=>{
  page.setDefaultTimeout(5000);
  await page.goto('http://127.0.0.1:49283/demo/property-booking',{waitUntil:'domcontentloaded'});
  const results=[];
  for(const dark of [false,true]){
    await page.setViewportSize({width:1440,height:1000});
    const appearance=page.getByRole('switch',{name:'Appearance'});
    if((await appearance.getAttribute('aria-checked')==='true')!==dark)await appearance.click();
    for(const width of [1440,390]){
      await page.setViewportSize({width,height:1000});
      await page.getByRole('button',{name:'New booking',exact:true}).click();
      const dialog=page.getByRole('dialog',{name:'New booking',exact:true});
      await dialog.waitFor();
      for(const [name,value] of [['Property','Birch Cottage'],['Booking status','Arrived'],['Payment','Paid']]){
        try{
          const trigger=dialog.getByRole('combobox',{name,exact:true});
          await trigger.click();
          const option=page.locator('.revo-dropdown-menu:visible').getByRole('option',{name:value,exact:true});
          await option.waitFor();
          await option.click();
          if(!(await trigger.textContent()).includes(value))throw new Error('Selection did not update the form');
          await trigger.click();
          await option.waitFor();
          await page.keyboard.press('Escape');
          await option.waitFor({state:'hidden'});
          if(!await dialog.isVisible())throw new Error('Escape closed the parent modal');
          await trigger.click();
          await option.waitFor();
          await dialog.getByLabel('Guest name',{exact:true}).click();
          await option.waitFor({state:'hidden'});
          results.push({dark,width,name,pass:true});
        }catch(error){results.push({dark,width,name,pass:false,error:error.message});await page.keyboard.press('Escape');}
      }
      await page.getByRole('button',{name:'Close booking editor',exact:true}).click();
    }
  }
  return {passed:results.filter(r=>r.pass).length,failed:results.filter(r=>!r.pass),results};
}
