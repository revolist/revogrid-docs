<template>
  <section id="scale" class="excel-scale-section" aria-labelledby="scale-title">
    <div class="excel-container">
      <div class="excel-story-heading excel-story-heading--dark">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="scale-title">{{ content.title }}<br>{{ content.titleLine }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-scale-layout">
        <div class="excel-grid-card excel-grid-card--dark excel-grid-card--scale">
          <div class="excel-grid-card__bar">
            <div class="excel-scale-status">
              <strong>● active</strong>
              <span>transactions · {{ scaleRows.length.toLocaleString('en-US') }} rows × {{ scaleColumns.length }} columns</span>
            </div>
            <span>DOM nodes: {{ scaleStats.domNodes.toLocaleString('en-US') }}</span>
          </div>
          <ExcelRevoGrid
            class="excel-live-grid--scale"
            theme-mode="dark"
            :source="scaleRows"
            :columns="scaleColumns"
            :row-size="24"
            readonly
            track-stats
            resize
            @render-stats="onScaleStats"
          />
        </div>
        <div class="excel-scale-stats">
          <article v-for="metric in content.metrics" :key="metric.value"><strong>{{ metric.value }}</strong><span>{{ metric.label }}</span></article>
          <article class="excel-scale-control">
            <b>{{ content.controlTitle }}</b>
            <span v-for="item in content.controls" :key="item">{{ item }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, shallowRef } from 'vue'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import { excelDecimalFormat, excelNumberFormat } from './excelFormattingPlugins'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['scale'] }>()

const scaleRows = shallowRef<Record<string, unknown>[]>([])
const scaleStats = reactive({ domNodes: 0 })
const scaleColumns = [
  { name: 'Row', prop: 'row', size: 88, readonly: true, dataGridFormat: excelNumberFormat },
  { name: 'Txn ID', prop: 'id', size: 120, readonly: true },
  { name: 'Counterparty', prop: 'counterparty', size: 188, readonly: true },
  { name: 'Amount', prop: 'amount', size: 130, readonly: true, dataGridFormat: excelDecimalFormat },
  { name: 'Currency', prop: 'currency', size: 110, readonly: true },
  { name: 'Book', prop: 'book', size: 96, readonly: true },
  { name: 'Settled', prop: 'settled', size: 110, readonly: true },
]

function onScaleStats(stats: { domNodes: number }) {
  scaleStats.domNodes = stats.domNodes
}

onMounted(() => {
  const counterparties = ['Aurora Capital', 'Delphi Trading', 'Granite Holdings', 'Brant Securities', 'Eastgate Bank', 'Hyperion Fund', 'Cormorant AM', 'Fenwick Partners']
  const currencies = ['EUR', 'GBP', 'CHF', 'USD', 'SEK']
  const books = ['FX-EU', 'RATES', 'EQ-CASH', 'CREDIT']
  scaleRows.value = Array.from({ length: 50000 }, (_, index) => ({
    row: 148201 + index,
    id: `TX-${904118 + index * 7}`,
    counterparty: counterparties[index % counterparties.length],
    amount: ((index * 48271) % 940000) + 12400,
    currency: currencies[index % currencies.length],
    book: books[index % books.length],
    settled: `2026-0${6 + (index % 3)}-${String(4 + (index % 24)).padStart(2, '0')}`,
  }))
})
</script>
