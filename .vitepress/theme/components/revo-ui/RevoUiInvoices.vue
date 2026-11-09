<template>
  <section class="preview-invoices" :aria-label="copy.invoices">
    <div class="invoices-heading">
      <h4>{{ copy.invoices }}</h4>
      <div class="invoices-outstanding">
        <span>{{ copy.outstanding }}</span>
        <output :aria-label="copy.outstanding">{{ money(outstanding) }}</output>
      </div>
    </div>
    <UiSearch v-model="query" :aria-label="copy.search" :placeholder="copy.search" />
    <ul class="invoice-list">
      <li
        v-for="invoice in visible"
        :key="invoice.id"
        :data-selected="selected.includes(invoice.id)"
      >
        <div class="invoice-client">
          <UiCheckbox
            :checked="selected.includes(invoice.id)"
            :disabled="paid.includes(invoice.id)"
            :label="invoice.name"
            v-bind="{ ariaLabel: copy.selectInvoice.replace('{invoice}', invoice.id) }"
            :on-change="(checked: boolean) => select(invoice.id, checked)"
          />
          <span class="invoice-id">{{ invoice.id }}</span>
        </div>
        <div class="invoice-value">
          <strong>{{ money(invoice.amount) }}</strong>
          <UiBadge
            variant="neutral"
            :class="paid.includes(invoice.id) ? 'invoice-paid' : 'invoice-pending'"
          >
            {{ paid.includes(invoice.id) ? copy.paid : copy.pending }}
          </UiBadge>
        </div>
      </li>
    </ul>
    <p v-if="!visible.length" class="invoice-empty" role="status">{{ copy.empty }}</p>
    <footer>
      <span class="invoice-selection">{{ selectionLabel }}</span>
      <UiButton variant="primary" :disabled="!selected.length" :on-click="settle">{{
        copy.markPaid
      }}</UiButton>
    </footer>
    <div v-if="paid.length" class="invoice-result">
      <span role="status">{{ copy.settled.replace('{count}', String(paid.length)) }}</span>
      <UiButton variant="text" :on-click="reset">{{ copy.reset }}</UiButton>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Button as UiButton,
  Checkbox as UiCheckbox,
  SearchInput as UiSearch,
  Badge as UiBadge,
} from '@revolist/ui/vue'
import type { RevoUiPreviewCopy } from './revoUiContent'
import { usePreviewMoney } from './usePreviewMoney'

const props = defineProps<{ copy: RevoUiPreviewCopy }>()
const money = usePreviewMoney()
const invoices = [
  { id: 'INV-1051', name: 'Studio North', amount: 2400 },
  { id: 'INV-1052', name: 'Orbit Design', amount: 1850 },
  { id: 'INV-1053', name: 'Forma Collective', amount: 3200 },
]
const query = ref('')
const selected = ref<string[]>([])
const paid = ref<string[]>([])
const visible = computed(() =>
  invoices.filter(item =>
    `${item.name} ${item.id}`.toLowerCase().includes(query.value.trim().toLowerCase()),
  ),
)
const outstanding = computed(() =>
  invoices.reduce((sum, item) => sum + (paid.value.includes(item.id) ? 0 : item.amount), 0),
)
const selectedAmount = computed(() =>
  invoices.reduce((sum, item) => sum + (selected.value.includes(item.id) ? item.amount : 0), 0),
)
const selectionLabel = computed(() =>
  props.copy.selection
    .replace('{count}', String(selected.value.length))
    .replace('{amount}', money(selectedAmount.value)),
)
function select(id: string, checked: boolean) {
  selected.value = checked
    ? [...new Set([...selected.value, id])]
    : selected.value.filter(value => value !== id)
}
function settle() {
  paid.value = [...new Set([...paid.value, ...selected.value])]
  selected.value = []
}
function reset() {
  selected.value = []
  paid.value = []
  query.value = ''
}
</script>
<style scoped>
.preview-invoices {
  padding: 18px 24px;
  border-top: 1px solid var(--vp-c-divider);
}
.invoices-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 650;
}
.invoices-outstanding {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  color: var(--vp-c-text-2);
  font-size: 10px;
}
.invoices-outstanding output {
  color: var(--vp-c-text-1);
  font-weight: 650;
  font-variant-numeric: tabular-nums;
}
.invoice-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
}
.invoice-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.invoice-list li[data-selected='true'] {
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
}
.invoice-client {
  min-width: 0;
}
.invoice-client :deep(.rv-checkbox-label) {
  font-size: 12px;
}
.invoice-id {
  display: block;
  margin: 2px 0 0 26px;
  font-size: 10px;
  color: var(--vp-c-text-2);
}
.invoice-value {
  display: grid;
  justify-items: end;
  gap: 4px;
  flex-shrink: 0;
}
.invoice-value strong {
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.invoice-value :deep(.rv-badge) {
  font-size: 9px;
}
:deep(.invoice-paid) {
  color: var(--vp-c-green-1);
  background: var(--vp-c-green-soft);
}
:deep(.invoice-pending) {
  color: var(--vp-c-yellow-1);
  background: var(--vp-c-yellow-soft);
}
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 14px;
}
.invoice-selection,
.invoice-empty,
.invoice-result {
  color: var(--vp-c-text-2);
  font-size: 10px;
}
.invoice-result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
@media (max-width: 640px) {
  :deep(button),
  :deep(input[type='search']) {
    min-height: 44px;
  }
  .preview-invoices {
    padding-inline: 18px;
  }
}
</style>
