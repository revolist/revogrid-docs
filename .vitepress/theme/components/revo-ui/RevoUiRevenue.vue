<template>
  <section class="preview-revenue" :aria-label="copy.revenue">
    <div class="revenue-top">
      <div>
        <p>{{ copy.revenue }}</p>
        <output class="revenue-total" :aria-label="copy.revenue">{{ money(total) }}</output>
      </div>
      <SegmentedSwitch
        :value="period"
        :options="periods"
        :aria-label="copy.period"
        role="radiogroup"
        :on-change="changePeriod"
      />
    </div>
    <AreaChart
      :data="data"
      v-bind="{ ariaLabel: copy.revenueChart }"
      :height="110"
      :show-grid="true"
      :show-labels="true"
      :show-points="false"
      area-fill="gradient"
      :format-value="money"
      tooltip-indicator="line"
    />
    <div class="revenue-breakdown">
      <div>
        <span class="revenue-dot" />{{ copy.recurring }}<strong>{{ money(total * 0.76) }}</strong>
      </div>
      <div>
        <span class="revenue-dot secondary" />{{ copy.oneTime
        }}<strong>{{ money(total * 0.24) }}</strong>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { AreaChart } from '@revolist/ui/vue'
import { VueSegmentedSwitch as SegmentedSwitch } from '@revolist/ui/vue-segmented-switch'
import { usePreviewMoney } from './usePreviewMoney'
import type { RevoUiPreviewCopy } from './revoUiContent'

const props = defineProps<{ copy: RevoUiPreviewCopy }>()
const { lang } = useData()
const money = usePreviewMoney()
const period = ref(6)
const periods = computed(() => [
  { value: 3, label: props.copy.threeMonths },
  { value: 6, label: props.copy.sixMonths },
])
const amounts = [29600, 36200, 34800, 41200, 38700, 48290]
const data = computed(() =>
  amounts
    .map((value, index) => {
      const month = new Intl.DateTimeFormat(lang.value, { month: 'short', timeZone: 'UTC' }).format(
        new Date(Date.UTC(2026, index + 6, 1)),
      )
      return {
        key: month,
        value,
        selected: true,
        tooltip: { title: month, details: [money(value)] },
      }
    })
    .slice(-period.value),
)
const total = computed(() => data.value.reduce((sum, item) => sum + item.value, 0))
function changePeriod(value: string | number) {
  if (value === 3 || value === 6) period.value = value
}
</script>
<style scoped>
.preview-revenue {
  padding: 20px 24px 16px;
}
:deep(.rv-distribution-chart) {
  --rv-distribution-accent: #7960f5;
}
.revenue-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}
p {
  margin: 0 0 4px;
  color: var(--vp-c-text-2);
  font-size: 11px;
}
.revenue-total {
  font-size: 27px;
  font-weight: 650;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}
.revenue-breakdown {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 12px;
  font-size: 10px;
  color: var(--vp-c-text-2);
}
.revenue-breakdown > div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}
.revenue-breakdown strong {
  margin-left: auto;
  font-size: 11px;
  color: var(--vp-c-text-1);
  font-weight: 600;
}
.revenue-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7960f5;
}
.revenue-dot.secondary {
  background: #15b8a6;
}
@media (max-width: 640px) {
  :deep(.rv-segmented-switch-item) {
    min-height: 44px;
  }
}
</style>
