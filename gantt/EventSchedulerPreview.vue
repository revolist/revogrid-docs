<template>
  <div class="scheduler-preview" aria-label="Event Scheduler shift planner preview">
    <div class="scheduler-topbar">
      <div class="window-controls" aria-hidden="true">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <span class="scheduler-title">event-scheduler.revogrid.ts</span>
      <div class="scheduler-tabs" aria-label="Scheduler view">
        <button type="button">Day</button>
        <button type="button" class="active">Week</button>
        <button type="button">Month</button>
      </div>
    </div>

    <div class="scheduler-grid-stage">
      <RevoGrid
        ref="gridRef"
        class="event-scheduler-preview-grid"
        hide-attribution
        :readonly="false"
        :resize="true"
        :row-headers="false"
        :theme="isDark ? 'darkCompact' : 'compact'"
        :plugins="plugins"
      />
    </div>

    <div class="scheduler-footer">
      <span class="status-dot"></span>
      <span>Actual EventSchedulerPlugin preview: week view, resources, editable event blocks, availability, and overlap conflicts.</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import RevoGrid from '@revolist/vue3-datagrid'
import {
  type EventSchedulerAvailabilityEntity,
  type EventSchedulerConfig,
  type EventSchedulerEventEntity,
  type EventSchedulerResourceEntity,
} from '@revolist/revogrid-enterprise'

import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

const { isDark } = useData()
const plugins = ref<unknown[]>([])
const gridRef = ref<(InstanceType<typeof RevoGrid> & { $el?: HTMLRevoGridElement }) | HTMLRevoGridElement | null>(null)
const events = ref<EventSchedulerEventEntity[]>([
  {
    id: 'front-desk-mon',
    resourceId: 'alex',
    title: 'Front desk',
    startDateTime: '2026-06-08T08:00:00.000Z',
    endDateTime: '2026-06-08T12:00:00.000Z',
    status: 'confirmed',
    type: 'shift',
    color: '#14b8a6',
  },
  {
    id: 'triage-mon',
    resourceId: 'maria',
    title: 'Triage',
    startDateTime: '2026-06-08T10:00:00.000Z',
    endDateTime: '2026-06-08T14:00:00.000Z',
    status: 'planned',
    type: 'shift',
    color: '#7c3aed',
  },
  {
    id: 'room-setup-tue',
    resourceId: 'jon',
    title: 'Room setup',
    startDateTime: '2026-06-09T09:00:00.000Z',
    endDateTime: '2026-06-09T12:00:00.000Z',
    status: 'confirmed',
    type: 'booking',
    color: '#0ea5e9',
  },
  {
    id: 'training-tue',
    resourceId: 'nina',
    title: 'Training block',
    startDateTime: '2026-06-09T13:00:00.000Z',
    endDateTime: '2026-06-09T17:00:00.000Z',
    status: 'confirmed',
    type: 'training',
    locked: true,
    color: '#f59e0b',
  },
  {
    id: 'customer-visits-wed',
    resourceId: 'alex',
    title: 'Customer visits',
    startDateTime: '2026-06-10T09:30:00.000Z',
    endDateTime: '2026-06-10T15:00:00.000Z',
    status: 'confirmed',
    type: 'field',
    color: '#14b8a6',
  },
  {
    id: 'inventory-fri',
    resourceId: 'jon',
    title: 'Inventory count',
    startDateTime: '2026-06-12T12:00:00.000Z',
    endDateTime: '2026-06-12T16:00:00.000Z',
    status: 'planned',
    type: 'ops',
    color: '#0ea5e9',
  },
])

const resources: EventSchedulerResourceEntity[] = [
  { id: 'alex', name: 'Alex Kim', role: 'Coordinator', group: 'Front desk', color: '#14b8a6' },
  { id: 'maria', name: 'Maria Cruz', role: 'Clinical', group: 'Clinical', color: '#7c3aed' },
  { id: 'jon', name: 'Jon Bell', role: 'Operations', group: 'Ops', color: '#0ea5e9' },
  { id: 'nina', name: 'Nina Lee', role: 'Support', group: 'Support', color: '#f59e0b' },
]

const availability: EventSchedulerAvailabilityEntity[] = [
  {
    id: 'lunch-break-monday',
    resourceId: 'maria',
    kind: 'break',
    startDateTime: '2026-06-08T12:00:00.000Z',
    endDateTime: '2026-06-08T13:00:00.000Z',
    title: 'Lunch break',
  },
  {
    id: 'blocked-training-room',
    kind: 'blocked',
    startDateTime: '2026-06-11T10:00:00.000Z',
    endDateTime: '2026-06-11T12:00:00.000Z',
    title: 'Room unavailable',
  },
]

const schedulerConfig: EventSchedulerConfig = {
  view: 'week',
  weekStartDate: '2026-06-08',
  weekStartsOn: 1,
  locale: 'en-US',
  timeZone: 'UTC',
  visibleDays: [1, 2, 3, 4, 5],
  slotMinutes: 30,
  snapMinutes: 30,
  timeRange: { start: '07:00', end: '18:00' },
  rowSize: 34,
  timeColumnSize: 72,
  dayColumnSize: 176,
  columnGrouping: false,
  eventLayout: 'stack',
  maxStackedEvents: 3,
  editable: true,
  allowCreate: true,
  allowMove: true,
  allowResize: true,
  allowDelete: true,
  currentTimeMarker: { enabled: true, dateTime: '2026-06-10T11:30:00.000Z' },
  dayHeaderShiftCount: {
    enabled: true,
    formatter: (count) => `${count} ${count === 1 ? 'event' : 'events'}`,
  },
  todayHighlight: false,
  weekendHighlight: { enabled: true, days: [0, 6] },
  contextMenu: true,
  keyboardShortcuts: true,
  continuationLabels: true,
  nonWorkingTime: {
    workingDays: [1, 2, 3, 4, 5],
    workingHours: { start: '08:00', end: '17:00' },
  },
}

