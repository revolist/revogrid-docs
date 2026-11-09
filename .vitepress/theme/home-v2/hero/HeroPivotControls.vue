<template>
  <div class="hero-pivot-controls" role="group" :aria-label="labels.pivotGroupBy">
    <span aria-hidden="true">{{ labels.pivotGroupBy }}</span>
    <div class="rv-btn-group">
      <button
        v-for="option in options"
        :key="option"
        v-rv-control
        class="rv-btn"
        type="button"
        :aria-pressed="modelValue === option"
        @click="emit('update:modelValue', option)"
      >
        {{ labels[option] }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { vRvControl } from '@revolist/ui/vue-control'
import type { HomeV2Record } from '../homeV2Utils'
import type { HeroPivotGrouping } from './products/types'

defineProps<{ modelValue: HeroPivotGrouping; labels: HomeV2Record }>()
const emit = defineEmits<{ 'update:modelValue': [value: HeroPivotGrouping] }>()
const options = ['status', 'owner'] as const
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
.rv-btn[aria-pressed='true'] {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
@media (max-width: 640px) {
  .rv-btn {
    min-height: 44px;
  }
}
</style>
