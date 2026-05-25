<template>
  <section class="section catalog-section">
    <div class="pro-container">
      <div class="section-head">
        <div class="section-tag">- {{ page.catalog.tag }}</div>
        <h2>
          {{ featureCount }} {{ page.catalog.title.countLabel }},
          <em>{{ catalogTitleHighlight }}</em><br />
          {{ page.catalog.title.ending }}
        </h2>
        <p class="section-sub">{{ page.catalog.subtitle }}</p>
      </div>

      <div class="catalog">
        <div
          v-for="group in groups"
          :key="group.rawLabel"
          class="cat-group"
          :class="{ enterprise: group.rawLabel === 'Enterprise Tools' }"
        >
          <h3><span class="gicon">{{ group.icon }}</span>{{ group.label }}</h3>
          <ul>
            <li v-for="feature in group.features" :key="feature.title">{{ feature.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  page: Record<string, any>
  featureCount: number
  categoryCount: number
  groups: Array<{
    rawLabel: string
    label: string
    icon: string
    features: Array<{
      title: string
      description?: string
    }>
  }>
}>()

const catalogTitleHighlight = computed(() =>
  String(props.page.catalog.title.highlight).replace(/\{categoryCount\}/g, String(props.categoryCount)),
)
</script>
