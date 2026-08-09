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
import { sidebarDemonEn } from '../configs/sidebar/en.demo'

const demoSidebarSource = readFileSync(new URL('../configs/sidebar/en.demo.ts', import.meta.url), 'utf8')
const vitepressConfigSource = readFileSync(new URL('../config.mts', import.meta.url), 'utf8')
const docsThemeSource = readFileSync(new URL('./style.scss', import.meta.url), 'utf8')
const demoPageLayoutSource = readFileSync(new URL('./DemoPageLayout.vue', import.meta.url), 'utf8')
const excelDemoSource = readFileSync(new URL('../../demo/excel.md', import.meta.url), 'utf8')
const planningDemoStyleSource = readFileSync(
  new URL('../../revogrid-demos/pro-advanced-planning/src/planning.scss', import.meta.url),
  'utf8',
)
const demoSeoFiles = [
  'index.md',
  'hr.md',
  'color.md',
  'excel.md',
  'audit-history.md',
  'column-collapse.md',
  'context-menu.md',
  'filtering.md',
  'infinity-scroll.md',
  'row-master.md',
  'tree-data.md',
  'pivot.md',
  'gantt.md',
  'gantt-big-data.md',
  'gantt-horizontal-big-data.md',
  'kanban.md',
  'kanban-performance.md',
  'kanban-server-loading.md',
  'event-scheduler.md',
  'planning.md',
] as const
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

test('links advanced demos to their standalone implementation repositories', () => {
  const implementationRepositories = {
    pivot: 'https://github.com/revolist/pivot',
    gantt: 'https://github.com/revolist/gantt',
    'gantt-big-data': 'https://github.com/revolist/gantt',
    'gantt-horizontal-big-data': 'https://github.com/revolist/gantt',
    kanban: 'https://github.com/revolist/kanban',
    'kanban-performance': 'https://github.com/revolist/kanban',
    'kanban-server-loading': 'https://github.com/revolist/kanban',
    'event-scheduler': 'https://github.com/revolist/scheduler',
  } as const satisfies Partial<Record<DemoId, string>>

  Object.entries(implementationRepositories).forEach(([demoId, repositoryUrl]) => {
    const implementationUrl = new URL(getDemoPageConfig(demoId as DemoId).implementationUrl)
    assert.equal(`${implementationUrl.origin}${implementationUrl.pathname}`, repositoryUrl)
  })
})

test('keeps every demo page on the shared SEO and social metadata contract', () => {
  const entries = demoSeoFiles.map((file) => {
    const source = readFileSync(new URL(`../../demo/${file}`, import.meta.url), 'utf8')
    const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
    const title = frontmatter.match(/^title:\s*(.+)$/m)?.[1] ?? ''
    const description = frontmatter.match(/^description:\s*(.+)$/m)?.[1] ?? ''

    assert.ok(title.length >= 20 && title.length <= 60, `${file} needs a concise title`)
    assert.ok(description.length >= 110 && description.length <= 160, `${file} needs a useful description`)
    assert.doesNotMatch(title, /RevoGrid/, `${file} should let VitePress append the site name once`)
    assert.match(frontmatter, /name:\s*keywords\n\s+content:\s*\S+/, `${file} needs search terms`)
    assert.doesNotMatch(frontmatter, /name:\s*description/, `${file} duplicates its frontmatter description`)
    assert.doesNotMatch(frontmatter, /property:\s*og:(?:title|description|url)/, `${file} bypasses shared Open Graph tags`)

    return { file, title, description }
  })

  assert.equal(new Set(entries.map(({ title }) => title)).size, entries.length)
  assert.equal(new Set(entries.map(({ description }) => description)).size, entries.length)

  for (const tag of ['canonical', 'og:title', 'og:description', 'og:url', 'twitter:title', 'twitter:description']) {
    assert.match(vitepressConfigSource, new RegExp(tag.replace(':', '\\:')))
  }
  assert.match(vitepressConfigSource, /property:\s*'og:image:alt'/)
  assert.match(vitepressConfigSource, /name:\s*'twitter:image:alt'/)

  const legacyHr = entries.find(({ file }) => file === 'hr.md')
  assert.ok(legacyHr)
  assert.match(
    readFileSync(new URL('../../demo/hr.md', import.meta.url), 'utf8'),
    /rel:\s*canonical\n\s+href:\s*https:\/\/rv-grid\.com\/demo\//,
  )
})

