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
  planningDataFile('selection.ts', () =>
    import('../../revogrid-demos/pro-advanced-planning/src/data/selection.ts?raw').then(
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
  'pro-advanced-pivot/src/shared/theme.ts',
  'pro-advanced-pivot/src/financial-dataset.ts',
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

const demoSourceFile = (path: string) => sourceFile(path, () =>
  import(`../../revogrid-demos/${path}?raw`).then(module => module.default),
)

const supportFiles = (paths: readonly string[]) => paths.map(demoSourceFile)

export const DEMO_SOURCE_REGISTRY: Record<DemoId, Record<DemoSourceFramework, DemoSourceEntry>> = {
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
  gantt: {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:vue',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.vue', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.vue?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:ts',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.ts', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:react',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.react.tsx', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:angular',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.angular.ts', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/showcase/gantt.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
  },
  'gantt-big-data': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:vue',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.vue', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.vue?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:ts',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.ts', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:react',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.react.tsx', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:angular',
      documentationUrl: '/gantt/',
      files: [
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.angular.ts', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss', () =>
          import('../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
  },
  'gantt-horizontal-big-data': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:vue',
      documentationUrl: '/gantt/',
      files: [
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.vue',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.vue?raw').then(
              module => module.default,
            ),
        ),
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:ts',
      documentationUrl: '/gantt/',
      files: [
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.ts',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.ts?raw').then(
              module => module.default,
            ),
        ),
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:react',
      documentationUrl: '/gantt/',
      files: [
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.react.tsx',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.react.tsx?raw').then(
              module => module.default,
            ),
        ),
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-gantt dev:angular',
      documentationUrl: '/gantt/',
      files: [
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.angular.ts',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.angular.ts?raw').then(
              module => module.default,
            ),
        ),
        sourceFile(
          'pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
  },
  kanban: {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:vue',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.vue', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.vue?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:ts',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.ts', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:react',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.react.tsx', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:angular',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.angular.ts', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/showcase/kanban.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
  },
  'kanban-performance': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:vue',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.vue', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.vue?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:ts',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.ts', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:react',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.react.tsx', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.react.tsx?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:angular',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.angular.ts', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.angular.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile('pro-advanced-kanban/src/examples/performance/kanban-board.scss', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.scss?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
  },
  'kanban-server-loading': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:vue',
      documentationUrl: '/kanban/',
      files: [
        sourceFile(
          'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.vue',
          () =>
            import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.vue?raw').then(
              module => module.default,
            ),
        ),
        sourceFile(
          'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:ts',
      documentationUrl: '/kanban/',
      files: [
        sourceFile('pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.ts', () =>
          import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.ts?raw').then(
            module => module.default,
          ),
        ),
        sourceFile(
          'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:react',
      documentationUrl: '/kanban/',
      files: [
        sourceFile(
          'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.react.tsx',
          () =>
            import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.react.tsx?raw').then(
              module => module.default,
            ),
        ),
        sourceFile(
          'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-kanban dev:angular',
      documentationUrl: '/kanban/',
      files: [
        sourceFile(
          'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.angular.ts',
          () =>
            import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.angular.ts?raw').then(
              module => module.default,
            ),
        ),
        sourceFile(
          'pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss',
          () =>
            import('../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss?raw').then(
              module => module.default,
            ),
        ),
      ],
    },
  },
  'event-scheduler': {
    vue: {
      label: 'Vue',
      command: 'pnpm --dir revogrid-demos/pro-advanced-scheduler dev:vue',
      documentationUrl: '/scheduler/',
      files: [
        sourceFile('pro-advanced-scheduler/src/scheduler.vue', () =>
          import('../../revogrid-demos/pro-advanced-scheduler/src/scheduler.vue?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    ts: {
      label: 'JavaScript',
      command: 'pnpm --dir revogrid-demos/pro-advanced-scheduler dev:ts',
      documentationUrl: '/scheduler/',
      files: [
        sourceFile('pro-advanced-scheduler/src/scheduler.ts', () =>
          import('../../revogrid-demos/pro-advanced-scheduler/src/scheduler.ts?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    react: {
      label: 'React',
      command: 'pnpm --dir revogrid-demos/pro-advanced-scheduler dev:react',
      documentationUrl: '/scheduler/',
      files: [
        sourceFile('pro-advanced-scheduler/src/scheduler.react.tsx', () =>
          import('../../revogrid-demos/pro-advanced-scheduler/src/scheduler.react.tsx?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
    angular: {
      label: 'Angular',
      command: 'pnpm --dir revogrid-demos/pro-advanced-scheduler dev:angular',
      documentationUrl: '/scheduler/',
      files: [
        sourceFile('pro-advanced-scheduler/src/scheduler.angular.ts', () =>
          import('../../revogrid-demos/pro-advanced-scheduler/src/scheduler.angular.ts?raw').then(
            module => module.default,
          ),
        ),
      ],
    },
  },
}

export const getDemoSources = (demoId: DemoId) => DEMO_SOURCE_REGISTRY[demoId]
export const loadDemoSource = (source: DemoSourceFile): Promise<string> => source.load()
export const getRegisteredDemoSourcePaths = () =>
  Object.values(DEMO_SOURCE_REGISTRY).flatMap(group =>
    Object.values(group).flatMap(entry => entry.files.map(item => item.path)),
  )
