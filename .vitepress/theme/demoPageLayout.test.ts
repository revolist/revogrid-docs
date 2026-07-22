import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { PRODUCT_CATALOG, type DemoId } from '../../commercial/productCatalog'
import {
  DEMO_PAGE_LAYOUT_VERSION,
  createDemoPageAnalyticsEvent,
  getAllDemoPageConfigs,
  getDemoPageConfig,
} from './demoPageLayout'

const demoSidebarSource = readFileSync(new URL('../configs/sidebar/en.demo.ts', import.meta.url), 'utf8')
const docsThemeSource = readFileSync(new URL('./style.scss', import.meta.url), 'utf8')
const demoPageLayoutSource = readFileSync(new URL('./DemoPageLayout.vue', import.meta.url), 'utf8')
const excelDemoSource = readFileSync(new URL('../../demo/excel.md', import.meta.url), 'utf8')
const pivotHeaderStyleSource = readFileSync(
  new URL('../../revogrid-demos/pro-advanced-pivot/src/financial-pivot-header/financial-pivot-header.scss', import.meta.url),
  'utf8',
)

test('provides complete reusable layout content for every catalog demo', () => {
  const configs = getAllDemoPageConfigs()

  assert.equal(configs.length, Object.keys(PRODUCT_CATALOG.demos).length)
  configs.forEach((config) => {
    assert.equal(config.demo, PRODUCT_CATALOG.demos[config.demo.id])
    assert.match(config.title, /Demo$/)
    assert.match(config.description, /\.$/)
    assert.equal(config.guidedActions.length, 3)
    assert.equal(new Set(config.guidedActions).size, config.guidedActions.length)
    assert.ok(config.guidedActions.every(action => action.length > 5))
    assert.match(config.implementationUrl, /[?&]source=demo-page/)
    assert.match(config.implementationUrl, new RegExp(`[?&]demo=${config.demo.id}(?:&|$)`))
    assert.match(config.pricingUrl, /^\/pricing\?source=demo-page/)
  })
})

test('provides source-attributed feature badges only for paid demos', () => {
  const configs = getAllDemoPageConfigs()
  const openSource = configs.find(config => config.demo.planId === 'open-source')
  const paid = configs.filter(config => config.demo.planId !== 'open-source')

  assert.deepEqual(openSource?.featureBadges, [])
  assert.equal(paid.length, 5)
  paid.forEach((config) => {
    assert.ok(config.featureBadges.length >= 5)
    assert.equal(
      new Set(config.featureBadges.map(feature => feature.label)).size,
      config.featureBadges.length,
    )
    config.featureBadges.forEach((feature) => {
      assert.ok(feature.label.length > 3)
      assert.ok(feature.source.length > 3)
    })
  })
})

