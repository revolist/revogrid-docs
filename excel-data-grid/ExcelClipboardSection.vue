<template>
  <section id="copy-paste" class="excel-story-section excel-story-section--clipboard" aria-labelledby="copy-paste-title">
    <div class="excel-container">
      <div class="excel-copy-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="copy-paste-title">{{ content.title }}</h2>
          <p>{{ content.description }}</p>
        </div>
        <div class="excel-copy-actions">
          <button class="excel-demo-button" type="button" @click="pasteSample">{{ content.action }}</button>
        </div>
      </div>

      <div class="excel-transfer-demo">
        <div class="excel-sheet-card excel-sheet-card--source">
          <div class="excel-sheet-card__bar excel-sheet-card__bar--excel"><span class="excel-file-mark"></span><strong>Q3-forecast.xlsx</strong></div>
          <ExcelRevoGrid
            ref="sourceGridRef"
            class="excel-live-grid--clipboard-source"
            :source="clipboardSourceRows"
            :columns="sourceColumns"
            :plugins="clipboardPlugins"
            :row-headers="true"
            :row-size="29"
            :data-grid-formatting="sourceFormatting"
            range
          />
          <div class="excel-sheet-card__status"><span>A3:D7 source range</span><strong>fx D3 = C3 × 15</strong></div>
        </div>

        <div class="excel-transfer-arrow" aria-hidden="true">
          <i></i><b><FontAwesomeSvgIcon name="arrowRight" /></b><i></i>
        </div>

        <div class="excel-sheet-card excel-sheet-card--target" :class="{ 'is-applied': pasteApplied || clipboardPasteRows > 0 }">
          <div class="excel-sheet-card__bar excel-sheet-card__bar--app">
            <span class="excel-app-mark"></span><strong>Your app · Forecast planner</strong>
            <em>{{ targetHeadline }}</em>
          </div>
          <ExcelRevoGrid
            :key="pasteApplied ? 'pasted' : 'empty'"
            class="excel-live-grid--clipboard-target"
            :source="clipboardRows"
            :columns="targetColumns"
            :plugins="clipboardPlugins"
            :row-headers="true"
            :row-size="34"
            :data-grid-formatting="targetFormatting"
            :data-grid-context-menu="clipboardTargetContextMenu"
            range
            @afterpasteapply="onClipboardPaste"
          />
          <div class="excel-sheet-card__status" aria-live="polite"><strong>{{ targetStatus }}</strong><span>{{ targetDetail }}</span></div>
        </div>
      </div>

      <div class="excel-feature-notes">
        <article v-for="note in content.notes" :key="note.title"><strong>{{ note.title }}</strong><p>{{ note.detail }}</p></article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FormulaPlugin, MultiRangeSelectionPlugin } from '@revolist/revogrid-pro'
import { useData } from 'vitepress'
import { computed, ref } from 'vue'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import { excelNumberFormat } from './excelFormattingPlugins'
import { applyClipboardSample } from './excelLandingState.mjs'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['clipboard'] }>()

const sourceColumns = [
  { prop: 'product', name: 'A', size: 122 },
  { prop: 'channel', name: 'B', size: 110 },
  { prop: 'units', name: 'C', size: 94, dataGridFormat: excelNumberFormat },
  { prop: 'forecast', name: 'D', size: 112, dataGridFormat: excelNumberFormat },
]
const targetColumns = [
  { prop: 'product', name: 'Product line', size: 180 },
  { prop: 'channel', name: 'Channel', size: 126 },
  { prop: 'units', name: 'Units', size: 94, excelNumberFormat: '#,##0', dataGridFormat: excelNumberFormat },
  { prop: 'forecast', name: 'Forecast €', size: 116, excelNumberFormat: '#,##0', dataGridFormat: excelNumberFormat },
]
const clipboardPlugins = [FormulaPlugin, MultiRangeSelectionPlugin]
const clipboardTargetContextMenu = {}
const { isDark } = useData()
const clipboardPalette = computed(() => isDark.value
  ? {
      accent: '#3ed18c',
      accentSoft: '#10271c',
      blue: '#8fb8ff',
      blueSoft: '#162039',
    }
  : {
      accent: '#0b8a4f',
      accentSoft: '#e7f7ef',
      blue: '#2e6be6',
      blueSoft: '#eaf3ff',
    })
