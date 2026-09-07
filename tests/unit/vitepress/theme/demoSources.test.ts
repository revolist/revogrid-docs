import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { PRODUCT_CATALOG } from '../../../../commercial/productCatalog'
import {
  DEMO_SOURCE_REGISTRY,
  getRegisteredDemoSourcePaths,
} from '../../../../.vitepress/theme/demoSources'

test('registers four real framework entries for every docs demo', () => {
  assert.deepEqual(Object.keys(DEMO_SOURCE_REGISTRY).sort(), Object.keys(PRODUCT_CATALOG.demos).sort())
  for (const [demoId, frameworks] of Object.entries(DEMO_SOURCE_REGISTRY)) {
    assert.deepEqual(Object.keys(frameworks), ['vue', 'ts', 'react', 'angular'], demoId)
    for (const [framework, entry] of Object.entries(frameworks)) {
      assert.ok(entry.files.length >= 1, `${demoId}/${framework} needs an entry file`)
      assert.match(entry.command, new RegExp(`dev:${framework}$`))
      assert.match(entry.documentationUrl, /^\//)
    }
  }
})

test('points every source panel file at an existing local source file', () => {
  for (const sourcePath of getRegisteredDemoSourcePaths()) {
    assert.equal(
      existsSync(new URL(`../../../../revogrid-demos/${sourcePath}`, import.meta.url)),
      true,
      sourcePath,
    )
  }
})

test('keeps the source panel and demo navigation at their specified breakpoints', () => {
  const layout = readFileSync(new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url), 'utf8')
  const sourcePanel = readFileSync(new URL('../../../../.vitepress/theme/DemoSourcePanel.vue', import.meta.url), 'utf8')
  const navigation = readFileSync(new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url), 'utf8')
  assert.match(sourcePanel, /width:420px;min-width:420px/)
  assert.match(sourcePanel, /@media\(max-width:1099px\)/)
  assert.match(sourcePanel, /position:absolute;z-index:2;inset:0/)
  assert.match(sourcePanel, /demo-source header\{[^}]*padding:0 18px 16px/)
  assert.match(sourcePanel, /demo-source__code-head\{[^}]*align-items:flex-start;gap:12px/)
  assert.match(sourcePanel, /demo-source__code-head code\{min-width:0;flex:1\}/)
  assert.doesNotMatch(sourcePanel, />Docs<|Open repository/)
  assert.doesNotMatch(layout, /implementation-url/)
  assert.match(navigation, /--demo-sidebar-width,256px/)
  assert.match(navigation, /background:var\(--vp-c-brand-soft\)/)
  assert.match(readFileSync(new URL('../../../../.vitepress/theme/style.scss', import.meta.url), 'utf8'), /\.dark \.demo-page-class \.demo-nav/)
  assert.match(navigation, /@media\(max-width:1099px\)/)
  for (const source of [layout, sourcePanel, navigation]) {
    assert.doesNotMatch(source, /font(?:-family)?:[^;}]*Geist/)
  }
})

test('uses the site color tokens instead of a demo-specific palette', () => {
  const sources = [
    readFileSync(new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url), 'utf8'),
    readFileSync(new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url), 'utf8'),
    readFileSync(new URL('../../../../.vitepress/theme/DemoSourcePanel.vue', import.meta.url), 'utf8'),
    readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.scss', import.meta.url), 'utf8'),
  ]
  for (const source of sources) {
    assert.doesNotMatch(source, /--planning-(?:accent|surface|border|text)|--revo-grid-/)
    assert.doesNotMatch(source, /#(?:008b55|00ad68|138a5b|17a66a|4f67d8|d2574a)/i)
  }
})

test('keeps open-source demos unbadged and labels the scale demo Performance', () => {
  const navigation = readFileSync(new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url), 'utf8')
  assert.match(navigation, /<small v-if="item\.plan">/)
  assert.match(navigation, /planId === 'open-source' \? null/)
  assert.match(navigation, /item\('grid-at-scale','Performance','\/demo\/grid-at-scale','grid'\)/)
})

test('keeps planning tabs simple and leaves only working shared top actions', () => {
  const layout = readFileSync(new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url), 'utf8')
  const vueSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.vue', import.meta.url), 'utf8')
  const frameworkSources = [
    vueSource,
    readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.ts', import.meta.url), 'utf8'),
    readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.react.tsx', import.meta.url), 'utf8'),
    readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.angular.ts', import.meta.url), 'utf8'),
  ]
  frameworkSources.forEach(source => assert.doesNotMatch(source, /planning-demo__pro/))
  assert.doesNotMatch(vueSource, /planning-demo__pro|>More</)
  assert.doesNotMatch(vueSource, /name="code"\/>Code/)
  assert.doesNotMatch(vueSource, /name="bookOpen"\/>Docs/)
  assert.match(layout, /demo-page-header-actions[\s\S]*?name="code"\/>Code/)
  assert.doesNotMatch(layout, /name="bookOpen"\/>Docs/)
  assert.match(layout, /name="github"\/>GitHub[\s\S]*?Try in your app/)
  assert.match(layout, /demo-page-header-link\{[^}]*width:96px[^}]*justify-content:center/)
  assert.doesNotMatch(layout, /v-if="demoId !== 'planning'"/)
})

