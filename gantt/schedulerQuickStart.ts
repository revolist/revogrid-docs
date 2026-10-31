import { defineCustomElements } from '@revolist/revogrid/loader'
import { EventSchedulerPlugin } from '@revolist/scheduler'
import '@revolist/revogrid-pro/styles.css'
import '@revolist/scheduler/styles.css'

await defineCustomElements()

const grid = document.createElement('revo-grid')
grid.style.height = '440px'
grid.plugins = [EventSchedulerPlugin]
grid.eventScheduler = {
  view: 'resourceTimeline',
  weekStartDate: '2026-06-08',
  dateRange: { start: '2026-06-08', end: '2026-06-08' },
  slotMinutes: 60,
  timeRange: { start: '08:00', end: '18:00' },
  editable: true,
  allowCreate: true,
  allowMove: true,
  allowResize: true,
}
grid.eventSchedulerResources = [
  { id: 'room-a', name: 'Room A' },
  { id: 'room-b', name: 'Room B' },
]
grid.source = [
  {
    id: 'booking-1',
    resourceId: 'room-a',
    title: 'Customer workshop',
    startDateTime: '2026-06-08T09:00:00.000Z',
    endDateTime: '2026-06-08T11:00:00.000Z',
  },
]
document.querySelector('#app')!.append(grid)
