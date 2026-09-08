<template>
  <div
    class="compare-cta"
    :class="{ 'compare-cta-inline': inline }"
    role="group"
    aria-label="Comparison actions"
  >
    <a class="rg-btn" :href="primaryHref">{{ primaryLabel }}</a>
    <a class="rg-btn rg-btn-secondary" :href="secondaryHref">{{ secondaryLabel }}</a>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  inline?: boolean
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}>(), {
  primaryHref: '/trial',
  primaryLabel: 'Get Pro Trial',
  secondaryHref: '/pricing#pro-advanced',
  secondaryLabel: 'Buy Pro',
})
</script>

<style scoped>
.compare-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1.25rem;
}

.compare-cta-inline {
  margin: 1.5rem 0 2rem;
}
</style>
