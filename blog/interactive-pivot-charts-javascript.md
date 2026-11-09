---
title: 'Interactive Pivot Charts in JavaScript: From Summary to Source'
description: 'Build interactive JavaScript Pivot Charts with a real sales example. Drill from regions to products, inspect source orders, filter a linked report, and export chart data.'
date: 2026-10-16
author: RevoGrid Team
category: Charts
tags:
  - JavaScript
  - Pivot
  - Charts
  - Dashboards
image: /blog/interactive-pivot-charts/overview.png
imageAlt: RevoGrid Pivot Charts showing monthly revenue by region above its Pivot table
featured: true
demoUrl: /demo/pivot-charts
outline: [2, 3]
head:
  - - link
    - rel: canonical
      href: https://rv-grid.com/blog/interactive-pivot-charts-javascript
---

<script setup>
import PivotChartVideo from './interactive-pivot-charts/PivotChartVideo.vue'
</script>

# Interactive Pivot Charts in JavaScript

Europe has the most revenue. That is useful to know—but the next question is usually **which products explain it, and which orders make up those numbers?**

An interactive Pivot Chart keeps that investigation connected. A Pivot table groups and sums the source records; the chart presents that result visually. Users can drill into a region, inspect a product, and reach the order lines behind a bar.

<figure>
  <PivotChartVideo src="/blog/interactive-pivot-charts/overview.mp4" poster="/blog/interactive-pivot-charts/overview.png" label="Compare regional revenue, then drill into Europe and return to all regions" />
  <figcaption>A working RevoGrid Pivot Chart and its report. All animations are recordings of the real product using the fictional sales dataset below. Use the video controls to pause or replay.</figcaption>
</figure>

::: info Source-verified preview
The recordings and code use the current Pivot Charts source build. Confirm your installed release supports `underlyingRecords` and chart CSV export before using those steps.
:::

## Start with a question, not a chart picker

Our example contains **18 fictional order lines** for chairs, desks, and lamps sold across three regions in January and February. Revenue is in USD. Each source row represents one order line; there are no subtotal rows mixed into the input.

| Region          |     January |    February |        Total |
| --------------- | ----------: | ----------: | -----------: |
| Europe          |     $31,000 |     $41,000 |      $72,000 |
| Americas        |     $27,000 |     $33,000 |      $60,000 |
| APAC            |     $19,000 |     $23,000 |      $42,000 |
| **All regions** | **$77,000** | **$97,000** | **$174,000** |

A grouped column chart compares the two months within each region. The table retains the exact amounts. We will follow three questions:

1. Which region contributes the most revenue?
2. What did Europe sell?
3. Which order produced Europe's February chair revenue?

## Follow the sales investigation

