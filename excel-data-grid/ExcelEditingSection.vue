<template>
  <section id="editing" class="excel-story-section" aria-labelledby="editing-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="editing-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-editing-layout">
        <div class="excel-grid-card excel-grid-card--editing">
          <ExcelRevoGrid
            class="excel-live-grid--editing"
            :source="editingRows"
            :columns="editingColumns"
            :column-types="editingColumnTypes"
            :row-headers="true"
            :row-size="36"
            :data-grid-context-menu="editingContextMenu"
            range
            resize
            @afteredit="onEdit"
          />
        </div>
        <aside class="excel-editing-aside">
          <div class="excel-keyboard-card">
            <strong>{{ content.keyboardTitle }}</strong>
            <dl>
              <div v-for="item in content.keys" :key="item.key"><dt>{{ item.key }}</dt><dd>{{ item.detail }}</dd></div>
            </dl>
          </div>
          <div class="excel-event-card">
            <strong>{{ content.eventTitle }}</strong>
            <ExcelHighlightedCode
              class="excel-event-code"
              :code="eventCode"
              language="js"
              label="RevoGrid beforeedit event example"
            />
            <p>{{ editMessage }}</p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColumnDropdown } from '@revolist/revogrid-pro'
import ExcelHighlightedCode from './ExcelHighlightedCode.vue'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import { excelBoldFormat, excelMonoRightFormat } from './excelFormattingPlugins'
import type { ExcelLandingContent } from './excelLandingContent'

const props = defineProps<{ content: ExcelLandingContent['editing'] }>()

const eventCode = `grid.addEventListener('beforeedit',
  event => validate(event.detail))`
const editingContextMenu = {}
const editingColumnTypes = { statusDropdown: ColumnDropdown }

const editingRows = ref([
  { supplier: 'Meridian Alloys Ltd', sku: 'MA-2210', cost: '42.15', qty: '860', delivery: '2026-09-04', status: 'Confirmed' },
  { supplier: 'Kesselring GmbH', sku: 'KG-9042', cost: '11.80', qty: '5,200', delivery: '2026-09-06', status: 'Pending' },
  { supplier: 'Nordvind Plastics', sku: 'NP-1177', cost: '3.45', qty: '18,000', delivery: '2026-09-09', status: 'Confirmed' },
  { supplier: 'Tessera Optics', sku: 'TO-3390', cost: '96.20', qty: '340', delivery: '2026-09-10', status: 'Delayed' },
  { supplier: 'Brightforge Steel', sku: 'BS-5514', cost: '58.90', qty: '1,240', delivery: '2026-09-11', status: 'Confirmed' },
  { supplier: 'Anvil Fasteners', sku: 'AF-0208', cost: '0.94', qty: '64,000', delivery: '2026-09-12', status: 'Pending' },
  { supplier: 'Larsen Components AS', sku: 'LC-4471', cost: '18.40', qty: '2,400', delivery: '2026-09-12', status: 'Confirmed' },
])
const editingColumns = [
  { name: 'Supplier', prop: 'supplier', size: 188, dataGridFormat: excelBoldFormat },
  { name: 'SKU', prop: 'sku', size: 108 },
  { name: 'Unit cost', prop: 'cost', size: 92, dataGridFormat: excelMonoRightFormat },
  { name: 'Qty', prop: 'qty', size: 88, dataGridFormat: excelMonoRightFormat },
  { name: 'Delivery', prop: 'delivery', size: 112 },
  {
    name: 'Status',
    prop: 'status',
    size: 112,
    columnType: 'statusDropdown',
    source: ['Confirmed', 'Pending', 'Delayed'],
  },
]
const editMessage = ref(props.content.eventDetail)
function onEdit() { editMessage.value = 'Edit committed. The source and lifecycle event now contain the new value.' }
</script>
