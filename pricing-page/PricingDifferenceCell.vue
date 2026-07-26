<template>
  <td>
    <span v-if="value.kind === 'text'">{{ value.text }}</span>
    <template v-else-if="value.kind === 'included'">
      <FontAwesomeSvgIcon class="status-icon" name="circleCheck" />
      <span class="sr-only">Included</span>
    </template>
    <template v-else>
      <span class="dash" aria-hidden="true">—</span>
      <span class="sr-only">Not included</span>
    </template>
  </td>
</template>

<script lang="ts" setup>
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import type { PricingDifferenceValue } from './types'

defineProps<{
  value: PricingDifferenceValue
}>()
</script>

<style lang="scss" scoped>
:deep(.status-icon) {
  display: inline-block;
  width: 18px;
  height: 18px;
  color: var(--rg-font-green);
}

:deep(.status-icon svg) {
  fill: currentColor;
  opacity: 1;
}

.dash {
  color: var(--rg-text-3);
  font-size: 18px;
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
