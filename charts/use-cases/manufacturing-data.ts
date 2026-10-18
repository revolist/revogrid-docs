import { createChartDataset, type ChartNodeClick } from '@revolist/charts'
import type { StoryChartOptions } from './types'

export const MACHINES = ['Lathe A', 'Lathe B', 'Lathe C'] as const
export const BATCHES = ['Batch 1', 'Batch 2', 'Batch 3', 'Batch 4'] as const
export const SPECIFICATION = { minimum: 19.94, maximum: 20.06, target: 20 }
export const BIN_EDGES = [19.8, 19.85, 19.9, 19.95, 20, 20.05, 20.1, 20.15, 20.2]
export interface Part {
  partId: string
  measuredAt: number
  machineId: string
  batchId: string
  diameterMm: number
  temperatureC: number
  scrapCost: number
}
/** Fictional complete local fact table: 12 measured parts per machine and batch. */
export const PARTS: Part[] = MACHINES.flatMap((machineId, machine) =>
  BATCHES.flatMap((batchId, batch) =>
    Array.from({ length: 12 }, (_, sample) => {
      const drift = machine === 2 ? batch * 0.023 : batch * 0.002
      const deviation = Math.sin((sample + 1) * 1.7 + machine) * 0.034
      const outlier = machine === 2 && sample === 10 ? 0.065 : 0
      const diameterMm = Number((20 + drift + deviation + outlier).toFixed(4))
      return {
        partId: `PART-${machine + 1}-${batch + 1}-${String(sample + 1).padStart(2, '0')}`,
        measuredAt: Date.UTC(2026, 0, 12 + batch, 8 + machine, sample * 4),
        machineId,
        batchId,
        diameterMm,
        temperatureC: Number((21 + machine * 3 + batch * 0.8 + Math.sin(sample) * 1.4).toFixed(2)),
        scrapCost:
          diameterMm < SPECIFICATION.minimum || diameterMm > SPECIFICATION.maximum ? 7.5 : 0,
      }
    }),
  ),
)
export function selectParts(machine = 'all', batch = 'all') {
  return PARTS.filter(
    part =>
      (machine === 'all' || part.machineId === machine) &&
      (batch === 'all' || part.batchId === batch),
  )
}
const mean = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / values.length
export function partFromActivation(detail: ChartNodeClick, parts: readonly Part[]) {
  return parts.find(part => detail.category.path[0] === part.partId)
}

