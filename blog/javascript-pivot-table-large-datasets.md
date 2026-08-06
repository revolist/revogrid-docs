---
title: How to Build a JavaScript Pivot Table for Large Datasets
description: Build a JavaScript Pivot Table with typed configuration, drag-and-drop fields, totals, custom aggregations, linked charts, Excel-friendly export, saved state, and a 350,000-row benchmark.
outline: deep
date: 2026-08-06
author: RevoGrid Team
category: Pivot
tags:
  - JavaScript
  - TypeScript
  - Pivot Table
  - Large Datasets
  - Excel
  - RevoGrid Pro
image: /img/pivot-preview.jpg
imageAlt: JavaScript Pivot Table analytics application using a custom element and native events
head:
  - - meta
    - name: keywords
      content: javascript pivot table, javascript pivot table component, typescript pivot table, web component pivot table, pivot grid JavaScript, how to build a pivot table in JavaScript, javascript pivot table large datasets, drag-and-drop pivot table JavaScript
  - - link
    - rel: canonical
      href: https://rv-grid.com/blog/javascript-pivot-table-large-datasets
  - - meta
    - property: og:title
      content: How to Build a JavaScript Pivot Table for Large Datasets
  - - meta
    - property: og:description
      content: Build one framework-free JavaScript Pivot analytics app with native properties and events, field configuration, totals, charts, export, persistence, and a 350,000-row benchmark.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://rv-grid.com/blog/javascript-pivot-table-large-datasets
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
        "headline": "How to Build a JavaScript Pivot Table for Large Datasets",
        "description": "Build a JavaScript Pivot Table with typed configuration, drag-and-drop fields, totals, custom aggregations, linked charts, Excel-friendly export, saved state, and a 350,000-row benchmark.",
        "image": "https://rv-grid.com/img/pivot-preview.jpg",
        "datePublished": "2026-08-06",
        "dateModified": "2026-08-06",
        "author": { "@type": "Organization", "name": "RevoGrid" },
        "publisher": { "@type": "Organization", "name": "RevoGrid", "url": "https://rv-grid.com/" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://rv-grid.com/blog/javascript-pivot-table-large-datasets" },
        "proficiencyLevel": "Intermediate",
        "dependencies": "JavaScript or TypeScript, RevoGrid, RevoGrid Pro Advanced"
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
            "name": "Can I build a Pivot Table without React, Vue, or Angular?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. RevoGrid is a standards-based custom element. Configure the revo-grid element through properties, listen for CustomEvents, and remove listeners and elements during application cleanup." }
          },
          {
            "@type": "Question",
            "name": "Can a JavaScript Pivot Table handle 350,000 rows?",
            "acceptedAnswer": { "@type": "Answer", "text": "The reference client-side configuration completes with 350,000 rows, but its sorting-based custom aggregation takes several seconds. Measure representative data and move aggregation to a server when required." }
          },
          {
            "@type": "Question",
            "name": "Should JavaScript Pivot configuration use attributes or properties?",
            "acceptedAnswer": { "@type": "Answer", "text": "Use properties for arrays, objects, plugin constructors, functions, and Pivot configuration. HTML attributes are strings and are not suitable for function-bearing analytical models." }
          }
        ]
      }
---

<script setup lang="ts">
import PivotFrameworkNav from '../pivot/PivotFrameworkNav.vue'
</script>

# How to Build a JavaScript Pivot Table for Large Datasets

![JavaScript Pivot Table analytics application using a custom element and native events](/img/pivot-preview.jpg)

This guide builds the same production analytics workflow without a framework wrapper. A `revo-grid` custom element receives source rows, plugins, and Pivot configuration through JavaScript properties. Native `CustomEvent` listeners control saved layouts, benchmarks, charts, and export.