The animations follow the same running example through four states: all regions, Europe's products, one order's source records, and a February-only report. The [complete example source](#complete-example-source) below supplies the data and mounting code. For a larger live example, open the [Pivot Charts dashboard](/demo/pivot-charts), which uses a separate retail dataset.

The buttons, breadcrumb text, and page layout are a small application shell. Aggregation, chart rendering, hierarchy drilling, linked refresh, the underlying-record dialog, and chart CSV export come from RevoGrid Pivot and Charts.

## 1. Define the Pivot behind the chart

For a JavaScript application with licensed or trial access configured, install the grid, Pro foundation, and Pivot package:

```sh
pnpm add @revolist/revogrid @revolist/revogrid-pro @revolist/pivot
```

Pivot and Pivot Charts are commercial features. Follow the [installation guide](https://pro.rv-grid.com/guides/installation-npm-trial/) for trial access, and use mutually compatible package versions.

The useful part of the configuration is its analytical structure:

```js
const pivotConfig = {
  dimensions: [
    { prop: 'region', name: 'Region' },
    { prop: 'product', name: 'Product' },
    { prop: 'month', name: 'Month' },
    { prop: 'revenue', name: 'Revenue (USD)' },
  ],
  rows: ['region', 'product'],
  columns: ['month'],
  values: [{ id: 'revenue', prop: 'revenue', aggregator: 'sum' }],
  collapsed: true,
  groupAggregations: true,
  totals: { grandTotal: true },
}
```

**Region → Product** defines the row hierarchy. Month creates the column groups, and SUM aggregates the order-line revenue. The table starts with collapsed regional groups; `groupAggregations: true` displays their aggregate values. The chart initially shows the immediate region members; its hierarchy allows drilling into their products.

In this compact dataset, `Jan` and `Feb` are category labels, not parsed dates. A report spanning multiple years should use an unambiguous year/month representation or configured date dimensions.

## 2. Mount a linked chart

Register the grid element, configure its plugins, and attach it to an existing container. Import the commercial styles once:

```js
import { defineCustomElements } from '@revolist/revogrid/loader'
import { PivotPlugin, PivotChartsPlugin, createPivotChartsRenderer } from '@revolist/pivot'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/pivot/styles.css'

defineCustomElements()
await customElements.whenDefined('revo-grid')

const grid = document.createElement('revo-grid')
grid.style.height = '225px'
grid.theme = 'compact'
grid.hideAttribution = true
grid.source = sales
grid.pivot = pivotConfig
grid.pivotCharts = { renderer: createPivotChartsRenderer() }
grid.plugins = [PivotPlugin, PivotChartsPlugin]
document.querySelector('#report').append(grid)
```

Create the chart **after the first Pivot model commits**. The complete example below handles both the `pivot-model-changed` event and the case where that model is already ready. Once ready, the chart creation is:

```js
const plugins = await grid.getPlugins()
const charts = plugins.find(plugin => plugin instanceof PivotChartsPlugin)

const chart = await charts.createChart({
  container: document.querySelector('#revenue-chart'),
  chartType: 'groupedColumn',
  linked: true,
  totals: 'none',
  drillSyncMode: 'chart',
  underlyingRecords: true,
  interaction: { mode: 'drill' },
  presentation: {
    title: 'Revenue by region',
    yAxisTitle: 'Revenue (USD)',
    legendPosition: 'bottom',
    dataLabels: true,
  },
})
```

The chart uses an application-owned container with an explicit height. `linked: true` keeps it connected to the active Pivot. `totals: 'none'` prevents a grand-total bar from appearing alongside its own contributing regions.

`drillSyncMode: 'chart'` keeps chart drilling local: exploring Europe changes the chart's hierarchy scope while the Pivot table retains its layout. This is separate from being linked to report data and filters.

## 3. Drill from Europe into products

Clicking a regional bar reveals the next level of the row hierarchy. The Europe scope contains chairs, desks, and lamps, split into the same two months.

<figure>
  <PivotChartVideo src="/blog/interactive-pivot-charts/europe-products.mp4" poster="/blog/interactive-pivot-charts/europe-products.png" label="Click Europe to reveal Chairs, Desks, and Lamps while the Pivot table keeps its regional layout" />
  <figcaption>Europe's $72,000 is made up of $36,000 in chairs, $24,000 in desks, and $12,000 in lamps. The table remains at the regional level.</figcaption>
</figure>

Chairs account for half of Europe's revenue. February contributes $20,000 of those chair sales. That is a much more useful explanation than simply naming the largest region.

The **Explore Europe** shortcut uses the same public drill API. It finds the real category by its semantic path rather than assuming a bar's screen position:

```js
await chart.resetDrill()
const dataset = await charts.getChartData({
  chartType: 'groupedColumn',
  scope: { rowPath: [] },
})
const europe = dataset.categories.find(
  category => category.path.length === 1 && category.path[0] === 'Europe',
)
if (europe && chart.canDrillDown(europe)) {
  await chart.drillDown(europe)
}
```

Use `chart.drillUp()` to move to the parent, or `chart.resetDrill()` to return to the root. Drilling requires a real next hierarchy level; a product at the leaf cannot reveal an invented deeper group.

## 4. Inspect the orders behind a bar

**Drill-down** moves between aggregate hierarchy levels. **Underlying records** shows the source rows contributing to one observation. They answer different questions.

Click or keyboard-focus Europe's February Chairs bar, then choose **View underlying records**. Hovering opens its tooltip; it does not enable the records action. The native dialog shows order `SO-102`, whose $20,000 revenue matches that bar.

<figure>
  <PivotChartVideo src="/blog/interactive-pivot-charts/source-records.mp4" poster="/blog/interactive-pivot-charts/source-records.png" :width="984" :height="348" label="Select the February Chairs bar and open its underlying order SO-102 with revenue of 20000" />
  <figcaption>Check the aggregate against its source: Europe's February chair bar resolves to one fictional order line, SO-102.</figcaption>
</figure>

Here, `underlyingRecords: true` reuses Pivot's paginated drillthrough API. Built-in access requires a current linked chart without an independent chart query. For snapshots or independently queried charts, supply an explicit records provider. In server-backed applications, the server must supply authorized records; the chart cannot reconstruct them from totals.

## 5. Filter the report and keep the chart connected

The example's **February only** checkbox updates the Pivot member selection:

```js
grid.pivot = {
  ...pivotConfig,
  filterSelections: { month: ['Feb'] },
}
```

Both the report and its linked chart refresh. At the regional level, the remaining values are Europe **$41,000**, Americas **$33,000**, and APAC **$23,000**. The checkbox and its handler belong to our application; the Pivot filter and linked chart update belong to the product.

<figure>
  <PivotChartVideo src="/blog/interactive-pivot-charts/february-filter.mp4" poster="/blog/interactive-pivot-charts/february-filter.png" label="Toggle February only to update both the regional chart and Pivot table to 97000 dollars" />
  <figcaption>One report filter, one consistent answer: February revenue totals $97,000.</figcaption>
</figure>

For a fixed comparison, create a chart with `linked: false`. It captures the initial projected dataset and ignores subsequent Pivot changes. That snapshot is useful for comparison, but should not be presented as a live view of the current report.

## Export the view, and clean up

Export the chart's current view through the chart plugin:

```js
await charts.downloadChart(chart.id, {
  fileFormat: 'csv',
  fileName: 'sales-chart.csv',
})

// During application teardown:
chart.destroy()
grid.remove()
```

Chart CSV contains chart data, not a dump of every source order. At a drilled level, that distinction matters. Use the underlying-record workflow when you need the contributing orders.

## Complete example source

The captured example uses the following dataset and mounting module. The module is TypeScript for checked public API types; the DOM integration also applies to plain JavaScript. Mount it into a connected container with `await mountSalesExample(host)`, and call the returned `destroy()` method when leaving the page. The capture component below supplies the buttons and container lifecycle.

::: details Order-line dataset
<<< @/blog/interactive-pivot-charts/sales.ts
:::

::: details Grid and chart mounting module
<<< @/blog/interactive-pivot-charts/mount.ts
:::

::: details Example shell and lifecycle (Vue)
<<< @/blog/interactive-pivot-charts/InteractivePivotCharts.vue
:::

For a broader report, try the [Pivot Charts dashboard](/demo/pivot-charts). Read [what a Pivot table does](/blog/what-is-pivot), explore [standalone JavaScript Charts](/blog/javascript-charts-for-dashboards), or follow the [React Pivot tutorial](/blog/react-pivot-table-large-datasets) for a larger application.
