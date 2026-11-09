<template>
  <div class="scheduler-preview" aria-label="JavaScript Scheduler shift planner preview">
    <div class="scheduler-topbar">
      <span class="scheduler-title">Try the scheduler</span>
      <div class="scheduler-tabs" aria-label="Scheduler view">
        <button
          v-for="view in views"
          :key="view.id"
          type="button"
          :class="{ active: activeView === view.id }"
          :aria-pressed="activeView === view.id"
          @click="activeView = view.id"
        >
          {{ view.label }}
        </button>
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
      <span>Double-click an event to edit. Drag to move or resize.</span>
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
} from '@revolist/scheduler'

import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/scheduler/styles.css'

const { isDark } = useData()
const plugins = ref<unknown[]>([])
const views = [
  { id: 'resourceTimeline', label: 'Resources' },
  { id: 'week', label: 'Week' },
  { id: 'month', label: 'Month' },
] as const
const activeView = ref<(typeof views)[number]['id']>('resourceTimeline')
const gridRef = ref<
  (InstanceType<typeof RevoGrid> & { $el?: HTMLRevoGridElement }) | HTMLRevoGridElement | null
>(null)
const events = ref<EventSchedulerEventEntity[]>([
  {
    id: 'front-desk-mon',
    resourceId: 'alex',
    title: 'Front desk',
    progress: 65,
    startDateTime: '2026-06-08T08:00:00.000Z',
    endDateTime: '2026-06-08T12:00:00.000Z',
    status: 'confirmed',
    type: 'shift',
    color: '#0f9a61',
  },
  {
    id: 'triage-mon',
    resourceId: 'maria',
    title: 'Triage',
    startDateTime: '2026-06-08T10:00:00.000Z',
    endDateTime: '2026-06-08T14:00:00.000Z',
    status: 'planned',
    type: 'shift',
    color: '#16c47f',
  },
  {
    id: 'room-setup-tue',
    resourceId: 'jon',
    title: 'Room setup',
    progress: 40,
    className: 'hero-preview-event--outline',
    startDateTime: '2026-06-08T09:00:00.000Z',
    endDateTime: '2026-06-08T12:00:00.000Z',
    status: 'confirmed',
    type: 'booking',
    color: '#0f9a61',
  },
  {
    id: 'training-tue',
    resourceId: 'nina',
    title: 'Training block',
    startDateTime: '2026-06-08T13:00:00.000Z',
    endDateTime: '2026-06-08T17:00:00.000Z',
    status: 'confirmed',
    type: 'training',
    locked: true,
    color: '#16c47f',
  },
  {
    id: 'lunch-mon',
    resourceId: 'alex',
    title: 'Break',
    startDateTime: '2026-06-08T12:00:00.000Z',
    endDateTime: '2026-06-08T14:00:00.000Z',
    type: 'break',
    status: 'confirmed',
    className: 'hero-preview-event--break',
    notes: 'A scheduled break between front desk cover and standby.',
  },
  {
    id: 'standby-mon',
    resourceId: 'alex',
    title: 'Standby',
    startDateTime: '2026-06-08T14:00:00.000Z',
    endDateTime: '2026-06-08T18:00:00.000Z',
    type: 'coverage',
    status: 'tentative',
    color: '#0f9a61',
    className: 'hero-preview-event--tentative',
    notes: 'Tentative coverage, pending confirmation.',
  },
  {
    id: 'briefing-mon',
    resourceId: 'jon',
    title: 'Briefing',
    startDateTime: '2026-06-08T13:00:00.000Z',
    endDateTime: '2026-06-08T17:00:00.000Z',
    type: 'meeting',
    appearance: 'line',
    icon: '👥',
    readonly: true,
    color: '#0f9a61',
  },
  {
    id: 'wellbeing-mon',
    resourceId: 'maria',
    title: 'Break',
    startDateTime: '2026-06-08T15:00:00.000Z',
    endDateTime: '2026-06-08T18:00:00.000Z',
    type: 'wellbeing',
    appearance: 'line',
    icon: '☕',
    readonly: true,
    color: '#0f9a61',
  },
  {
    id: 'onboarding-mon',
    resourceId: 'nina',
    title: 'Onboarding',
    startDateTime: '2026-06-08T08:00:00.000Z',
    endDateTime: '2026-06-08T12:00:00.000Z',
    type: 'training',
    status: 'confirmed',
    progress: 35,
    color: '#0f9a61',
    className: 'hero-preview-event--outline',
  },
  {
    id: 'customer-visits-wed',
    resourceId: 'alex',
    title: 'Customer visits',
    startDateTime: '2026-06-10T09:30:00.000Z',
    endDateTime: '2026-06-10T15:00:00.000Z',
    status: 'confirmed',
    type: 'field',
    color: '#0f9a61',
  },
  {
    id: 'inventory-fri',
    resourceId: 'jon',
    title: 'Inventory count',
    startDateTime: '2026-06-12T12:00:00.000Z',
    endDateTime: '2026-06-12T16:00:00.000Z',
    status: 'planned',
    type: 'ops',
    color: '#0f9a61',
  },
])

