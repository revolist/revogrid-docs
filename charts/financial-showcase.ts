import { createChartDataset, type ChartOptions, type ChartRenderedContext } from '@revolist/charts'

type Example = Pick<
  ChartOptions,
  | 'dataset'
  | 'presentation'
  | 'axes'
  | 'seriesOverrides'
  | 'chartOptions'
  | 'rendererOptions'
  | 'annotations'
>
export const money = (value: number) => `$${value.toFixed(2)}M`
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const revenue = [0.84, 0.91, 1.02, 1.08, 1.12, 1.18, 1.16, 1.25, 1.32, 1.39, 1.44, 1.57]
const budget = [0.82, 0.88, 0.95, 1.02, 1.06, 1.12, 1.16, 1.2, 1.25, 1.29, 1.35, 1.4]
const margin = [22, 23, 24, 23, 25, 26, 25, 27, 28, 29, 30, 31]
export const totalRevenue = revenue.reduce((total, value) => total + value, 0)
const totalBudget = budget.reduce((total, value) => total + value, 0)
export const operatingProfit = revenue.reduce(
  (total, value, i) => total + (value * margin[i]) / 100,
  0,
)
export const operatingMargin = ((operatingProfit / totalRevenue) * 100).toFixed(1)

const performanceDataset = createChartDataset(
  months.map((month, i) => ({
    month,
    revenue: revenue[i],
    budget: budget[i],
    margin: margin[i],
  })),
  {
    category: { field: 'month' },
    series: [
      { field: 'revenue', label: 'Revenue' },
      { field: 'budget', label: 'Budget' },
      { field: 'margin', label: 'Operating margin' },
    ],
  },
)
const juneCategoryId = performanceDataset.categories.find(category => category.label === 'Jun')!.id

// Combination marks use the supported SVG render hook for datum patterns.
// The renderer reruns this after resizing, theme changes, and SVG export.
function highlightJuneRevenue({ svg, input }: ChartRenderedContext) {
  const categoryIndex = input.dataset.categories.findIndex(
    category => category.id === juneCategoryId,
  )
  const seriesIndex = input.dataset.series.findIndex(series => series.id === 'revenue')
  const bar = svg.querySelector<SVGRectElement>(
    `[data-pivot-chart-combination-mark="column"][data-category-index="${categoryIndex}"][data-series-index="${seriesIndex}"]`,
  )
  if (!bar) return
  const element = (tag: string, attributes: Record<string, string>) => {
    const node = svg.ownerDocument.createElementNS('http://www.w3.org/2000/svg', tag)
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value)
    return node
  }
  svg.querySelector('defs[data-finance-pattern]')?.remove()
  const id = `${input.chartId}-june-revenue-pattern`
  const defs = element('defs', { 'data-finance-pattern': '' })
  const pattern = element('pattern', {
    id,
    width: '6',
    height: '6',
    patternUnits: 'userSpaceOnUse',
  })
  pattern.append(
    element('rect', { width: '6', height: '6', fill: '#6647f0' }),
    element('path', {
      d: 'M-1,1 L1,-1 M0,6 L6,0 M5,7 L7,5',
      stroke: '#b7a7ff',
      'stroke-width': '1.5',
    }),
  )
  defs.append(pattern)
  svg.prepend(defs)
  bar.setAttribute('fill', `url(#${id})`)
  bar.setAttribute('stroke', '#6647f0')
  bar.setAttribute('stroke-width', '1')
}

export const performance: Example = {
  dataset: performanceDataset,
  presentation: {
    legendPosition: 'top',
    description:
      'FY2025 monthly revenue and budget in USD millions, with operating margin on the right percentage axis. A diagonal pattern highlights June revenue.',
  },
  axes: {
    y: { min: 0, max: 2, title: 'Revenue · $M', tickCount: 5 },
    ySecondary: { min: 0, max: 40, title: 'Margin · %', tickCount: 5 },
  },
  rendererOptions: { onRender: highlightJuneRevenue },
  seriesOverrides: {
    revenue: { type: 'column', color: '#6647f0' },
    budget: { type: 'line', color: '#ff6b26', lineDash: 'dash', markers: false },
    margin: {
      type: 'line',
      yAxis: 'secondary',
      color: '#0098fa',
      interpolation: 'smooth',
      markers: true,
      markerSize: 3,
    },
  },
}

