<template>
  <div class="compare-cta" :class="{ 'compare-cta-inline': inline }">
    <a class="rg-btn" href="/trial">Request Pro Trial</a>
    <a class="rg-btn rg-btn-secondary" href="/pricing#pro-advanced">Buy Pro</a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  inline?: boolean
}>()
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
