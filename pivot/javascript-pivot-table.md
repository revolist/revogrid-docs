---
title: JavaScript Pivot Table Component
description: Add a production-ready JavaScript Pivot Table Component with drag-and-drop fields, custom aggregations, totals, linked charts, Excel-friendly export, saved layouts, and client- or server-side data models.
outline: deep
commercialFaqKeys:
  - plan-difference
  - trial
  - source-access
faq:
  heading: JavaScript Pivot Table Component FAQ
  items:
    - q: Can RevoGrid Pivot run without React, Vue, or Angular?
      a: Yes. Register the RevoGrid Custom Element, assign source and Pivot configuration as element properties, and use standard DOM events for updates.
    - q: Can users drag fields between Pivot areas?
      a: Yes. Enable the configurator or field panel and handle <code>pivot-config-update</code> when users rearrange Rows, Columns, Values, and Filters.
    - q: Does it support TypeScript and custom aggregations?
      a: Yes. Public Pivot contracts are typed, and measure dimensions can register application-defined aggregation functions.
    - q: Can it export directly to Excel?
      a: The Pivot helper exports Excel-friendly CSV from the committed analytical model. Use the Pro Excel layer for native XLSX workbook features.
    - q: Can it use a server-side analytical engine?
      a: Yes. RevoGrid exposes server contracts for application-owned analytical APIs, warehouses, OLAP services, and custom backends.
head:
  - - meta
    - name: keywords
      content: JavaScript Pivot Table Component, JavaScript pivot grid, TypeScript pivot table, web component pivot table, embedded analytics JavaScript, Pivot Table Excel export, JavaScript pivot chart, large data pivot
  - - link
    - rel: canonical
      href: https://rv-grid.com/pivot/javascript-pivot-table
  - - meta
    - property: og:title
      content: JavaScript Pivot Table Component | RevoGrid Pivot
  - - meta
    - property: og:description
      content: Embed configurable Pivot analytics with native JavaScript or TypeScript using drag-and-drop fields, totals, custom metrics, linked charts, export, saved views, and remote analytical models.
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://rv-grid.com/pivot/javascript-pivot-table
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
        "@type": "SoftwareApplication",
        "name": "RevoGrid JavaScript Pivot Table Component",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A JavaScript and TypeScript Pivot Table Component for embedded analytics with configurable fields, aggregations, totals, charts, export, persistence, and client- or server-side analytical models.",
        "url": "https://rv-grid.com/pivot/javascript-pivot-table",
        "softwareHelp": "https://pro.rv-grid.com/guides/pivot/",
        "isPartOf": { "@type": "SoftwareApplication", "name": "RevoGrid Pro Advanced" }
      }
---

<script setup lang="ts">
import PivotFrameworkNav from './PivotFrameworkNav.vue'
import CommercialFaq from '../pro/CommercialFaq.vue'
</script>

# JavaScript Pivot Table Component

Embed a configurable Pivot Table in a JavaScript or TypeScript application without adopting a framework-specific analytical runtime. RevoGrid Pivot uses a standards-based custom element, native properties, and DOM events while providing the same field workflow, charts, export, and data models as the framework wrappers.

