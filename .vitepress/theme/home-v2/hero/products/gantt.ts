import {
  GanttPlugin,
  DEFAULT_TIMELINE_ZOOM_LEVELS,
  createDefaultTaskTableColumn,
} from '@revolist/gantt'
import '@revolist/gantt/styles.css'
import type { PanelResizePlugin } from '@revolist/revogrid-pro'
import type { HeroProductModule } from './types'
import { heroDependencies } from '../portfolio'

const taskColumnWidth = 220
const initializedGrids = new WeakSet<HTMLRevoGridElement>()

// Native split-pane resizing owns this layout independently from column stretch.
async function initializeTimelinePanel(event: Event) {
  const grid = event.target as HTMLRevoGridElement
  if (initializedGrids.has(grid)) return
  const instances = await grid.getPlugins()
  if (!grid.isConnected || initializedGrids.has(grid)) return
  const panel = instances.find(
    (plugin): plugin is PanelResizePlugin =>
      'setPanelWidth' in plugin &&
      typeof plugin.setPanelWidth === 'function' &&
      'getPanelWidth' in plugin &&
      typeof plugin.getPanelWidth === 'function',
  )
  if (!panel || panel.getPanelWidth() === null || !grid.clientWidth) return
  initializedGrids.add(grid)
  panel.setPanelWidth(Math.max(0, grid.clientWidth - taskColumnWidth))
}

export default {
  plugins: [GanttPlugin],
  afterGridRender: initializeTimelinePanel,
  configure: ({ labels, fields, rows }) => {
    return {
      columns: [
        {
          ...createDefaultTaskTableColumn('name'),
          name: labels.project,
          size: taskColumnWidth,
          columnTemplate: h =>
            h(
              'span',
              {
                style: { marginInlineStart: 'calc(var(--rg-tree-leaf-offset, 15px) + 20px)' },
              },
              labels.project,
            ),
        },
      ],
      dependencies: heroDependencies(rows),
      gantt: {
        id: 'hero-portfolio',
        name: labels.title,
        version: '1',
        currency: 'USD',
        timeZone: 'UTC',
        primaryCalendarId: 'hero-week',
        updatedAt: '2026-11-09T00:00:00.000Z',
        statusDate: '2026-11-09',
        fields,
        timelineRange: { startDate: '2026-11-09', endDate: '2026-11-29' },
        zoom: {
          defaultLevelId: 'day-week',
          levels: DEFAULT_TIMELINE_ZOOM_LEVELS.map(level =>
            level.id === 'day-week' ? { ...level, tickWidth: 60 } : level,
          ),
        },
        weekStartsOn: 1,
        allowTaskCreate: false,
        calendars: [
          {
            id: 'hero-week',
            name: labels.title,
            timeZone: 'UTC',
            workingDays: [1, 2, 3, 4, 5],
            workingHours: { start: '09:00', end: '17:00' },
            hoursPerDay: 8,
            holidays: [],
          },
        ],
      },
    }
  },
} satisfies HeroProductModule
