<template>
  <td>
    <span v-if="value.kind === 'text'">{{ value.text }}</span>
    <template v-else-if="value.kind === 'included'">
      <VPImage class="status-icon" :image="{ src: 'check.svg' }" aria-hidden="true" />
      <span class="sr-only">Included</span>
    </template>
    <template v-else>
      <span class="dash" aria-hidden="true">—</span>
      <span class="sr-only">Not included</span>
    </template>
  </td>
</template>

<script lang="ts" setup>
import VPImage from '../.vitepress/theme/VPImage.vue'
import type { PricingDifferenceValue } from './types'

defineProps<{
  value: PricingDifferenceValue
}>()
</script>

<style lang="scss" scoped>
:deep(.status-icon) {
  display: inline-block;
  width: 14px;
  height: 14px;
  color: var(--rg-font-green);
}

.dash {
  color: var(--rg-text-3);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
