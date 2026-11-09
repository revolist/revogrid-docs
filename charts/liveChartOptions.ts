import type { ChartOptions } from '@revolist/charts'
import type { StoryChartOptions } from './use-cases/types'

// ChartRef.update ignores undefined patch values. Recreate when an authored
// setting disappears so the new example gets clean defaults.
const capturedSettings = [
  'axes',
  'seriesOverrides',
  'annotations',
  'navigation',
  'viewport',
  'interaction',
  'rangeSelection',
] as const

export function needsLiveChartRemount(previous?: StoryChartOptions, next?: StoryChartOptions) {
  return (
    previous?.rendererOptions !== next?.rendererOptions ||
    capturedSettings.some(key => previous?.[key] !== undefined && next?.[key] === undefined)
  )
}

/** Shared serialization/defaults for native chart creation and value updates. */
export function liveChartOptions(
  example: StoryChartOptions | undefined,
  preview: Pick<ChartOptions, 'dataset' | 'bindings' | 'presentation'>,
  defaults: ChartOptions['chartOptions'],
  dark: boolean,
  labels: boolean,
) {
  const { rendererOptions: _rendererOptions, ...settings } = example ?? {}
  return {
    ...structuredClone(settings),
    dataset: structuredClone(example?.dataset ?? preview.dataset),
    bindings: structuredClone(example?.bindings ?? preview.bindings),
    chartOptions: structuredClone(example?.chartOptions ?? defaults),
    presentation: {
      ...(example?.presentation ?? preview.presentation),
      dataLabels: labels,
    },
    theme: dark ? ('dark' as const) : ('light' as const),
  }
}
