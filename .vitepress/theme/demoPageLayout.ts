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
  pivot: {
    title: 'Pivot Analytics Demo',
    description: 'Analyze data with drag-and-drop fields, multi-level aggregation, filtering, and export.',
    implementationUrl: 'https://github.com/revolist/pivot',
    guidedActions: ['Change an aggregation', 'Move a field', 'Apply a filter'],
    featureBadges: [
      { label: 'Pivot analytics', source: 'PivotPlugin' },
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
    description: 'Explore 10,000 virtualized Gantt tasks and 19,796 dependencies across a responsive three-month project timeline.',
    implementationUrl: 'https://github.com/revolist/gantt',
    guidedActions: ['Scroll through 10,000 tasks', 'Inspect linked task chains', 'Pan across the three-month timeline'],
    featureBadges: [
      { label: 'Gantt timeline', source: 'GanttPlugin' },
      { label: '10,000 tasks', source: 'createGanttBigDataSet task fixture' },
      { label: '19,796 dependencies', source: 'createGanttBigDataSet dependency graph' },
      { label: 'Row virtualization', source: 'RevoGrid virtual row rendering' },
      { label: 'Day and week scale', source: 'GanttPlugin zoomPreset: day-week' },
      { label: 'Working calendar', source: 'GanttPlugin ganttCalendars' },
    ],
  },
  kanban: {
    title: 'Kanban Workflow Demo',
    description: 'Manage cards across workflow columns and swimlanes with ordering, WIP limits, card rules, and editing.',
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
    description: 'Build and adjust resource schedules with event creation, movement, resizing, and calendar views.',
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
    description: 'Edit one shared task model across synchronized Data Grid, Kanban, Gantt, Scheduler, and Calendar views.',
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