let applyFrame = 0

function getGridEl(): HTMLRevoGridElement | null {
  const refValue = gridRef.value
  if (!refValue) return null
  return '$el' in refValue ? refValue.$el ?? null : refValue
}

function applySchedulerProperties() {
  const grid = getGridEl()
  if (!grid) return

  grid.eventScheduler = schedulerConfig
  grid.eventSchedulerResources = resources
  grid.eventSchedulerAvailability = availability
  grid.eventSchedulerEvents = events.value
}

function syncEvents(event: Event) {
  const detail = (event as CustomEvent<{ events?: readonly EventSchedulerEventEntity[] }>).detail
  if (!detail?.events) return
  events.value = [...detail.events]
  applySchedulerProperties()
}

onMounted(async () => {
  await nextTick()
  const enterprise = await import('@revolist/revogrid-enterprise')
  plugins.value = [enterprise.EventSchedulerPlugin]
  await nextTick()
  applyFrame = requestAnimationFrame(applySchedulerProperties)

  const grid = getGridEl()
  grid?.addEventListener('event-scheduler-event-created', syncEvents)
  grid?.addEventListener('event-scheduler-event-changed', syncEvents)
  grid?.addEventListener('event-scheduler-event-deleted', syncEvents)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(applyFrame)
  const grid = getGridEl()
  grid?.removeEventListener('event-scheduler-event-created', syncEvents)
  grid?.removeEventListener('event-scheduler-event-changed', syncEvents)
  grid?.removeEventListener('event-scheduler-event-deleted', syncEvents)
})

watch(isDark, () => {
  requestAnimationFrame(applySchedulerProperties)
})
</script>

<style lang="scss" scoped>
.scheduler-preview {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  box-shadow: var(--pro-doc-shadow-lg);

  &::before {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, var(--gantt-accent) 35%, var(--gantt-accent-2) 65%, transparent 100%);
  }
}

.scheduler-topbar,
.scheduler-footer {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.scheduler-topbar {
  gap: 10px;
  min-height: 52px;
  padding: 10px 14px;
}

.window-controls {
  display: inline-flex;
  gap: 7px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red { background: #ff5f57; }
.yellow { background: #febc2e; }
.green { background: #28c840; }

.scheduler-title {
  flex: 1;
  min-width: 0;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scheduler-tabs {
  display: inline-flex;
  gap: 6px;

  button {
    min-width: 54px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 7px;
    padding: 6px 9px;
    color: var(--vp-c-text-3);
    background: var(--vp-c-bg);
    cursor: default;
    font: 600 11px/1 var(--vp-font-family-mono);
    pointer-events: none;
  }

  .active {
    color: var(--gantt-accent);
    border-color: var(--gantt-accent-border);
    background: var(--gantt-soft);
  }
}

.scheduler-grid-stage {
  height: clamp(500px, 58vh, 640px);
  min-width: 0;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.event-scheduler-preview-grid {
  width: 100%;
  height: 100%;
}

.scheduler-grid-stage :deep(revo-grid) {
  width: 100%;
  height: 100%;
}

.scheduler-grid-stage :deep(.main-viewport),
.scheduler-grid-stage :deep(.viewports),
.scheduler-grid-stage :deep(revogr-viewport-scroll),
.scheduler-grid-stage :deep(.vertical-inner) {
  height: 100% !important;
  min-height: 100% !important;
}

.scheduler-grid-stage :deep(.rgCell),
.scheduler-grid-stage :deep(.rgHeaderCell) {
  color: var(--revo-grid-text);
  padding-right: 8px;
  padding-left: 8px;
}

.scheduler-grid-stage :deep(.rgCell) {
  font-size: 12px;
}

.scheduler-grid-stage :deep(.rgHeaderCell) {
  font-size: 12px;
}

.scheduler-grid-stage :deep(revo-grid[theme='darkCompact']) {
  --revo-grid-background: #17191f;
  --revo-grid-header-bg: #1f222a;
  --revo-grid-header-color: rgba(248, 250, 252, 0.92);
  --revo-grid-text: rgba(248, 250, 252, 0.9);
  --revo-grid-cell-border: rgba(148, 163, 184, 0.22);
  --revo-grid-header-border: rgba(148, 163, 184, 0.24);
  --revo-grid-row-hover: rgba(124, 58, 237, 0.1);
}

.scheduler-grid-stage :deep(.hero-scheduler-event) {
  --event-scheduler-event-bg: var(--hero-scheduler-event-color);
  --event-scheduler-event-color: var(--hero-scheduler-event-color);
  --event-scheduler-event-border: var(--hero-scheduler-event-color);
  --event-scheduler-event-text: #fff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
}

.scheduler-grid-stage :deep(.hero-scheduler-event--conflict) {
  outline: 2px solid #f59e0b;
  outline-offset: -2px;
}

.scheduler-grid-stage :deep(.hero-scheduler-event--locked) {
  opacity: 0.92;
}

.scheduler-footer {
  gap: 9px;
  min-height: 42px;
  padding: 10px 14px;
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.status-dot {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #f59e0b;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.15);
}

@media (max-width: 720px) {
  .scheduler-tabs button:not(.active) {
    display: none;
  }

  .scheduler-grid-stage {
    height: 520px;
    overflow-x: auto;
  }
}
</style>
