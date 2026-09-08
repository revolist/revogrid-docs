<template>
  <section id="matrix" class="excel-story-section" aria-labelledby="matrix-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div><span class="excel-section-index">{{ content.index }}</span><h2 id="matrix-title">{{ content.title }}</h2></div>
        <p>{{ content.description }}</p>
      </div>
      <div class="excel-capability-grid">
        <article v-for="group in content.groups" :key="group.title">
          <span>{{ group.tier }}</span><h3>{{ group.title }}</h3>
          <ul><li v-for="item in group.items" :key="item"><FontAwesomeSvgIcon name="check" />{{ item }}</li></ul>
        </article>
      </div>
      <div class="excel-license-note">
        <FontAwesomeSvgIcon name="circleCheck" />
        <p><strong>{{ content.noteTitle }}</strong> {{ content.noteDetail }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['capability'] }>()
</script>
