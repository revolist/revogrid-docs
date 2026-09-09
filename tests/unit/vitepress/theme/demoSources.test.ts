import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { PRODUCT_CATALOG } from '../../../../commercial/productCatalog'
import {
  DEMO_SOURCE_REGISTRY,
  getRegisteredDemoSourcePaths,
} from '../../../../.vitepress/theme/demoSources'

test('registers four real framework entries for every docs demo', () => {
  assert.deepEqual(
    Object.keys(DEMO_SOURCE_REGISTRY).sort(),
    Object.keys(PRODUCT_CATALOG.demos).sort(),
  )
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

test('keeps the source panel compact and expandable', () => {
  const layout = readFileSync(
    new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url),
    'utf8',
  )
  const sourcePanel = readFileSync(
    new URL('../../../../.vitepress/theme/DemoSourcePanel.vue', import.meta.url),
    'utf8',
  )
  assert.match(sourcePanel, /width:\s*420px;[\s\S]*?min-width:\s*420px/)
  assert.match(sourcePanel, /@media\s*\(max-width:\s*1099px\)/)
  assert.match(sourcePanel, /position:\s*absolute;[\s\S]*?z-index:\s*2;[\s\S]*?inset:\s*0/)
  assert.match(sourcePanel, /aria-label="Example source code"/)
  assert.match(sourcePanel, /grid-template-rows:\s*auto auto minmax\(0, 1fr\) auto/)
  assert.match(sourcePanel, /class="demo-source__toolbar"/)
  assert.match(sourcePanel, /demo-source__toolbar\s*\{[^}]*justify-content:\s*space-between/s)
  assert.match(sourcePanel, /FontAwesomeSvgIcon name="expand"/)
  assert.match(sourcePanel, /demo-source:fullscreen\s*\{[^}]*width:\s*100%/)
  assert.doesNotMatch(sourcePanel, /Use this example|demo-source-title/)
  assert.doesNotMatch(sourcePanel, /Live preview uses Vue|demo-source__code-head|current\.command/)
  assert.doesNotMatch(sourcePanel, />Docs<|Open repository/)
  assert.doesNotMatch(layout, /implementation-url/)
  for (const source of [layout, sourcePanel]) {
    assert.doesNotMatch(source, /font(?:-family)?:[^;}]*Geist/)
  }
})

test('keeps demo navigation at its specified breakpoint', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(navigation, /--demo-sidebar-width,\s*256px/)
  assert.match(navigation, /background:\s*var\(--vp-c-brand-soft\)/)
  assert.match(
    navigation,
    /demo-nav\s*>\s*label\s*\{[^}]*background:\s*var\(--vp-c-default-soft\)[^}]*\}/,
  )
  assert.doesNotMatch(navigation, /demo-nav\s*>\s*label\s*\{[^}]*box-shadow/)
  assert.match(
    navigation,
    /demo-nav\s*>\s*label:focus-within\s*\{[^}]*border-color:\s*var\(--demo-focus-color\)[^}]*box-shadow:[^}]*var\(--demo-focus-ring\)/,
  )
  assert.match(
    readFileSync(new URL('../../../../.vitepress/theme/style.scss', import.meta.url), 'utf8'),
    /\.dark \.demo-page-class \.demo-nav/,
  )
  assert.match(navigation, /@media\s*\(max-width:\s*1099px\)/)
  assert.doesNotMatch(navigation, /font(?:-family)?:[^;}]*Geist/)
})

test('keeps the demo search label screen-reader-only and demo links hoverable', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(navigation, /<span class="sr-only">Find a demo<\/span\s*>/)
  assert.match(
    navigation,
    /\.demo-nav \.sr-only\s*\{[^}]*position: absolute[^}]*clip: rect\(0, 0, 0, 0\)/,
  )
  assert.match(navigation, /\.demo-nav a:hover\s*\{[^}]*background: var\(--vp-c-default-soft\)/)
})

test('releases the demo sidebar layout reservation when navigation is off-canvas', () => {
  const styles = readFileSync(
    new URL('../../../../.vitepress/theme/style.scss', import.meta.url),
    'utf8',
  )
  assert.match(
    styles,
    /@media \(max-width: 1099px\)\s*\{[\s\S]*?\.demo-page-class\s*\{[^}]*--vp-sidebar-width: 0px/,
  )
})

test('keeps the demo title in flow beside search while the sidebar is off-canvas', () => {
  const styles = readFileSync(
    new URL('../../../../.vitepress/theme/style.scss', import.meta.url),
    'utf8',
  )
  assert.match(
    styles,
    /@media \(min-width: 960px\) and \(max-width: 1099px\)\s*\{[\s\S]*?\.demo-page-class \.VPNavBar\.has-sidebar \.title\s*\{[^}]*position: static/,
  )
})

test('uses the primary text token for demo sidebar section headings', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(navigation, /\.demo-nav h2\s*\{[^}]*color: var\(--vp-c-text-1\)/)
})

test('uses the primary text token for demo sidebar icons', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(
    navigation,
    /\.demo-nav a :deep\(\.fa-svg-icon\)\s*\{[^}]*color: var\(--vp-c-text-1\)/,
  )
})

