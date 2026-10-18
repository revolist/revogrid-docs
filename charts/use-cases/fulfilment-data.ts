import { createChartDataset, createChartFlowData } from '@revolist/charts'
import type { StoryChartOptions } from './types'

// Fictional, deterministic UTC shipment facts. One shipment per order; no split shipments.
const HOUR = 3_600_000
const DAY = 24 * HOUR
export const fulfilmentEpoch = 1_792_022_400_000 // 2026-10-15T00:00:00Z
export const warehouses = ['North', 'Central', 'South'] as const
export const carriers = ['ParcelOne', 'SwiftPost'] as const
export const destinationRegions = ['North', 'Coast', 'Inland'] as const
export interface Shipment {
  shipmentId: string
  orderId: string
  customerId: string
  warehouse: string
  carrier: string
  region: string
  dispatchDay: number
  dispatchedAt: number
  deliveredAt: number
  promisedAt: number
  value: number
  cancelled: boolean
}
export const shipments: Shipment[] = warehouses.flatMap((warehouse, w) =>
  carriers.flatMap((carrier, c) =>
    destinationRegions.flatMap((region, r) =>
      Array.from({ length: 4 }, (_, dispatchDay) => {
        const index = ((w * 2 + c) * 3 + r) * 4 + dispatchDay
        const dispatchedAt = fulfilmentEpoch + dispatchDay * DAY + (8 + r) * HOUR
        const elapsedHours = 22 + w * 9 + c * 6 + r * 4 + ((index * 7) % 17)
        return {
          shipmentId: `SHP-${String(index + 1).padStart(3, '0')}`,
          orderId: `ORD-${String(index + 1).padStart(3, '0')}`,
          customerId: `CUS-${(index % 13) + 1}`,
          warehouse,
          carrier,
          region,
          dispatchDay,
          dispatchedAt,
          deliveredAt: dispatchedAt + elapsedHours * HOUR,
          promisedAt: dispatchedAt + 48 * HOUR,
          value: 85 + (index % 9) * 25,
          cancelled: index % 11 === 0,
        }
      }),
    ),
  ),
)
// Leg IDs describe genuine route stages of each shipment, independently of displayed aggregates.
export const shipmentLegs = shipments.flatMap(shipment => [
  {
    legId: `${shipment.shipmentId}:dispatch`,
    shipmentId: shipment.shipmentId,
    source: `warehouse:${shipment.warehouse}`,
    target: `carrier:${shipment.carrier}`,
  },
  {
    legId: `${shipment.shipmentId}:destination`,
    shipmentId: shipment.shipmentId,
    source: `carrier:${shipment.carrier}`,
    target: `region:${shipment.region}`,
  },
])
export interface FulfilmentFilters {
  warehouse: string
  carrier: string
  region: string
  period: 'all' | 'recent'
}
export function eligibleShipments(filters: FulfilmentFilters): Shipment[] {
  return shipments.filter(
    shipment =>
      !shipment.cancelled &&
      (!filters.warehouse || shipment.warehouse === filters.warehouse) &&
      (!filters.carrier || shipment.carrier === filters.carrier) &&
      (!filters.region || shipment.region === filters.region) &&
      (filters.period !== 'recent' || shipment.dispatchDay >= 2),
  )
}
export const elapsedDeliveryHours = (shipment: Shipment) =>
  (shipment.deliveredAt - shipment.dispatchedAt) / HOUR
export const shipmentIsOnTime = (shipment: Shipment) => shipment.deliveredAt <= shipment.promisedAt

