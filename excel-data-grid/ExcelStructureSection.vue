<template>
  <section id="structure" class="excel-story-section" aria-labelledby="structure-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="structure-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-grid-card excel-grid-card--structure">
        <ExcelRevoGrid
          class="excel-live-grid--structure"
          :source="structureRows"
          :columns="structureColumns"
          :row-size="36"
          :can-move-columns="true"
          :plugins="structurePlugins"
          :row-headers="structureRowHeaders"
          :row-order="structureRowOrder"
          :multi-range-selection="true"
          :data-grid-context-menu="structureContextMenu"
          range
          resize
          readonly
          @selection-change="onStructureSelectionChange"
        />
        <div class="excel-table-status"><div><span>Pinned: Store</span><span>Range {{ structureSummary.range }}</span><span>Sum {{ formatMoney(structureSummary.sum) }}</span></div></div>
      </div>
      <div class="excel-feature-notes excel-feature-notes--five">
        <article v-for="note in content.notes" :key="note.title"><strong>{{ note.title }}</strong><p>{{ note.detail }}</p></article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  DataGridContextMenuPlugin,
  MultiRangeSelectionPlugin,
  RowHeaderPlugin,
  RowOrderPlugin,
  rowHeaders,
} from '@revolist/revogrid-pro'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import { excelBoldFormat, excelNumberFormat } from './excelFormattingPlugins'
import { summarizeNumericGridSelection } from './excelLandingState.mjs'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['structure'] }>()

const structurePlugins = [
  DataGridContextMenuPlugin,
  RowOrderPlugin,
  MultiRangeSelectionPlugin,
  RowHeaderPlugin,
]
const structureRowHeaders = {
  ...rowHeaders({ rowDrag: true, showSelectAllButton: true }),
  size: 44,
}
const structureRowOrder = { prop: 'store', preview: 'compact' } as const
const structureContextMenu = {}

const structureRows = [
  ['Oslo Storgata', 'Flagship', 4210, 4480, 4120, 3980, 4340, 4510],
  ['Bergen Torget', 'Standard', 2180, 2240, 2090, 2310, 2180, 2260],
  ['Stockholm Söder', 'Flagship', 5120, 5340, 5010, 4880, 5220, 5410],
  ['Malmö Centrum', 'Standard', 1940, 2010, 1880, 1960, 2040, 2120],
  ['Copenhagen Nørre', 'Compact', 1320, 1410, 1280, 1350, 1390, 1460],
  ['Helsinki Kamppi', 'Standard', 2640, 2720, 2580, 2690, 2750, 2810],
  ['Aarhus Vest', 'Compact', 980, 1040, 920, 1010, 1060, 1120],
  ['Gothenburg Nordstan', 'Flagship', 3860, 3980, 3740, 3910, 4020, 4140],
].map((row) => ({ store: row[0], format: row[1], w32: row[2], w33: row[3], w34: row[4], w35: row[5], w36: row[6], w37: row[7] }))
const structureColumns = [
  { name: 'Store ▮', prop: 'store', size: 200, pin: 'colPinStart', readonly: true, dataGridFormat: excelBoldFormat },
  { name: 'Format', prop: 'format', size: 118, readonly: true },
  ...['w32', 'w33', 'w34', 'w35', 'w36', 'w37'].map((prop, index) => ({ name: `Wk ${32 + index}`, prop, size: index % 2 ? 108 : 104, readonly: true, dataGridFormat: excelNumberFormat })),
]
const structureSummary = ref(summarizeNumericGridSelection(null, structureRows, structureColumns))
function onStructureSelectionChange(payload: {
  range: { x: number; y: number; x1: number; y1: number } | null
  visibleSource: Record<string, unknown>[]
  visibleColumns: Record<string, unknown>[]
  columnOffset: number
}) {
  structureSummary.value = summarizeNumericGridSelection(payload.range, payload.visibleSource, payload.visibleColumns, payload.columnOffset)
}
function formatMoney(value: number) { return value.toLocaleString('en-US') }
</script>