test('describes concrete Project Tracker capabilities instead of preset infrastructure', () => {
  assert.deepEqual(
    getDemoPageConfig('project-tracker').featureBadges,
    [
      { label: 'Row selection', source: 'RowSelectPlugin' },
      { label: 'Selection filters', source: 'AdvanceFilterPlugin' },
      { label: 'Header filtering & templates', source: 'FilterHeaderPlugin + filterHeaderTemplate' },
      { label: 'Column visibility', source: 'ColumnHidePlugin' },
      { label: 'Grouping summaries', source: 'Core grouping API + groupLabelTemplate' },
      {
        label: 'Rich column types',
        source: 'Dropdown, multi-select, date, currency, integer, progress, timeline, avatar, and rating',
      },
      { label: 'Drag row ordering', source: 'RowOrderPlugin' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
    ],
  )
})

test('describes the requested Excel collaboration, filtering, merge, and reorder capabilities', () => {
  assert.deepEqual(
    getDemoPageConfig('excel').featureBadges,
    [
      {
        label: 'Formulas',
        source: 'FormulaBarPlugin + FormulaDependencyHighlightPlugin + NamedRangesPlugin + FormulaPlugin',
      },
      {
        label: 'Collaboration',
        source: 'CollaborativePresencePlugin + CellFlashPlugin + EventManagerPlugin',
      },
      { label: 'Undo & redo', source: 'HistoryPlugin' },
      { label: 'Autofill', source: 'AutoFillPlugin + AutoFillPreviewPlugin' },
      { label: 'Multi-range selection', source: 'MultiRangeSelectionPlugin' },
      {
        label: 'Row & column controls',
        source: 'RowHeaderPlugin + RowOrderPlugin + ColumnMoveAdvancedPlugin + ColumnCollapsePlugin + ColumnHidePlugin + ColumnStretchPlugin',
      },
      { label: 'Smart copy & paste', source: 'ClipboardJsonPlugin' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
      { label: 'Excel export', source: 'ExportExcelPlugin' },
      { label: 'Advanced filters', source: 'AdvanceFilterPlugin + FilterHeaderPlugin' },
      { label: 'Validation & merging', source: 'CellValidatePlugin + CellMergePlugin + SameValueMergePlugin' },
    ],
  )
})

test('describes the requested active Gantt capabilities without an export badge', () => {
  assert.deepEqual(
    getDemoPageConfig('gantt').featureBadges,
    [
      { label: 'Gantt planning', source: 'GanttPlugin' },
      { label: 'Dependencies & critical path', source: 'GanttDependencyOverlayPlugin + GanttTaskBarsPlugin' },
      { label: 'Task hierarchy', source: 'TreeDataPlugin' },
      { label: 'Timeline zoom', source: 'GanttTimelineHeaderPlugin + zoomPreset' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
      { label: 'Working calendars', source: 'GanttPlugin + ganttCalendars' },
      { label: 'Undo / redo', source: 'HistoryPlugin' },
      { label: 'Row status', source: 'RowStatusPlugin' },
    ],
  )
})

test('describes the requested Scheduler capabilities without filter or history badges', () => {
  assert.deepEqual(
    getDemoPageConfig('event-scheduler').featureBadges,
    [
      { label: 'Scheduler views', source: 'EventSchedulerPlugin' },
      { label: 'Event editing', source: 'EventSchedulerPlugin: create, move, resize, delete' },
      { label: 'Conflict detection', source: 'EventSchedulerPlugin' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
      {
        label: 'Working calendars',
        source: 'EventSchedulerPlugin calendars: weekday, open coverage, and training',
      },
      {
        label: 'Shifts & blocked time',
        source: 'EventSchedulerPlugin: open shifts, locked events, and closed slots',
      },
    ],
  )
})

test('keeps shared demo lists aligned and typography at weight 500 or below', () => {
  assert.match(
    demoPageLayoutSource,
    /\.demo-page-feature-badges li\s*\{[\s\S]*?margin-top:\s*0;/,
  )
  assert.match(
    demoPageLayoutSource,
    /\.demo-page-guide-actions li\s*\{[\s\S]*?margin-top:\s*0;/,
  )

  const styleSource = demoPageLayoutSource.match(/<style[^>]*>([\s\S]*?)<\/style>/)?.[1] ?? ''
  assert.doesNotMatch(styleSource, /font-weight:\s*(?:[6-9]\d{2}|bold(?:er)?);/)
})

test('animates the guide target as an accessible CSS pulsar', () => {
  assert.match(
    demoPageLayoutSource,
    /\.demo-page-guide-target\s*\{[\s\S]*?animation:\s*demo-page-guide-pulse 2s ease-out infinite;/,
  )
  assert.match(demoPageLayoutSource, /@keyframes demo-page-guide-pulse\s*\{[\s\S]*?box-shadow:/)
  assert.match(
    demoPageLayoutSource,
    /@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?\.demo-page-guide-target\s*\{[\s\S]*?animation:\s*none;/,
  )
})

test('uses the Pro Advanced violet palette for Advanced sidebar badges', () => {
  assert.match(
    docsThemeSource,
    /\.demo-sidebar-badge\s*\{[\s\S]*?font-weight:\s*500;/,
  )
  assert.match(
    docsThemeSource,
    /\.demo-sidebar-badge--pro-advanced\s*\{[\s\S]*?border-color:\s*color-mix\(in srgb, #8b5cf6 28%, transparent\);[\s\S]*?background:\s*color-mix\(in srgb, #8b5cf6 14%, transparent\);[\s\S]*?color:\s*#7c3aed;/,
  )
})

test('resolves the requested public plan labels and try-in-project destinations', () => {
  const expected = {
    'grid-at-scale': { plan: 'MIT', destination: '/guide/' },
    'project-tracker': { plan: 'Pro Lite', destination: 'https://rv-grid.com/trial' },
    pivot: { plan: 'Pro Advanced', destination: 'https://rv-grid.com/trial' },
  } as const satisfies Partial<Record<DemoId, { plan: string, destination: string }>>

  Object.entries(expected).forEach(([demoId, value]) => {
    const config = getDemoPageConfig(demoId as DemoId)
    assert.equal(config.planLabel, value.plan)
    assert.ok(config.primaryCtaUrl.startsWith(value.destination))
    assert.match(config.primaryCtaUrl, new RegExp(`[?&]demo=${demoId}(?:&|$)`))
  })
})

test('creates stable data-layer events without allowing detail fields to replace identity', () => {
  const event = createDemoPageAnalyticsEvent('demo_guided_action_complete', 'pivot', {
    event: 'overridden',
    demo_slug: 'overridden',
    guided_action_index: 2,
    guided_action_label: 'Move a field',
  })

  assert.deepEqual(event, {
    guided_action_index: 2,
    guided_action_label: 'Move a field',
    event: 'demo_guided_action_complete',
    demo_name: 'Pivot Analytics',
    demo_slug: 'pivot',
    demo_tier: 'pro-advanced',
    demo_layout_version: DEMO_PAGE_LAYOUT_VERSION,
  })
})

test('keeps docs grid resets scoped', () => {
  assert.doesNotMatch(docsThemeSource, /(^|\n)revo-grid\s*\{/)
  assert.match(docsThemeSource, /\.vp-doc\s*\{[\s\S]*?revo-grid:not\(\.skip-style\)\s*\{/)
  assert.match(docsThemeSource, /revo-grid:not\(\.skip-style\)\s*\{\s*revogr-edit input/)
})

test('does not expose the retired ecommerce demo', () => {
  assert.equal('ecommerce' in PRODUCT_CATALOG.demos, false)
  assert.doesNotMatch(demoSidebarSource, /demoSidebarText\('ecommerce'\)|\/demo\/ecommerce/)
  assert.equal(existsSync(new URL('../../demo/ecommerce.md', import.meta.url)), false)
})

test('insets the Pivot preset switch and toolbar actions from both edges', () => {
  assert.match(
    pivotHeaderStyleSource,
    /\.financial-pivot-header__toolbar\s*\{[\s\S]*?box-sizing:\s*border-box;[\s\S]*?padding-inline:\s*8px;/,
  )
})

test('keeps the embedded Excel workbench flush with the workspace top edge', () => {
  assert.match(
    excelDemoSource,
    /\.demo-main-widget\s*\{[\s\S]*?padding-top:\s*0;/,
  )
})
