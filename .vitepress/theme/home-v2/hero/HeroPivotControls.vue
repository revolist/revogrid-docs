<template>
  <div class="hero-pivot-controls">
    <span aria-hidden="true">{{ labels.pivotGroupBy }}</span>
    <SegmentedSwitch
      :value="modelValue"
      :options="options"
      :aria-label="labels.pivotGroupBy"
      role="radiogroup"
      :on-change="changeGrouping"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { VueSegmentedSwitch as SegmentedSwitch } from '@revolist/ui/vue-segmented-switch'
import '@revolist/ui/styles.css'
import type { HomeV2Record } from '../homeV2Utils'
import type { HeroPivotGrouping } from './products/types'

const props = defineProps<{ modelValue: HeroPivotGrouping; labels: HomeV2Record }>()
const emit = defineEmits<{ 'update:modelValue': [value: HeroPivotGrouping] }>()
const options = computed(() => [
  { value: 'status', label: props.labels.status },
  { value: 'owner', label: props.labels.owner },
])
function changeGrouping(value: string | number) {
  if (value === 'status' || value === 'owner') emit('update:modelValue', value)
}
</script>
<style scoped>
.hero-pivot-controls {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 12px;
  min-height: 52px;
  padding: 8px 12px;
  color: var(--rg-text-2);
  font-size: 12px;
}
@media (max-width: 640px) {
  :deep(.rv-segmented-switch-item) {
    min-height: 44px;
  }
}
</style>
