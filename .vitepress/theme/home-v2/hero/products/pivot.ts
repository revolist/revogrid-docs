import { PivotPlugin } from '@revolist/pivot'
import { ColumnStretchPlugin } from '@revolist/revogrid-pro'
import '@revolist/pivot/styles.css'
import type { HeroProductModule } from './types'
import { createPivotBudgetRenderer, pivotProgressRenderer } from './pivotCells'

export default {
  plugins: [PivotPlugin, ColumnStretchPlugin],
  configure: ({ labels, rows, pivotGrouping = 'status' }) => ({
    pivot: {
      rows: [pivotGrouping === 'owner' ? 'owner' : 'workflowStatus', 'name'],
      collapsed: false,
      groupAggregations: true,
      values: [
        { prop: 'budget', aggregator: 'sum', name: labels.budget },
        { prop: 'percentDone', aggregator: 'avg', name: labels.averageProgress },
      ],
      dimensions: [
        { prop: 'workflowStatus', name: labels.status, size: 260, minSize: 220 },
        { prop: 'name', name: labels.project, size: 260, minSize: 220 },
        { prop: 'owner', name: labels.owner, size: 260, minSize: 220 },
        {
          prop: 'budget',
          name: labels.budget,
          minSize: 130,
          cellProperties: () => ({
            class: 'hero-pivot-budget',
            title: labels.budgetShare,
            style: { textAlign: 'right', fontVariantNumeric: 'tabular-nums' },
          }),
          columnProperties: () => ({ class: 'hero-budget-header' }),
          cellTemplate: createPivotBudgetRenderer(rows.reduce((sum, row) => sum + row.budget, 0)),
        },
        {
          prop: 'percentDone',
          name: labels.averageProgress,
          minSize: 130,
          cellProperties: () => ({
            class: 'hero-pivot-progress',
            style: { textAlign: 'right', fontVariantNumeric: 'tabular-nums' },
          }),
          columnProperties: () => ({ class: 'hero-budget-header' }),
          cellTemplate: pivotProgressRenderer,
        },
      ],
      totals: { grandTotal: true, grandTotalLabel: labels.totalLabel },
      hasConfigurator: false,
    },
  }),
} satisfies HeroProductModule
