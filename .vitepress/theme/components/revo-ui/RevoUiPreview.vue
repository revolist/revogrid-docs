<template>
  <div class="revo-ui-preview">
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
</style>
