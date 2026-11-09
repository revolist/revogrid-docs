<template>
  <details class="charts-code-example">
    <summary>{{ label }}</summary>
    <div class="vp-doc"><slot /></div>
  </details>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: 'View code' })
</script>

<style scoped>
.charts-code-example {
  min-width: 0;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--vp-c-divider);
}
summary {
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.6;
}
summary:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
  border-radius: 2px;
}
.vp-doc {
  min-width: 0;
}
.vp-doc :deep(div[class*='language-']) {
  margin: 16px 0 0;
}
</style>
