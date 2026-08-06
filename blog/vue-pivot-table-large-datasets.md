---
title: Vue Pivot Table for Large Datasets
description: Build a Vue 3 Pivot Table with typed dimensions, drag-and-drop fields, totals, custom aggregations, linked charts, Excel-friendly export, saved state, and a 350,000-row benchmark.
outline: deep
date: 2026-08-06
author: RevoGrid Team
category: Pivot
tags:
  - Vue
  - Pivot Table
  - Large Datasets
  - Excel
  - RevoGrid Pro
image: /img/pivot-preview.jpg
imageAlt: Vue Pivot Table analytics application with field configuration and linked chart
head:
  - - meta
    - name: keywords
      content: vue pivot table, vue pivot table component, vue pivot grid, vue 3 pivot table, how to build a pivot table in Vue, vue pivot table large datasets, drag-and-drop pivot table Vue
  - - link
    - rel: canonical
      href: https://rv-grid.com/blog/vue-pivot-table-large-datasets
  - - meta
    - property: og:title
      content: Vue Pivot Table for Large Datasets
  - - meta
    - property: og:description
      content: Build one Vue 3 Pivot analytics app with Composition API state, drag-and-drop fields, totals, charts, export, persistence, and a 350,000-row benchmark.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://rv-grid.com/blog/vue-pivot-table-large-datasets
  - - meta
    - property: og:image
      content: https://rv-grid.com/img/pivot-preview.jpg
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Vue Pivot Table for Large Datasets",
        "description": "Build a Vue 3 Pivot Table with typed dimensions, drag-and-drop fields, totals, custom aggregations, linked charts, Excel-friendly export, saved state, and a 350,000-row benchmark.",
        "image": "https://rv-grid.com/img/pivot-preview.jpg",
        "datePublished": "2026-08-06",
        "dateModified": "2026-08-06",
        "author": { "@type": "Organization", "name": "RevoGrid" },
        "publisher": { "@type": "Organization", "name": "RevoGrid", "url": "https://rv-grid.com/" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://rv-grid.com/blog/vue-pivot-table-large-datasets" },
        "proficiencyLevel": "Intermediate",
        "dependencies": "Vue 3, RevoGrid, RevoGrid Pro Advanced"
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a Vue Pivot Table handle 350,000 rows?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes for suitable data shapes and devices, but source size is only one variable. Measure unique groups, measures, totals, custom aggregation cost, rendering, and memory on representative hardware." }
          },
          {
            "@type": "Question",
            "name": "Should a large Vue dataset use ref or shallowRef?",
            "acceptedAnswer": { "@type": "Answer", "text": "Use shallowRef when the application replaces large immutable row arrays as a unit. This avoids creating deep Vue proxies for every record while still making array replacement reactive." }
          },
          {
            "@type": "Question",
            "name": "Does the Vue Pivot Table work with Nuxt?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Mount the interactive Pivot component on the client, keep function-bearing configuration inside that client boundary, and fetch serializable source rows from Nuxt server routes or server-rendered parents." }
          }
        ]
      }
---

<script setup lang="ts">
import PivotFrameworkNav from '../pivot/PivotFrameworkNav.vue'
</script>

# Vue Pivot Table for Large Datasets

![Vue Pivot Table analytics application with field configuration and linked chart](/img/pivot-preview.jpg)

This tutorial builds a complete Vue 3 sales-analysis workspace. Users can move fields between Rows, Columns, Values, and Filters; inspect subtotals and grand totals; select a custom percentile aggregation; open a linked Pivot chart; export the committed report for Excel; restore their layout; and repeat the same test with 10,000, 100,000, or 350,000 records.

