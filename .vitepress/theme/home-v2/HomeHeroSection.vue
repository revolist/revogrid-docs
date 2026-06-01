<template>
  <section class="rg-hero">
    <div class="rg-container rg-hero-grid">
      <div class="rg-hero-copy">
        <div class="rg-badge">
          <span class="rg-badge-dot"></span>
          {{ hero?.eyebrow }}
        </div>
        <h1 class="rg-hero-title" v-html="heroTitle"></h1>
        <p class="rg-hero-sub" v-html="heroTagline"></p>
        <div class="rg-actions">
          <a class="rg-btn" :href="linkOf(hero?.primaryAction?.link)" :target="hero?.primaryAction?.target" :rel="hero?.primaryAction?.rel" :data-router-ignore="hero?.primaryAction?.ignore">
            <span class="rg-play" aria-hidden="true"></span>
            {{ hero?.primaryAction?.text }}
          </a>
          <a class="rg-btn rg-btn-secondary" :href="linkOf(hero?.secondaryAction?.link)" :target="hero?.secondaryAction?.target" :rel="hero?.secondaryAction?.rel" :data-router-ignore="hero?.secondaryAction?.ignore">
            {{ hero?.secondaryAction?.text }}
          </a>
          <a v-if="hero?.tertiaryAction" class="rg-btn rg-btn-secondary" :href="linkOf(hero.tertiaryAction.link)" :target="hero?.tertiaryAction?.target" :rel="hero?.tertiaryAction?.rel" :data-router-ignore="hero?.tertiaryAction?.ignore">
            {{ hero?.tertiaryAction?.text }}
            <HomeChevron />
          </a>
        </div>
        <div class="rg-frameworks">
          <span class="rg-frameworks-label">Works with</span>
          <a
            v-for="fw in hero?.frameworks"
            :key="fw.name"
            class="rg-framework"
            :href="linkOf(fw.link)"
          >
            <span class="rg-framework-dot" :style="{ background: fw.color }"></span>
            {{ fw.name }}
          </a>
        </div>
      </div>

      <div class="rg-hero-visual">
        <div class="rg-browser">
          <div class="rg-browser-bar">
            <div class="rg-browser-dots" aria-hidden="true">
              <span style="background:#ff5f57"></span>
              <span style="background:#febc2e"></span>
              <span style="background:#28c840"></span>
            </div>
            <div class="rg-browser-url">Market Data · RevoGrid</div>
            <div class="rg-live">Live</div>
          </div>
          <ClientOnly>
            <div class="rg-grid-wrap">
                <RevoGrid
                  readonly
                  range
                  hide-attribution
                  resize
                  stretch
                  :row-size="40"
                  :columns="gridColumns"
                  :source="gridRows"
                  :theme="gridTheme"
                  class="rg-grid"
                  @aftergridinit="aftergridinit"
                />
            <div class="rg-perf-badge">
              <span></span>
              100k+ rows · virtualized
            </div>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, shallowRef } from 'vue'
import { useData } from 'vitepress'
import RevoGrid from '@revolist/vue3-datagrid'
import HomeChevron from './HomeChevron.vue'
import { escapeHtml, linkProductMentions, type HomeV2Record, useHomeV2Links } from './homeV2Utils'
// @ts-ignore
import { stocks } from '@/json/stock.json'

const props = defineProps<{
  hero?: HomeV2Record
}>()

const { isDark } = useData()
const { linkOf } = useHomeV2Links()

const heroTitle = computed(() => {
  const title = props.hero?.title ?? ''
  const emphasis = props.hero?.emphasis
  if (!emphasis || !title.includes(emphasis)) return escapeHtml(title)
  return escapeHtml(title).replace(escapeHtml(emphasis), `<em>${escapeHtml(emphasis)}</em>`)
})

const heroTagline = computed(() => linkProductMentions(props.hero?.tagline, linkOf))

const showcaseQuotes: Record<string, { price: number; percent_change: number; volume: string }> = {
  AAP: { price: 217.4, percent_change: 2.1, volume: '1.2M' },
  AAPL: { price: 336.8, percent_change: 1.4, volume: '48.3M' },
  AMZN: { price: 165.2, percent_change: -0.3, volume: '22.1M' },
  BA: { price: 171.9, percent_change: 0.7, volume: '5.4M' },
  CAT: { price: 188.5, percent_change: 3.2, volume: '3.1M' },
  CSCO: { price: 71.8, percent_change: -0.1, volume: '15.7M' },
  CVX: { price: 98.2, percent_change: 1.8, volume: '8.9M' },
  DIS: { price: 143.1, percent_change: -0.6, volume: '7.2M' },
}

const TICKER_ROW_COUNT = 100_000
const LIVE_UPDATE_ROWS = 80
const orderedStocks = [...(stocks as HomeV2Record[])].sort((a, b) => String(a.symbol).localeCompare(String(b.symbol)))

type GridCreateElement = (tag: string, props?: Record<string, unknown>, children?: unknown) => unknown
type GridCellContext = {
  value?: unknown
  model: HomeV2Record
}

