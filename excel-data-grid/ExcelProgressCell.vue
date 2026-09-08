<template>
  <div class="excel-progress-cell" :aria-label="`${progress}% complete`">
    <span class="excel-progress-cell__track" aria-hidden="true">
      <span class="excel-progress-cell__fill" :style="{ width: `${progress}%` }" />
    </span>
    <span class="excel-progress-cell__value">{{ progress }}%</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ColumnDataSchemaModel } from '@revolist/vue3-datagrid'

const props = defineProps<ColumnDataSchemaModel & { model: { progress?: number } }>()
const progress = computed(() => Math.min(100, Math.max(0, Number(props.model.progress) || 0)))
</script>
