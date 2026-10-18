import assert from 'node:assert/strict'
import test from 'node:test'
import {
  requests,
  selectRequests,
  reliabilitySummary,
  reliabilityExamples,
  latencyBoundaries,
} from '../../charts/use-cases/reliability-data'
import {
  shipments,
  shipmentLegs,
  buildFulfilmentStory,
} from '../../charts/use-cases/fulfilment-data'
import {
  PARTS,
  MACHINES,
  BATCHES,
  selectParts,
  buildManufacturingStory,
} from '../../charts/use-cases/manufacturing-data'

test('reliability denominators and complete latency bins reconcile for every service/region partition', () => {
  assert.equal(requests.length, 272)
  assert.equal(new Set(requests.map(row => row.requestId)).size, requests.length)
  for (const service of ['all', 'Checkout', 'Search', 'Catalog']) {
    for (const region of ['all', 'Europe', 'Americas']) {
      const selected = selectRequests(service, region)
      const summary = reliabilitySummary(selected)
      assert.equal(summary.errors, selected.filter(row => row.statusCode >= 500).length)
      assert.ok(Math.abs(summary.errorPercent! - (summary.errors * 100) / selected.length) < 1e-12)
      const binCount = latencyBoundaries
        .slice(0, -1)
        .reduce(
          (sum, lower, i) =>
            sum +
            selected.filter(
              row =>
                row.durationMs >= lower &&
                (row.durationMs < latencyBoundaries[i + 1] ||
                  (i === latencyBoundaries.length - 2 &&
                    row.durationMs === latencyBoundaries[i + 1])),
            ).length,
          0,
        )
      assert.equal(binCount, selected.length)
      const examples = reliabilityExamples(selected)
      assert.equal(
        examples.trend.dataset!.values.reduce((sum, row) => sum + (row[0] ?? 0), 0),
        selected.length,
      )
      assert.equal(examples.scatter.dataset!.categories.length, selected.length)
    }
  }
  assert.equal(selectRequests('Catalog', 'Europe', 2).length, 0)
  const missing = reliabilityExamples(selectRequests('Catalog', 'Europe')).heatmap.dataset!
  assert.equal(missing.values[0][2], null)
})

test('fulfilment counts each noncancelled shipment once at each route stage', () => {
  assert.equal(shipments.length, 72)
  assert.equal(new Set(shipmentLegs.map(row => row.legId)).size, shipmentLegs.length)
  for (const warehouse of ['', 'North', 'Central', 'South']) {
    for (const carrier of ['', 'ParcelOne', 'SwiftPost']) {
      const result = buildFulfilmentStory({ warehouse, carrier, region: '', period: 'all' })
      const count = result.selected.length
      assert.ok(result.selected.every(row => !row.cancelled))
      assert.equal(
        result.flowLinks
          .filter(link => link.source.startsWith('warehouse:'))
          .reduce((sum, link) => sum + link.value, 0),
        count,
      )
      assert.equal(
        result.flowLinks
          .filter(link => link.target.startsWith('region:'))
          .reduce((sum, link) => sum + link.value, 0),
        count,
      )
      assert.equal(
        result.warehouseRows.reduce((sum, row) => sum + row.onTime + row.late, 0),
        count,
      )
      assert.equal(
        result.warehouseRows.reduce((sum, row) => sum + row.samples.length, 0),
        count,
      )
      assert.equal(
        result.dayRows.reduce((sum, row) => sum + row.count, 0),
        count,
      )
    }
  }
})

test('quality bins and machine samples retain only measured parts, separate from the reference curve', () => {
  assert.equal(PARTS.length, 144)
  assert.equal(new Set(PARTS.map(part => part.partId)).size, 144)
  for (const machine of ['all', ...MACHINES]) {
    for (const batch of ['all', ...BATCHES]) {
      const parts = selectParts(machine, batch)
      const result = buildManufacturingStory(parts)
      assert.equal(
        result.bins.reduce((sum, bin) => sum + bin.count, 0),
        parts.length,
      )
      assert.equal(result.scatter.dataset!.categories.length, parts.length)
      const reference = result.histogram.dataset!.categories.filter(category =>
        String(category.path[0]).startsWith('REFERENCE-'),
      )
      assert.equal(reference.length, 33)
      assert.equal(result.histogram.dataset!.categories.length, parts.length + reference.length)
      assert.equal(
        result.box.dataset!.analyticalFrame!.derived!.distributions!.reduce(
          (sum, distribution) =>
            sum + ('samples' in distribution ? distribution.samples.length : 0),
          0,
        ),
        parts.length,
      )
      assert.equal(
        result.defective,
        parts.filter(part => part.diameterMm < 19.94 || part.diameterMm > 20.06).length,
      )
    }
  }
})
