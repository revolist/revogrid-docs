<template>
  <ProductPreviewFrame :preview="preview" aria-label="Interactive RevoGrid Kanban workflow preview">
    <div class="kanban-grid-stage">
      <KanbanShowcase />
    </div>
  </ProductPreviewFrame>
</template>

<script lang="ts" setup>
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'
import type { GanttLandingPage } from './ganttLanding'
import ProductPreviewFrame from './ProductPreviewFrame.vue'

defineProps<{
  preview: GanttLandingPage['preview']
}>()

const KanbanShowcase = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.vue'),
)
</script>

<style lang="scss" scoped>
.kanban-grid-stage {
  height: clamp(580px, 62vh, 660px);
  min-width: 0;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.kanban-grid-stage :deep(.kanban-showcase) {
  min-height: 100%;
}

@media (max-width: 620px) {
  .kanban-grid-stage {
    height: 580px;
  }
}
</style>
