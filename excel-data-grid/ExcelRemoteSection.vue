<template>
  <section id="remote-data" class="excel-story-section excel-remote-section" aria-labelledby="remote-data-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="remote-data-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-remote-demo">
        <div class="excel-remote-toolbar">
          <div class="excel-remote-connection"><i></i><span>API connected</span></div>
          <label>
            <span>Server filter</span>
            <input v-model="remoteQuery" type="search" placeholder="Customer, region, status…" aria-label="Filter remote orders">
          </label>
          <button type="button" class="excel-remote-sort" @click="toggleSort">
            Server sort · Amount <span>{{ sortDirection === 'desc' ? '↓' : '↑' }}</span>
          </button>
          <div class="excel-remote-modes" aria-label="Remote loading mode">
            <button type="button" :aria-pressed="mode === 'infinite'" @click="setMode('infinite')">Infinite scroll</button>
            <button type="button" :aria-pressed="mode === 'paged'" @click="setMode('paged')">Paging</button>
          </div>
        </div>

        <div class="excel-remote-request" aria-live="polite">
          <span><i :class="{ loading }"></i>{{ loading ? 'Fetching' : 'Response ready' }}</span>
          <span class="excel-remote-request__url">{{ requestLabel }}</span>
          <b>{{ loading ? '…' : `${lastLatency}ms` }}</b>
        </div>

        <ExcelRevoGrid
          :key="remoteGridKey"
          class="excel-live-grid--remote"
          :source="displayedRows"
          :columns="remoteColumns"
          :plugins="remotePlugins"
          :infinity-scroll="mode === 'infinite' ? infinityScroll : undefined"
          :row-headers="true"
          :row-size="36"
          range
          resize
          readonly
        />

        <div class="excel-remote-footer">
          <div>
            <strong>{{ (mode === 'infinite' ? loadedCount : displayedRows.length).toLocaleString('en-US') }}</strong>
            <span>{{ mode === 'infinite' ? 'fetched' : 'on this page' }} of {{ totalRows.toLocaleString('en-US') }} matching rows</span>
          </div>
          <div v-if="mode === 'infinite'" class="excel-remote-progress">
            <span :style="{ width: `${loadedPercent}%` }"></span>
            <small>{{ loadedCount < totalRows ? 'Scroll to load the next server chunk' : 'All matching rows fetched' }}</small>
          </div>
          <div v-else class="excel-remote-pager">
            <button type="button" :disabled="page === 0 || loading" @click="loadPage(page - 1)">← Previous</button>
            <span>Page {{ page + 1 }} of {{ pageCount }}</span>
            <button type="button" :disabled="page >= pageCount - 1 || loading" @click="loadPage(page + 1)">Next →</button>
          </div>
        </div>
      </div>

      <div class="excel-feature-notes excel-feature-notes--remote">
        <article v-for="note in content.notes" :key="note.title"><strong>{{ note.title }}</strong><p>{{ note.detail }}</p></article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { InfinityScrollPlugin, type InfinityScrollConfig } from '@revolist/revogrid-pro'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import {
  excelBoldFormat,
  excelMonoFormat,
  excelNumberFormat,
} from './excelFormattingPlugins'
import { queryRemoteRows } from './excelLandingState.mjs'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['remote'] }>()

type RemoteRow = {
  id: string
  customer: string
  region: string
  status: string
  amount: number
  updated: string
}

const PAGE_SIZE = 24
const customers = ['Northwind Logistics', 'Aurora Capital', 'Vantage Health', 'Meridian Energy', 'Cobalt Labs', 'Brightwater Utilities', 'Peregrine Insurance', 'Kestrel Media']
const regions = ['EMEA', 'AMER', 'APAC']
const statuses = ['Processing', 'Ready', 'Review', 'Completed']
const serverRows: RemoteRow[] = Array.from({ length: 480 }, (_, index) => {
  const amount = 1800 + ((index * 7919) % 94000)
  return {
    id: `ORD-${String(42001 + index).padStart(5, '0')}`,
    customer: customers[index % customers.length],
    region: regions[index % regions.length],
    status: statuses[index % statuses.length],
    amount,
    updated: `2026-${String(9 + (index % 4)).padStart(2, '0')}-${String(1 + (index % 27)).padStart(2, '0')}`,
  }
})
const pluginSource = ref<RemoteRow[]>([])
const pagedRows = ref<RemoteRow[]>([])
const remoteQuery = ref('')
const appliedQuery = ref('')
const sortDirection = ref<'asc' | 'desc'>('desc')
const appliedSort = ref<'asc' | 'desc'>('desc')
const mode = ref<'infinite' | 'paged'>('infinite')
const page = ref(0)
const pageCount = ref(1)
const totalRows = ref(serverRows.length)
const loadedCount = ref(0)
const loading = ref(false)
const lastLatency = ref(84)
const requestSkip = ref(0)
const requestLimit = ref(PAGE_SIZE)
const requestSort = ref<'asc' | 'desc'>('desc')
const remoteGridGeneration = ref(0)
const loadedRowIds = new Set<string>()
let requestVersion = 0
let filterTimer: ReturnType<typeof setTimeout> | undefined