/** Host filters produce new canonical datasets; Charts does not cross-filter these panels. */
export function buildManufacturingStory(parts: readonly Part[]) {
  const rows = parts.map(part => ({ ...part }))
  const scatterDataset = createChartDataset(rows, {
    category: { field: 'partId' },
    series: [
      { field: 'temperatureC', label: 'Temperature °C' },
      { field: 'diameterMm', label: 'Diameter mm' },
    ],
  })
  const scatter: StoryChartOptions = {
    dataset: scatterDataset,
    bindings: { x: ['temperatureC'], y: ['diameterMm'] },
    presentation: {
      description: 'Each dot is a measured part. Activate a dot to inspect its original part ID.',
    },
    axes: {
      x: { scale: 'linear', title: 'Temperature', unit: '°C' },
      y: { min: 19.8, max: 20.2, title: 'Diameter', unit: 'mm' },
    },
  }

  // Reference count = N × 0.05 mm bin width × authored normal density (20 mm, σ 0.04 mm).
  // These reference coordinates are deliberately separate from genuine part records.
  const referenceRows = Array.from({ length: 33 }, (_, index) => {
    const x = Number((19.8 + index * 0.0125).toFixed(4))
    return {
      partId: `REFERENCE-${index}`,
      diameterMm: null,
      referenceCount:
        ((parts.length * 0.05) / (0.04 * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * ((x - 20) / 0.04) ** 2),
      coordinate: x,
    }
  })
  const compositionRows = [
    ...parts.map(part => ({
      partId: part.partId,
      diameterMm: part.diameterMm,
      referenceCount: null,
      coordinate: part.diameterMm,
    })),
    ...referenceRows,
  ]
  const histogramDataset = createChartDataset(compositionRows, {
    category: { field: 'partId' },
    series: [
      { field: 'diameterMm', label: 'Measured part count' },
      { field: 'referenceCount', label: 'Authored reference count / 0.05 mm' },
    ],
  })
  const bins = BIN_EDGES.slice(0, -1).map((lower, index) => {
    const indexes = parts.flatMap((part, partIndex) =>
      part.diameterMm >= lower &&
      (part.diameterMm < BIN_EDGES[index + 1] ||
        (index === BIN_EDGES.length - 2 && part.diameterMm === BIN_EDGES[index + 1]))
        ? [partIndex]
        : [],
    )
    const values = indexes.map(partIndex => parts[partIndex].diameterMm)
    const sum = values.reduce((total, value) => total + value, 0)
    return {
      count: indexes.length,
      valueCount: indexes.length,
      sum,
      mean: values.length ? sum / values.length : null,
      sampleMean: values.length ? sum / values.length : null,
      ...(indexes.length ? { representative: histogramDataset.categories[indexes[0]] } : {}),
    }
  })
  histogramDataset.analyticalFrame!.derived = {
    histograms: [
      {
        kind: 'histogram',
        scope: 'all',
        sampleSeriesId: 'diameterMm',
        valueSeriesId: 'diameterMm',
        requestedBinCount: 8,
        aggregation: 'count',
        boundaries: [...BIN_EDGES],
        bins,
      },
    ],
  }
  const histogram: StoryChartOptions = {
    dataset: histogramDataset,
    bindings: { value: ['diameterMm', 'referenceCount'] },
    presentation: {
      description:
        'Complete fixed diameter bins with a separate authored reference count curve; reference points are not parts.',
    },
    axes: {
      x: {
        scale: 'linear',
        min: 19.8,
        max: 20.2,
        title: 'Diameter',
        unit: 'mm',
        data: Object.fromEntries(
          histogramDataset.categories.map((category, index) => [
            category.id,
            compositionRows[index].coordinate,
          ]),
        ),
      },
      y: { min: 0, title: 'Parts / 0.05 mm interval' },
    },
    seriesOverrides: {
      diameterMm: {
        type: 'histogram',
        histogram: { binCount: 8, boundaries: [...BIN_EDGES], aggregation: 'count' },
      },
      referenceCount: { type: 'line', color: '#7c3aed' },
    },
    navigation: { tooltipMode: 'shared' },
  }

  const machines = MACHINES.filter(machine => parts.some(part => part.machineId === machine))
  const boxDataset = createChartDataset(
    machines.map(machineId => ({
      machineId,
      diameterMm: mean(
        parts.filter(part => part.machineId === machineId).map(part => part.diameterMm),
      ),
    })),
    {
      category: { field: 'machineId' },
      series: [{ field: 'diameterMm', label: 'Diameter samples' }],
    },
  )
  boxDataset.analyticalFrame!.derived = {
    distributions: boxDataset.categories.map((category, index) => ({
      kind: 'samples',
      categoryId: category.id,
      seriesId: 'diameterMm',
      samples: parts
        .filter(part => part.machineId === machines[index])
        .map(part => part.diameterMm),
    })),
  }
  const box: StoryChartOptions = {
    dataset: boxDataset,
    bindings: { value: ['diameterMm'] },
    presentation: {
      description:
        'Machine diameter distributions from every eligible measured part; these boxes are aggregates.',
    },
    axes: { y: { min: 19.8, max: 20.2, title: 'Diameter', unit: 'mm' } },
  }
  const batchSummaries = BATCHES.flatMap((batchId, index) => {
    const samples = parts.filter(part => part.batchId === batchId)
    return samples.length
      ? [
          {
            batchId,
            index: index + 1,
            count: samples.length,
            meanDiameter: mean(samples.map(part => part.diameterMm)),
          },
        ]
      : []
  })
  const batchDataset = createChartDataset(batchSummaries, {
    category: { field: 'batchId' },
    series: [{ field: 'meanDiameter', label: 'Batch mean diameter' }],
  })
  const trend: StoryChartOptions = {
    dataset: batchDataset,
    bindings: { value: ['meanDiameter'] },
    presentation: {
      description:
        'Batch means derived from eligible parts, compared with authored specification limits.',
    },
    axes: { y: { min: 19.8, max: 20.2, title: 'Mean diameter', unit: 'mm' } },
    annotations: {
      references: [
        {
          id: 'lower-spec',
          kind: 'line',
          axis: 'primary',
          value: SPECIFICATION.minimum,
          label: 'Lower specification 19.94 mm',
          color: '#c2410c',
          lineDash: 'dash',
        },
        {
          id: 'upper-spec',
          kind: 'line',
          axis: 'primary',
          value: SPECIFICATION.maximum,
          label: 'Upper specification 20.06 mm',
          color: '#c2410c',
          lineDash: 'dash',
        },
      ],
    },
  }
  return {
    scatter,
    histogram,
    box,
    trend,
    bins,
    batchSummaries,
    count: parts.length,
    defective: parts.filter(part => part.scrapCost > 0).length,
  }
}
