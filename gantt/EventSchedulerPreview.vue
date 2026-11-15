<template>
  <div class="scheduler-preview" aria-label="JavaScript Scheduler shift planner preview">
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


  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import RevoGrid from '@revolist/vue3-datagrid'
import {
  type EventSchedulerConfig,
  type EventSchedulerEventEntity,
  type EventSchedulerResourceEntity,
} from '@revolist/scheduler'

import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/scheduler/styles.css'

const { isDark } = useData()
const plugins = ref<unknown[]>([])
const gridRef = ref<
  (InstanceType<typeof RevoGrid> & { $el?: HTMLRevoGridElement }) | HTMLRevoGridElement | null
>(null)
// ClickUp core accents: https://clickup.com/brand
const events = ref<EventSchedulerEventEntity[]>([
  {
    id: 'front-desk-mon',
    resourceId: 'alex',
    title: 'Front desk',
    startDateTime: '2026-06-08T08:00:00.000Z',
    endDateTime: '2026-06-08T12:00:00.000Z',
    color: '#6647F0',
  },
  {
    id: 'standby-mon',
    resourceId: 'alex',
    title: 'Standby',
    startDateTime: '2026-06-08T14:00:00.000Z',
    endDateTime: '2026-06-08T18:00:00.000Z',
    color: '#FF02F0',
  },
  {
    id: 'triage-mon',
    resourceId: 'maria',
    title: 'Triage',
    startDateTime: '2026-06-08T10:00:00.000Z',
    endDateTime: '2026-06-08T14:00:00.000Z',
    color: '#0091FF',
  },
  {
    id: 'room-setup-mon',
    resourceId: 'jon',
    title: 'Room setup',
    startDateTime: '2026-06-08T09:00:00.000Z',
    endDateTime: '2026-06-08T12:00:00.000Z',
    color: '#FC6D2D',
  },
  {
    id: 'onboarding-mon',
    resourceId: 'nina',
    title: 'Onboarding',
    startDateTime: '2026-06-08T08:00:00.000Z',
    endDateTime: '2026-06-08T12:00:00.000Z',
    color: '#6647F0',
  },
  {
    id: 'training-mon',
    resourceId: 'nina',
    title: 'Training',
    startDateTime: '2026-06-08T13:00:00.000Z',
    endDateTime: '2026-06-08T17:00:00.000Z',
    color: '#0091FF',
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
    color: '#6647F0',
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
    color: '#0091FF',
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
    color: '#FC6D2D',
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
    color: '#FF02F0',
  },
]

const schedulerConfig: EventSchedulerConfig = {
  view: 'resourceTimeline',
  weekStartDate: '2026-06-08',
  dateRange: { start: '2026-06-08', end: '2026-06-08' },
  timeZone: 'UTC',
  slotMinutes: 120,
  snapMinutes: 30,
  timeRange: { start: '08:00', end: '18:00' },
  rowSize: 72,
  resourceColumnSize: 152,
  timelineColumnSize: 88,
  columnGrouping: false,
  editable: true,
  allowCreate: true,
  allowMove: true,
  allowResize: true,
  allowDelete: true,
  currentTimeMarker: false,
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

  grid.eventScheduler = schedulerConfig
  grid.eventSchedulerResources = resources
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
}

.scheduler-grid-stage {
  height: 324px;
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
</style>
