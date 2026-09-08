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

      <ProFeatureGrid :features="featureCards" :show-icons="false" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ProFeatureGrid from '../../pro/ProFeatureGrid.vue'
import type { PivotLandingPage } from './types'

const props = defineProps<{
  features: PivotLandingPage['features']
}>()

const featureCards = computed(() => props.features.items.map(feature => ({
  ...feature,
  media: feature.media?.src,
  mediaAlt: feature.media?.alt,
  mediaWidth: feature.media?.width,
  mediaHeight: feature.media?.height,
  mediaFit: feature.media ? 'contain' as const : undefined,
  mediaPosition: feature.media?.position,
})))
</script>
