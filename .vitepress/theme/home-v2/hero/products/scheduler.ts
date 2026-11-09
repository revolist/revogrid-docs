import { EventSchedulerPlugin } from '@revolist/scheduler'
import '@revolist/scheduler/styles.css'
import type { HeroProductModule } from './types'

export default {
  plugins: [EventSchedulerPlugin],
  configure: ({ fields, labels }) => ({
    columns: [],
    scheduler: {
      fields,
      view: 'resourceTimeline',
      weekStartDate: '2026-11-09',
      dateRange: { start: '2026-11-09', end: '2026-11-29' },
      locale: 'en-US',
      timeZone: 'UTC',
      slotMinutes: 1440,
      timeRange: { start: '00:00', end: '24:00' },
      rowSize: 40,
      resourceColumnSize: 160,
      timelineColumnSize: 72,
      editable: true,
      allowCreate: false,
      allowDelete: false,
      allowMove: true,
      allowResize: true,
      currentTimeMarker: false,
      conflicts: { enabled: true, policy: 'mark', scope: 'same-resource' },
      eventEditorStatusOptions: Object.keys(labels.statuses),
    },
  }),
} satisfies HeroProductModule
