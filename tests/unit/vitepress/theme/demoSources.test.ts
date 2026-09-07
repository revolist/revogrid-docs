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
  const sourcePanel = readFileSync(new URL('../../../../.vitepress/theme/DemoSourcePanel.vue', import.meta.url), 'utf8')
  const navigation = readFileSync(new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url), 'utf8')
  assert.match(sourcePanel, /width:420px;min-width:420px/)
  assert.match(sourcePanel, /@media\(max-width:1099px\)/)
  assert.match(sourcePanel, /position:absolute;z-index:2;inset:0/)
  assert.match(navigation, /--demo-sidebar-width,256px/)
  assert.match(navigation, /background:#dff1e8/)
  assert.match(readFileSync(new URL('../../../../.vitepress/theme/style.scss', import.meta.url), 'utf8'), /\.dark \.demo-page-class \.demo-nav/)
  assert.match(navigation, /@media\(max-width:1099px\)/)
})

test('keeps open-source demos unbadged and labels the scale demo Performance', () => {
  const navigation = readFileSync(new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url), 'utf8')
  assert.match(navigation, /<small v-if="item\.plan">/)
  assert.match(navigation, /planId === 'open-source' \? null/)
  assert.match(navigation, /item\('grid-at-scale','Performance','\/demo\/grid-at-scale','grid'\)/)
})

test('marks every planning view Pro and gives workspace actions matching icons', () => {
  const vueSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.vue', import.meta.url), 'utf8')
  const frameworkSources = [
    vueSource,
    readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.ts', import.meta.url), 'utf8'),
    readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.react.tsx', import.meta.url), 'utf8'),
    readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.angular.ts', import.meta.url), 'utf8'),
  ]
  frameworkSources.forEach(source => assert.match(source, /planning-demo__pro/))
  assert.match(vueSource, /name="code"\/>Code/)
  assert.match(vueSource, /name="bookOpen"\/>Docs/)
  assert.match(vueSource, /name="ellipsis"\/>More/)
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
  assert.match(workspace, /slots:[\s\S]*start:[\s\S]*planning-demo__filter-search/)
  assert.match(vueSource, /usePlanningWorkspace/)
  assert.doesNotMatch(vueSource, /planning-demo__filter-popover/)
  assert.doesNotMatch(vueSource, /planning-demo__chips/)
  assert.doesNotMatch(vueSource, /toggleVisiblePlanningRows/)
  assert.doesNotMatch(vueSource, /@click\.capture/)
  assert.match(styles, /\.cell-header-checkbox-container\{[^}]*width:100%[^}]*margin:0!important;padding:0!important/)
  assert.match(columns, /syncCellTemplate:[\s\S]*owner: true[\s\S]*priority: true/)
  assert.match(columns, /prop: 'name', name: 'Task',[\s\S]*filter: true/)
  assert.match(columns, /columnType: 'dropdown',[\s\S]*source: ownerEditorOptions[\s\S]*syncCellTemplate: true/)
  assert.match(columns, /workflowStatusColumn[\s\S]*filter: \[FILTER_CHIP_BADGE_TOGGLES\]/)
  assert.match(columns, /prop: 'priority',[\s\S]*filter: \[FIlTER_SELECTION\]/)
  assert.match(columns, /prop: 'owner',[\s\S]*filter: \[FIlTER_SELECTION\]/)
  assert.match(columns, /prop: 'endDate',[\s\S]*filter: \[FILTER_CALENDAR_RANGE\]/)
  assert.match(columns, /percentDoneColumn[\s\S]*filter: \[FILTER_RATING_PROGRESS_THRESHOLD\]/)
  assert.match(columns, /prop: 'budget',[\s\S]*filter: \[FILTER_HISTOGRAM_BRUSH\]/)
  assert.match(columns, /prop: 'activityAt',[\s\S]*filter: \[FILTER_TIME_MATRIX\]/)
  assert.match(columns, /structuredFilterTypes: planningStructuredFilterTypes/)
  assert.ok(getRegisteredDemoSourcePaths().includes('pro-advanced-planning/src/data/planning.structured.ts'))
  assert.ok(getRegisteredDemoSourcePaths().includes('pro-advanced-planning/src/composables/usePlanningWorkspace.ts'))
  const tsSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.ts', import.meta.url), 'utf8')
  const reactSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.react.tsx', import.meta.url), 'utf8')
  const angularSource = readFileSync(new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.angular.ts', import.meta.url), 'utf8')
  assert.match(tsSource, /AdvanceFilterPlugin, FilterHeaderPlugin/)
  assert.match(tsSource, /grid\.filter = planningFilterConfig/)
  assert.match(reactSource, /filter=\{planningFilterConfig\}/)
  assert.match(angularSource, /\[filter\]="planningFilterConfig"/)
  for (const source of [tsSource, reactSource, angularSource]) {
    assert.doesNotMatch(source, /toggleVisiblePlanningRows/)
    assert.doesNotMatch(source, /click\.capture|onClickCapture/)
  }
})

test('keeps the planning guide actionable and dismissible', () => {
  const layout = readFileSync(new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url), 'utf8')
  assert.match(layout, /title: 'Update a status'/)
  assert.match(layout, /title: 'Open Kanban'/)
  assert.match(layout, /guideTarget\(\)/)
  assert.match(layout, /querySelector<HTMLElement>\('\.planning-status'\)/)
  assert.match(layout, /targetBounds\.height \/ 2/)
  assert.match(layout, /Dismiss guide/)
  assert.match(layout, /Show guide/)
  assert.match(layout, /pointer-events:none/)
  assert.match(layout, /demo-page-guide-marker/)
  assert.match(layout, /@keyframes demo-guide-pulse/)
  assert.match(layout, /targetBounds\.left - stageBounds\.left - 7/)
  assert.doesNotMatch(layout, /guideLayout\.spotlight/)
})
