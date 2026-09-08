<template>
  <section class="excel-faq-section"><div class="excel-container"><CommercialFaq id="excel-data-grid-faq" /></div></section>
  <section class="excel-final-cta" aria-labelledby="excel-final-title">
    <div class="excel-grid-pattern" aria-hidden="true"></div>
    <div class="excel-container">
      <span>{{ content.eyebrow }}</span>
      <h2 id="excel-final-title">{{ content.title }}</h2>
      <p>{{ content.description }}</p>
      <div class="excel-actions excel-actions--center">
        <ProDocButton :href="content.primary.href" arrow>{{ content.primary.label }}</ProDocButton>
        <a class="excel-text-link" :href="content.secondary.href">{{ content.secondary.label }}</a>
      </div>
      <small>{{ content.footnote }}</small>
    </div>
  </section>
</template>

<script setup lang="ts">
import CommercialFaq from '../pro/CommercialFaq.vue'
import ProDocButton from '../pro/ProDocButton.vue'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['closing'] }>()
</script>
