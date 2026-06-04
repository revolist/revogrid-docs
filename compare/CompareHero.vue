<template>
  <div class="compare-hero">
    <p class="compare-eyebrow">{{ eyebrow }}</p>

    <p class="compare-lead">
      <strong>{{ revoSummary }}</strong>
      {{ competitorName }} is best understood as {{ competitorSummary }}.
    </p>

    <p>
      This comparison is for teams evaluating {{ competitorName }} against RevoGrid
      for {{ useCases }}.
    </p>

    <CompareCta />

    <p class="compare-note">
      Last reviewed: {{ reviewedDate }}. Vendor pricing, license terms, and feature
      packaging can change. Verify official vendor pages before purchase.
    </p>
  </div>
</template>

<script lang="ts" setup>
import CompareCta from './CompareCta.vue'

withDefaults(defineProps<{
  competitorName: string
  competitorSummary: string
  useCases: string
  eyebrow?: string
  revoSummary?: string
  reviewedDate?: string
}>(), {
  eyebrow: 'Deep technical comparison for product teams',
  revoSummary:
    'RevoGrid Core and RevoGrid Pro are best understood as a fast data-grid foundation plus optional advanced workflow modules.',
  reviewedDate: 'June 4, 2026',
})
</script>

<style scoped>
.compare-hero {
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
}

.compare-eyebrow {
  margin: 0 0 0.75rem;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.06em;
  font-size: 0.78rem;
}

.compare-lead {
  font-size: 1.15rem;
  line-height: 1.65;
}

.compare-note {
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  margin-top: 1rem;
}
</style>
