import { createChartDataset, type ChartDataset } from '@revolist/charts'
import type { StoryChartOptions } from '../../../../charts/use-cases/types'
import type { GalleryChartType } from '../../../../charts/catalog'
import type { HomeV2Record } from '../homeV2Utils'
import {
  heroChartPalette,
  heroChartStatuses,
  heroStatusColor,
  type HeroBudgetRow,
  type HeroProject,
} from './portfolio'

export interface HeroChartCard {
  id: string
  title: string
  unit: string
  type: GalleryChartType
  example: StoryChartOptions
}

export function createHeroBudgetDataset(rows: HeroBudgetRow[], label: string) {
  return createChartDataset(rows, {
    category: { field: 'id', label: 'name' },
    series: [{ field: 'budget', label }],
  })
}

/** Keep every bounded demo category visible, including on narrow screens. */
function fullCategoryViewport(dataset: ChartDataset): StoryChartOptions['viewport'] {
  const first = dataset.categories[0]
  const last = dataset.categories.at(-1)
  return first && last ? { x: { scale: 'category', startId: first.id, endId: last.id } } : {}
}

export function createHeroBudgetExample(
  dataset: ChartDataset,
  colors: string[],
  title: string,
): StoryChartOptions {
  return {
    bindings: {},
    dataset,
    viewport: fullCategoryViewport(dataset),
    seriesOverrides: {
      budget: {
        encoding: {
          datums: dataset.categories.map((category, index) => ({
            categoryId: category.id,
            style: { fill: colors[index] },
          })),
        },
      },
    },
    presentation: { description: title, legendPosition: 'none' },
    chartOptions: { groupPadding: dataset.categories.length === 1 ? 0.42 : 0.18 },
    navigation: { actions: { reset: 'hidden' } },
  }
}

export function createHeroChartCards(rows: HeroProject[], labels: HomeV2Record): HeroChartCard[] {
  const budget = createHeroBudgetDataset(rows, labels.budget)
  const progress = createChartDataset(
    rows.map(({ id, name, percentDone }) => ({
      id,
      name,
      percentDone,
      remaining: 100 - percentDone,
    })),
    {
      category: { field: 'id', label: 'name' },
      series: [
        { field: 'percentDone', label: labels.completed },
        { field: 'remaining', label: labels.remaining },
      ],
    },
  )
  const statusBudget = createChartDataset(
    heroChartStatuses.map(id => ({
      id,
      name: labels.statuses[id],
      budget: rows.reduce((sum, row) => sum + (row.workflowStatus === id ? row.budget : 0), 0),
    })),
    {
      category: { field: 'id', label: 'name' },
      series: [{ field: 'budget', label: labels.budget }],
    },
  )
  return [
    {
      id: 'budget',
      title: labels.chartTitle,
      unit: 'USD',
      type: 'groupedColumn',
      example: createHeroBudgetExample(
        budget,
        rows.map(row => heroStatusColor(row.workflowStatus)),
        labels.chartTitle,
      ),
    },
    {
      id: 'progress',
      title: labels.progressChartTitle,
      unit: '%',
      type: 'stackedBar',
      example: {
        dataset: progress,
        viewport: fullCategoryViewport(progress),
        presentation: { description: labels.progressChartTitle, legendPosition: 'bottom' },
        seriesOverrides: {
          percentDone: { color: heroChartPalette[0] },
          remaining: { color: heroChartPalette[2] },
        },
        navigation: { actions: { reset: 'hidden' } },
      },
    },
    {
      id: 'status',
      title: labels.statusChartTitle,
      unit: 'USD',
      type: 'donut',
      example: {
        dataset: statusBudget,
        presentation: { description: labels.statusChartTitle, legendPosition: 'bottom' },
      },
    },
  ]
}