export const revenueMix = [
  { name: 'Enterprise', share: 52, plannedShare: 46, color: '#6647f0' },
  { name: 'Self-serve', share: 24, plannedShare: 28, color: '#ff6b26' },
  { name: 'Partners', share: 16, plannedShare: 18, color: '#0098fa' },
  { name: 'Services', share: 8, plannedShare: 8, color: '#e900e8' },
].map(item => ({
  ...item,
  value: (totalRevenue * item.share) / 100,
  plannedValue: (totalBudget * item.plannedShare) / 100,
  mixDelta: item.share - item.plannedShare,
}))
export const enterpriseMix = revenueMix[0]
export const mix: Example = {
  dataset: createChartDataset(
    revenueMix.map(item => ({
      ...item,
      chartLabel: item.name === 'Enterprise' ? 'Enterprise ¹' : item.name,
    })),
    {
      category: { field: 'name', label: 'chartLabel' },
      series: [
        { field: 'value', label: 'Actual revenue' },
        { field: 'plannedValue', label: 'Planned revenue' },
      ],
    },
  ),
  chartOptions: { calloutLabels: true, outerRadius: 0.65 },
  presentation: {
    legendPosition: 'none',
    description:
      'FY2025 revenue mix: outer ring actual, inner ring plan. Enterprise 52% versus 46% planned; Self-serve 24% versus 28%; Partners 16% versus 18%; Services 8% versus 8%. Values in USD millions.',
  },
}

export const regions = [
  { region: 'N. America', actual: 5.42, budget: 5.1 },
  { region: 'Europe', actual: 4.28, budget: 4.1 },
  { region: 'Asia Pacific', actual: 3.14, budget: 3 },
  { region: 'Other', actual: 1.44, budget: 1.3 },
].map(item => ({ ...item, variance: ((item.actual / item.budget - 1) * 100).toFixed(1) }))
function addRegionalNoteArrow({ svg, input }: ChartRenderedContext) {
  const leader = svg.querySelector<SVGLineElement>(
    '[data-pivot-chart-note="north-america-plan"] line',
  )
  if (!leader) return
  const id = `${input.chartId}-note-arrow`
  svg.querySelector('defs[data-note-arrow]')?.remove()
  const defs = svg.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'defs')
  defs.setAttribute('data-note-arrow', '')
  const marker = svg.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'marker')
  for (const [key, value] of Object.entries({
    id,
    viewBox: '0 0 6 6',
    refX: '6',
    refY: '3',
    markerWidth: '6',
    markerHeight: '6',
    orient: 'auto-start-reverse',
    markerUnits: 'userSpaceOnUse',
  }))
    marker.setAttribute(key, value)
  const tip = svg.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'path')
  tip.setAttribute('d', 'M0,0 L6,3 L0,6 Z')
  tip.setAttribute('fill', '#6647f0')
  marker.append(tip)
  defs.append(marker)
  svg.prepend(defs)
  leader.setAttribute('marker-start', `url(#${id})`)
}

export const regional: Example = {
  dataset: createChartDataset(regions, {
    category: { field: 'region' },
    series: [
      { field: 'actual', label: 'Actual' },
      { field: 'budget', label: 'Budget' },
    ],
  }),
  presentation: {
    legendPosition: 'top',
    yAxisTitle: 'Revenue · $M',
    description: 'Regional actual revenue versus budget in USD millions.',
  },
  axes: { y: { min: 0, max: 6.6, tickCount: 5 } },
  annotations: {
    notes: [
      {
        id: 'north-america-plan',
        text: `+${regions[0].variance}% vs budget`,
        target: {
          row: [{ field: 'region', value: regions[0].region }],
          column: [],
          measure: { prop: 'actual', aggregator: 'identity', id: 'actual' },
        },
        placement: 'above',
        color: '#6647f0',
      },
    ],
  },
  rendererOptions: { onRender: addRegionalNoteArrow },
  seriesOverrides: { actual: { color: '#6647f0' }, budget: { color: '#ff6b26' } },
}
