<template>
  <div class="rg-section-header">
    <div v-if="section?.label" class="rg-section-label">{{ section.label }}</div>
    <h2 v-if="section?.title" class="rg-section-title">{{ section.title }}</h2>
    <p v-if="section?.description" class="rg-section-desc">{{ section.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { PricingRecord } from './pricingDesignUtils'

defineProps<{
  section?: PricingRecord
}>()
</script>
