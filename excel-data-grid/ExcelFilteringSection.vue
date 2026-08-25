<template>
  <section id="filtering" class="excel-story-section" aria-labelledby="filtering-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="filtering-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-filter-demo">
        <div class="excel-filter-toolbar" aria-label="Interactive filters">
          <span class="excel-filter-label">Filters</span>
          <span class="excel-filter-mode">{{ content.modeLabel }}</span>
          <button
            v-for="region in regions"
            :key="region"
            type="button"
            :class="{ active: activeRegions.includes(region) }"
            :aria-pressed="activeRegions.includes(region)"
            @click="toggleRegion(region)"
          >Region: {{ region }} <small>{{ activeRegions.includes(region) ? '✓' : '+' }}</small></button>
          <button
            v-for="status in customerStatuses"
            :key="status"
            type="button"
            :class="{ active: activeStatuses.includes(status) }"
            :aria-pressed="activeStatuses.includes(status)"
            @click="toggleStatus(status)"
          >Status: {{ status }} <small>{{ activeStatuses.includes(status) ? '✓' : '+' }}</small></button>
          <button class="excel-sort-button" type="button" @click="toggleSort">
            ARR <small>{{ sortDirection === 'desc' ? '↓ desc' : '↑ asc' }}</small>
          </button>
          <span class="excel-filter-count">{{ visibleCustomers.length }} of {{ customers.length }} rows</span>
        </div>
        <ExcelRevoGrid
          ref="filterGrid"
          class="excel-live-grid--filter"
          :source="sortedCustomers"
          :columns="customerColumns"
          :plugins="filterPlugins"
          :filter="filterConfig"
          :row-size="36"
          :row-headers="true"
          range
          resize
          data-readonly
          @grid-ready="onFiltersReady"
          @filter-change="onGridFilterChange"
        />
        <div class="excel-table-status">
          <div><span>{{ visibleCustomers.length }} of {{ customers.length }} rows</span><span>Total ARR {{ formatMoney(filteredArr) }}</span></div>
          <span>filter applied in &lt;1ms</span>
        </div>
      </div>
      <p class="excel-demo-caption">{{ content.caption }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import {
  AdvanceFilterPlugin,
  FIlTER_SELECTION,
  FilterHeaderPlugin,
} from '@revolist/revogrid-pro'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import { createBadgeFormat, excelBoldFormat, excelNumberFormat } from './excelFormattingPlugins'
import {
  createCustomerAdvancedFilter,
  filterAndSortCustomers,
  readCustomerAdvancedFilterState,
} from './excelLandingState.mjs'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['filtering'] }>()

