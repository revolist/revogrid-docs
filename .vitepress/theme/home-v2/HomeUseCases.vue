<template>
  <section class="rg-section rg-section-soft">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-usecases-grid">
        <div v-for="item in section?.items" :key="item.title" class="rg-usecase-card">
          <div class="rg-usecase-icon">{{ iconText(item.icon) }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import HomeSectionHeader from './HomeSectionHeader.vue'
import { iconText, type HomeV2Record } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()
</script>