test('uses the VitePress local Menu control to open mobile demo navigation', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.doesNotMatch(navigation, /class="demo-nav-trigger"/)
  assert.match(navigation, /target\.closest\('\.VPLocalNav \.menu'\)/)
  assert.match(
    navigation,
    /event\.preventDefault\(\)[\s\S]*?event\.stopImmediatePropagation\(\)[\s\S]*?open\.value = true/,
  )
})

test('locks page scrolling while the mobile demo drawer is open', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(navigation, /useScrollLock\(inBrowser \? document\.body : null\)/)
  assert.match(navigation, /watch\(open, value => \(isPageScrollLocked\.value = value\)\)/)
})

test('keeps the GitHub header action neutral on hover like Code', () => {
  const layout = readFileSync(
    new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url),
    'utf8',
  )
  assert.match(layout, /\.demo-page-github:hover\s*\{[^}]*color: var\(--vp-c-text-1\)/)
})

test('uses the site color tokens instead of a demo-specific palette', () => {
  const sources = [
    readFileSync(
      new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url),
      'utf8',
    ),
    readFileSync(
      new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
      'utf8',
    ),
    readFileSync(
      new URL('../../../../.vitepress/theme/DemoSourcePanel.vue', import.meta.url),
      'utf8',
    ),
    readFileSync(
      new URL(
        '../../../../revogrid-demos/pro-advanced-planning/src/planning.scss',
        import.meta.url,
      ),
      'utf8',
    ),
  ]
  for (const source of sources) {
    assert.doesNotMatch(source, /--planning-(?:accent|surface|border|text)|--revo-grid-/)
    assert.doesNotMatch(source, /#(?:008b55|00ad68|138a5b|17a66a|4f67d8|d2574a)/i)
  }
})

test('badges open-source demos as Free and keeps the scale demo label concise', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(navigation, /<small v-if="item\.plan">/)
  assert.match(navigation, /planId === 'open-source'\s*\? 'Free'/)
  assert.match(
    navigation,
    /createItem\(\s*'grid-at-scale',\s*'Performance',\s*'\/demo\/grid-at-scale',\s*'grid'/,
  )
})

test('keeps onboarding demos pinned above stateful collapsible feature groups', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(navigation, /class="demo-nav__pinned"/)
  assert.match(navigation, /ref="featureList"/)
  assert.match(navigation, /class="demo-nav__group-toggle"/)
  assert.match(navigation, /:aria-expanded="isGroupExpanded\(group\)"/)
  assert.match(navigation, /revogrid-demo-navigation-expanded-groups/)
  assert.match(navigation, /scrollIntoView\(\{/)
  assert.match(navigation, /\.demo-nav\s*\{[^}]*display: flex[^}]*flex-direction: column/s)
  assert.match(navigation, /\.demo-nav nav\s*\{[^}]*flex: 1[^}]*overflow: auto/s)
})

test('uses the compact explorer hierarchy in demo navigation', () => {
  const navigation = readFileSync(
    new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url),
    'utf8',
  )
  assert.match(navigation, />Explore demos<\/p>/)
  assert.match(navigation, /new Set\(\['data-grid'\]\)/)
  assert.match(navigation, /<FontAwesomeSvgIcon :name="group\.icon" \/>/)
  assert.match(navigation, /class="demo-nav__children"/)
  assert.doesNotMatch(navigation, /\.demo-nav__pinned a\.active/)
  assert.match(navigation, /\.demo-nav a\.active\s*\{[^}]*background: var\(--vp-c-brand-soft\)/)
  assert.match(
    navigation,
    /\.demo-nav__children\s*\{[^}]*border-left: 1px solid var\(--vp-c-divider\)/,
  )
})