const remoteColumns = computed(() => [
  { name: 'Order', prop: 'id', size: 128, readonly: true, dataGridFormat: { appearance: { ...excelBoldFormat.appearance, ...excelMonoFormat.appearance } } },
  { name: 'Customer', prop: 'customer', size: 230, readonly: true },
  { name: 'Region', prop: 'region', size: 100, readonly: true },
  { name: 'Status', prop: 'status', size: 120, readonly: true },
  {
    name: 'Amount',
    prop: 'amount',
    size: 130,
    readonly: true,
    sortable: false,
    order: appliedSort.value,
    dataGridFormat: excelNumberFormat,
  },
  { name: 'Updated', prop: 'updated', size: 130, readonly: true, dataGridFormat: excelMonoFormat },
])

const displayedRows = computed(() => mode.value === 'infinite' ? pluginSource.value : pagedRows.value)
const remotePlugins = computed(() => mode.value === 'infinite' ? [InfinityScrollPlugin] : [])
const remoteGridKey = computed(() => `${mode.value}-${remoteGridGeneration.value}`)
const loadedPercent = computed(() => totalRows.value ? Math.min(100, (loadedCount.value / totalRows.value) * 100) : 100)
const requestLabel = computed(() => {
  const query = appliedQuery.value ? `&q=${encodeURIComponent(appliedQuery.value)}` : ''
  return `GET /api/orders?offset=${requestSkip.value}&limit=${requestLimit.value}${query}&sort=amount:${requestSort.value}`
})

async function requestRows(skip: number, limit: number, direction: 'asc' | 'desc') {
  const version = requestVersion
  loading.value = true
  requestSkip.value = skip
  requestLimit.value = limit
  requestSort.value = direction
  const startedAt = performance.now()
  await new Promise((resolve) => window.setTimeout(resolve, 180))
  const result = queryRemoteRows(serverRows, {
    query: appliedQuery.value,
    sortDirection: direction,
    page: Math.floor(skip / limit),
    pageSize: limit,
  })
  if (version !== requestVersion) return null
  totalRows.value = result.total
  pageCount.value = result.pageCount
  lastLatency.value = Math.max(1, Math.round(performance.now() - startedAt))
  loading.value = false
  return result
}

async function loadRemoteChunk(
  skip: number,
  limit: number,
  order?: Record<string, 'asc' | 'desc'>,
) {
  const direction = Object.values(order ?? {})[0] ?? appliedSort.value
  const result = await requestRows(skip, limit, direction)
  if (!result) return { data: [], total: totalRows.value, hasMore: false }
  result.rows.forEach((row: RemoteRow) => loadedRowIds.add(row.id))
  loadedCount.value = loadedRowIds.size
  return {
    data: result.rows,
    total: result.total,
    hasMore: skip + result.rows.length < result.total,
  }
}

const infinityScroll = computed<Partial<InfinityScrollConfig<RemoteRow>>>(() => ({
  chunkSize: PAGE_SIZE,
  bufferSize: PAGE_SIZE * 3,
  preloadThreshold: 0.72,
  total: totalRows.value,
  loadData: loadRemoteChunk,
}))

async function loadPage(requestedPage: number) {
  const result = await requestRows(requestedPage * PAGE_SIZE, PAGE_SIZE, appliedSort.value)
  if (!result) return
  pagedRows.value = result.rows
  page.value = result.page
}

function setMode(nextMode: 'infinite' | 'paged') {
  if (mode.value === nextMode) return
  mode.value = nextMode
  applyRemoteState()
}

function toggleSort() {
  sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc'
}

function applyRemoteState() {
  requestVersion += 1
  appliedQuery.value = remoteQuery.value.trim()
  appliedSort.value = sortDirection.value
  requestSort.value = appliedSort.value
  const preview = queryRemoteRows(serverRows, {
    query: appliedQuery.value,
    sortDirection: appliedSort.value,
    page: 0,
    pageSize: PAGE_SIZE,
  })
  totalRows.value = preview.total
  pageCount.value = preview.pageCount
  page.value = 0
  loadedRowIds.clear()
  loadedCount.value = 0
  pluginSource.value = []
  pagedRows.value = []
  remoteGridGeneration.value += 1
  if (mode.value === 'paged') void loadPage(0)
}

watch([remoteQuery, sortDirection], () => {
  if (filterTimer) window.clearTimeout(filterTimer)
  filterTimer = window.setTimeout(applyRemoteState, 260)
})

onMounted(applyRemoteState)
onBeforeUnmount(() => {
  requestVersion += 1
  if (filterTimer) window.clearTimeout(filterTimer)
})
</script>