- [Live Pivot demo](https://pivot.rv-grid.com/demo/)
- [Complete four-framework repository](https://github.com/revolist/pivot)
- [Vanilla TypeScript implementation](https://github.com/revolist/pivot/blob/main/src/pivot.ts)
- [Pivot product overview](/pivot/)

<PivotFrameworkNav active="javascript" />

## Why use the native custom-element integration

The Vanilla implementation is useful for:

- multi-page applications that do not use a component framework;
- web-component design systems;
- micro-frontends with different host frameworks;
- progressive enhancement inside server-rendered pages;
- teams that want the smallest possible application abstraction around the grid.

Custom elements participate in the normal DOM lifecycle and expose JavaScript properties and methods. MDN's guide to [using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) explains the platform model. RevoGrid supplies the element; the application does not need to define its own grid component.

Use properties—not serialized HTML attributes—for `source`, `columns`, `plugins`, `pivot`, and `pivotCharts`. These inputs contain arrays, objects, constructors, and functions that cannot be represented faithfully as strings.

## 1. Install the grid, Pivot packages, and custom elements

```bash
pnpm add @revolist/revogrid @revolist/revogrid-pro \
  @revolist/revogrid-enterprise
```

Register the RevoGrid elements and load the commercial styles in the entry module:

```ts
import { defineCustomElements } from '@revolist/revogrid/loader';
import '@revolist/revogrid-pro/dist/revogrid-pro.css';
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css';

defineCustomElements();
```

Use a licensed registry or follow the [trial package guide](https://pro.rv-grid.com/guides/installation-npm-trial/). Do not embed a package token in browser code.

## 2. Define typed records, dimensions, and measures

TypeScript improves the authoring experience, but the compiled output is ordinary JavaScript. A JavaScript-only project can use the same objects without type annotations.

```ts
import { commonAggregators } from '@revolist/revogrid-pro';
import type {
  PivotConfig,
  PivotConfigDimension,
  PivotConfigValue,
} from '@revolist/revogrid-enterprise';

export interface SalesRow {
  id: number;
  region: string;
  channel: string;
  segment: string;
  year: number;
  quarter: string;
  revenue: number;
  profit: number;
  orders: number;
}

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

const values = [
  { prop: 'revenue', aggregator: 'sum', label: 'Revenue' },
  { id: 'revenue-p90', prop: 'revenue', aggregator: 'p90', label: 'P90 revenue' },
  { prop: 'profit', aggregator: 'sum', label: 'Profit' },
  { prop: 'orders', aggregator: 'sum', label: 'Orders' },
] satisfies PivotConfigValue[];

export function createPivotConfig(): PivotConfig {
  return {
    dimensions,
    rows: ['region', 'channel'],
    columns: ['year', 'quarter'],
    values,
    filters: ['segment'],
    filterSelections: { segment: ['Enterprise', 'Mid-market'] },
    totals: {
      subtotals: true,
      grandTotal: true,
      subtotalLabel: 'Subtotal',
      grandTotalLabel: 'All markets',
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

This follows the Rows, Columns, Values, and Filters vocabulary familiar from Microsoft's [PivotTable Field List](https://support.microsoft.com/en-us/excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable). The custom `p90` calculation remains a real aggregator rather than a display formatter.

## 3. Create and configure the grid element

Append the element before assigning the large source array. This gives the custom element a connected lifecycle before the first expensive analytical commit.

```ts
import type { GridPlugin } from '@revolist/revogrid';
import {
  createPivotChartsRenderer,
  PivotChartsPlugin,
  PivotChartsUiPlugin,
  PivotPlugin,
} from '@revolist/revogrid-enterprise';
import { createPivotConfig } from './pivot-config';
import { generateSalesRows } from './sales-data';

const plugins = [
  PivotPlugin,
  PivotChartsPlugin,
  PivotChartsUiPlugin,
] as GridPlugin[];

export function loadPivot(parentSelector: string) {
  const parent = document.querySelector(parentSelector);
  if (!parent) throw new Error(`Missing Pivot host: ${parentSelector}`);

  const grid = document.createElement('revo-grid');
  grid.style.height = '680px';
  Object.assign(grid, {
    hideAttribution: true,
    readonly: true,
    resize: true,
    filter: true,
    range: true,
    plugins,
    pivotCharts: {
      renderer: createPivotChartsRenderer(),
      defaultChartType: 'groupedColumn',
      limits: { maxCategories: 100, maxSeries: 80, maxDataPoints: 2_000 },
    },
    pivotChartsUi: { contextMenu: true },
    pivot: createPivotConfig(),
  });

  parent.appendChild(grid);
  grid.source = generateSalesRows(10_000);

  return { grid, destroy: () => grid.remove() };
}
```

`Object.assign` is convenient for initial property assignment. Later updates should replace the specific public property that changed: `grid.source = nextRows` or `grid.pivot = nextConfig`.

## 4. Control drag-and-drop configuration and save state

Listen for `pivot-config-update`, merge the patch onto application state, restore runtime dimensions, and write a versioned JSON envelope:

```ts
import {
  createSerializablePivotConfig,
  parsePivotStateJson,
  serializePivotStateJson,
  type PivotConfig,
} from '@revolist/revogrid-enterprise';
import { createPivotConfig, dimensions } from './pivot-config';

const STORAGE_KEY = 'javascript-sales-pivot:v1';

function restoreConfig(): PivotConfig {
  const fallback = createPivotConfig();
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return fallback;
    return { ...fallback, ...parsePivotStateJson(json), dimensions } as PivotConfig;
  } catch {
    return fallback;
  }
}

let pivotConfig = restoreConfig();
grid.pivot = pivotConfig;

const onConfigUpdate = (event: Event) => {
  const patch = (event as CustomEvent<Partial<PivotConfig>>).detail;
  pivotConfig = { ...pivotConfig, ...patch, dimensions };
  grid.pivot = pivotConfig;
  try {
    const safeState = createSerializablePivotConfig(pivotConfig);
    localStorage.setItem(STORAGE_KEY, serializePivotStateJson(safeState));
  } catch {}
};

grid.addEventListener('pivot-config-update', onConfigUpdate);
```

MDN recommends retaining listener references when they must later be removed; see [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). The cleanup returned by the complete application removes the listener and the grid:

```ts
return () => {
  grid.removeEventListener('pivot-config-update', onConfigUpdate);
  grid.remove();
};
```

## 5. Open a synchronized Pivot chart

Discover the installed UI plugin through the public plugin list, then request a linked chart:

```ts
import { PivotChartsUiPlugin } from '@revolist/revogrid-enterprise';

async function openLinkedChart(grid: HTMLRevoGridElement) {
  const installed = await grid.getPlugins();
  const chartsUi = installed.find(
    (plugin) => plugin instanceof PivotChartsUiPlugin,
  ) as PivotChartsUiPlugin | undefined;

  await chartsUi?.openChart({
    linked: true,
    drillSyncMode: 'both',
    presentation: {
      title: 'Revenue and profit by market',
      legendPosition: 'bottom',
    },
  });
}
```

The chart refreshes after source, filter, field-layout, and drill revisions commit. No internal grid DOM lookup is required.

## 6. Export generated Pivot output for Excel

```ts
import { exportVisiblePivotToCsv } from '@revolist/revogrid-enterprise';

function exportForExcel(
  grid: HTMLRevoGridElement & { pinnedBottomSource?: Record<string, unknown>[] },
) {
  const csv = exportVisiblePivotToCsv({
    columns: grid.columns ?? [],
    source: grid.source ?? [],
    pinnedBottomSource: grid.pinnedBottomSource ?? [],
    bom: true,
  });
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'javascript-sales-pivot.csv';
  link.click();
  URL.revokeObjectURL(url);
}
```

This exports generated headers, aggregate values, subtotal rows, and pinned grand totals. Use an XLSX provider only when the requirements include workbook styling, multiple sheets, formulas, or native workbook metadata.

## 7. Add a repeatable large-dataset runner

Use deterministic data and the public commit event. Do not report only how long array generation takes.

```ts
import { PIVOT_MODEL_CHANGED_EVENT } from '@revolist/revogrid-enterprise';
import { generateSalesRows } from './sales-data';

async function runDataset(grid: HTMLRevoGridElement, rowCount: number) {
  const generationStart = performance.now();
  const rows = generateSalesRows(rowCount);
  const generationMs = performance.now() - generationStart;

  const pivotStartedAt = performance.now();
  const committed = new Promise<number>((resolve) => {
    grid.addEventListener(
      PIVOT_MODEL_CHANGED_EVENT,
      () => resolve(performance.now() - pivotStartedAt),
      { once: true },
    );
  });

  grid.source = rows;
  return {
    rows: rowCount,
    generationMs,
    pivotCommitMs: await committed,
  };
}
```

`performance.now()` uses a monotonic high-resolution clock designed for elapsed-time measurement. See the MDN [`Performance.now()` reference](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now).

### Reference engine baseline

| Source rows | Median model time | What to report |
| ---: | ---: | --- |
| 10,000 | 126.76 ms | Interactive for the controlled shape. |
| 100,000 | 1,202.23 ms | Show a busy state for reconfiguration. |
| 350,000 | 4,334.02 ms | Successful capacity test, not instant UX. |

Reference machine: Apple M1 Pro, 8 CPU cores, 16 GiB, macOS 26.4, Node.js 24.13.0. The model used two row dimensions, two column dimensions, one filter, four measures, totals, and P90. Generation, rendering, charts, and export were excluded.

The browser runner in the [complete Vanilla implementation](https://github.com/revolist/pivot/blob/main/src/pivot.ts) adds framework-free integration cost and displays generation and Pivot commit separately.

## 8. Decide between browser and server execution

Use the client engine when all source rows may be downloaded and the measured interaction fits the browser budget. Use a server-side Pivot adapter when:

- raw records are sensitive or governed;
- data already lives in a warehouse or cube;
- cardinality or custom calculations exceed memory or latency targets;
- saved metrics must be authoritative across applications;
- network transfer is more expensive than returning an aggregated model.

The custom element still receives field configuration and displays the analytical result. Only the execution owner changes.

## 9. Progressive enhancement and page cleanup

For a server-rendered application, emit a stable host such as `<div id="sales-pivot"></div>`, load the Pivot module after the page becomes interactive, and keep raw data out of the HTML if it should remain server-side.

Your `loadPivot()` function should return cleanup. A router or micro-frontend host calls it before replacing the page. Remove application-owned listeners, destroy application-mounted chart refs, and remove the grid element. This prevents duplicate handlers and detached analytical work after navigation.

## JavaScript Pivot Table production checklist

- Set objects, arrays, constructors, and functions through element properties.
- Append the grid before assigning the large source.
- Keep listener functions so cleanup can remove them.
- Use `CustomEvent.detail` for controlled Pivot configuration.
- Rehydrate aggregators after parsing saved JSON.
- Export generated columns, body rows, and pinned totals.
- Measure the public Pivot commit event with deterministic data.
- Remove the element and listeners during route or micro-frontend teardown.
- Move aggregation server-side when data governance or latency requires it.

## JavaScript Pivot Table FAQ

### Is TypeScript required?

No. It provides useful checking for Pivot configuration and custom aggregators, but RevoGrid runs as JavaScript. Remove type-only imports and annotations in a plain JavaScript project.

### Does drag-and-drop work without a framework?

Yes. The Pivot field panel is part of the plugin. Listen for `pivot-config-update` and assign the next configuration through `grid.pivot`.

### Is CSV really an Excel export?

It is an Excel-compatible interchange export that preserves the committed Pivot result. Use XLSX when workbook-native features are required, and validate Pivot-specific structure separately.

### Can the browser handle 350,000 rows?

It can for suitable shapes and devices, as the reference run demonstrates. The same run also shows why “completed” and “interactive” are different claims: the P90 configuration took about 4.3 seconds.

## Next steps

Run the [live Pivot demo](https://pivot.rv-grid.com/demo/), study the [Vanilla TypeScript source](https://github.com/revolist/pivot/blob/main/src/pivot.ts), and evaluate the commercial engine on the [Pivot product page](/pivot/).
