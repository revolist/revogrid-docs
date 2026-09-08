<template>
  <section class="excel-hero" aria-labelledby="excel-hero-title">
    <div class="excel-grid-pattern" aria-hidden="true"></div>
    <div class="excel-container excel-hero__inner">
      <div class="excel-hero__copy">
        <div class="excel-eyebrow">
          <span>{{ content.product }}</span>
          {{ content.eyebrow }}
        </div>
        <h1 id="excel-hero-title">
          <span class="excel-hero-title__accent">{{ content.titleAccent }}</span>
          <span class="excel-hero-title__line">
            {{ content.titleLine }}
            <span class="excel-hero-title__gesture">
              🫰
              <span class="excel-hero-title__snap">
                <FontAwesomeSvgIcon name="message" />
                <strong>{{ content.snap }}</strong>
              </span>
            </span>
          </span>
        </h1>
        <p>{{ content.description }}</p>
        <div class="excel-actions">
          <ProDocButton :href="content.primary.href" arrow>{{ content.primary.label }}</ProDocButton>
          <a class="excel-text-link" :href="content.secondary.href">{{ content.secondary.label }}</a>
        </div>
        <div class="excel-hero__proof" aria-label="Product facts">
          <span v-for="fact in content.facts" :key="fact.label"><strong>{{ fact.value }}</strong> {{ fact.label }}</span>
        </div>
      </div>

      <div class="excel-hero__aside">
        <p>{{ content.aside }}</p>
        <div class="excel-hero__aside-actions">
          <FontAwesomeSvgIcon name="circleCheck" />
          {{ content.previewLabel }}
        </div>
      </div>

      <div class="excel-workbench-frame">
        <div class="excel-frame-bar">
          <div class="excel-frame-bar__title">
            <span class="excel-window-controls" aria-hidden="true">
              <FontAwesomeSvgIcon name="circle" />
              <FontAwesomeSvgIcon name="circle" />
              <FontAwesomeSvgIcon name="circle" />
            </span>
            <span>revenue-ops / pipeline.tsx</span>
          </div>
          <div class="excel-frame-bar__chips" aria-label="Grid state">
            <span class="excel-frame-chip excel-frame-chip--accent">Region = {{ heroSelection.region }}</span>
            <span class="excel-frame-chip">{{ heroSelection.count }} {{ heroSelection.count === 1 ? 'cell' : 'cells' }} selected</span>
          </div>
        </div>
        <div class="excel-workbench-host">
          <ExcelRevoGrid
            class="excel-live-grid--hero cell-border"
            :source="heroRows"
            :columns="heroColumns"
            :row-headers="true"
            :row-size="37"
            :can-move-columns="true"
            :data-grid-formatting-panel="excelFormattingPanel"
            :data-grid-context-menu="heroContextMenu"
            :plugins="heroPlugins"
            :initial-range="heroInitialRange"
            range
            resize
            @selection-change="onHeroSelectionChange"
            @source-change="onHeroSourceChange"
          />
        </div>
        <div class="excel-frame-status" aria-label="Grid status">
          <div><span>{{ heroSummary.count.toLocaleString('en-US') }} rows</span><span>Sum {{ heroSummary.sum.toLocaleString('en-US') }}</span><span>Avg {{ heroSummary.average.toLocaleString('en-US') }}</span></div>
          <strong>Virtual scroll · 60fps</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from 'vue'
import { FormulaPlugin } from '@revolist/revogrid-pro'
import type { DataGridContextMenuConfig } from '@revolist/revogrid-pro'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import ProDocButton from '../pro/ProDocButton.vue'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import {
  excelBoldFormat,
  createBadgeFormat,
  excelFormattingPanel,
  excelMonoFormat,
  excelNumberFormat,
  excelPercentFormat,
} from './excelFormattingPlugins'
import { buildVirtualPipelineRows, summarizeGridSelection, summarizePipelineRows } from './excelLandingState.mjs'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['hero'] }>()

const heroStageStyles = {
  Negotiation: { backgroundColor: 'var(--xl-blue-soft)', color: 'var(--xl-blue)' },
  Discovery: { backgroundColor: 'var(--xl-soft)', color: 'var(--xl-muted)' },
  Proposal: { backgroundColor: 'var(--xl-accent-soft)', color: 'var(--xl-accent)' },
}
const heroColumns = [
  { name: 'Account', prop: 'account', size: 220, sortable: true, dataGridFormat: excelBoldFormat },
  { name: 'Owner', prop: 'owner', size: 150, sortable: true },
  { name: 'Stage', prop: 'stage', size: 140, sortable: true, dataGridFormat: createBadgeFormat(heroStageStyles) },
  { name: 'ARR', prop: 'arr', size: 130, sortable: true, dataGridFormat: excelNumberFormat },
  { name: 'Prob.', prop: 'probability', size: 120, sortable: true, dataGridFormat: excelPercentFormat },
  { name: 'Close date', prop: 'closeDate', size: 150, sortable: true, dataGridFormat: excelMonoFormat },
  { name: 'Region', prop: 'region', size: 258, sortable: true, columnProperties: () => ({ class: { 'excel-hero-region-header': true } }) },
]
const heroPlugins = [FormulaPlugin]
const HERO_ROW_COUNT = 10_000
const heroSeedRows = [
  { account: 'Northwind Logistics', owner: 'M. Halvorsen', stage: 'Negotiation', arr: 184000, probability: 0.7, closeDate: '2026-09-30', region: 'EMEA' },
  { account: 'Halberd Manufacturing', owner: 'R. Okafor', stage: 'Discovery', arr: 96500, probability: 0.45, closeDate: '2026-11-14', region: 'EMEA' },
  { account: 'Vantage Health Group', owner: 'S. Lindqvist', stage: 'Proposal', arr: 240000, probability: 0.6, closeDate: '2026-10-08', region: 'EMEA' },
  { account: 'Corvus Retail Systems', owner: 'A. Brenner', stage: 'Negotiation', arr: 128400, probability: 0.55, closeDate: '2026-12-01', region: 'EMEA' },
  { account: 'Meridian Energy Partners', owner: 'R. Okafor', stage: 'Proposal', arr: 312750, probability: 0.65, closeDate: '2026-09-18', region: 'EMEA' },
  { account: 'Ashgrove Financial', owner: 'M. Halvorsen', stage: 'Discovery', arr: 74200, probability: 0.3, closeDate: '2027-01-22', region: 'EMEA' },
  { account: 'Kestrel Media Networks', owner: 'S. Lindqvist', stage: 'Negotiation', arr: 158900, probability: 0.5, closeDate: '2026-10-30', region: 'EMEA' },
]
const heroRows = shallowRef(heroSeedRows)
const heroSummary = computed(() => summarizePipelineRows(heroRows.value))
const heroInitialRange = { start: { x: 3, y: 1 }, end: { x: 4, y: 2 } }
const heroContextMenu: DataGridContextMenuConfig = {}
const heroSelection = ref({ count: 4, region: 'EMEA' })
onMounted(() => {
  heroRows.value = buildVirtualPipelineRows(heroSeedRows, HERO_ROW_COUNT)
})
function onHeroSelectionChange(payload: { range: { x: number; y: number; x1: number; y1: number } | null; visibleSource: Record<string, unknown>[] }) {
  heroSelection.value = summarizeGridSelection(payload.range, payload.visibleSource)
}
function onHeroSourceChange(payload: { source: Record<string, unknown>[] }) {
  heroRows.value = payload.source
}
</script>
