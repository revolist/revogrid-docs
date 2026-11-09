import { createChartDataset } from '@revolist/charts'
import type { StoryChartOptions } from './types'

export const services = ['Checkout', 'Search', 'Catalog'] as const
export const regions = ['Europe', 'Americas'] as const
export const reliabilityStart = 1792324800000 // 2026-10-18 12:00 UTC
export const bucketMs = 300_000
export const latencyBoundaries = [0, 100, 200, 400, 800, 1600, 3200]
export type RequestFact = {
  requestId: string
  startedAt: number
  elapsedMs: number
  service: string
  region: string
  durationMs: number
  statusCode: number
  deploymentId: string
}
/** Fictional deterministic requests; Catalog has no observations in minute 10–15. */
export const requests: RequestFact[] = services.flatMap((service, si) =>
  regions.flatMap((region, ri) =>
    Array.from({ length: 6 }, (_, bucket) =>
      service === 'Catalog' && bucket === 2
        ? []
        : Array.from({ length: 8 }, (_, sample) => {
            const elapsedMs = bucket * bucketMs + sample * 37_000
            const impacted = service === 'Checkout' && region === 'Europe' && bucket >= 3
            const error = impacted ? sample % 3 === 0 : (sample + bucket + si + ri) % 19 === 0
            return {
              requestId: `req-${si}-${ri}-${bucket}-${sample}`,
              startedAt: reliabilityStart + elapsedMs,
              elapsedMs,
              service,
              region,
              durationMs:
                55 + si * 25 + ri * 15 + sample * 19 + (impacted ? 500 + sample * 120 : 0),
              statusCode: error ? 503 : 200,
              deploymentId: bucket >= 3 ? 'release-b' : 'release-a',
            }
          }),
    ).flat(),
  ),
)
export const isError = (request: RequestFact) => request.statusCode >= 500
export function selectRequests(service = 'all', region = 'all', bucket: number | null = null) {
  return requests.filter(
    request =>
      (service === 'all' || request.service === service) &&
      (region === 'all' || request.region === region) &&
      (bucket === null || Math.floor(request.elapsedMs / bucketMs) === bucket),
  )
}
export function reliabilitySummary(rows: RequestFact[]) {
  const errors = rows.filter(isError).length
  const sorted = rows.map(row => row.durationMs).sort((a, b) => a - b)
  return {
    count: rows.length,
    errors,
    errorPercent: rows.length ? (errors / rows.length) * 100 : null,
    // Nearest-rank p95 over raw selected requests, never an average of percentiles.
    p95: sorted.length ? sorted[Math.ceil(sorted.length * 0.95) - 1] : null,
  }
}
export function reliabilityExamples(rows: RequestFact[]) {
  const buckets = Array.from({ length: 6 }, (_, index) => {
    const summary = reliabilitySummary(
      rows.filter(row => Math.floor(row.elapsedMs / bucketMs) === index),
    )
    return {
      elapsed: index * bucketMs,
      label: `${index * 5} min`,
      count: summary.count,
      errorPercent: summary.errorPercent,
    }
  })
  const trend: StoryChartOptions = {
    dataset: createChartDataset(buckets, {
      category: { field: 'elapsed', label: 'label' },
      series: [
        { field: 'count', label: 'Requests' },
        { field: 'errorPercent', label: 'Errors · %' },
      ],
    }),
    bindings: {},
    axes: {
      x: { scale: 'linear', min: 0, max: 1_800_000, title: 'Elapsed · ms', unit: 'elapsed-ms' },
      y: { min: 0, title: 'Request count' },
      yAxes: { errors: { position: 'right', min: 0, max: 100, title: 'Errors · %' } },
    },
    seriesOverrides: {
      count: { type: 'column', color: '#6647f0' },
      errorPercent: { type: 'line', yAxis: 'errors', color: '#ff6b26', markers: true },
    },
    navigation: { enabled: true },
    presentation: {
      legendPosition: 'top',
      description:
        'Five-minute request counts and error percentage, with independent count and percentage axes.',
    },
  }
  const histogram: StoryChartOptions = {
    dataset: createChartDataset(rows, {
      category: { field: 'requestId' },
      series: [{ field: 'durationMs', label: 'Request latency' }],
    }),
    bindings: { value: ['durationMs'] },
    chartOptions: { histogramBinBoundaries: latencyBoundaries, histogramAggregation: 'count' },
    axes: { x: { scale: 'linear', title: 'Latency · ms' }, y: { title: 'Requests' } },
    presentation: {
      legendPosition: 'none',
      description:
        'Raw request latency distribution with fixed millisecond boundaries; bins are aggregates.',
    },
  }
  const visibleServices = services.filter(service => rows.some(row => row.service === service))
  const heatRows = visibleServices.map(service => ({
    service,
    ...Object.fromEntries(
      buckets.map((_, index) => {
        const summary = reliabilitySummary(
          rows.filter(
            row => row.service === service && Math.floor(row.elapsedMs / bucketMs) === index,
          ),
        )
        return [`bucket-${index}`, summary.errorPercent]
      }),
    ),
  }))
  const heatmap: StoryChartOptions = {
    dataset: createChartDataset(heatRows, {
      category: { field: 'service' },
      series: buckets.map((_, index) => ({
        field: `bucket-${index}`,
        label: `${index * 5}–${index * 5 + 5} min`,
      })),
    }),
    bindings: {},
    axes: { matrix: { rows: { title: 'Service' }, columns: { title: 'Five-minute bucket' } } },
    presentation: {
      legendPosition: 'none',
      description:
        'Error percentage by service and five-minute bucket. Missing requests produce null cells, not zero-percent errors.',
    },
  }
  const scatter: StoryChartOptions = {
    dataset: createChartDataset(rows, {
      category: { field: 'requestId' },
      series: [
        { field: 'elapsedMs', label: 'Elapsed · ms' },
        { field: 'durationMs', label: 'Latency · ms' },
      ],
    }),
    bindings: { x: ['elapsedMs'], y: ['durationMs'] },
    axes: {
      x: { scale: 'linear', min: 0, max: 1_800_000, title: 'Elapsed · ms', unit: 'elapsed-ms' },
      y: { title: 'Latency · ms', min: 0 },
    },
    navigation: { enabled: true, axes: 'x' },
    presentation: {
      legendPosition: 'none',
      description:
        'One genuine request per point: elapsed milliseconds versus request latency. Activate a point to inspect the original request.',
    },
  }
  return { trend, histogram, heatmap, scatter }
}