test('provides source-attributed feature badges only for paid demos', () => {
  const configs = getAllDemoPageConfigs()
  const openSource = configs.find(config => config.demo.planId === 'open-source')
  const paid = configs.filter(config => config.demo.planId !== 'open-source')

  assert.deepEqual(openSource?.featureBadges, [])
  assert.equal(paid.length, 18)
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
      { label: 'Gantt', source: 'GanttPlugin' },
      { label: 'Dependencies & critical path', source: 'GanttDependencyOverlayPlugin + GanttTaskBarsPlugin' },
      { label: 'Task hierarchy', source: 'TreeDataPlugin' },
      { label: 'Zoom', source: 'GanttTimelineHeaderPlugin + zoomPreset' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
      { label: 'Calendars', source: 'GanttPlugin + ganttCalendars' },
      { label: 'Undo / redo', source: 'HistoryPlugin' },
      { label: 'Row status', source: 'RowStatusPlugin' },
    ],
  )
})

test('uses the JavaScript Gantt Chart demo heading', () => {
  assert.equal(getDemoPageConfig('gantt').title, 'JavaScript Gantt Chart Demo')
})

test('does not advertise full-dataset export in the Infinity Scroll header', () => {
  assert.equal(
    getDemoPageConfig('infinity-scroll').featureBadges.some(({ label }) => label === 'Full-dataset export'),
    false,
  )
})

test('does not advertise responsive columns in the Row Master header', () => {
  assert.equal(
    getDemoPageConfig('row-master').featureBadges.some(({ label }) => label === 'Responsive columns'),
    false,
  )
})

test('uses the concise Calendar badge in the Large Dataset Gantt header', () => {
  const labels = getDemoPageConfig('gantt-big-data').featureBadges.map(({ label }) => label)
  assert.ok(labels.includes('Calendar'))
  assert.ok(!labels.includes('Working calendar'))
})

test('uses the 50K-Task title for the Kanban performance example', () => {
  assert.equal(getDemoPageConfig('kanban-performance').title, '50K-Task Kanban Performance Demo')
})

test('describes the 100K Kanban server-loading example', () => {
  const config = getDemoPageConfig('kanban-server-loading')
  assert.equal(config.title, '100K Kanban Server-Loading Demo')
  assert.ok(config.featureBadges.some(({ label }) => label === 'Server loading'))
  assert.ok(config.featureBadges.some(({ label }) => label === 'Loading placeholders'))
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

test('does not repeat the header CTA inside the demo workspace', () => {
  assert.doesNotMatch(demoPageLayoutSource, /Ready to test this with your own data/)
  assert.doesNotMatch(demoPageLayoutSource, /demo-page-bottom-cta/)
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

test('groups demo navigation by plan and Pro Advanced product family', () => {
  assert.deepEqual(
    sidebarDemonEn.slice(0, 2).map(group => ({
      text: group.text,
      collapsed: group.collapsed,
      links: group.items?.map(item => item.link),
    })),
    [
      { text: 'Core', collapsed: false, links: ['/demo/'] },
      {
        text: 'Pro',
        collapsed: false,
        links: [
          '/demo/tree-data',
          '/demo/filtering',
          '/demo/infinity-scroll',
          '/demo/column-collapse',
          '/demo/context-menu',
          '/demo/row-master',
          '/demo/excel',
          '/demo/audit-history',
          '/demo/color',
        ],
      },
    ],
  )

  const proAdvanced = sidebarDemonEn[2]
  assert.equal(proAdvanced.text, 'Pro Advanced')
  assert.equal(proAdvanced.collapsed, false)
  assert.equal(proAdvanced.items?.[0]?.link, '/demo/planning')
  assert.match(String(proAdvanced.items?.[0]?.text), /All-in-One Planning/)
  assert.match(String(proAdvanced.items?.[1]?.items?.[1]?.text), /10K-Task Gantt/)
  assert.match(String(proAdvanced.items?.[1]?.items?.[2]?.text), /20Y-Timeline Gantt/)
  assert.deepEqual(
    proAdvanced.items?.slice(1, 5).map(group => ({
      text: group.text,
      collapsed: group.collapsed,
      links: group.items?.map(item => item.link),
    })),
    [
      { text: 'Gantt Chart', collapsed: false, links: ['/demo/gantt', '/demo/gantt-big-data', '/demo/gantt-horizontal-big-data'] },
      { text: 'Scheduler', collapsed: false, links: ['/demo/event-scheduler'] },
      { text: 'Kanban', collapsed: false, links: ['/demo/kanban', '/demo/kanban-performance', '/demo/kanban-server-loading'] },
      { text: 'Pivot Table', collapsed: false, links: ['/demo/pivot'] },
    ],
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
    demo_name: 'Pivot Table Demo',
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

test('presents the integrated planning views without an inner frame and insets its switch', () => {
  assert.equal(PRODUCT_CATALOG.demos.planning.title, 'Grid, Kanban, Gantt & Scheduler')
  assert.match(
    planningDemoStyleSource,
    /\.planning-demo__switch\s*\{[\s\S]*?margin:\s*4px 16px 0;/,
  )
  assert.match(
    planningDemoStyleSource,
    /\.planning-demo__grid\s*\{[\s\S]*?border:\s*0;[\s\S]*?border-radius:\s*0;/,
  )
})