test('keeps planning tabs simple and leaves only working shared top actions', () => {
  const layout = readFileSync(
    new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url),
    'utf8',
  )
  const vueSource = readFileSync(
    new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.vue', import.meta.url),
    'utf8',
  )
  const frameworkSources = [
    vueSource,
    readFileSync(
      new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.ts', import.meta.url),
      'utf8',
    ),
    readFileSync(
      new URL(
        '../../../../revogrid-demos/pro-advanced-planning/src/planning.react.tsx',
        import.meta.url,
      ),
      'utf8',
    ),
    readFileSync(
      new URL(
        '../../../../revogrid-demos/pro-advanced-planning/src/planning.angular.ts',
        import.meta.url,
      ),
      'utf8',
    ),
  ]
  frameworkSources.forEach(source => assert.doesNotMatch(source, /planning-demo__pro/))
  assert.doesNotMatch(vueSource, /planning-demo__pro|>More</)
  assert.doesNotMatch(vueSource, /name="code"\/>Code/)
  assert.doesNotMatch(vueSource, /name="bookOpen"\/>Docs/)
  assert.match(layout, /demo-page-header-actions[\s\S]*?name="code"\/>Code/)
  assert.doesNotMatch(layout, /name="bookOpen"\/>Docs/)
  assert.match(layout, /name="github"\/>GitHub[\s\S]*?Try in your app/)
  assert.match(layout, /demo-page-header-link\{[^}]*width:96px[^}]*justify-content:center/)
  assert.match(
    layout,
    /demo-page-header-link\{[^}]*border:1px solid var\(--vp-c-divider\)[^}]*background:var\(--vp-c-bg\)/,
  )
  assert.doesNotMatch(layout, /v-if="demoId !== 'planning'"/)
})

test('uses native advanced filters, quick search, and plugin-owned badges in the planning grid', () => {
  const vueSource = readFileSync(
    new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.vue', import.meta.url),
    'utf8',
  )
  const columns = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-advanced-planning/src/data/columns.ts',
      import.meta.url,
    ),
    'utf8',
  )
  const workspace = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-advanced-planning/src/composables/usePlanningWorkspace.ts',
      import.meta.url,
    ),
    'utf8',
  )
  const styles = readFileSync(
    new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.scss', import.meta.url),
    'utf8',
  )
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
  assert.match(
    columns,
    /prop: 'name', name: 'Task',[\s\S]*filter: \[FIlTER_SELECTION\][\s\S]*filterPlaceholder: 'All tasks'/,
  )
  assert.match(
    columns,
    /columnType: 'dropdown',[\s\S]*source: ownerEditorOptions[\s\S]*syncCellTemplate: true/,
  )
  assert.match(
    columns,
    /prop: 'workflowStatus',[\s\S]*filter: \[FILTER_CHIP_BADGE_TOGGLES\][\s\S]*columnType: 'dropdown',[\s\S]*source: workflowEditorOptions[\s\S]*syncCellTemplate: true/,
  )
  assert.match(columns, /gridColumnTypes = \{[\s\S]*dropdown: ColumnDropdown/)
  assert.match(columns, /prop: 'priority',[\s\S]*filter: \[FIlTER_SELECTION\]/)
  assert.match(columns, /prop: 'owner',[\s\S]*filter: \[FIlTER_SELECTION\]/)
  assert.match(columns, /prop: 'endDate',[\s\S]*filter: \[FILTER_CALENDAR_RANGE\]/)
  assert.match(columns, /percentDoneColumn[\s\S]*filter: \[FILTER_RATING_PROGRESS_THRESHOLD\]/)
  assert.match(columns, /prop: 'budget',[\s\S]*filter: \[FILTER_HISTOGRAM_BRUSH\]/)
  assert.match(columns, /prop: 'activityAt',[\s\S]*filter: \[FILTER_TIME_MATRIX\]/)
  assert.match(columns, /structuredFilterTypes: planningStructuredFilterTypes/)
  assert.ok(
    getRegisteredDemoSourcePaths().includes(
      'pro-advanced-planning/src/data/planning.structured.ts',
    ),
  )
  assert.ok(getRegisteredDemoSourcePaths().includes('pro-advanced-planning/src/data/formatting.ts'))
  assert.ok(
    getRegisteredDemoSourcePaths().includes(
      'pro-advanced-planning/src/composables/usePlanningWorkspace.ts',
    ),
  )
  assert.ok(getRegisteredDemoSourcePaths().includes('pro-advanced-planning/src/planning.tips.ts'))
  const tsSource = readFileSync(
    new URL('../../../../revogrid-demos/pro-advanced-planning/src/planning.ts', import.meta.url),
    'utf8',
  )
  const reactSource = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-advanced-planning/src/planning.react.tsx',
      import.meta.url,
    ),
    'utf8',
  )
  const angularSource = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-advanced-planning/src/planning.angular.ts',
      import.meta.url,
    ),
    'utf8',
  )
  assert.match(tsSource, /AdvanceFilterPlugin, FilterHeaderPlugin/)
  assert.match(tsSource, /grid\.filter = planningFilterConfig/)
  assert.match(tsSource, /grid\.columnTypes = gridColumnTypes/)
  assert.match(reactSource, /filter=\{planningFilterConfig\}/)
  assert.match(reactSource, /columnTypes=\{gridColumnTypes\}/)
  assert.match(angularSource, /\[filter\]="planningFilterConfig"/)
  assert.match(angularSource, /\[columnTypes\]="gridColumnTypes"/)
  const formatting = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-advanced-planning/src/data/formatting.ts',
      import.meta.url,
    ),
    'utf8',
  )
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
  const layout = readFileSync(
    new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url),
    'utf8',
  )
  assert.doesNotMatch(layout, /demo-page-guide|Show guide|guidedActions|guideLayout/)
})

