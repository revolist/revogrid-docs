<template>
  <div class="rg-section-header">
    <div v-if="section?.label" class="rg-section-label">{{ section.label }}</div>
    <component
      :is="headingLevel"
      v-if="section?.title"
      :id="headingId"
      class="rg-section-title"
    >
      {{ section.title }}
    </component>
    <p v-if="section?.description" class="rg-section-desc">{{ section.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { PricingSectionData } from '../types'

withDefaults(defineProps<{
  section?: PricingSectionData
  headingLevel?: 'h1' | 'h2'
  headingId?: string
}>(), {
  headingLevel: 'h2',
})
</script>