const statusStyles = {
  Active: { backgroundColor: '#e7f7ef', color: '#0b8a4f' },
  'At risk': { backgroundColor: '#fdf1e3', color: '#a5651c' },
  Churned: { backgroundColor: '#f5f0f0', color: '#8a5d5d' },
}
const emptyInactiveFilterHeader = (
  _h: unknown,
  { active, text }: { active: boolean; text: string },
) => active ? text : ''
const emptyFilterHeader = {
  filterPlaceholder: '',
  filterHeaderTemplate: emptyInactiveFilterHeader,
}
const customerColumns = [
  { ...emptyFilterHeader, prop: 'customer', name: 'Customer', size: 280, filter: ['string'], dataGridFormat: excelBoldFormat },
  { ...emptyFilterHeader, prop: 'region', name: 'Region', size: 110, filter: [FIlTER_SELECTION] },
  { ...emptyFilterHeader, prop: 'segment', name: 'Segment', size: 130, filter: [FIlTER_SELECTION] },
  { ...emptyFilterHeader, prop: 'status', name: 'Status', size: 130, filter: [FIlTER_SELECTION], dataGridFormat: createBadgeFormat(statusStyles) },
  { ...emptyFilterHeader, prop: 'arr', name: 'ARR', size: 120, filter: ['number'], dataGridFormat: excelNumberFormat },
  { ...emptyFilterHeader, prop: 'renewal', name: 'Renewal', size: 120, filter: ['date'] },
  { ...emptyFilterHeader, prop: 'owner', name: 'Owner', size: 130, filter: ['string'] },
]
const customers = [
  { customer: 'Northwind Logistics', region: 'EMEA', segment: 'Enterprise', status: 'Active', arr: 184000, renewal: '2027-01-31', owner: 'M. Halvorsen' },
  { customer: 'Halberd Manufacturing', region: 'EMEA', segment: 'Mid-market', status: 'At risk', arr: 96500, renewal: '2026-11-14', owner: 'R. Okafor' },
  { customer: 'Vantage Health Group', region: 'APAC', segment: 'Enterprise', status: 'Active', arr: 240000, renewal: '2026-10-08', owner: 'S. Lindqvist' },
  { customer: 'Meridian Energy Partners', region: 'EMEA', segment: 'Enterprise', status: 'Active', arr: 312750, renewal: '2026-09-18', owner: 'R. Okafor' },
  { customer: 'Brightwater Utilities', region: 'EMEA', segment: 'Enterprise', status: 'Active', arr: 268400, renewal: '2027-02-19', owner: 'M. Halvorsen' },
  { customer: 'Peregrine Insurance', region: 'EMEA', segment: 'Enterprise', status: 'At risk', arr: 197300, renewal: '2026-11-05', owner: 'S. Lindqvist' },
  { customer: 'Nordlys Telecom', region: 'EMEA', segment: 'Enterprise', status: 'Active', arr: 351200, renewal: '2027-04-12', owner: 'R. Okafor' },
  { customer: 'Corvus Retail Systems', region: 'APAC', segment: 'Mid-market', status: 'Churned', arr: 128400, renewal: '2026-12-01', owner: 'A. Brenner' },
  { customer: 'Kestrel Media', region: 'APAC', segment: 'Mid-market', status: 'Active', arr: 158900, renewal: '2026-10-30', owner: 'S. Lindqvist' },
  { customer: 'Ashgrove Financial', region: 'AMER', segment: 'SMB', status: 'At risk', arr: 74200, renewal: '2027-01-22', owner: 'M. Halvorsen' },
  { customer: 'Ironvale Industrial', region: 'AMER', segment: 'Mid-market', status: 'Active', arr: 112600, renewal: '2026-12-22', owner: 'R. Okafor' },
  { customer: 'Cobalt Labs', region: 'APAC', segment: 'SMB', status: 'Active', arr: 38900, renewal: '2027-01-09', owner: 'A. Brenner' },
  { customer: 'Fairhaven Property', region: 'AMER', segment: 'Mid-market', status: 'Churned', arr: 87400, renewal: '2026-09-01', owner: 'M. Halvorsen' },
  { customer: 'Aurora Capital', region: 'AMER', segment: 'Enterprise', status: 'Active', arr: 229700, renewal: '2027-03-12', owner: 'D. Okonjo' },
]
const regions = ['EMEA', 'AMER', 'APAC']
const customerStatuses = ['Active', 'At risk', 'Churned']
const activeRegions = ref(['EMEA'])
const activeStatuses = ref(['Active', 'At risk'])
const sortDirection = ref('desc')
const filterPlugins = [AdvanceFilterPlugin, FilterHeaderPlugin]
const filtersReady = ref(false)
const filterGrid = ref<{ applyFilterItems: (items: Record<string, unknown[]>) => Promise<void> } | null>(null)
const filterConfig = {
  selection: { sortDirection: 'asc', sourceRowTypes: ['rgRow'] },
}
const sortedCustomers = computed(() => filterAndSortCustomers(customers, 'All', customerStatuses, sortDirection.value))
const visibleCustomers = ref(filterAndSortCustomers(customers, 'EMEA', activeStatuses.value, sortDirection.value))
const filteredArr = computed(() => visibleCustomers.value.reduce((total: number, row: { arr: number }) => total + row.arr, 0))
function currentChipFilterItems() {
  return createCustomerAdvancedFilter({
    regions,
    statuses: customerStatuses,
    activeRegions: activeRegions.value,
    activeStatuses: activeStatuses.value,
  }).multiFilterItems
}
async function applyChipFilters() {
  if (!filtersReady.value) return
  await filterGrid.value?.applyFilterItems(currentChipFilterItems())
}
async function onFiltersReady() {
  filtersReady.value = true
  await nextTick()
  await applyChipFilters()
}
function toggleRegion(region: string) {
  activeRegions.value = activeRegions.value.includes(region)
    ? activeRegions.value.filter((item) => item !== region)
    : [...activeRegions.value, region]
}
function toggleStatus(status: string) {
  activeStatuses.value = activeStatuses.value.includes(status) ? activeStatuses.value.filter((item) => item !== status) : [...activeStatuses.value, status]
}
function sameSelection(current: string[], next: string[]) {
  return current.length === next.length && current.every((item) => next.includes(item))
}
let skipNextChipApply = false
function onGridFilterChange(payload: {
  visibleSource: Record<string, unknown>[]
  filterItems: Record<string, unknown[]>
}) {
  visibleCustomers.value = payload.visibleSource as typeof customers
  const next = readCustomerAdvancedFilterState(payload.filterItems, { regions, statuses: customerStatuses })
  const regionChanged = !sameSelection(activeRegions.value, next.activeRegions)
  const statusChanged = !sameSelection(activeStatuses.value, next.activeStatuses)
  if (regionChanged || statusChanged) skipNextChipApply = true
  if (regionChanged) activeRegions.value = next.activeRegions
  if (statusChanged) activeStatuses.value = next.activeStatuses
}
watch([activeRegions, activeStatuses], () => {
  if (skipNextChipApply) {
    skipNextChipApply = false
    return
  }
  void applyChipFilters()
}, { deep: true })
function toggleSort() { sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc' }
function formatMoney(value: number) { return value.toLocaleString('en-US') }
</script>
