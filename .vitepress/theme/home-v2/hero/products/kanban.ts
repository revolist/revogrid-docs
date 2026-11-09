import { KanbanPlugin } from '@revolist/kanban'
import { ColumnStretchPlugin } from '@revolist/revogrid-pro'
import '@revolist/kanban/styles.css'
import type { HeroProductModule } from './types'

export default {
  plugins: [KanbanPlugin, ColumnStretchPlugin],
  beforeColumnsSet(event) {
    // Stretch expanded columns equally; retain native collapsed-column bounds.
    for (const column of event.detail.columns.rgCol) {
      if (column.maxSize !== undefined && column.maxSize <= 72) continue
      column.size = undefined
      column.minSize = 280
    }
  },
  configure: ({ fields, labels, resources }) => ({
    kanban: {
      fields,
      orderField: 'order',
      addCard: false,
      resources,
      swimlaneColumn: false,
      columns: ['not-started', 'in-progress', 'blocked', 'done'].map(prop => ({
        prop,
        name: labels.statuses[prop],
        size: 280,
      })),
      contextMenu: { hidden: { create: true, delete: true } },
      card: { dateTimeZone: 'UTC' },
      cardRowHeight: 120,
    },
  }),
} satisfies HeroProductModule
