<template>
  <div class="revo-ui-preview">
    <header class="preview-heading">
      <span class="preview-mark" aria-hidden="true">UI</span>
      <div>
        <p>{{ copy.eyebrow }}</p>
        <h3>{{ copy.title }}</h3>
      </div>
      <span class="preview-dots" aria-hidden="true">•••</span>
    </header>
    <RevoUiRevenue :copy="copy" />
    <RevoUiInvoices :copy="copy" />
  </div>
</template>
<script setup lang="ts">
import '@revolist/ui/styles.css'
import RevoUiRevenue from './RevoUiRevenue.vue'
import RevoUiInvoices from './RevoUiInvoices.vue'
import type { RevoUiPreviewCopy } from './revoUiContent'

defineProps<{ copy: RevoUiPreviewCopy }>()
</script>
<style scoped>
.revo-ui-preview {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 12px 40px color-mix(in srgb, var(--vp-c-text-1) 5%, transparent);
  font-size: 13px;
}
.preview-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.preview-mark {
  display: grid;
  place-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-weight: 700;
}
.preview-heading p {
  margin: 0 0 2px;
  font-size: 10px;
  color: var(--vp-c-text-2);
}
h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 650;
  line-height: 1.4;
}
.preview-dots {
  margin-left: auto;
  letter-spacing: 2px;
  color: var(--vp-c-text-3);
}
</style>
