import {
  PRODUCT_CATALOG,
  type CatalogDemo,
  type DemoId,
  type PlanId,
} from '../../commercial/productCatalog'

export const DEMO_PAGE_LAYOUT_VERSION = 'demo-page-v1' as const

export interface DemoFeatureBadge {
  label: string
  source: string
}

export interface DemoPageContent {
  title: string
  description: string
  implementationUrl: string
  guidedActions: readonly string[]
  featureBadges: readonly DemoFeatureBadge[]
}

export interface DemoPageConfig extends DemoPageContent {
  demo: CatalogDemo
  planLabel: 'MIT' | 'Pro Lite' | 'Pro Advanced'
  primaryCtaUrl: string
  pricingUrl: string
}

const DEMO_PAGE_CONTENT = {
  'grid-at-scale': {
    title: 'Grid at Scale Demo',
    description: 'Explore fast editing, filtering, and sorting across a large virtualized dataset.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/core-free/src/hr.vue',
    guidedActions: ['Change the dataset size', 'Edit an employee', 'Sort or filter a column'],
    featureBadges: [],
  },
  'project-tracker': {
    title: 'Project Tracker Demo',
    description: 'Manage owners, priorities, statuses, and deadlines in an editable project workspace.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-project-table/src/project-table.vue',
    guidedActions: ['Change a project status', 'Filter the project list', 'Add a project'],
    featureBadges: [
      { label: 'Row selection', source: 'RowSelectPlugin' },
      { label: 'Excel filters', source: 'AdvanceFilterPlugin' },
      { label: 'Header filtering & selection', source: 'FilterHeaderPlugin + filterHeaderTemplate' },
      { label: 'Hide columns', source: 'ColumnHidePlugin' },
      { label: 'Grouping summaries', source: 'Core grouping API + groupLabelTemplate' },
      {
        label: 'Advanced column types',
        source: 'Dropdown, multi-select, date, currency, integer, progress, timeline, avatar, and rating',
      },
      { label: 'Row reorder', source: 'RowOrderPlugin' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
    ],
  },
  excel: {
    title: 'Excel Workbench Demo',
    description: 'Edit workbook-style data with formulas, formatting, validation, and import or export flows.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-excel/src/excel.vue',
    guidedActions: ['Edit a formula', 'Format a cell', 'Export the workbook'],
    featureBadges: [
      {
        label: 'Formula',
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
      { label: 'Column drilldown', source: 'ColumnCollapsePlugin' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
      { label: 'Excel export', source: 'ExportExcelPlugin' },
      { label: 'Advanced filters', source: 'AdvanceFilterPlugin + FilterHeaderPlugin' },
      { label: 'Validation & merging', source: 'CellValidatePlugin + CellMergePlugin + SameValueMergePlugin' },
    ],
  },
  'audit-history': {
    title: 'Audit History Demo',
    description: 'Compare revisions, export records, and restore earlier values.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-audit-history/src/audit-history.vue',
    guidedActions: ['Edit an invoice field', 'Inspect the new audit record', 'Restore an earlier value'],
    featureBadges: [
      { label: 'Attributed change log', source: 'AuditHistoryPlugin' },
      { label: 'Audit side panel', source: 'defineAuditHistoryPanel' },
      { label: 'Compare revisions', source: 'AuditHistoryPanelOptions.allowCompare' },
      { label: 'Export audit records', source: 'AuditHistoryPanelOptions.allowExport' },
      { label: 'Restore changes', source: 'AuditHistoryPanelOptions.restoreActions' },
      { label: 'Change highlighting', source: 'CellFlashPlugin' },
    ],
  },
  'column-collapse': {
    title: 'Column Collapse Demo',
    description: 'Collapsible groups, sealed summaries, filtering, selection & responsive columns.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-column-collapse/src/column-collapse.vue',
    guidedActions: ['Collapse a grouped header', 'Expand the hidden columns', 'Filter a contact column'],
    featureBadges: [
      { label: 'Column collapse', source: 'ColumnCollapsePlugin' },
      { label: 'Grouped headers', source: 'RevoGrid column groups' },
      { label: 'Advanced filters', source: 'AdvanceFilterPlugin' },
      { label: 'Header filtering', source: 'FilterHeaderPlugin' },
      { label: 'Row selection', source: 'RowSelectPlugin' },
      { label: 'Alternating rows', source: 'RowOddPlugin' },
    ],
  },
  filtering: {
    title: 'Advanced Filtering Demo',
    description: 'Presets, quick search, expression filters, selection cascades, date rules, and numeric sliders.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-filtering/src/filtering.vue',
    guidedActions: ['Apply a filter preset', 'Try the global search', 'Build a header filter'],
    featureBadges: [
      { label: 'Advanced filters', source: 'AdvanceFilterPlugin' },
      { label: 'Header filtering', source: 'FilterHeaderPlugin' },
      { label: 'Quick search', source: 'RevoGrid quickFilter property' },
      { label: 'Filter expressions', source: 'ColumnFilterConfig.expressions' },
      { label: 'Selection cascades', source: 'ColumnFilterConfig.selection.cascadeOptions' },
      { label: 'Range sliders', source: 'FIlTER_SLIDER' },
    ],
  },
  'infinity-scroll': {
    title: 'Infinity Scroll Demo',
    description: 'Load remote rows in buffered chunks with server-side sorting and filtering.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-infinity-scroll/src/infinity-scroll.vue',
    guidedActions: ['Scroll to load more rows', 'Sort a remote column', 'Export the full dataset'],
    featureBadges: [
      { label: 'Remote chunk loading', source: 'InfinityScrollPlugin' },
      { label: 'Buffered preloading', source: 'InfinityScrollConfig.bufferSize + preloadThreshold' },
      { label: 'Server-side sorting', source: 'InfinityScrollConfig.loadData order argument' },
      { label: 'Server-side filtering', source: 'InfinityScrollConfig.loadData filter arguments' },
      { label: 'Pinned summaries', source: 'pinnedTopSource + pinnedBottomSource' },
    ],
  },
  'row-master': {
    title: 'Row Master Demo',
    description: 'Rich master-detail panels with nested hierarchy, asynchronous details in virtualized grid.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-row-master/src/row-master.vue',
    guidedActions: ['Expand a project row', 'Inspect the loaded details', 'Navigate the project hierarchy'],
    featureBadges: [
      { label: 'Master-detail rows', source: 'MasterRowPlugin' },
      { label: 'Custom detail templates', source: 'RowMasterConfig.template' },
      { label: 'Asynchronous details', source: 'RowMasterConfig template data loader' },
      { label: 'Tree hierarchy', source: 'TreeDataPlugin' },
      { label: 'Focus verification', source: 'CellColumnFocusVerifyPlugin' },
    ],
  },
  'tree-data': {
    title: 'Tree Data Demo',
    description: 'Hierarchical rows with sticky parents, animation, reorder, selection, filtering & export.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-tree-data/src/tree.vue',
    guidedActions: ['Expand the organization tree', 'Toggle sticky parents', 'Reorder a hierarchy row'],
    featureBadges: [
      { label: 'Hierarchical rows', source: 'TreeDataPlugin' },
      { label: 'Sticky parents', source: 'StickyCellsPlugin + TreeConfig.stickyParents' },
      { label: 'Animated expansion', source: 'DimensionAnimationPlugin' },
      { label: 'Drag row ordering', source: 'RowOrderPlugin' },
      { label: 'Advanced filters', source: 'AdvanceFilterPlugin' },
      { label: 'Row selection', source: 'RowSelectPlugin' },
      { label: 'Excel export', source: 'ExportExcelPlugin' },
    ],
  },
  pivot: {
    title: 'JavaScript Pivot Table Component Demo',
    description: 'High-performance pivot table, drag-and-drop fields, multi-level aggregation, filtering, and export.',
    implementationUrl: 'https://github.com/revolist/pivot',
    guidedActions: ['Change an aggregation', 'Move a field', 'Apply a filter'],
    featureBadges: [
      { label: 'Pivot Table analytics', source: 'PivotPlugin' },
      { label: 'Advanced filters', source: 'AdvanceFilterPlugin + FilterHeaderPlugin' },
      { label: 'Collapsible columns', source: 'ColumnCollapsePlugin' },
      { label: 'Multi-row headers', source: 'MultiRowHeaderPlugin' },
      { label: 'Same-value merge', source: 'SameValueMergePlugin' },
    ],
  },
  gantt: {
    title: 'JavaScript Gantt Chart Demo',
    description: 'Plan tasks, dependencies, milestones, and schedules in an interactive timeline workspace.',
    implementationUrl: 'https://github.com/revolist/gantt',
    guidedActions: ['Move a task', 'Resize a timeline item', 'Change the zoom'],
    featureBadges: [
      { label: 'Gantt', source: 'GanttPlugin' },
      { label: 'Dependencies & critical path', source: 'GanttDependencyOverlayPlugin + GanttTaskBarsPlugin' },
      { label: 'Task hierarchy', source: 'TreeDataPlugin' },
      { label: 'Zoom', source: 'GanttTimelineHeaderPlugin + zoomPreset' },
      { label: 'Context menus', source: 'ContextMenuPlugin' },
      { label: 'Calendars', source: 'GanttPlugin + ganttCalendars' },
      { label: 'Undo / redo', source: 'HistoryPlugin' },
    ],
  },
  'gantt-big-data': {
    title: 'Large Dataset Gantt Demo',
    description: '10,000 virtualized Gantt tasks and 19,796 dependencies.',
    implementationUrl: 'https://github.com/revolist/gantt',
    guidedActions: ['Scroll through 10,000 tasks', 'Inspect linked task chains', 'Pan across the three-month timeline'],
    featureBadges: [
      { label: 'Gantt timeline', source: 'GanttPlugin' },
      { label: '10,000 tasks', source: 'createGanttBigDataSet task fixture' },
      { label: '19,796 dependencies', source: 'createGanttBigDataSet dependency graph' },
      { label: 'Row virtualization', source: 'RevoGrid virtual row rendering' },
      { label: 'Day and week scale', source: 'GanttPlugin zoomPreset: day-week' },
      { label: 'Calendar', source: 'GanttPlugin ganttCalendars' },
    ],
  },
  'gantt-horizontal-big-data': {
    title: '20Y-Timeline Gantt Demo',
    description: 'Linked tasks across a twenty-year program with month-and-quarter scaling.',
    implementationUrl: 'https://github.com/revolist/gantt',
    guidedActions: ['Pan across the twenty-year timeline', 'Inspect linked task chains', 'Compare month and quarter periods'],
    featureBadges: [
      { label: 'Gantt timeline', source: 'GanttPlugin' },
      { label: '20-year range', source: '2026–2045 horizontal big-data fixture' },
      { label: '100 tasks', source: 'createGanttHorizontalBigDataSet task fixture' },
      { label: '194 dependencies', source: 'createGanttHorizontalBigDataSet dependency graph' },
      { label: 'Horizontal virtualization', source: 'RevoGrid virtual column rendering' },
      { label: 'Month and quarter scale', source: 'GanttPlugin zoomPreset: month-quarter' },
    ],
  },
  kanban: {
    title: 'Kanban Workflow Demo',
    description: 'Cards across workflow columns and swimlanes with ordering, WIP limits, card rules & editing.',
    implementationUrl: 'https://github.com/revolist/kanban',
    guidedActions: ['Move a card between columns', 'Review a swimlane', 'Test a WIP limit'],
    featureBadges: [
      { label: 'Kanban board', source: 'KanbanPlugin' },
      { label: 'Card movement', source: 'KanbanPlugin source-backed drag and drop' },
      { label: 'Swimlanes', source: 'KanbanConfig swimlaneField + swimlanes' },
      { label: 'WIP limits', source: 'KanbanConfig column and swimlane WIP limits' },
      { label: 'Card rules', source: 'KanbanConfig cardRules' },
      { label: 'Custom cards', source: 'KanbanConfig customization.cardContent' },
    ],
  },
  'event-scheduler': {
    title: 'JavaScript Scheduler Demo',
    description: 'Build resource schedules with events, movement, resizing, and calendar views.',
    implementationUrl: 'https://github.com/revolist/scheduler',
    guidedActions: ['Create an event', 'Move or resize a shift', 'Change the calendar view'],
    featureBadges: [
      { label: 'Scheduler & Calendar', source: 'EventSchedulerPlugin' },
      { label: 'Event editing', source: 'EventSchedulerPlugin: create, move, resize, delete' },
      { label: 'Conflicts', source: 'EventSchedulerPlugin' },
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
  },
  planning: {
    title: 'Grid, Kanban, Gantt and Scheduler Demo',
    description: 'One shared model across synchronized Data Grid, Kanban, Gantt, Scheduler & Calendar views.',
    implementationUrl: 'https://github.com/revolist/revogrid-demos/blob/main/pro-advanced-planning/src/planning.vue',
    guidedActions: ['Edit a task in the grid', 'Move a task in Gantt', 'Switch between scheduler and calendar views'],
    featureBadges: [
      { label: 'Shared model', source: 'Reactive task state shared across every planning view' },
      { label: 'Data grid', source: 'RevoGrid editing, filtering, sorting, ranges, and column moving' },
      { label: 'Gantt', source: 'GanttPlugin' },
      { label: 'Resource scheduling', source: 'EventSchedulerPlugin resourceTimeline view' },
      { label: 'Calendar', source: 'EventSchedulerPlugin day view' },
      { label: 'Resource assignments', source: 'Gantt resources and assignments synchronized with scheduler events' },
    ],
  },
} as const satisfies Record<DemoId, DemoPageContent>

const PLAN_LABELS = {
  'open-source': 'MIT',
  'pro-lite': 'Pro Lite',
  'pro-advanced': 'Pro Advanced',
} as const satisfies Partial<Record<PlanId, DemoPageConfig['planLabel']>>

const PUBLIC_SITE_ORIGIN = 'https://rv-grid.com'

const withDemoAttribution = (
  href: string,
  demoId: DemoId,
  preserveAbsolute = false,
): string => {
  const url = new URL(href, PUBLIC_SITE_ORIGIN)
  url.searchParams.set('source', 'demo-page')
  url.searchParams.set('demo', demoId)
  return url.origin === PUBLIC_SITE_ORIGIN && !preserveAbsolute
    ? `${url.pathname}${url.search}${url.hash}`
    : url.toString()
}

export const getDemoPageConfig = (demoId: DemoId): DemoPageConfig => {
  const demo = PRODUCT_CATALOG.demos[demoId]
  const planLabel = PLAN_LABELS[demo.planId]
  if (!planLabel) throw new Error(`Demo page layout does not support plan "${demo.planId}"`)

  return {
    ...DEMO_PAGE_CONTENT[demoId],
    demo,
    planLabel,
    primaryCtaUrl: demo.planId === 'open-source'
      ? withDemoAttribution('/guide/', demoId)
      : withDemoAttribution(PRODUCT_CATALOG.urls.trialRequest, demoId, true),
    implementationUrl: withDemoAttribution(DEMO_PAGE_CONTENT[demoId].implementationUrl, demoId),
    pricingUrl: withDemoAttribution(PRODUCT_CATALOG.urls.pricing, demoId),
  }
}

export type DemoPageAnalyticsEventName =
  | 'demo_cta_click'
  | 'demo_implementation_open'
  | 'demo_guided_action_complete'
  | 'demo_meaningful_interaction'

export const createDemoPageAnalyticsEvent = (
  event: DemoPageAnalyticsEventName,
  demoId: DemoId,
  details: Record<string, unknown> = {},
) => {
  const demo = PRODUCT_CATALOG.demos[demoId]
  return {
    ...details,
    event,
    demo_name: demo.title,
    demo_slug: demo.id,
    demo_tier: demo.planId,
    demo_layout_version: DEMO_PAGE_LAYOUT_VERSION,
  }
}

export const getAllDemoPageConfigs = (): DemoPageConfig[] =>
  (Object.keys(PRODUCT_CATALOG.demos) as DemoId[]).map(getDemoPageConfig)
