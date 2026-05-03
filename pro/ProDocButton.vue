<template>
  <a
    :class="['pro-doc-button', `pro-doc-button--${variant}`]"
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

<style lang="scss" scoped>
.pro-doc-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s, background 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
}

.pro-doc-button--primary {
  color: #fff;
  background: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
  box-shadow: 0 10px 26px color-mix(in srgb, var(--pro-doc-accent, var(--gantt-accent, #1d4ed8)) 24%, transparent);
}

.pro-doc-button--secondary {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);

  &:hover {
    border-color: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
  }
}
</style>