function createTickerRow(stock: HomeV2Record, index: number): HomeV2Record {
  const seed = stock.symbol.split('').reduce((sum: number, char: string) => sum + char.charCodeAt(0), 0)
  const cycle = Math.floor(index / orderedStocks.length)
  const trend = Array.from({ length: 8 }, (_, i) => 28 + ((seed + i * 17) % 64))
  const quote = cycle === 0 ? showcaseQuotes[stock.symbol] : undefined
  const generatedPrice = Number((Number(stock.price) * (0.82 + ((cycle % 37) / 100)) + (index % 19) * 0.17).toFixed(2))
  const generatedChange = Number((Number(stock.percent_change) + ((index % 11) - 5) * 0.11).toFixed(2))
  const volume = quote?.volume ?? `${(((seed + cycle * 7) % 52) + 1 + (index % 10) / 10).toFixed(1)}M`
  return {
    ...stock,
    id: index + 1,
    symbol: cycle === 0 ? stock.symbol : `${stock.symbol}-${String(cycle).padStart(4, '0')}`,
    price: quote?.price ?? generatedPrice,
    change: Number(stock.change),
    percent_change: quote?.percent_change ?? generatedChange,
    trend,
    volume,
  }
}

function createTickerRows() {
  return Array.from({ length: TICKER_ROW_COUNT }, (_, index) => {
    const stock = orderedStocks[index % orderedStocks.length]
    return createTickerRow(stock, index)
  })
}

const gridRows = shallowRef<HomeV2Record[]>([])
let updateTimer: ReturnType<typeof window.setInterval> | undefined

const gridTheme = computed(() => isDark.value ? 'darkMaterial' : 'material')

const aftergridinit = () => {
  if (updateTimer) return

  gridRows.value = createTickerRows()

  updateTimer = window.setInterval(() => {
    const nextRows = gridRows.value.slice()
    const rowsToUpdate = Math.min(LIVE_UPDATE_ROWS, nextRows.length)

    for (let index = 0; index < rowsToUpdate; index += 1) {
      const row = nextRows[index]
      const direction = (Date.now() / 1000 + index) % 3 > 1 ? 1 : -1
      const delta = direction * (0.04 + (index % 5) * 0.015)
      const nextPrice = Math.max(1, Number(row.price) + delta)
      const nextPercent = Number(row.percent_change) + direction * 0.03
      nextRows[index] = {
        ...row,
        price: Number(nextPrice.toFixed(2)),
        percent_change: Number(nextPercent.toFixed(2)),
        trend: [...row.trend.slice(1), Math.max(16, Math.min(96, row.trend[row.trend.length - 1] + direction * (4 + index % 6)))],
      }
    }

    gridRows.value = nextRows
  }, 1600)
}

onBeforeUnmount(() => {
  if (updateTimer) window.clearInterval(updateTimer)
})

const gridColumns = [
  {
    name: 'Ticker',
    prop: 'symbol',
    pin: 'colPinStart',
    size: 92,
    sortable: true,
    cellTemplate(createElement: GridCreateElement, { value, model }: GridCellContext) {
      return createElement('span', {
        class: {
          'ticker-chip': true,
          up: Number(model.percent_change) >= 0,
          down: Number(model.percent_change) < 0,
        },
      }, value)
    },
  },
  { name: 'Company Name', prop: 'company_name', size: 150, sortable: true },
  {
    name: 'Trend',
    prop: 'trend',
    size: 70,
    readonly: true,
    cellTemplate(createElement: GridCreateElement, { model }: GridCellContext) {
      const values: number[] = model.trend
      const min = Math.min(...values)
      const max = Math.max(...values)
      const range = max - min || 1
      const bars = values.map((point: number, index: number) =>
        createElement('span', {
          key: index,
          class: { 'spark-bar': true, up: index === 0 ? true : point >= values[index - 1] },
          style: { height: `${10 + ((point - min) / range) * 90}%` },
        })
      )
      return createElement('span', { class: 'sparkline' }, bars)
    },
  },
  {
    name: 'Price',
    prop: 'price',
    size: 65,
    sortable: true,
    cellTemplate(createElement: GridCreateElement, { value }: GridCellContext) {
      return createElement('span', { class: 'num' }, Number(value).toFixed(2))
    },
  },
  {
    name: 'Change',
    prop: 'percent_change',
    size: 80,
    sortable: true,
    cellTemplate(createElement: GridCreateElement, { value }: GridCellContext) {
      const numeric = Number(value)
      return createElement('span', { class: numeric >= 0 ? 'perf-up' : 'perf-dn' }, `${numeric >= 0 ? '+' : ''}${numeric.toFixed(2)}%`)
    },
  },
  {
    name: 'Volume',
    prop: 'volume',
    size: 80,
    cellTemplate(createElement: GridCreateElement, { value }: GridCellContext) {
      return createElement('span', { class: 'num' }, value)
    },
  },
]
</script>
