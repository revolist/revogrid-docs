<template>
  <div class="gantt-demo-wrap">
    <div class="gd-toolbar">
      <span class="traffic red"></span>
      <span class="traffic yellow"></span>
      <span class="traffic green"></span>
      <span class="gd-title">{{ preview.title }}</span>
      <span
        v-for="pill in preview.pills"
        :key="pill.label"
        class="gd-pill"
        :class="{ active: pill.active }"
      >
        {{ pill.label }}
      </span>
      <span v-if="preview.liveLabel" class="gd-live">{{ preview.liveLabel }}</span>
    </div>
    <div class="gantt-grid-stage">
      <RevoGrid
        ref="gridRef"
        class="gantt-preview-grid"
        hide-attribution
        :row-size="31"
        :readonly="false"
        :resize="true"
        :row-headers="false"
        :theme="isDark ? 'darkCompact' : 'compact'"
        :plugins="plugins"
        :source="tasks"
        :columns="columns"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import RevoGrid from '@revolist/vue3-datagrid'
import { GanttPlugin } from '@revolist/revogrid-enterprise'
import { assignments, calendars, columns, ganttConfig, resources, tasks } from './ganttPreviewData'
import type { GanttLandingPage } from './ganttLanding'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

defineProps<{
  preview: GanttLandingPage['preview']
  isDark: boolean
}>()

const plugins = ref([GanttPlugin])
const gridRef = ref<(InstanceType<typeof RevoGrid> & { $el?: HTMLRevoGridElement }) | HTMLRevoGridElement | null>(null)
let applyFrame = 0

function getGridEl(): HTMLRevoGridElement | null {
  const refValue = gridRef.value
  if (!refValue) return null
  return '$el' in refValue ? refValue.$el ?? null : refValue
}

function applyGanttProperties() {
  const grid = getGridEl()
  if (!grid) return

  grid.ganttCalendars = calendars
  grid.ganttDependencies = []
  grid.ganttResources = resources
  grid.ganttAssignments = assignments
  grid.gantt = ganttConfig
}

onMounted(async () => {
  await nextTick()
  applyFrame = requestAnimationFrame(applyGanttProperties)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(applyFrame)
})
</script>

<style lang="scss" scoped>
.gantt-demo-wrap {
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

.gd-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 9px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.traffic {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.red { background: #ff5f57; }
.yellow { background: #febc2e; }
.green { background: #28c840; }

.gd-title {
  flex: 1;
  margin-left: 4px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  min-width: 0;
}

.gd-pill,
.gd-live {
  padding: 3px 8px;
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  white-space: nowrap;
}

.gd-pill.active,
.gd-live {
  color: var(--gantt-accent);
  border-color: var(--gantt-accent-border);
  background: var(--gantt-soft);
}

.gantt-grid-stage {
  height: clamp(520px, 58vh, 640px);
  min-width: 0;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.gantt-preview-grid {
  width: 100%;
  height: 100%;
}

.gantt-grid-stage :deep(revo-grid) {
  width: 100%;
  height: 100%;
}

.gantt-grid-stage :deep(.main-viewport),
.gantt-grid-stage :deep(.viewports) {
  height: 100% !important;
  min-height: 100% !important;
  min-width: 0;
}

.gantt-grid-stage :deep(revogr-viewport-scroll) {
  height: 100% !important;
  min-height: 100% !important;
}

.gantt-grid-stage :deep(.vertical-inner) {
  height: 100% !important;
  min-height: 100% !important;
}

.gantt-grid-stage :deep(.rgCell),
.gantt-grid-stage :deep(.rgHeaderCell) {
  color: var(--revo-grid-text);
  padding-right: 8px;
  padding-left: 8px;
}

.gantt-grid-stage :deep(.rgCell) {
  font-size: 13px;
}

.gantt-grid-stage :deep(.rgHeaderCell) {
  font-size: 12px;
}

.gantt-grid-stage :deep(revo-grid[theme='darkCompact']) {
  --revo-grid-background: #17191f;
  --revo-grid-header-bg: #1f222a;
  --revo-grid-header-color: rgba(248, 250, 252, 0.92);
  --revo-grid-text: rgba(248, 250, 252, 0.9);
  --revo-grid-cell-border: rgba(148, 163, 184, 0.22);
  --revo-grid-header-border: rgba(148, 163, 184, 0.24);
  --revo-grid-row-hover: rgba(96, 165, 250, 0.1);
}

@media (max-width: 620px) {
  .gd-pill {
    display: none;
  }

  .gantt-grid-stage {
    height: 480px;
    overflow-x: auto;
  }
}
</style>
