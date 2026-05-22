<template>
  <a
    class="rg-btn"
    :class="{ 'rg-btn-secondary': variant === 'secondary' }"
    :href="href"
    :target="target"
    :rel="rel"
  >
    <slot />
    <svg v-if="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'secondary'
  target?: string
  rel?: string
  arrow?: boolean
}>(), {
  variant: 'primary',
  target: undefined,
  rel: undefined,
  arrow: false,
})
</script>
