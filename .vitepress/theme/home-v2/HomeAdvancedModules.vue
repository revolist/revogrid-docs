<template>
  <section id="advanced" class="rg-section">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-modules-grid">
        <a
          v-for="item in section?.items"
          :key="item.title"
          class="rg-module-card"
          :href="linkOf(item.link)"
          :target="targetOf(item.link)"
          :rel="relOf(item.link)"
          :aria-label="`${item.title} demo`"
        >
          <span class="rg-module-tag">{{ item.tag }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <ModulePreview :type="item.type" />
        </a>
      </div>
      <div class="rg-centered-action">
        <a class="rg-btn rg-btn-secondary" :href="linkOf(section?.action?.link)">
          {{ section?.action?.text }}
          <HomeChevron />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import HomeSectionHeader from './HomeSectionHeader.vue'
import HomeChevron from './HomeChevron.vue'
import ModulePreview from './ModulePreview.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf, targetOf, relOf } = useHomeV2Links()
</script>