const resources: EventSchedulerResourceEntity[] = [
  {
    id: 'alex',
    avatarUrl: new URL(
      '../revogrid-demos/pro-advanced-scheduler/src/assets/avatars/leo.webp',
      import.meta.url,
    ).href,
    name: 'Alex Kim',
    role: 'Coordinator',
    group: 'Front desk',
    color: '#0f9a61',
  },
  {
    id: 'maria',
    avatarUrl: new URL(
      '../revogrid-demos/pro-advanced-scheduler/src/assets/avatars/maya.webp',
      import.meta.url,
    ).href,
    name: 'Maria Cruz',
    role: 'Clinical',
    group: 'Clinical',
    color: '#16c47f',
  },
  {
    id: 'jon',
    avatarUrl: new URL(
      '../revogrid-demos/pro-advanced-scheduler/src/assets/avatars/noah.webp',
      import.meta.url,
    ).href,
    name: 'Jon Bell',
    role: 'Operations',
    group: 'Ops',
    color: '#0f9a61',
  },
  {
    id: 'nina',
    avatarUrl: new URL(
      '../revogrid-demos/pro-advanced-scheduler/src/assets/avatars/ava.webp',
      import.meta.url,
    ).href,
    name: 'Nina Lee',
    role: 'Support',
    group: 'Support',
    color: '#16c47f',
  },
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
    formatter: count => `${count} ${count === 1 ? 'event' : 'events'}`,
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
  return '$el' in refValue ? (refValue.$el ?? null) : refValue
}

function applySchedulerProperties() {
  const grid = getGridEl()
  if (!grid) return

  grid.eventScheduler = {
    ...schedulerConfig,
    view: activeView.value,
    dateRange:
      activeView.value === 'resourceTimeline'
        ? { start: '2026-06-08', end: '2026-06-08' }
        : undefined,
    slotMinutes: activeView.value === 'resourceTimeline' ? 120 : 60,
    timeRange: { start: '08:00', end: '18:00' },
    rowSize: activeView.value === 'resourceTimeline' ? 72 : 36,
    resourceColumnSize: 152,
    timelineColumnSize: 88,
    dayColumnSize: 100,
    timeColumnSize: 56,
    currentTimeMarker: false,
  }
  grid.eventSchedulerResources = resources
  grid.eventSchedulerAvailability = availability
  grid.source = events.value
}

function syncEvents(event: Event) {
  const detail = (event as CustomEvent<{ events?: readonly EventSchedulerEventEntity[] }>).detail
  if (!detail?.events) return
  events.value = [...detail.events]
}

onMounted(async () => {
  await nextTick()
  const scheduler = await import('@revolist/scheduler')
  plugins.value = [scheduler.EventSchedulerPlugin]
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

watch([isDark, activeView], () => {
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
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--gantt-accent) 35%,
      var(--gantt-accent-2) 65%,
      transparent 100%
    );
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
    cursor: pointer;
    font: 600 11px/1 var(--vp-font-family-mono);
  }

  button:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }

  .active {
    color: var(--gantt-accent);
    border-color: var(--gantt-accent-border);
    background: var(--gantt-soft);
  }
}

.scheduler-grid-stage {
  height: 420px;
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

/* Event variants follow the working demo's treatments using site theme tokens. */
.scheduler-grid-stage :deep(.hero-preview-event--outline) {
  --event-scheduler-event-bg: var(--vp-c-brand-soft) !important;
  --event-scheduler-event-text: var(--vp-c-text-1) !important;
  --event-scheduler-text: var(--vp-c-text-1) !important;
  --event-scheduler-event-text-shadow: none;
}

.scheduler-grid-stage :deep(.hero-preview-event--break) {
  --event-scheduler-event-color: var(--vp-c-text-3) !important;
  --event-scheduler-event-bg: var(--vp-c-bg-soft) !important;
  --event-scheduler-event-text: var(--vp-c-text-1) !important;
  --event-scheduler-text: var(--vp-c-text-1) !important;
  --event-scheduler-event-text-shadow: none;
}

.scheduler-grid-stage :deep(.hero-preview-event--tentative .event-scheduler-event__button) {
  outline: 1px dashed currentColor;
  outline-offset: -4px;
  background-image: repeating-linear-gradient(
    135deg,
    transparent 0 8px,
    color-mix(in srgb, var(--vp-c-bg) 16%, transparent) 8px 16px
  );
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
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
}

@media (max-width: 720px) {
  .scheduler-topbar {
    flex-wrap: wrap;
  }

  .scheduler-tabs {
    flex-wrap: wrap;
  }
}
</style>