[View the live Pivot demo](https://pivot.rv-grid.com/demo/) · [Request a Pro trial](/trial) · [Inspect the JavaScript example](https://github.com/revolist/pivot/blob/main/src/pivot.ts)

![JavaScript Pivot Table Component for embedded analytics](/img/pivot-preview.jpg)

<PivotFrameworkNav active="javascript" />

## A native Pivot Table for web applications

RevoGrid Pivot fits framework-free applications, micro-frontends, server-rendered products, progressive-enhancement workflows, and shared component platforms. The Custom Element boundary lets any host assign records and configuration without asking the Pivot engine to own the rest of the page.

Users can move fields among Rows, Columns, Values, and Filters; create nested hierarchies; run built-in or application-defined aggregations; inspect subtotals and grand totals; open linked charts; export the current analytical result; and restore saved layouts.

The host application owns the source data and lifecycle. RevoGrid owns virtual rendering and the analytical model. The same public element properties and events work from plain JavaScript, TypeScript, or another UI layer.

## Component capabilities

| Capability | JavaScript product value |
| --- | --- |
| Standards-based Custom Element | Mount the Pivot surface without a framework-specific runtime. |
| Typed `PivotConfig` | Use TypeScript contracts while keeping the runtime compatible with plain JavaScript. |
| Drag-and-drop fields | Handle self-service report changes through native `CustomEvent` listeners. |
| Custom aggregations | Register domain calculations beside sum, average, count, min/max, and median. |
| Totals and linked charts | Present nested totals and synchronized charts from the committed model. |
| Export and state | Export Excel-friendly CSV and serialize versioned user layouts. |
| Client- or server-side | Analyze local records or connect the same element to a governed analytical API. |

## JavaScript integration shape

Register the Custom Element once, assign complex values as properties, and listen for configuration updates with `addEventListener`:

```ts
import { defineCustomElements } from '@revolist/revogrid/loader';
import {
  PivotPlugin,
  type PivotConfig,
} from '@revolist/pivot';

defineCustomElements();

const grid = document.querySelector('revo-grid') as HTMLRevoGridElement;
const pivot: PivotConfig = {
  dimensions: [
    { prop: 'region', name: 'Region' },
    { prop: 'quarter', name: 'Quarter' },
    { prop: 'revenue', name: 'Revenue' },
  ],
  rows: ['region'],
  columns: ['quarter'],
  values: [{ prop: 'revenue', aggregator: 'sum' }],
  totals: { subtotals: true, grandTotal: true },
  hasConfigurator: true,
  fieldPanel: { visible: true, allowFieldDragging: true },
};

Object.assign(grid, {
  source: revenueRows,
  pivot,
  plugins: [PivotPlugin],
  readonly: true,
  resize: true,
  filter: true,
  hideAttribution: true,
});

grid.addEventListener('pivot-config-update', (event) => {
  const next = (event as CustomEvent<PivotConfig>).detail;
  localStorage.setItem('revenue-pivot', JSON.stringify(next));
});
```

```html
<revo-grid style="height: 680px"></revo-grid>
```

Assign objects and arrays as JavaScript properties rather than HTML attributes. The [complete JavaScript implementation](https://github.com/revolist/pivot/blob/main/src/pivot.ts) adds custom aggregations, linked charts, Excel-friendly export, state restoration, cleanup, and 10K/100K/350K evaluation controls.

## Client-side or server-side Pivot

| Use client-side Pivot when | Use server-side Pivot when |
| --- | --- |
| The full dataset can safely be held by the page. | Raw records must remain behind authorization or governance boundaries. |
| Measured interaction latency meets the product target. | Cardinality or custom calculations exceed browser budgets. |
| The application needs zero-round-trip exploration. | Metrics must be shared and authoritative across products. |
| Source memory is acceptable on supported devices. | A warehouse, cube, or analytical service should aggregate data. |

The Custom Element contract remains stable when computation moves to a server. The application can preserve the same Rows, Columns, Values, Filters, totals, and drill interface while changing the model provider.

## Lifecycle and progressive enhancement

Create the grid after the DOM container exists, keep named event handlers when cleanup is required, and remove chart references, subscriptions, object URLs, and the grid element when the host view is destroyed. A mount function that returns a cleanup function works well in micro-frontends and multipage applications.

For server-rendered pages, render an accessible fallback or report summary first, then define and configure `<revo-grid>` in a browser module. Do not serialize aggregator functions or plugin instances into HTML; reconstruct them when the client initializes.

## Excel-oriented reporting

Export `grid.columns`, `grid.source`, and pinned totals from the committed Pivot model rather than downloading the original records. The Pivot CSV helper creates an Excel-friendly file. Use the Pro Excel layer when requirements include native XLSX formatting, formulas, multiple worksheets, or workbook metadata.

## Large-data evaluation

Test 10,000, 100,000, and the maximum expected source row count using realistic dimension cardinality, measures, filters, totals, drill state, chart refresh, and export. Record production-build measurements on representative devices. Virtual rendering limits mounted DOM cells; it does not remove the cost of transferring, retaining, sorting, and aggregating the source records.

## Package and licensing

RevoGrid Pivot is included in **RevoGrid Pro Advanced**. RevoGrid Core remains MIT licensed; the Pivot engine, configurator, charts, export/state helpers, and remote analytical contracts are commercial capabilities.

Use the [request-based trial](/trial) to validate your application lifecycle, data scale, chart workflow, export requirements, and server architecture. Review the [Pivot product overview](/pivot/), [pricing](/pricing/), [live demo](https://pivot.rv-grid.com/demo/), and [complete repository](https://github.com/revolist/pivot).

<CommercialFaq id="javascript-pivot-faq" />

## Evaluate the JavaScript Pivot Table

[Open the live demo](https://pivot.rv-grid.com/demo/), [inspect the JavaScript source](https://github.com/revolist/pivot/blob/main/src/pivot.ts), or [request a Pro trial](/trial).