const sourceGridRef = ref<{
  selectRange: (
    start: { x: number; y: number },
    end?: { x: number; y: number },
  ) => Promise<void>
} | null>(null)
const createClipboardFormatting = (rowOffset = 0, palette = clipboardPalette.value) => ({
  cells: [
    {
      range: { start: { row: 2 + rowOffset, column: 0 }, end: { row: 6 + rowOffset, column: 3 } },
      format: { appearance: { wrap: false } },
    },
    {
      range: { start: { row: 2 + rowOffset, column: 2 }, end: { row: 6 + rowOffset, column: 3 } },
      format: {
        value: { kind: 'code', formatCode: '#,##0' },
        appearance: { fontFamily: '"SFMono-Regular", Menlo, Consolas, monospace', horizontal: 'right' },
      },
    },
    {
      range: { start: { row: 2 + rowOffset, column: 0 } },
      format: { appearance: { bold: true, textColor: palette.blue } },
    },
    {
      range: { start: { row: 3 + rowOffset, column: 1 } },
      format: { appearance: { italic: true } },
    },
    {
      range: { start: { row: 4 + rowOffset, column: 3 } },
      format: { appearance: { fillColor: palette.accentSoft, textColor: palette.accent, bold: true } },
    },
    {
      range: { start: { row: 5 + rowOffset, column: 0 } },
      format: { appearance: { textColor: palette.accent } },
    },
    {
      range: { start: { row: 6 + rowOffset, column: 2 } },
      format: { appearance: { fillColor: palette.blueSoft } },
    },
  ],
})
const sourceFormatting = computed(() => createClipboardFormatting(0, clipboardPalette.value))
const clipboardSourceRows = [
  { product: 'Product line', channel: 'Channel', units: 'Units', forecast: 'Forecast' },
  { product: 'Aurora 120', channel: 'Direct', units: 12, forecast: '=C2*10' },
  { product: 'Aurora 240', channel: 'Partner', units: 8, forecast: '=C3*15' },
  { product: 'Helios Compact', channel: 'Direct', units: 24, forecast: '=C4*6' },
  { product: 'Helios Pro', channel: 'Distribution', units: 10, forecast: '=C5*18' },
  { product: 'Nimbus Rack', channel: 'Partner', units: 16, forecast: '=C6*12' },
  { product: 'Nimbus Edge', channel: 'Direct', units: 6, forecast: '=C7*20' },
]
const clipboardSample = [
  { product: 'Aurora 240', channel: 'Partner', units: 8, forecast: '=C1*15' },
  { product: 'Helios Compact', channel: 'Direct', units: 24, forecast: '=C2*6' },
  { product: 'Helios Pro', channel: 'Distribution', units: 10, forecast: '=C3*18' },
  { product: 'Nimbus Rack', channel: 'Partner', units: 16, forecast: '=C4*12' },
  { product: 'Nimbus Edge', channel: 'Direct', units: 6, forecast: '=C5*20' },
]
const emptyClipboardRows = clipboardSample.map((_, index) => ({ id: `target-${index}`, product: '', channel: '', units: '', forecast: '' }))
const clipboardRows = ref(emptyClipboardRows)
const pasteApplied = ref(false)
const targetFormatting = computed(() => pasteApplied.value
  ? createClipboardFormatting(-2, clipboardPalette.value)
  : {})
const clipboardPasteRows = ref(0)
const targetHeadline = computed(() => {
  if (pasteApplied.value) return `${clipboardSample.length} rows pasted`
  if (clipboardPasteRows.value > 0) return `${clipboardPasteRows.value} ${clipboardPasteRows.value === 1 ? 'row' : 'rows'} pasted`
  return 'Ready to paste'
})
const targetStatus = computed(() => {
  if (pasteApplied.value) return '● paste range A1:D5 applied'
  if (clipboardPasteRows.value > 0) return '● Excel range pasted with formatting'
  return '● Awaiting Excel range'
})
const targetDetail = computed(() => {
  if (pasteApplied.value) return 'afteredit → validate() → commit'
  if (clipboardPasteRows.value > 0) return 'fonts · fills · borders · alignment · number formats'
  return 'focus a target cell and paste from Excel, or use the sample action'
})

function onClipboardPaste(event: CustomEvent<{ parsed?: unknown[][] }>) {
  clipboardPasteRows.value = event.detail?.parsed?.length ?? 1
}

async function pasteSample() {
  await sourceGridRef.value?.selectRange({ x: 0, y: 2 }, { x: 3, y: 6 })
  await new Promise<void>((resolve) => window.setTimeout(resolve, 280))
  pasteApplied.value = true
  clipboardRows.value = applyClipboardSample(emptyClipboardRows, clipboardSample)
}
</script>