test('uses native advanced filters, quick search, and plugin-owned badges in the planning grid', () => {
  const vueSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.vue', import.meta.url), 'utf8')
  const columns = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/data/columns.ts', import.meta.url), 'utf8')
  const workspace = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/composables/usePlanningWorkspace.ts', import.meta.url), 'utf8')
  const styles = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.scss', import.meta.url), 'utf8')
  assert.match(workspace, /AdvanceFilterPlugin, FilterHeaderPlugin/)
  assert.match(vueSource, /:quick-filter\.prop="quickFilter"/)
  assert.match(vueSource, /:filter-badges\.prop="filterBadgeOptions"/)
  assert.match(vueSource, /:filter\.prop="planningFilterConfig"/)
  assert.doesNotMatch(vueSource, /planning-demo__toolbar/)
  assert.doesNotMatch(vueSource, /planning-demo__hint/)
  assert.match(workspace, /slots:[\s\S]*start:[\s\S]*planning-demo__filter-search/)
  assert.match(vueSource, /usePlanningWorkspace/)
  assert.doesNotMatch(vueSource, /planning-demo__filter-popover/)
  assert.doesNotMatch(vueSource, /planning-demo__chips/)
  assert.doesNotMatch(vueSource, /toggleVisiblePlanningRows/)
  assert.doesNotMatch(vueSource, /@click\.capture/)
  assert.doesNotMatch(styles, /cell-header-checkbox-container/)
  assert.match(columns, /syncCellTemplate:[\s\S]*owner: true[\s\S]*priority: true/)
  assert.match(columns, /prop: 'name', name: 'Task',[\s\S]*filter: true/)
  assert.match(columns, /columnType: 'dropdown',[\s\S]*source: ownerEditorOptions[\s\S]*syncCellTemplate: true/)
  assert.match(columns, /prop: 'workflowStatus',[\s\S]*filter: \[FILTER_CHIP_BADGE_TOGGLES\][\s\S]*columnType: 'dropdown',[\s\S]*source: workflowEditorOptions[\s\S]*syncCellTemplate: true/)
  assert.match(columns, /gridColumnTypes = \{[\s\S]*dropdown: ColumnDropdown/)
  assert.match(columns, /prop: 'priority',[\s\S]*filter: \[FIlTER_SELECTION\]/)
  assert.match(columns, /prop: 'owner',[\s\S]*filter: \[FIlTER_SELECTION\]/)
  assert.match(columns, /prop: 'endDate',[\s\S]*filter: \[FILTER_CALENDAR_RANGE\]/)
  assert.match(columns, /percentDoneColumn[\s\S]*filter: \[FILTER_RATING_PROGRESS_THRESHOLD\]/)
  assert.match(columns, /prop: 'budget',[\s\S]*filter: \[FILTER_HISTOGRAM_BRUSH\]/)
  assert.match(columns, /prop: 'activityAt',[\s\S]*filter: \[FILTER_TIME_MATRIX\]/)
  assert.match(columns, /structuredFilterTypes: planningStructuredFilterTypes/)
  assert.ok(getRegisteredDemoSourcePaths().includes('pro-advanced-planning/src/data/planning.structured.ts'))
  assert.ok(getRegisteredDemoSourcePaths().includes('pro-advanced-planning/src/data/formatting.ts'))
  assert.ok(getRegisteredDemoSourcePaths().includes('pro-advanced-planning/src/composables/usePlanningWorkspace.ts'))
  const tsSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.ts', import.meta.url), 'utf8')
  const reactSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.react.tsx', import.meta.url), 'utf8')
  const angularSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.angular.ts', import.meta.url), 'utf8')
  assert.match(tsSource, /AdvanceFilterPlugin, FilterHeaderPlugin/)
  assert.match(tsSource, /grid\.filter = planningFilterConfig/)
  assert.match(tsSource, /grid\.columnTypes = gridColumnTypes/)
  assert.match(reactSource, /filter=\{planningFilterConfig\}/)
  assert.match(reactSource, /columnTypes=\{gridColumnTypes\}/)
  assert.match(angularSource, /\[filter\]="planningFilterConfig"/)
  assert.match(angularSource, /\[columnTypes\]="gridColumnTypes"/)
  const formatting = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/data/formatting.ts', import.meta.url), 'utf8')
  assert.match(formatting, /preset: 'date'/)
  assert.match(formatting, /preset: 'currency'/)
  assert.match(formatting, /preset: 'datetime'/)
  assert.match(formatting, /id: 'progress-line'/)
  assert.match(workspace, /DataGridFormattingPlugin/)
  assert.match(vueSource, /data-grid-formatting\.prop="planningDataGridFormatting"/)
  assert.match(vueSource, /:stretch="1"/)
  assert.match(styles, /planning-demo__switch button\{[^}]*text-transform:capitalize/)
  assert.match(tsSource, /grid\.dataGridFormatting = planningDataGridFormatting/)
  assert.match(tsSource, /grid\.stretch = 1/)
  assert.match(reactSource, /dataGridFormatting=\{dataGridFormatting\}/)
  assert.match(reactSource, /stretch=\{1\}/)
  assert.match(angularSource, /\[dataGridFormatting\]="planningDataGridFormatting"/)
  assert.match(angularSource, /\[stretch\]="1"/)
  for (const source of [tsSource, reactSource, angularSource]) {
    assert.doesNotMatch(source, /toggleVisiblePlanningRows/)
    assert.doesNotMatch(source, /click\.capture|onClickCapture/)
  }
})

test('keeps guided steps out of the planning shell', () => {
  const layout = readFileSync(new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url), 'utf8')
  assert.doesNotMatch(layout, /demo-page-guide|Show guide|guidedActions|guideLayout/)
})

