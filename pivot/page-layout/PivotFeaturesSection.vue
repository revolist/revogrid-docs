<template>
  <section v-if="features.items.length" :id="features.id" class="features-section">
    <div class="container">
      <div class="section-head">
        <div class="section-tag">{{ features.kicker }}</div>
        <h2 class="section-title">{{ features.title }}</h2>
        <p class="section-sub">
          {{ features.description }}
        </p>
      </div>

      <ProFeatureGrid :features="features.items" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProFeatureGrid from '../../pro/ProFeatureGrid.vue'
import type { PivotLandingPage } from './types'

defineProps<{
  features: PivotLandingPage['features']
}>()
</script>
