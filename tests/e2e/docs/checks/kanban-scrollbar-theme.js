// Prerequisite: local docs preview on 49283.
async page=>{
  await page.setViewportSize({width:1440,height:900});
  await page.goto('http://127.0.0.1:49283/demo/kanban',{waitUntil:'domcontentloaded'});
  const results=[];
  for(const os of ['light','dark']){
    await page.emulateMedia({colorScheme:os});
    for(const app of ['light','dark']){
      const appearance=page.getByRole('switch',{name:'Appearance'});
      if((await appearance.getAttribute('aria-checked')==='true')!==(app==='dark'))await appearance.click();
      await page.getByRole('button',{name:'Add card',exact:true}).click();
      const body=page.locator('.kanban-card-editor__body');
      await body.waitFor();
      const style=await body.evaluate(e=>({scheme:getComputedStyle(e).colorScheme,token:getComputedStyle(e).getPropertyValue('--rv-ui-color-scheme').trim(),scrolls:e.scrollHeight>e.clientHeight}));
      if(style.scheme!==app)throw new Error(`Wrong native scrollbar scheme: ${JSON.stringify({os,app,...style})}`);
      if(!style.scrolls)throw new Error('Test dialog is not scrollable');
      // A host theme change must reach an already-open, portaled dialog too.
      const next=app==='light'?'dark':'light';
      await page.evaluate(theme=>{document.documentElement.classList.toggle('dark',theme==='dark');document.documentElement.dataset.theme=theme;},next);
      const live=await body.evaluate(e=>getComputedStyle(e).colorScheme);
      if(live!==next)throw new Error(`Open dialog ignored theme change to ${next}: ${live}`);
      await page.evaluate(theme=>{document.documentElement.classList.toggle('dark',theme==='dark');document.documentElement.dataset.theme=theme;},app);
      await page.locator('.kanban-card-editor').getByRole('button',{name:'Cancel',exact:true}).click();
      await body.waitFor({state:'hidden'});
      results.push({os,app,scheme:style.scheme,liveSwitch:true});
    }
  }
  return {passed:results.length,results};
}
