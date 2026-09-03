<template>
  <section id="positioning" class="excel-story-section excel-story-section--positioning" aria-labelledby="positioning-title">
    <div class="excel-container">
      <div class="excel-positioning-heading">
        <span class="excel-section-index">{{ content.index }}</span>
        <h2 id="positioning-title">{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-comparison">
        <article>
          <span>{{ content.spreadsheet.label }}</span>
          <h3>{{ content.spreadsheet.title }}</h3>
          <ul><li v-for="item in content.spreadsheet.items" :key="item"><i>—</i>{{ item }}</li></ul>
        </article>
        <article class="is-revogrid">
          <span>{{ content.revogrid.label }}</span>
          <h3>{{ content.revogrid.title }}</h3>
          <ul><li v-for="item in content.revogrid.items" :key="item"><FontAwesomeSvgIcon name="check" />{{ item }}</li></ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['positioning'] }>()
</script>
