<template>
  <div
    class="compare-cta"
    :class="{ 'compare-cta-inline': inline }"
    role="group"
    aria-label="Comparison actions"
  >
    <a class="rg-btn" :href="primaryLink">{{ primaryLabel }}</a>
    <a class="rg-btn rg-btn-secondary" :href="secondaryHref">{{ secondaryLabel }}</a>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const props = withDefaults(
  defineProps<{
    inline?: boolean
    primaryHref?: string
    primaryLabel?: string
    secondaryHref?: string
    secondaryLabel?: string
  }>(),
  {
    primaryHref: '/trial',
    primaryLabel: 'Try RevoGrid Pro free',
    secondaryHref: '/pricing#pro-advanced',
    secondaryLabel: 'Buy Pro',
  },
)

const route = useRoute()
const primaryLink = computed(() => {
  const target = new URL(props.primaryHref, 'https://rv-grid.com')
  if (target.origin !== 'https://rv-grid.com' || target.pathname !== '/trial') {
    return props.primaryHref
  }
  if (!target.searchParams.has('source') && route.path.startsWith('/compare/')) {
    const comparison = route.path.slice('/compare/'.length).replace(/\/$/, '')
    target.searchParams.set('source', comparison || 'comparisons')
  }
  return `${target.pathname}${target.search}${target.hash}`
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
