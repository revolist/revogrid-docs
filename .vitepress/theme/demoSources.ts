import type { DemoId } from '../../commercial/productCatalog'

export type DemoSourceFramework = 'vue' | 'ts' | 'react' | 'angular'
export type DemoSourceFile = {
  path: string
  label: string
  lang: string
  load: () => Promise<string>
}
export type DemoSourceEntry = {
  label: string
  command: string
  documentationUrl: string
  files: readonly DemoSourceFile[]
}

const sourceFile = (path: string, load: () => Promise<string>): DemoSourceFile => ({
  path,
  label: path.split('/').at(-1) ?? path,
  lang: path.endsWith('.vue')
    ? 'vue'
    : path.endsWith('.tsx')
      ? 'tsx'
      : path.endsWith('.json')
        ? 'json'
      : path.endsWith('.md')
        ? 'markdown'
      : path.endsWith('.html')
        ? 'html'
      : path.endsWith('.scss') || path.endsWith('.css')
        ? 'css'
        : 'ts',
  load,
})

const planningDataFile = (file: string, load: () => Promise<string>) =>
  sourceFile(`pro-advanced-planning/src/data/${file}`, load)

const planningDataFiles = [
  planningDataFile('index.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/index.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('columns.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/columns.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('fixtures.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/fixtures.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('palette.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/palette.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('formatting.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/formatting.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('gantt.config.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/gantt.config.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('kanban.config.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/kanban.config.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('planning.structured.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/planning.structured.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('scheduler.config.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/scheduler.config.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('workspace.plugin.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/workspace.plugin.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('source.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/source.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('store.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/store.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('sync.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/sync.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('types.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/types.ts?raw').then(
      module => module.default,
    ),
  ),
  planningDataFile('workspace.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/workspace.ts?raw').then(
      module => module.default,
    ),
  ),
] as const

const planningSharedFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
  ...planningDataFiles,
  sourceFile('pro-advanced-planning/src/planning.scss', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/planning.scss?raw').then(
      module => module.default,
    ),
  ),
] as const

const gridAtScaleSupportingFiles = [
  sourceFile('core-free/src/hr-age-indicator.ts', () =>
    import('../../revogrid-demos/core-free/src/hr-age-indicator.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/hr-color-select.ts', () =>
    import('../../revogrid-demos/core-free/src/hr-color-select.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/hr-company-avatar.ts', () =>
    import('../../revogrid-demos/core-free/src/hr-company-avatar.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/hr-performance.ts', () =>
    import('../../revogrid-demos/core-free/src/hr-performance.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/hr-themes.ts', () =>
    import('../../revogrid-demos/core-free/src/hr-themes.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/hr-workspace.ts', () =>
    import('../../revogrid-demos/core-free/src/hr-workspace.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/sys-data/hr.columns.ts', () =>
    import('../../revogrid-demos/core-free/src/sys-data/hr.columns.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/sys-data/hr.data.ts', () =>
    import('../../revogrid-demos/core-free/src/sys-data/hr.data.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/sys-data/hr.data.generator.ts', () =>
    import('../../revogrid-demos/core-free/src/sys-data/hr.data.generator.ts?raw').then(module => module.default),
  ),
  sourceFile('core-free/src/hr.css', () =>
    import('../../revogrid-demos/core-free/src/hr.css?raw').then(module => module.default),
  ),
] as const

const gridAtScaleVueFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
] as const

const gridAtScaleVanillaFiles = [
  sourceFile('core-free/src/hr-loading.ts', () =>
    import('../../revogrid-demos/core-free/src/hr-loading.ts?raw').then(module => module.default),
  ),
] as const

const aiPromptLibrarySupportingFiles = [
  sourceFile('core-ai-prompts/src/prompt-library.shared.ts', () =>
    import('../../revogrid-demos/core-ai-prompts/src/prompt-library.shared.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('core-ai-prompts/src/prompt-editor.ts', () =>
    import('../../revogrid-demos/core-ai-prompts/src/prompt-editor.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('core-ai-prompts/src/prompts.json', () =>
    import('../../revogrid-demos/core-ai-prompts/src/prompts.json?raw').then(module => module.default),
  ),
  sourceFile('core-ai-prompts/src/prompt-library.css', () =>
    import('../../revogrid-demos/core-ai-prompts/src/prompt-library.css?raw').then(
      module => module.default,
    ),
  ),
] as const

const projectPortfolioSupportingFiles = [
  sourceFile('core-project-portfolio/src/project-portfolio.shared.ts', () =>
    import('../../revogrid-demos/core-project-portfolio/src/project-portfolio.shared.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('core-project-portfolio/src/project-portfolio.css', () =>
    import('../../revogrid-demos/core-project-portfolio/src/project-portfolio.css?raw').then(
      module => module.default,
    ),
  ),
] as const

const treeDataSupportingFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-tree-data/src/tree.shared.ts', () =>
    import('../../revogrid-demos/pro-tree-data/src/tree.shared.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-tree-data/src/tree.excel.ts', () =>
    import('../../revogrid-demos/pro-tree-data/src/tree.excel.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-tree-data/src/tree.scss', () =>
    import('../../revogrid-demos/pro-tree-data/src/tree.scss?raw').then(module => module.default),
  ),
] as const

const filteringSupportingFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-filtering/src/filtering.shared.ts', () =>
    import('../../revogrid-demos/pro-filtering/src/filtering.shared.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-filtering/src/filtering.columns.ts', () =>
    import('../../revogrid-demos/pro-filtering/src/filtering.columns.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-filtering/src/filtering.config.ts', () =>
    import('../../revogrid-demos/pro-filtering/src/filtering.config.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-filtering/src/filtering.data.ts', () =>
    import('../../revogrid-demos/pro-filtering/src/filtering.data.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-filtering/src/filtering.structured.ts', () =>
    import('../../revogrid-demos/pro-filtering/src/filtering.structured.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-filtering/src/filtering.scss', () =>
    import('../../revogrid-demos/pro-filtering/src/filtering.scss?raw').then(module => module.default),
  ),
] as const

const infinityScrollSupportingFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-infinity-scroll/src/infinity-scroll.shared.ts', () =>
    import('../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.shared.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-infinity-scroll/src/infinity-scroll.export.ts', () =>
    import('../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.export.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-infinity-scroll/src/infinity-scroll.scss', () =>
    import('../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.scss?raw').then(
      module => module.default,
    ),
  ),
] as const

const columnCollapseSupportingFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-column-collapse/src/column-collapse.shared.ts', () =>
    import('../../revogrid-demos/pro-column-collapse/src/column-collapse.shared.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-column-collapse/src/column-collapse.scss', () =>
    import('../../revogrid-demos/pro-column-collapse/src/column-collapse.scss?raw').then(
      module => module.default,
    ),
  ),
] as const

const contextMenuSupportingFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.shared.ts', () =>
    import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.shared.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.data.ts', () =>
    import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.data.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.details.ts', () =>
    import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.details.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.formats.ts', () =>
    import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.formats.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.scss', () =>
    import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.scss?raw').then(
      module => module.default,
    ),
  ),
] as const

const rowMasterSupportingFiles = [
  sourceFile('composables/useRandomData.ts', () =>
    import('../../revogrid-demos/composables/useRandomData.ts?raw').then(module => module.default),
  ),
  sourceFile('pro-row-master/src/row-master.shared.ts', () =>
    import('../../revogrid-demos/pro-row-master/src/row-master.shared.ts?raw').then(
      module => module.default,
    ),
  ),
  sourceFile('pro-row-master/src/row-master.scss', () =>
    import('../../revogrid-demos/pro-row-master/src/row-master.scss?raw').then(
      module => module.default,
    ),
  ),
] as const

const projectTrackerSupportingFiles = [
  'pro-project-table/src/project-tracker.scss',
  'pro-project-table/src/project-tracker.shared.ts',
  'pro-project-table/src/project-tracker/options.ts',
  'pro-project-table/src/project-tracker/types.ts',
  'pro-project-table/src/project-tracker/plugins.ts',
  'pro-project-table/src/project-tracker/column-types.ts',
  'pro-project-table/src/project-tracker/filters.ts',
  'pro-project-table/src/project-tracker/renderers.ts',
  'pro-project-table/src/project-tracker/data.ts',
  'pro-project-table/src/project-tracker/summary.ts',
  'pro-project-table/src/project-tracker/utils.ts',
  'pro-project-table/src/project-tracker/columns.ts',
  'pro-project-table/src/project-tracker/editors.ts',
  'pro-project-table/src/project-tracker/grouping.ts',
  'pro-project-table/src/project-tracker/actions.ts',
  'pro-project-table/src/project-tracker/dom.ts',
  'pro-project-table/src/project-tracker/context-menus.ts',
  'pro-project-table/src/project-tracker/toolbar.ts',
] as const

const auditHistorySupportingFiles = [
  'composables/useRandomData.ts',
  'pro-audit-history/src/audit-history.shared.ts',
] as const

const excelSupportingFiles = [
  'pro-excel/src/spreadsheet/models.ts',
  'pro-excel/src/spreadsheet/config.ts',
  'pro-excel/src/spreadsheet/workbook.ts',
  'pro-excel/src/spreadsheet/columns.ts',
  'pro-excel/src/spreadsheet/data.ts',
  'pro-excel/src/spreadsheet/dropdown.ts',
  'pro-excel/src/spreadsheet/presentation.ts',
  'pro-excel/src/spreadsheet/status.ts',
  'pro-excel/src/spreadsheet/theme.ts',
  'pro-excel/src/spreadsheet/interactions.ts',
  'pro-excel/src/spreadsheet/interaction-config.ts',
  'pro-excel/src/spreadsheet/interaction-edit-guards.ts',
  'pro-excel/src/spreadsheet/interaction-icons.ts',
  'pro-excel/src/spreadsheet.simulation.ts',
  'pro-excel/src/spreadsheet.presence.ts',
  'pro-excel/src/spreadsheet.feed.ts',
] as const

const pivotSupportingFiles = [
  'pro-advanced-pivot/demo-host.css',
  'pro-advanced-pivot/src/shared/theme.ts',
  'pro-advanced-pivot/src/contoso-data.ts',
  'pro-advanced-pivot/src/sales-transactions-v2.ts',
  'pro-advanced-pivot/src/financial-dataset.ts',
  'pro-advanced-pivot/src/financial.actions.ts',
  'pro-advanced-pivot/src/financial-fields-drawer.ts',
  'pro-advanced-pivot/src/pivot.xlsx-export.ts',
  'pro-advanced-pivot/src/financial.heatmap.ts',
  'pro-advanced-pivot/src/financial-pivot-header/financial-pivot-header.ts',
  'pro-advanced-pivot/src/financial-pivot-header/financial-pivot-header.scss',
] as const

const ganttShowcaseSupportingFiles = [
  'pro-advanced-gantt/src/examples/showcase/data/gantt-project-data.ts',
  'pro-advanced-gantt/src/examples/showcase/data/gantt-project-base-data.ts',
  'pro-advanced-gantt/src/examples/showcase/data/gantt-showcase-data.ts',
  'pro-advanced-gantt/src/examples/showcase/data/gantt-showcase-timeline.ts',
  'pro-advanced-gantt/src/examples/showcase/data/gantt-showcase-columns.ts',
  'pro-advanced-gantt/src/examples/showcase/data/gantt-showcase-icons.ts',
  'pro-advanced-gantt/src/theme.ts',
] as const

const ganttBigDataSupportingFiles = [
  'pro-advanced-gantt/src/examples/big-data/gantt-big-data-data.ts',
  'pro-advanced-gantt/src/theme.ts',
] as const

const kanbanShowcaseSupportingFiles = [
  'pro-advanced-kanban/src/theme.ts',
  'pro-advanced-kanban/src/examples/showcase/kanban.shared.ts',
] as const

const kanbanPerformanceSupportingFiles = [
  'pro-advanced-kanban/src/theme.ts',
  'pro-advanced-kanban/src/examples/performance/kanban-board-data.ts',
] as const

const kanbanServerLoadingSupportingFiles = [
  'pro-advanced-kanban/src/theme.ts',
  'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.shared.ts',
] as const

const schedulerSupportingFiles = [
  'pro-advanced-scheduler/src/shared/theme.ts',
  'pro-advanced-scheduler/src/data.ts',
  'pro-advanced-scheduler/src/resource-range.ts',
  'pro-advanced-scheduler/src/time-label.ts',
  'pro-advanced-scheduler/src/components/index.ts',
  'pro-advanced-scheduler/src/components/scheduler-dialog/scheduler-dialog.ts',
  'pro-advanced-scheduler/src/components/scheduler-header/scheduler-header.ts',
  'pro-advanced-scheduler/src/styles.scss',
] as const

let supportingSourceLoaders: Record<string, () => Promise<string>> | undefined

const demoSourceFile = (path: string) => sourceFile(path, async () => {
  // Keep raw sources lazy while giving Vite explicit files to include in builds.
  supportingSourceLoaders ??= import.meta.glob<string>([
    '../../revogrid-demos/composables/*.ts',
    '../../revogrid-demos/pro-project-table/src/**/*.{ts,scss}',
    '../../revogrid-demos/pro-audit-history/src/**/*.ts',
    '../../revogrid-demos/pro-excel/src/**/*.ts',
    '../../revogrid-demos/pro-advanced-pivot/demo-host.css',
    '../../revogrid-demos/pro-advanced-pivot/src/**/*.{ts,scss}',
    '../../revogrid-demos/pro-advanced-gantt/src/**/*.ts',
    '../../revogrid-demos/pro-advanced-kanban/src/**/*.ts',
    '../../revogrid-demos/pro-advanced-scheduler/src/**/*.{ts,scss}',
    '!**/node_modules/**',
  ], { query: '?raw', import: 'default' })
  const load = supportingSourceLoaders[`../../revogrid-demos/${path}`]
  if (!load) throw new Error(`Demo source is not registered: ${path}`)
  return load()
})

const supportFiles = (paths: readonly string[]) => paths.map(demoSourceFile)

export const DEMO_SOURCE_REGISTRY: Record<DemoId, Record<DemoSourceFramework, DemoSourceEntry>> = {
  'property-booking': {
    vue: {
      label: 'Vue',
      command: 'pnpm dev',
      documentationUrl: '/jsscheduler',
      files: [
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/PropertyBooking.vue', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/PropertyBooking.vue?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/demo.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/demo.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/templates.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/templates.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/config.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/config.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/data.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/data.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/editor.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/editor.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/icons.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/icons.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/photos.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/photos.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/styles.scss', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/styles.scss?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/README.md', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/README.md?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/shared/theme.ts?raw').then(module => module.default)),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm dev',
      documentationUrl: '/jsscheduler',
      files: [
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/PropertyBooking.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/PropertyBooking.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/demo.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/demo.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/templates.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/templates.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/config.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/config.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/data.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/data.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/editor.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/editor.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/icons.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/icons.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/photos.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/photos.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/styles.scss', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/styles.scss?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/README.md', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/README.md?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/shared/theme.ts?raw').then(module => module.default)),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm dev',
      documentationUrl: '/jsscheduler',
      files: [
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/PropertyBooking.tsx', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/PropertyBooking.tsx?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/demo.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/demo.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/templates.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/templates.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/config.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/config.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/data.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/data.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/editor.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/editor.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/icons.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/icons.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/photos.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/photos.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/styles.scss', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/styles.scss?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/README.md', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/README.md?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/shared/theme.ts?raw').then(module => module.default)),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm dev',
      documentationUrl: '/jsscheduler',
      files: [
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/PropertyBookingAngular.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/PropertyBookingAngular.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/demo.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/demo.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/templates.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/templates.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/config.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/config.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/data.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/data.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/editor.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/editor.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/icons.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/icons.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/photos.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/photos.ts?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/styles.scss', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/styles.scss?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/examples/property-booking/README.md', () => import('../../revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/README.md?raw').then(module => module.default)),
        sourceFile('pro-advanced-scheduler/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-scheduler/src/shared/theme.ts?raw').then(module => module.default)),
      ],
    },
  },
  planning: {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-planning dev:vue',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-planning/src/planning.vue', () =>
          import('../../revogrid-demos/pro-advanced-planning/src/planning.vue?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-planning/src/composables/usePlanningWorkspace.ts', () =>
          import('../../revogrid-demos/pro-advanced-planning/src/composables/usePlanningWorkspace.ts?raw').then(
            module => module.default,
          ),
        ),
        ...planningSharedFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-planning dev:ts',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-planning/src/planning.ts', () =>
          import('../../revogrid-demos/pro-advanced-planning/src/planning.ts?raw').then(
            module => module.default,
          ),
        ),
        ...planningSharedFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-planning dev:react',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-planning/src/planning.react.tsx', () =>
          import('../../revogrid-demos/pro-advanced-planning/src/planning.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...planningSharedFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-planning dev:angular',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-planning/src/planning.angular.ts', () =>
          import('../../revogrid-demos/pro-advanced-planning/src/planning.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...planningSharedFiles,
      ],
    },
  },
  'grid-at-scale': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/core-free dev:vue',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-free/src/hr.vue', () =>
          import('../../revogrid-demos/core-free/src/hr.vue?raw').then(module => module.default),
        ),
        ...gridAtScaleSupportingFiles,
        ...gridAtScaleVueFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/core-free dev:ts',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-free/src/hr.ts', () =>
          import('../../revogrid-demos/core-free/src/hr.ts?raw').then(module => module.default),
        ),
        ...gridAtScaleSupportingFiles,
        ...gridAtScaleVanillaFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/core-free dev:react',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-free/src/hr.react.tsx', () =>
          import('../../revogrid-demos/core-free/src/hr.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...gridAtScaleSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/core-free dev:angular',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-free/src/hr.angular.ts', () =>
          import('../../revogrid-demos/core-free/src/hr.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...gridAtScaleSupportingFiles,
      ],
    },
  },
  'ai-prompt-library': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/core-ai-prompts dev:vue',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-ai-prompts/src/prompt-library.vue', () =>
          import('../../revogrid-demos/core-ai-prompts/src/prompt-library.vue?raw').then(
            module => module.default,
          ),
        ),
        ...aiPromptLibrarySupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/core-ai-prompts dev:ts',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-ai-prompts/src/prompt-library.ts', () =>
          import('../../revogrid-demos/core-ai-prompts/src/prompt-library.ts?raw').then(
            module => module.default,
          ),
        ),
        ...aiPromptLibrarySupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/core-ai-prompts dev:react',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-ai-prompts/src/prompt-library.react.tsx', () =>
          import('../../revogrid-demos/core-ai-prompts/src/prompt-library.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...aiPromptLibrarySupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/core-ai-prompts dev:angular',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-ai-prompts/src/prompt-library.angular.ts', () =>
          import('../../revogrid-demos/core-ai-prompts/src/prompt-library.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...aiPromptLibrarySupportingFiles,
      ],
    },
  },
  'project-portfolio': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/core-project-portfolio dev:vue',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-project-portfolio/src/project-portfolio.vue', () =>
          import('../../revogrid-demos/core-project-portfolio/src/project-portfolio.vue?raw').then(
            module => module.default,
          ),
        ),
        ...projectPortfolioSupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/core-project-portfolio dev:ts',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-project-portfolio/src/project-portfolio.ts', () =>
          import('../../revogrid-demos/core-project-portfolio/src/project-portfolio.ts?raw').then(
            module => module.default,
          ),
        ),
        ...projectPortfolioSupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/core-project-portfolio dev:react',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-project-portfolio/src/project-portfolio.react.tsx', () =>
          import('../../revogrid-demos/core-project-portfolio/src/project-portfolio.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...projectPortfolioSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/core-project-portfolio dev:angular',
      documentationUrl: '/guide/',
      files: [
        sourceFile('core-project-portfolio/src/project-portfolio.angular.ts', () =>
          import('../../revogrid-demos/core-project-portfolio/src/project-portfolio.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...projectPortfolioSupportingFiles,
      ],
    },
  },
  'project-tracker': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-project-table dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-project-table/src/project-table.vue', () =>
          import('../../revogrid-demos/pro-project-table/src/project-table.vue?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(projectTrackerSupportingFiles),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-project-table dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-project-table/src/project-table.ts', () =>
          import('../../revogrid-demos/pro-project-table/src/project-table.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(projectTrackerSupportingFiles),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-project-table dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-project-table/src/project-table.react.tsx', () =>
          import('../../revogrid-demos/pro-project-table/src/project-table.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(projectTrackerSupportingFiles),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-project-table dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-project-table/src/project-table.angular.ts', () =>
          import('../../revogrid-demos/pro-project-table/src/project-table.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(projectTrackerSupportingFiles),
      ],
    },
  },
  filtering: {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-filtering dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-filtering/src/filtering.vue', () =>
          import('../../revogrid-demos/pro-filtering/src/filtering.vue?raw').then(
            module => module.default,
          ),
        ),
        ...filteringSupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-filtering dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-filtering/src/filtering.ts', () =>
          import('../../revogrid-demos/pro-filtering/src/filtering.ts?raw').then(
            module => module.default,
          ),
        ),
        ...filteringSupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-filtering dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-filtering/src/filtering.react.tsx', () =>
          import('../../revogrid-demos/pro-filtering/src/filtering.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...filteringSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-filtering dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-filtering/src/filtering.angular.ts', () =>
          import('../../revogrid-demos/pro-filtering/src/filtering.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...filteringSupportingFiles,
      ],
    },
  },
  'tree-data': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-tree-data dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-tree-data/src/tree.vue', () =>
          import('../../revogrid-demos/pro-tree-data/src/tree.vue?raw').then(
            module => module.default,
          ),
        ),
        ...treeDataSupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-tree-data dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-tree-data/src/tree.ts', () =>
          import('../../revogrid-demos/pro-tree-data/src/tree.ts?raw').then(
            module => module.default,
          ),
        ),
        ...treeDataSupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-tree-data dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-tree-data/src/tree.react.tsx', () =>
          import('../../revogrid-demos/pro-tree-data/src/tree.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...treeDataSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-tree-data dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-tree-data/src/tree.angular.ts', () =>
          import('../../revogrid-demos/pro-tree-data/src/tree.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...treeDataSupportingFiles,
      ],
    },
  },
  'infinity-scroll': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-infinity-scroll dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-infinity-scroll/src/infinity-scroll.vue', () =>
          import('../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.vue?raw').then(
            module => module.default,
          ),
        ),
        ...infinityScrollSupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-infinity-scroll dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-infinity-scroll/src/infinity-scroll.ts', () =>
          import('../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.ts?raw').then(
            module => module.default,
          ),
        ),
        ...infinityScrollSupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-infinity-scroll dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-infinity-scroll/src/infinity-scroll.react.tsx', () =>
          import('../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...infinityScrollSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-infinity-scroll dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-infinity-scroll/src/infinity-scroll.angular.ts', () =>
          import('../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...infinityScrollSupportingFiles,
      ],
    },
  },
  'column-collapse': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-column-collapse dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-column-collapse/src/column-collapse.vue', () =>
          import('../../revogrid-demos/pro-column-collapse/src/column-collapse.vue?raw').then(
            module => module.default,
          ),
        ),
        ...columnCollapseSupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-column-collapse dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-column-collapse/src/column-collapse.ts', () =>
          import('../../revogrid-demos/pro-column-collapse/src/column-collapse.ts?raw').then(
            module => module.default,
          ),
        ),
        ...columnCollapseSupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-column-collapse dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-column-collapse/src/column-collapse.react.tsx', () =>
          import('../../revogrid-demos/pro-column-collapse/src/column-collapse.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...columnCollapseSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-column-collapse dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-column-collapse/src/column-collapse.angular.ts', () =>
          import('../../revogrid-demos/pro-column-collapse/src/column-collapse.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...columnCollapseSupportingFiles,
      ],
    },
  },
  'context-menu': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-data-grid-context-menu dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.vue', () =>
          import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.vue?raw').then(
            module => module.default,
          ),
        ),
        ...contextMenuSupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-data-grid-context-menu dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.ts', () =>
          import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.ts?raw').then(
            module => module.default,
          ),
        ),
        ...contextMenuSupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-data-grid-context-menu dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.react.tsx', () =>
          import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...contextMenuSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-data-grid-context-menu dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-data-grid-context-menu/src/data-grid-context-menu.angular.ts', () =>
          import('../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...contextMenuSupportingFiles,
      ],
    },
  },
  'row-master': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-row-master dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-row-master/src/row-master.vue', () =>
          import('../../revogrid-demos/pro-row-master/src/row-master.vue?raw').then(
            module => module.default,
          ),
        ),
        ...rowMasterSupportingFiles,
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-row-master dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-row-master/src/row-master.ts', () =>
          import('../../revogrid-demos/pro-row-master/src/row-master.ts?raw').then(
            module => module.default,
          ),
        ),
        ...rowMasterSupportingFiles,
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-row-master dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-row-master/src/row-master.react.tsx', () =>
          import('../../revogrid-demos/pro-row-master/src/row-master.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        ...rowMasterSupportingFiles,
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-row-master dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-row-master/src/row-master.angular.ts', () =>
          import('../../revogrid-demos/pro-row-master/src/row-master.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        ...rowMasterSupportingFiles,
      ],
    },
  },
  'audit-history': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-audit-history dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-audit-history/src/audit-history.vue', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.vue?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-audit-history/src/audit-history.scss', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.scss?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(auditHistorySupportingFiles),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-audit-history dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-audit-history/src/audit-history.ts', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-audit-history/src/audit-history.scss', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.scss?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(auditHistorySupportingFiles),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-audit-history dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-audit-history/src/audit-history.react.tsx', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-audit-history/src/audit-history.scss', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.scss?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(auditHistorySupportingFiles),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-audit-history dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-audit-history/src/audit-history.angular.ts', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-audit-history/src/audit-history.scss', () =>
          import('../../revogrid-demos/pro-audit-history/src/audit-history.scss?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(auditHistorySupportingFiles),
      ],
    },
  },
  excel: {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-excel dev:vue',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-excel/src/excel.vue', () =>
          import('../../revogrid-demos/pro-excel/src/excel.vue?raw').then(module => module.default),
        ),
        sourceFile('pro-excel/src/spreadsheet.scss', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.scss?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-excel/src/spreadsheet.shared.ts', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.shared.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(excelSupportingFiles),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-excel dev:ts',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-excel/src/excel.ts', () =>
          import('../../revogrid-demos/pro-excel/src/excel.ts?raw').then(module => module.default),
        ),
        sourceFile('pro-excel/src/spreadsheet.scss', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.scss?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-excel/src/spreadsheet.shared.ts', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.shared.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(excelSupportingFiles),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-excel dev:react',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-excel/src/excel.react.tsx', () =>
          import('../../revogrid-demos/pro-excel/src/excel.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-excel/src/spreadsheet.scss', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.scss?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-excel/src/spreadsheet.shared.ts', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.shared.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(excelSupportingFiles),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-excel dev:angular',
      documentationUrl: '/pro/',
      files: [
        sourceFile('pro-excel/src/excel.angular.ts', () =>
          import('../../revogrid-demos/pro-excel/src/excel.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-excel/src/spreadsheet.scss', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.scss?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-excel/src/spreadsheet.shared.ts', () =>
          import('../../revogrid-demos/pro-excel/src/spreadsheet.shared.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(excelSupportingFiles),
      ],
    },
  },
  pivot: {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:vue',
      documentationUrl: '/pivot/',
      files: [
        sourceFile('pro-advanced-pivot/src/pivot.vue', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/pivot.vue?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(pivotSupportingFiles),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:ts',
      documentationUrl: '/pivot/',
      files: [
        sourceFile('pro-advanced-pivot/src/pivot.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/pivot.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(pivotSupportingFiles),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:react',
      documentationUrl: '/pivot/',
      files: [
        sourceFile('pro-advanced-pivot/src/pivot.react.tsx', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/pivot.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(pivotSupportingFiles),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:angular',
      documentationUrl: '/pivot/',
      files: [
        sourceFile('pro-advanced-pivot/src/pivot.angular.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/pivot.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () =>
          import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(
            module => module.default,
          ),
        ),
        ...supportFiles(pivotSupportingFiles),
      ],
    },
  },
  'pivot-charts': {
    vue: { label: 'Vue', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:vue', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/charts-dashboard.vue', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-dashboard.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-dashboard.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-dashboard.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-mount.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-mount.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
    ts: { label: 'JavaScript', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:ts', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/charts.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-dashboard.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-dashboard.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-mount.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-mount.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
    react: { label: 'React', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:react', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/charts.react.tsx', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts.react.tsx?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-dashboard.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-dashboard.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-mount.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-mount.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
    angular: { label: 'Angular', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:angular', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/charts.angular.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts.angular.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-dashboard.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-dashboard.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/charts-mount.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/charts-mount.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
  },
  'pivot-financial': {
    vue: { label: 'Vue', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:vue', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/financial-demo.vue', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial-demo.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
    ts: { label: 'JavaScript', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:ts', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/financial-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
    react: { label: 'React', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:react', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/financial-demo.react.tsx', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial-demo.react.tsx?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
    angular: { label: 'Angular', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot dev:angular', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/financial-demo.angular.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial-demo.angular.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.analytics.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/sales-transactions-v2.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/sales-transactions-v2.ts?raw').then(module => module.default)),
    ] },
  },
  'pivot-operations': {
    vue: { label: 'Vue', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/operations dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsDemo.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsDemo.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/operations-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/operations-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/tickets.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/tickets.ts?raw').then(module => module.default)),
    ] },
    ts: { label: 'JavaScript', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/operations dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsDemo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsDemo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/operations-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/operations-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/tickets.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/tickets.ts?raw').then(module => module.default)),
    ] },
    react: { label: 'React', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/operations dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsDemo.tsx', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsDemo.tsx?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/operations-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/operations-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/tickets.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/tickets.ts?raw').then(module => module.default)),
    ] },
    angular: { label: 'Angular', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/operations dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsDemoAngular.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsDemoAngular.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/OperationsPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/operations-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/operations-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/pivot.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/pivot.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/operations/src/tickets.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/operations/src/tickets.ts?raw').then(module => module.default)),
    ] },
  },
  'pivot-import': {
    vue: { label: 'Vue', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/import dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/examples/import/src/ImportDemo.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportDemo.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportIcon.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportIcon.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.types.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.types.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.worker.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.worker.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/csv.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/csv.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/style.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/style.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/standalone.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/standalone.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/main.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/main.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/package.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/package.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/vite.config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/vite.config.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/tsconfig.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/tsconfig.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/README.md', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/README.md?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/index.html', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/index.html?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.actions.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.actions.ts?raw').then(module => module.default)),
    ] },
    ts: { label: 'JavaScript', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/import dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/examples/import/src/ImportDemo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportDemo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportIcon.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportIcon.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.types.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.types.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.worker.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.worker.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/csv.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/csv.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/style.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/style.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/standalone.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/standalone.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/main.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/main.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/package.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/package.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/vite.config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/vite.config.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/tsconfig.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/tsconfig.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/README.md', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/README.md?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/index.html', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/index.html?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.actions.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.actions.ts?raw').then(module => module.default)),
    ] },
    react: { label: 'React', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/import dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/examples/import/src/ImportDemo.tsx', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportDemo.tsx?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportIcon.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportIcon.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.types.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.types.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.worker.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.worker.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/csv.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/csv.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/style.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/style.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/standalone.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/standalone.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/main.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/main.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/package.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/package.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/vite.config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/vite.config.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/tsconfig.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/tsconfig.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/README.md', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/README.md?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/index.html', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/index.html?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.actions.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.actions.ts?raw').then(module => module.default)),
    ] },
    angular: { label: 'Angular', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/import dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/examples/import/src/ImportDemoAngular.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportDemoAngular.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportIcon.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportIcon.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/ImportPivot.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/ImportPivot.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.types.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.types.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.model.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.model.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/import.worker.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/import.worker.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/csv.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/csv.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/style.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/style.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/standalone.css', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/standalone.css?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/src/main.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/src/main.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/package.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/package.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/vite.config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/vite.config.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/tsconfig.json', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/tsconfig.json?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/README.md', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/README.md?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/import/index.html', () => import('../../revogrid-demos/pro-advanced-pivot/examples/import/index.html?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/src/financial.actions.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/financial.actions.ts?raw').then(module => module.default)),
    ] },
  },
  'pivot-scale': {
    vue: { label: 'Vue', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/scale dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/ScaleDemo.vue', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/ScaleDemo.vue?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/scale-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/scale-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/data.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/data.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/pivot-config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/pivot-config.ts?raw').then(module => module.default)),
    ] },
    ts: { label: 'JavaScript', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/scale dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/ScaleDemo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/ScaleDemo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/scale-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/scale-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/data.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/data.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/pivot-config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/pivot-config.ts?raw').then(module => module.default)),
    ] },
    react: { label: 'React', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/scale dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/ScaleDemo.tsx', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/ScaleDemo.tsx?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/scale-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/scale-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/data.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/data.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/pivot-config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/pivot-config.ts?raw').then(module => module.default)),
    ] },
    angular: { label: 'Angular', command: 'pnpm --dir revogrid-demos/pro-advanced-pivot/examples/scale dev', documentationUrl: '/pivot/', files: [
      sourceFile('pro-advanced-pivot/src/shared/theme.ts', () => import('../../revogrid-demos/pro-advanced-pivot/src/shared/theme.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/ScaleDemoAngular.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/ScaleDemoAngular.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/scale-demo.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/scale-demo.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/data.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/data.ts?raw').then(module => module.default)),
      sourceFile('pro-advanced-pivot/examples/scale/src/pivot-config.ts', () => import('../../revogrid-demos/pro-advanced-pivot/examples/scale/src/pivot-config.ts?raw').then(module => module.default)),
    ] },
  },

}

export const getDemoSources = (demoId: DemoId) => DEMO_SOURCE_REGISTRY[demoId]
export const loadDemoSource = (source: DemoSourceFile): Promise<string> => source.load()
export const getRegisteredDemoSourcePaths = () =>
  Object.values(DEMO_SOURCE_REGISTRY).flatMap(group =>
    Object.values(group).flatMap(entry => entry.files.map(item => item.path)),
  )
