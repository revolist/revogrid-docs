import { CHART_DEFINITIONS } from '@revolist/charts/catalog'
import { DEFAULT_CHARTS_LOCALE_TEXT } from '@revolist/charts'

export const chartCatalog = CHART_DEFINITIONS.map(definition => ({
  ...definition,
  label: DEFAULT_CHARTS_LOCALE_TEXT.chartTypes[definition.type],
  description: DEFAULT_CHARTS_LOCALE_TEXT.chartDescriptions[definition.type],
}))

export type GalleryChart = (typeof chartCatalog)[number]
export type GalleryChartType = GalleryChart['type']

export const familyLabels = DEFAULT_CHARTS_LOCALE_TEXT.gallery.families

// Product-page stories mix chart families around a practical analytical question.
const useCases: Array<{
  id: string
  title: string
  description: string
  types: readonly GalleryChartType[]
}> = [
  {
    id: 'compare-performance',
    title: 'Which option performs best?',
    description:
      'Compare results side by side, rank the leaders, and see where the biggest differences are.',
    types: ['groupedColumn', 'groupedBar', 'lollipop'],
  },
  {
    id: 'track-growth',
    title: 'How is performance changing over time?',
    description:
      'Follow the trend, see how contributions evolve, and compare multiple measures in one view.',
    types: ['smoothLine', 'stackedArea', 'columnLine'],
  },
  {
    id: 'explain-the-total',
    title: "What's driving the total?",
    description:
      'Break a headline number into its parts, then explain the gains and losses behind it.',
    types: ['donut', 'waterfall', 'waffle'],
  },
  {
    id: 'explore-a-portfolio',
    title: 'Where is the value in a complex portfolio?',
    description:
      'See the big contributors and explore how smaller groups fit into the bigger picture.',
    types: ['treemap', 'sunburst', 'circlePacking'],
  },
  {
    id: 'find-relationships',
    title: 'Which factors move together?',
    description:
      'Compare two measures, add a sense of scale, and spot relationships worth investigating.',
    types: ['bubble', 'quadrant', 'connectedScatter'],
  },
  {
    id: 'understand-variation',
    title: "What's typical, and what stands out?",
    description:
      'Look beyond averages to understand the spread, find clusters, and identify unusual results.',
    types: ['histogram', 'violin', 'boxPlot'],
  },
  {
    id: 'spot-recurring-patterns',
    title: 'When do patterns repeat?',
    description:
      'Reveal busy periods, quiet stretches, and recurring patterns across dates and categories.',
    types: ['calendarHeatmap', 'heatmap', 'rose'],
  },
  {
    id: 'check-targets',
    title: 'Are we on track to hit our targets?',
    description: 'Put actual results against a goal and make progress easy to read at a glance.',
    types: ['bullet', 'gauge', 'progressGauge'],
  },
  {
    id: 'improve-a-process',
    title: 'Where does the process lose momentum?',
    description:
      'Compare stages and inspect flows between groups to find the next opportunity for improvement.',
    types: ['funnel', 'sankey', 'chord'],
  },
  {
    id: 'coordinate-plans',
    title: 'Where do plans overlap?',
    description: 'Compare start and end ranges to see timing, duration, and overlapping windows.',
    types: ['timelineRange', 'rangeBar'],
  },
  {
    id: 'read-market-movements',
    title: "What's behind a market move?",
    description:
      'Read opening and closing prices, inspect the trading range, and compare price with volume.',
    types: ['candlestick', 'volumePrice'],
  },
]

export const galleryUseCases = useCases.map(({ types, ...useCase }) => ({
  ...useCase,
  charts: types.map(type => chartCatalog.find(chart => chart.type === type)!),
}))