export function buildFulfilmentStory(filters: FulfilmentFilters) {
  const selected = eligibleShipments(filters)
  const selectedIds = new Set(selected.map(shipment => shipment.shipmentId))
  const linkCounts = new Map<
    string,
    { id: string; source: string; target: string; value: number }
  >()
  for (const leg of shipmentLegs) {
    if (!selectedIds.has(leg.shipmentId)) continue
    const id = `aggregate:${leg.source}->${leg.target}`
    const entry = linkCounts.get(id) ?? { id, source: leg.source, target: leg.target, value: 0 }
    entry.value++
    linkCounts.set(id, entry)
  }
  const flowLinks = [...linkCounts.values()]
  const activeWarehouses = warehouses.filter(
    warehouse => !filters.warehouse || warehouse === filters.warehouse,
  )
  const warehouseRows = activeWarehouses.map(warehouse => {
    const rows = selected.filter(shipment => shipment.warehouse === warehouse)
    const onTime = rows.filter(shipmentIsOnTime).length
    return {
      warehouse,
      onTime,
      late: rows.length - onTime,
      // Matrix value is a labelled mean; box geometry exclusively uses the source samples below.
      hours: rows.length
        ? rows.reduce((sum, row) => sum + elapsedDeliveryHours(row), 0) / rows.length
        : null,
      samples: rows.map(elapsedDeliveryHours),
    }
  })
  const ranking: StoryChartOptions = {
    dataset: createChartDataset(warehouseRows, {
      category: { field: 'warehouse' },
      series: [
        { field: 'onTime', label: 'On time' },
        { field: 'late', label: 'Late' },
      ],
    }),
    presentation: {
      legendPosition: 'top',
      description: 'On-time and late shipment counts by warehouse',
    },
    axes: { x: { title: 'Shipments' } },
  }
  const durationDataset = createChartDataset(warehouseRows, {
    category: { field: 'warehouse' },
    series: [{ field: 'hours', label: 'Delivery hours' }],
  })
  durationDataset.analyticalFrame!.derived = {
    distributions: warehouseRows.map((row, index) => ({
      kind: 'samples' as const,
      categoryId: durationDataset.categories[index].id,
      seriesId: 'hours',
      samples: row.samples,
    })),
  }
  const duration: StoryChartOptions = {
    dataset: durationDataset,
    presentation: {
      legendPosition: 'none',
      description: 'Actual elapsed delivery hours by warehouse, source samples',
    },
    axes: { y: { min: 0, title: 'Elapsed hours' } },
  }
  const dayRows = [0, 1, 2, 3]
    .filter(day => filters.period !== 'recent' || day >= 2)
    .map(day => {
      const rows = selected.filter(shipment => shipment.dispatchDay === day)
      return {
        day: `Oct ${15 + day}`,
        count: rows.length,
        onTimePercent: rows.length
          ? (rows.filter(shipmentIsOnTime).length / rows.length) * 100
          : null,
      }
    })
  const daily: StoryChartOptions = {
    dataset: createChartDataset(dayRows, {
      category: { field: 'day' },
      series: [
        { field: 'count', label: 'Dispatched' },
        { field: 'onTimePercent', label: 'On time %' },
      ],
    }),
    presentation: {
      legendPosition: 'top',
      description: 'Daily dispatch count and on-time percent on separate value axes',
    },
    axes: {
      y: { min: 0, title: 'Shipments' },
      yAxes: { punctuality: { min: 0, max: 100, position: 'right', title: 'On time · %' } },
    },
    seriesOverrides: {
      count: { type: 'column', color: '#6647f0' },
      onTimePercent: { type: 'line', yAxis: 'punctuality', color: '#0098fa', markers: true },
    },
  }
  const flow: StoryChartOptions = {
    ...createChartFlowData({
      nodes: [
        ...warehouses.map(label => ({ id: `warehouse:${label}`, label: `${label} warehouse` })),
        ...carriers.map(label => ({ id: `carrier:${label}`, label })),
        ...destinationRegions.map(label => ({ id: `region:${label}`, label: `${label} region` })),
      ],
      links: flowLinks,
    }),
    presentation: {
      legendPosition: 'none',
      description:
        'Shipment counts from warehouse through carrier to destination region; aggregate flows',
    },
  }
  return { selected, flowLinks, warehouseRows, dayRows, flow, ranking, duration, daily }
}
