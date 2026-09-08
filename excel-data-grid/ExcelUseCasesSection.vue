<template>
  <section class="excel-use-cases excel-story-section" aria-labelledby="excel-use-cases-title">
    <div class="excel-container">
      <div class="excel-use-cases__heading">
        <h2 id="excel-use-cases-title">{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </div>
      <div class="excel-use-cases__grid">
        <article v-for="useCase in useCases" :key="useCase.title">
          <div class="excel-use-case-preview">
            <ExcelRevoGrid
              :source="useCase.rows"
              :columns="useCase.columns"
              :row-size="22"
              :class="`excel-live-grid--use-case excel-live-grid--use-case-${useCase.id}`"
            />
          </div>
          <div class="excel-use-case-copy"><h3>{{ useCase.title }}</h3><p>{{ useCase.detail }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VGridVueTemplate } from '@revolist/vue3-datagrid'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import ExcelMiniTreeCell from './ExcelMiniTreeCell.vue'
import { excelDecimalFormat, excelNumberFormat, excelSignedNumberFormat } from './excelFormattingPlugins'
import type { ExcelLandingContent, ExcelUseCaseId } from './excelLandingContent'

const props = defineProps<{ content: ExcelLandingContent['useCases'] }>()

const makeColumns = (a: string, b: string, c: string, format = excelNumberFormat) => [
  { name: a, prop: 'a', size: 95 }, { name: b, prop: 'b', size: 74 },
  { name: c, prop: 'c', size: 56, dataGridFormat: format },
]
const useCaseDemos: Record<ExcelUseCaseId, { columns: Record<string, unknown>[]; rows: Record<string, unknown>[] }> = {
  ops: { columns: makeColumns('Order', 'Status', 'Qty'), rows: [
    { a: 'ORD-40122', b: 'Picking', c: 240 }, { a: 'ORD-40123', b: 'Packed', c: 1120 }, { a: 'ORD-40124', b: 'Packed', c: 860 }, { a: 'ORD-40125', b: 'Hold', c: 415 }, { a: 'ORD-40126', b: 'Shipped', c: 2050 },
  ] },
  report: { columns: makeColumns('Account', 'Period', 'Δ %', excelSignedNumberFormat), rows: [
    { a: 'Revenue', b: 'Q3 2026', c: 8.4 }, { a: 'COGS', b: 'Q3 2026', c: -2.1 }, { a: 'Gross margin', b: 'Q3 2026', c: 3.7 }, { a: 'Opex', b: 'Q3 2026', c: 1.2 }, { a: 'EBITDA', b: 'Q3 2026', c: 6.9 },
  ] },
  plan: { columns: [
    { name: 'Workstream', prop: 'a', size: 95, cellTemplate: VGridVueTemplate(ExcelMiniTreeCell) },
    { name: 'Owner', prop: 'b', size: 74 },
    { name: 'FTE', prop: 'c', size: 56, dataGridFormat: excelNumberFormat },
  ], rows: [
    { a: 'Platform', b: 'H. Ibarra', c: 12, depth: 0, hasChildren: true }, { a: 'Migration', b: 'C. Whitfield', c: 5, depth: 1, hasChildren: false }, { a: 'Cutover', b: 'D. Okonjo', c: 4, depth: 1, hasChildren: false }, { a: 'Enablement', b: 'Y. Tanabe', c: 3, depth: 0, hasChildren: true }, { a: 'Training', b: 'M. Rahman', c: 2, depth: 1, hasChildren: false },
  ] },
  saas: { columns: makeColumns('Campaign', 'Channel', 'CTR', excelDecimalFormat), rows: [
    { a: 'Spring push', b: 'Email', c: 4.2 }, { a: 'Retarget EU', b: 'Display', c: 1.8 }, { a: 'Partner co-op', b: 'Social', c: 2.6 }, { a: 'Trial nudge', b: 'Email', c: 5.1 }, { a: 'Winback', b: 'Email', c: 3.4 },
  ] },
}
const useCases = props.content.items.map((item) => ({
  ...useCaseDemos[item.id],
  ...item,
}))
</script>
