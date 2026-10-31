import type { ChartOptions } from '@revolist/charts'

/** Declarative example input; LiveChart owns the mounted chart and cleanup. */
export type StoryChartOptions = Pick<
  ChartOptions,
  | 'dataset'
  | 'bindings'
  | 'presentation'
  | 'axes'
  | 'seriesOverrides'
  | 'chartOptions'
  | 'rendererOptions'
  | 'annotations'
  | 'navigation'
  | 'viewport'
  | 'interaction'
  | 'rangeSelection'
>