test('aligns the Grid at Scale data source toolbar with the demo heading', () => {
  const page = readFileSync(new URL('../../../../demo/grid-at-scale.md', import.meta.url), 'utf8')
  assert.match(page, /\.demo-main-widget\{[^}]*padding-top:0/)
  assert.match(page, /:deep\(\.hr-toolbar\)\{margin:4px 0 12px;padding:0 0 12px;border-bottom:1px solid var\(--vp-c-divider\)/)
})

test('aligns the AI prompt search controls with the demo heading', () => {
  const styles = readFileSync(new URL('../../../../revogrid-demos/core-ai-prompts/src/prompt-library.css', import.meta.url), 'utf8')
  assert.match(styles, /\.prompt-toolbar\s*\{[\s\S]*?padding:\s*18px 0/)
})

test('aligns the Project Portfolio grouping controls with the demo heading', () => {
  const styles = readFileSync(new URL('../../../../revogrid-demos/core-project-portfolio/src/project-portfolio.css', import.meta.url), 'utf8')
  assert.match(styles, /\.portfolio-toolbar\s*\{[\s\S]*?padding:\s*12px 0/)
})

test('extends Project Tracker actions to the demo edges', () => {
  const shell = readFileSync(new URL('../../../../revogrid-demos/pro-project-table/src/project-tracker-styles/_shell.scss', import.meta.url), 'utf8')
  const responsive = readFileSync(new URL('../../../../revogrid-demos/pro-project-table/src/project-tracker-styles/_responsive.scss', import.meta.url), 'utf8')
  assert.match(shell, /\.project-grid-toolbar\s*\{[\s\S]*?padding:\s*space\(4\) 0/)
  assert.match(responsive, /\.project-grid-toolbar\s*\{\s*padding:\s*space\(4\) 0/)
})

test('aligns Tree Data actions with the demo edge', () => {
  const styles = readFileSync(new URL('../../../../revogrid-demos/pro-tree-data/src/tree.scss', import.meta.url), 'utf8')
  assert.match(styles, /\.tree-toolbar\s*\{[\s\S]*?justify-content:\s*flex-start[\s\S]*?padding:\s*14px 0/)
  assert.match(styles, /\.tree-toolbar__actions\s*\{[\s\S]*?justify-content:\s*flex-start/)
})

test('aligns Advanced Filtering controls with the demo heading', () => {
  const styles = readFileSync(new URL('../../../../revogrid-demos/pro-filtering/src/filtering.scss', import.meta.url), 'utf8')
  assert.match(styles, /\.order-explorer__toolbar\s*\{[\s\S]*?margin-inline:\s*0/)
  assert.match(styles, /\.order-explorer__active-filters\s*\{[\s\S]*?margin-inline:\s*0/)
})

test('aligns Infinity Scroll controls with the demo heading', () => {
  const styles = readFileSync(new URL('../../../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.scss', import.meta.url), 'utf8')
  assert.match(styles, /\.infinity-toolbar\s*\{[\s\S]*?padding:\s*14px 0/)
})

test('lets the remote Kanban board fill the demo workspace', () => {
  const styles = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss', import.meta.url), 'utf8')
  assert.match(styles, /\.kanban-server-loading\s*\{[\s\S]*?height:\s*100%[\s\S]*?grid-template-rows:\s*auto minmax\(0, 1fr\)/)
  assert.match(styles, /\.kanban-server-loading__grid\s*\{[\s\S]*?height:\s*100%[\s\S]*?min-height:\s*0/)
})

test('gives the Pivot field configuration panel room to avoid horizontal scrolling', () => {
  const styles = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-pivot/src/financial-pivot-header/financial-pivot-header.scss', import.meta.url), 'utf8')
  assert.match(styles, /\.financial-pivot-showcase \.pivot-config\s*\{[\s\S]*?--pv-cfg-width:\s*380px[\s\S]*?overflow-x:\s*hidden/)
  assert.match(styles, /\.financial-pivot-showcase \.pivot-config > \*\s*\{[\s\S]*?min-width:\s*0[\s\S]*?width:\s*100%/)
})
