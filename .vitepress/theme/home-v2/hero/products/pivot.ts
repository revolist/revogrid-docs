import { PivotPlugin } from '@revolist/pivot'
import { ColumnStretchPlugin } from '@revolist/revogrid-pro'
import '@revolist/pivot/styles.css'
import type { HeroProductModule } from './types'

export default {
  plugins: [PivotPlugin, ColumnStretchPlugin],
  configure: ({ labels }) => ({
    pivot: {
      rows: ['workflowStatus', 'owner'],
      collapsed: true,
      groupAggregations: true,
      values: [
        { prop: 'budget', aggregator: 'sum', name: labels.budget },
        { prop: 'percentDone', aggregator: 'avg', name: labels.averageProgress },
      ],
      dimensions: [
        { prop: 'workflowStatus', name: labels.status },
        { prop: 'name', name: labels.project },
        { prop: 'owner', name: labels.owner, size: 260, minSize: 220 },
        {
          prop: 'budget',
          name: labels.budget,
          minSize: 130,
          cellProperties: () => ({
            style: { textAlign: 'right', fontVariantNumeric: 'tabular-nums' },
          }),
          columnProperties: () => ({ class: 'hero-budget-header' }),
          cellTemplate: (h, { value }) =>
            Number.isFinite(Number(value))
              ? new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                }).format(Number(value))
              : String(value),
        },
        {
          prop: 'percentDone',
          name: labels.averageProgress,
          minSize: 130,
          cellProperties: () => ({
            style: { textAlign: 'right', fontVariantNumeric: 'tabular-nums' },
          }),
          columnProperties: () => ({ class: 'hero-budget-header' }),
          cellTemplate: (h, { value }) =>
            Number.isFinite(Number(value)) ? `${Math.round(Number(value))}%` : String(value),
        },
      ],
      totals: { grandTotal: true, grandTotalLabel: labels.totalLabel },
      hasConfigurator: false,
    },
  }),
} satisfies HeroProductModule