test('aligns the Grid at Scale data source toolbar with the demo heading', () => {
  const page = readFileSync(new URL('../../../../demo/grid-at-scale.md', import.meta.url), 'utf8')
  assert.match(page, /\.demo-main-widget\{[^}]*padding-top:0/)
  assert.match(
    page,
    /:deep\(\.hr-toolbar\)\{margin:4px 0 12px;padding:0 0 12px;border-bottom:1px solid var\(--vp-c-divider\)/,
  )
})

test('aligns the AI prompt search controls with the demo heading', () => {
  const styles = readFileSync(
    new URL('../../../../revogrid-demos/core-ai-prompts/src/prompt-library.css', import.meta.url),
    'utf8',
  )
  assert.match(styles, /\.prompt-toolbar\s*\{[\s\S]*?padding:\s*18px 0/)
})

test('aligns the Project Portfolio grouping controls with the demo heading', () => {
  const styles = readFileSync(
    new URL(
      '../../../../revogrid-demos/core-project-portfolio/src/project-portfolio.css',
      import.meta.url,
    ),
    'utf8',
  )
  assert.match(styles, /\.portfolio-toolbar\s*\{[\s\S]*?padding:\s*12px 0/)
})

test('extends Project Tracker actions to the demo edges', () => {
  const shell = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-project-table/src/project-tracker-styles/_shell.scss',
      import.meta.url,
    ),
    'utf8',
  )
  const responsive = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-project-table/src/project-tracker-styles/_responsive.scss',
      import.meta.url,
    ),
    'utf8',
  )
  assert.match(shell, /\.project-grid-toolbar\s*\{[\s\S]*?padding:\s*space\(4\) 0/)
  assert.match(responsive, /\.project-grid-toolbar\s*\{\s*padding:\s*space\(4\) 0/)
})

test('aligns Tree Data actions with the demo edge', () => {
  const styles = readFileSync(
    new URL('../../../../revogrid-demos/pro-tree-data/src/tree.scss', import.meta.url),
    'utf8',
  )
  assert.match(
    styles,
    /\.tree-toolbar\s*\{[\s\S]*?justify-content:\s*flex-start[\s\S]*?padding:\s*14px 0/,
  )
  assert.match(styles, /\.tree-toolbar__actions\s*\{[\s\S]*?justify-content:\s*flex-start/)
})

test('aligns Advanced Filtering controls with the demo heading', () => {
  const styles = readFileSync(
    new URL('../../../../revogrid-demos/pro-filtering/src/filtering.scss', import.meta.url),
    'utf8',
  )
  assert.match(styles, /\.order-explorer__toolbar\s*\{[\s\S]*?margin-inline:\s*0/)
  assert.match(styles, /\.order-explorer__active-filters\s*\{[\s\S]*?margin-inline:\s*0/)
})

test('aligns Infinity Scroll controls with the demo heading', () => {
  const styles = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.scss',
      import.meta.url,
    ),
    'utf8',
  )
  assert.match(styles, /\.infinity-toolbar\s*\{[\s\S]*?padding:\s*14px 0/)
})

test('lets the remote Kanban board fill the demo workspace', () => {
  const styles = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss',
      import.meta.url,
    ),
    'utf8',
  )
  assert.match(
    styles,
    /\.kanban-server-loading\s*\{[\s\S]*?height:\s*100%[\s\S]*?grid-template-rows:\s*auto minmax\(0, 1fr\)/,
  )
  assert.match(
    styles,
    /\.kanban-server-loading__grid\s*\{[\s\S]*?height:\s*100%[\s\S]*?min-height:\s*0/,
  )
})

test('gives the Pivot field configuration panel room to avoid horizontal scrolling', () => {
  const styles = readFileSync(
    new URL(
      '../../../../revogrid-demos/pro-advanced-pivot/src/financial-pivot-header/financial-pivot-header.scss',
      import.meta.url,
    ),
    'utf8',
  )
  assert.match(
    styles,
    /\.financial-pivot-showcase \.pivot-config\s*\{[\s\S]*?--pv-cfg-width:\s*380px[\s\S]*?overflow-x:\s*hidden/,
  )
  assert.match(
    styles,
    /\.financial-pivot-showcase \.pivot-config > \*\s*\{[\s\S]*?min-width:\s*0[\s\S]*?width:\s*100%/,
  )
})