- [Live Pivot demo](https://pivot.rv-grid.com/demo/)
- [Complete four-framework repository](https://github.com/revolist/pivot)
- [Vue implementation](https://github.com/revolist/pivot/blob/main/src/pivot.vue)
- [Pivot product overview](/pivot/)

<PivotFrameworkNav active="vue" />

## Why the Vue implementation is different

The analytical engine is framework-neutral, but the integration should not be. Vue owns source rows and configuration through refs, derives the grid input with `computed`, persists state with `watch`, and releases theme or event subscriptions in `onBeforeUnmount`.

Vue recommends `<script setup>` for Single-File Components using Composition API. Top-level imports, refs, computed values, and functions are directly available to the template, while refs are automatically unwrapped there. See Vue's official [`<script setup>` reference](https://vuejs.org/api/sfc-script-setup.html) and [reactivity fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html).

For a 350,000-row immutable array, use `shallowRef` rather than deep reactive state. The application replaces the array after a benchmark or API response; individual financial records do not need Vue proxies.

## 1. Install the Vue grid and Pivot packages

```bash
pnpm add vue @revolist/revogrid @revolist/vue3-datagrid \
  @revolist/revogrid-pro @revolist/revogrid-enterprise
```

Load the commercial styles once in the Vue application entry:

```ts
import '@revolist/revogrid-pro/dist/revogrid-pro.css';
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css';
```

Use the licensed registry or [request-based trial setup](https://pro.rv-grid.com/guides/installation-npm-trial/). Keep registry credentials out of source control.

## 2. Create typed dimensions and measures

Keep one source grain and register aggregators on measure dimensions. This example uses a second Revenue measure with a stable ID so `sum` and `p90` can coexist:

```ts
import { commonAggregators } from '@revolist/revogrid-pro';
import type {
  PivotConfigDimension,
  PivotConfigValue,
} from '@revolist/revogrid-enterprise';

export type SalesRow = {
  id: number;
  region: 'Americas' | 'EMEA' | 'APAC' | 'LATAM' | 'Canada';
  channel: 'Direct' | 'Partner' | 'Marketplace' | 'Retail';
  segment: 'Enterprise' | 'Mid-market' | 'SMB';
  year: 2023 | 2024 | 2025;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  revenue: number;
  profit: number;
  orders: number;
};

const percentile90 = (values: unknown[]) => {
  if (!values.length) return 0;
  const sorted = values.map(Number).sort((a, b) => a - b);
  return sorted[Math.ceil(sorted.length * 0.9) - 1] ?? 0;
};

export const dimensions = [
  { prop: 'region', name: 'Region', fieldGroup: 'Market' },
  { prop: 'channel', name: 'Channel', fieldGroup: 'Market' },
  { prop: 'segment', name: 'Customer segment', fieldGroup: 'Customer' },
  { prop: 'year', name: 'Year', fieldGroup: 'Time' },
  { prop: 'quarter', name: 'Quarter', fieldGroup: 'Time' },
  {
    prop: 'revenue',
    name: 'Revenue',
    fieldGroup: 'Measures',
    aggregators: {
      sum: commonAggregators.sum,
      avg: commonAggregators.avg,
      p90: percentile90,
    },
  },
  {
    prop: 'profit',
    name: 'Profit',
    fieldGroup: 'Measures',
    aggregators: { sum: commonAggregators.sum, avg: commonAggregators.avg },
  },
  {
    prop: 'orders',
    name: 'Orders',
    fieldGroup: 'Measures',
    aggregators: { sum: commonAggregators.sum },
  },
] satisfies PivotConfigDimension[];

export const measures = [
  { prop: 'revenue', aggregator: 'sum', label: 'Revenue' },
  { id: 'revenue-p90', prop: 'revenue', aggregator: 'p90', label: 'P90 revenue' },
  { prop: 'profit', aggregator: 'sum', label: 'Profit' },
  { prop: 'orders', aggregator: 'sum', label: 'Orders' },
] satisfies PivotConfigValue[];
```

The familiar four-area layout follows the same mental model Microsoft documents for the Excel [PivotTable Field List](https://support.microsoft.com/en-us/excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable). The web component remains application-owned, but spreadsheet users do not need to relearn what Rows, Columns, Values, and Filters mean.

## 3. Configure fields, drag-and-drop, and totals

```ts
import type { PivotConfig } from '@revolist/revogrid-enterprise';

export function createPivotConfig(): PivotConfig {
  return {
    dimensions,
    rows: ['region', 'channel'],
    columns: ['year', 'quarter'],
    values: measures,
    filters: ['segment'],
    filterSelections: { segment: ['Enterprise', 'Mid-market'] },
    totals: {
      subtotals: true,
      grandTotal: true,
      subtotalLabel: 'Subtotal',
      grandTotalLabel: 'All markets',
      suppressSingleChildSubtotals: true,
    },
    collapsed: true,
    groupAggregations: true,
    hasConfigurator: true,
    fieldPanel: {
      visible: true,
      allowFieldDragging: true,
      allowFieldRemoving: true,
      showRowFields: true,
      showColumnFields: true,
      showDataFields: true,
      showFilterFields: true,
    },
  };
}
```

The configuration supplies the first report, not a locked dashboard. The field panel emits `pivot-config-update` when the user rearranges fields, allowing Vue to control and save the resulting state.

## 4. Build the Vue 3 analytics component

The essential SFC shape is below. The complete repository adds the polished toolbar and responsive styles, but the lifecycle and public Pivot APIs are the same.

```vue
<template>
  <main class="analytics-workspace">
    <header>
      <button
        v-for="size in DATASET_SIZES"
        :key="size"
        :disabled="busy"
        @click="runDataset(size)"
      >
        Test {{ size.toLocaleString() }} rows
      </button>
      <button @click="openChart">Open linked chart</button>
      <button @click="downloadCsv">Export CSV for Excel</button>
      <span aria-live="polite">{{ status }}</span>
    </header>

    <RevoGrid
      ref="gridElement"
      style="height: 680px"
      :source="rows"
      :pivot.prop="pivot"
      :pivot-charts.prop="pivotCharts"
      :plugins="plugins"
      readonly
      resize
      filter
      range
      hide-attribution
      @pivot-config-update="onConfigUpdate"
    />
    <div id="vue-pivot-chart" style="min-height: 420px"></div>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, shallowRef, ref, watch } from 'vue';
import RevoGrid from '@revolist/vue3-datagrid';
import {
  createPivotChartsRenderer,
  createSerializablePivotConfig,
  exportVisiblePivotToCsv,
  mountPivotChart,
  parsePivotStateJson,
  PIVOT_MODEL_CHANGED_EVENT,
  PivotChartsPlugin,
  PivotPlugin,
  serializePivotStateJson,
  type PivotChartRef,
  type PivotConfig,
} from '@revolist/revogrid-enterprise';
import { createPivotConfig, dimensions } from './pivot-config';
import { generateSalesRows, type SalesRow } from './sales-data';

const STORAGE_KEY = 'vue-sales-pivot:v1';
const DATASET_SIZES = [10_000, 100_000, 350_000] as const;
const plugins = [PivotPlugin, PivotChartsPlugin];
const pivotCharts = {
  renderer: createPivotChartsRenderer(),
  defaultChartType: 'groupedColumn',
  limits: { maxCategories: 100, maxSeries: 80, maxDataPoints: 2_000 },
};

function restoreConfig(): PivotConfig {
  const fallback = createPivotConfig();
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return fallback;
    const saved = parsePivotStateJson(json);
    return { ...fallback, ...saved, dimensions } as PivotConfig;
  } catch {
    return fallback;
  }
}

const initialRows = generateSalesRows(10_000);
const rows = shallowRef<SalesRow[]>(initialRows);
const pivotConfig = shallowRef<PivotConfig>(restoreConfig());
const gridElement = ref<
  HTMLRevoGridElement & { pinnedBottomSource?: SalesRow[] }
>();
const chart = shallowRef<PivotChartRef>();
const busy = ref(false);
const status = ref('10,000 source rows');
const pivot = computed(() => pivotConfig.value);

watch(pivotConfig, (config) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      serializePivotStateJson(createSerializablePivotConfig(config)),
    );
  } catch {}
});

function onConfigUpdate(event: CustomEvent<Partial<PivotConfig>>) {
  pivotConfig.value = {
    ...pivotConfig.value,
    ...event.detail,
    dimensions,
  };
}

async function openChart() {
  const grid = gridElement.value;
  if (!grid) return;
  chart.value?.destroy();
  chart.value = await mountPivotChart(grid, {
    container: document.querySelector('#vue-pivot-chart')!,
    chartType: 'groupedColumn',
    linked: true,
    drillSyncMode: 'both',
  });
}

function downloadCsv() {
  const grid = gridElement.value;
  if (!grid) return;
  const csv = exportVisiblePivotToCsv({
    columns: grid.columns ?? [],
    source: grid.source ?? [],
    pinnedBottomSource: grid.pinnedBottomSource ?? [],
    bom: true,
  });
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'vue-sales-pivot.csv';
  link.click();
  URL.revokeObjectURL(url);
}

async function runDataset(rowCount: number) {
  const grid = gridElement.value;
  if (!grid || busy.value) return;
  busy.value = true;
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  const nextRows = generateSalesRows(rowCount);
  const startedAt = performance.now();
  const committed = new Promise<number>((resolve) => {
    grid.addEventListener(
      PIVOT_MODEL_CHANGED_EVENT,
      () => resolve(performance.now() - startedAt),
      { once: true },
    );
  });
  rows.value = nextRows;
  const milliseconds = await committed;
  status.value = `${rowCount.toLocaleString()} rows · Pivot ${milliseconds.toFixed(1)} ms`;
  busy.value = false;
}

onBeforeUnmount(() => chart.value?.destroy());
</script>
```

The [complete Vue implementation](https://github.com/revolist/pivot/blob/main/src/pivot.vue) uses the bundled chart dialog, while the sample above mounts a linked chart into a fixed page container.

## 5. Persist configuration without proxying runtime functions

`watch` is appropriate here because saving state is a side effect, not derived UI. Vue's [watcher guide](https://vuejs.org/guide/essentials/watchers.html) distinguishes watched side effects from computed derivations.

The JSON-safe projection intentionally removes aggregator functions, renderers, DOM containers, and engine adapters. On restore, merge serialized state onto a fresh runtime configuration and replace `dimensions` with the function-bearing definitions.

For shared saved views, send the serialized envelope to your backend with a schema version, user or workspace ID, and authorization rules. `localStorage` is only a per-browser preference.

## 6. Export the committed Pivot result for Excel

Export `grid.columns`, `grid.source`, and `grid.pinnedBottomSource`, not the original sales records. Those public properties represent generated headers, aggregated cells, subtotal rows, and the grand-total row.

The Pivot helper returns UTF-8 CSV with an optional BOM, which Excel opens reliably. Use a separate XLSX workbook layer when requirements include multiple worksheets, formulas, workbook metadata, or styled cells. Validate Pivot header and total fidelity rather than assuming a flat-grid exporter will preserve every analytical structure.

## 7. Benchmark Vue with 10K, 100K, and 350K rows

The toolbar measures source replacement through the public `pivot-model-changed` event. `performance.now()` provides a monotonic high-resolution timer; dataset generation is best reported separately from the Pivot commit.

### Reference engine baseline

The framework-independent model was run with two row dimensions, two column dimensions, one report filter, four measures, totals, and the sorting-based P90 aggregator:

| Source rows | Median model time | Interpretation |
| ---: | ---: | --- |
| 10,000 | 126.76 ms | Interactive on the reference machine. |
| 100,000 | 1,202.23 ms | Show progress for repeated reconfiguration. |
| 350,000 | 4,334.02 ms | Completes client-side, but is not instant. |

Reference environment: Apple M1 Pro, 8 CPU cores, 16 GiB memory, macOS 26.4, Node.js 24.13.0. One warm-up and five timed model builds were used per size. Rendering, Vue updates, chart refresh, export, and data generation were excluded.

The Vue runner is the acceptance test because it includes array replacement and the browser/grid boundary on the actual device. Record at least five production-build runs. Test realistic cardinality, filters, expanded branches, totals, and custom calculations.

## 8. Client-side or server-side Pivot

Use client-side Pivot when the full dataset may safely live in the browser and measured latency and memory meet the product target. Move aggregation to RevoGrid's server-side Pivot contracts when data governance, high cardinality, expensive measures, or the 100K/350K tests exceed that budget.

Virtual rendering limits DOM work. It does not reduce the cost of downloading raw data or sorting hundreds of thousands of values inside a percentile function.

## 9. Nuxt and SSR integration

Nuxt can server-render the page shell and source metadata, but the interactive Pivot surface needs the browser. Put it in a client-only boundary:

```vue
<template>
  <ClientOnly fallback-tag="p" fallback="Loading analytics…">
    <SalesPivot :rows="rows" />
  </ClientOnly>
</template>
```

Keep custom aggregators, plugin classes, local storage, and chart mounting inside `SalesPivot.vue`. Pass serializable records or a URL across the SSR boundary. If source data is sensitive or too large, pass a server-side analytical endpoint instead of embedding the raw rows in HTML.

Use Vue's lifecycle hooks for external subscriptions and chart destruction; the official [Composition API lifecycle reference](https://vuejs.org/api/composition-api-lifecycle.html) documents that cleanup boundary.

## Vue Pivot Table production checklist

- Use `shallowRef` for immutable large row arrays.
- Keep `computed` pure; use `watch` for persistence and other side effects.
- Replace arrays rather than deep-mutating hundreds of thousands of proxied rows.
- Rehydrate custom aggregator functions after parsing saved state.
- Destroy chart refs and subscriptions in `onBeforeUnmount`.
- Export the committed Pivot model, including pinned totals.
- Benchmark production builds on representative devices.
- Move governed or latency-sensitive aggregation to a server engine.

## Vue Pivot Table FAQ

### Is this a Vue-specific Pivot engine?

No. `@revolist/vue3-datagrid` binds Vue props and refs to the same RevoGrid custom element and Pivot runtime used by the other integrations. Vue owns reactive application state; RevoGrid owns the virtualized analytical viewport.

### Can users drag fields in Vue?

Yes. Enable `hasConfigurator` or the field panel and handle `pivot-config-update` when the user moves a field between Rows, Columns, Values, and Filters.

### Can Vue export directly to Excel?

The Pivot helper exports Excel-friendly CSV from the committed model. Add a native XLSX provider when the acceptance criteria require workbook-specific formatting or structure.

### Can it handle 350,000 rows?

The reference data shape completes in the client-side engine, but its P90 calculation took roughly 4.3 seconds in the isolated model test. Capacity is not an interaction target; use the included Vue runner and representative data to decide between client and server execution.

## Next steps

Open the [live demo](https://pivot.rv-grid.com/demo/), inspect the [Vue source](https://github.com/revolist/pivot/blob/main/src/pivot.vue), or evaluate the commercial package on the [Pivot product page](/pivot/).
