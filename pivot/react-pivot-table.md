---
title: React Pivot Table Component
description: Add a production-ready React Pivot Table Component with drag-and-drop fields, custom aggregations, totals, linked charts, export, saved layouts, and client- or server-side data models.
outline: deep
head:
  - - meta
    - name: keywords
      content: React Pivot Table Component, React pivot grid component, React pivot table library, embedded analytics React, React Pivot Table Excel export, React pivot chart, React pivot large data
  - - link
    - rel: canonical
      href: https://rv-grid.com/pivot/react-pivot-table
  - - meta
    - property: og:title
      content: React Pivot Table Component | RevoGrid Pivot
  - - meta
    - property: og:description
      content: Embed configurable Pivot analytics in React with field drag-and-drop, totals, custom metrics, linked charts, export, saved views, and remote analytical models.
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://rv-grid.com/pivot/react-pivot-table
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
        "name": "RevoGrid React Pivot Table Component",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A React Pivot Table Component for embedded analytics with configurable fields, aggregations, totals, charts, export, persistence, and client- or server-side analytical models.",
        "url": "https://rv-grid.com/pivot/react-pivot-table",
        "softwareHelp": "https://pro.rv-grid.com/guides/pivot/",
        "isPartOf": { "@type": "SoftwareApplication", "name": "RevoGrid Pro Advanced" }
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
            "name": "Does RevoGrid Pivot work with React?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. RevoGrid provides a typed React wrapper while Pivot uses the same grid and analytical engine across React, Vue, Angular, Svelte, and vanilla JavaScript applications." }
          },
          {
            "@type": "Question",
            "name": "Can the React Pivot Table use server-side data?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Applications can use the in-browser Pivot engine or connect the server-side Pivot contracts to an analytical API, warehouse, OLAP service, or custom backend." }
          },
          {
            "@type": "Question",
            "name": "Is RevoGrid Pivot included in the open-source grid?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. RevoGrid Core is MIT licensed, while Pivot is a commercial module included in the RevoGrid Pro Advanced package." }
          }
        ]
      }
---

<script setup lang="ts">
import PivotFrameworkNav from './PivotFrameworkNav.vue'
</script>

# React Pivot Table Component

Embed self-service Pivot analytics directly in a React product. RevoGrid Pivot gives users an Excel-familiar field workflow while your application keeps control of data, permissions, saved views, navigation, and surrounding UI.

[View the live Pivot demo](https://pivot.rv-grid.com/demo/) · [Request a Pro trial](/trial) · [Read the React implementation tutorial](/blog/react-pivot-table-large-datasets)

![React Pivot Table Component for embedded analytics](/img/pivot-preview.jpg)

<PivotFrameworkNav active="react" />

## A React Pivot Table for product workflows

RevoGrid Pivot is built for SaaS products, finance and operations tools, admin systems, customer portals, and embedded reporting screens where a fixed dashboard is not enough.

Users can reshape one analytical model at runtime:

- drag fields between Rows, Columns, Values, and Filters;
- nest row and column hierarchies;
- choose standard or application-defined aggregations;
- expand, collapse, filter, sort, and drill into grouped results;
- display row subtotals, column subtotals, and grand totals;
- create linked Pivot charts from the committed analytical result;
- export report data and persist reusable layouts;
- keep computation in the browser or delegate it to a server-side engine.

React owns the controlled application state and product shell. RevoGrid owns the virtualized tabular viewport and Pivot runtime. This separation keeps the integration idiomatic without asking React to reconcile every analytical cell as an ordinary component tree.

## Component capabilities

| Capability | React product value |
| --- | --- |
| Typed `PivotConfig` | Define dimensions, measures, filters, totals, formatting, and drill state in TypeScript. |
| Drag-and-drop fields | Let users change the report without a new route, API shape, or hard-coded dashboard. |
| Custom aggregations | Add business metrics beside sum, average, count, min/max, median, and other standard summaries. |
| Totals and hierarchy | Show nested rows and columns with controllable subtotals, grand totals, and labels. |
| Linked Pivot charts | Keep an application-owned chart synchronized with Pivot revisions and supported drill navigation. |
| Export and state | Export the committed result to Excel-friendly CSV and save versioned Pivot configuration. |
| Client-side engine | Analyze local in-memory records without a round trip for each field change. |
| Server-side contracts | Connect large, governed, or remote datasets to an application-owned analytical backend. |
| Cross-framework engine | Reuse the same Pivot behavior if another product surface uses Vue, Angular, Svelte, or JavaScript. |

## React integration shape

Install `PivotPlugin` through the grid's plugin list and pass a typed `pivot` property through the React wrapper:

```tsx
import { useMemo } from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import type { DataType } from '@revolist/revogrid';
import {
  PivotPlugin,
  type PivotConfig,
} from '@revolist/revogrid-enterprise';

const initialPivot = {
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
} satisfies PivotConfig;

export function RevenuePivot({ rows }: { rows: DataType[] }) {
  const plugins = useMemo(() => [PivotPlugin], []);

  return (
    <RevoGrid
      style={{ height: 680 }}
      source={rows}
      pivot={initialPivot}
      plugins={plugins}
      readonly
      resize
      filter
      hideAttribution
    />
  );
}
```

For the complete application—including typed data generation, repeated measures, a custom percentile aggregation, synchronized charts, Excel-friendly export, state restoration, and 10K/100K/350K measurements—follow [How to Build a React Pivot Table for Large Datasets](/blog/react-pivot-table-large-datasets).

## Client-side or server-side Pivot

Choose the execution model based on data ownership and measured product requirements.

| Use client-side Pivot when | Use server-side Pivot when |
| --- | --- |
| The complete dataset is already available in the browser. | Raw records should remain behind authorization or data-governance boundaries. |
| Field changes meet the latency target on representative devices. | Dataset size, cardinality, or custom calculations exceed browser budgets. |
| Users need offline or zero-round-trip exploration. | Metrics must be shared and authoritative across applications. |
| The application can afford the source data's memory footprint. | An existing warehouse, cube, or analytical service should perform aggregation. |

RevoGrid uses the same Rows, Columns, Values, Filters, totals, and drill concepts across both paths. That allows a product to begin with local analysis and adopt a remote engine without replacing the entire React surface.

## Excel-oriented reporting without copying Excel

The component uses a familiar field-list mental model, but it remains an embedded web analytics surface rather than a spreadsheet clone.

Use it when users need to:

- rearrange the question they are asking;
- compare multiple measures across nested dimensions;
- keep filters visible in the application workflow;
- move from a Pivot result to a linked chart;
- save a report layout for later;
- download the result for finance, audit, or offline follow-up.

The Pivot-specific CSV helper exports generated headers, values, and pinned totals in a format Excel can open. Native XLSX workflows can use RevoGrid Pro's Excel provider when workbook styling, multiple worksheets, formulas, or other Excel metadata is part of the acceptance criteria.

## Large-data evaluation

“Supports large data” is incomplete without a data shape and measurement method. During a trial, test:

- 10,000, 100,000, and your maximum expected source row count;
- realistic unique values on every row and column dimension;
- the actual number and complexity of measures;
- filters, subtotals, grand totals, and drill state;
- cold load, repeated field changes, chart refresh, and export;
- median user hardware, not only a developer workstation.

The companion tutorial publishes one reference run through 350,000 rows and explains why source size, result cardinality, and aggregation complexity must be reported separately. RevoGrid's client-side capability is useful, but a production decision should be based on your own service-level target and representative data.

## Next.js and React architecture

For Next.js App Router, place the grid in a Client Component because it uses event handlers and browser APIs. Build function-bearing Pivot dimensions inside that boundary instead of passing aggregators from a Server Component. Keep metadata, static explanation, and server data access outside the client bundle where possible.

The React wrapper does not create a separate Pivot implementation. It binds React properties and refs to the same RevoGrid custom-element and plugin runtime used across frameworks. This is useful for teams that want React integration without maintaining framework-specific analytical behavior.

## Package and licensing

RevoGrid Pivot is included in **RevoGrid Pro Advanced**. RevoGrid Core remains the MIT-licensed grid foundation; the Pivot engine, configurator, chart workflow, export/state helpers, and remote analytical contracts are commercial capabilities.

Use the [request-based trial](/trial) to validate your real dataset, browser targets, Next.js boundary, chart workflow, export requirements, and server architecture before purchasing. Review the [Pivot product overview](/pivot/), [pricing](/pricing/), [live demo](https://pivot.rv-grid.com/demo/), and [complete example repository](https://github.com/revolist/pivot).

## React Pivot Table Component FAQ

### Does RevoGrid Pivot work with React?

Yes. Use `@revolist/react-datagrid` for property and ref integration, then install Pivot through the normal RevoGrid plugin contract. The same analytical engine is available across the other supported framework wrappers.

### Can users drag fields between Rows, Columns, Values, and Filters?

Yes. Enable the Pivot configurator or compact field panel and allow field dragging. Changes can be controlled through React state and persisted from `pivot-config-update`.

### Does it support custom aggregations and repeated measures?

Yes. A dimension can register application-defined aggregator functions, and a field can appear more than once in Values with a stable measure ID and different aggregators or labels.

### Can the component export to Excel?

The Pivot export helper produces Excel-friendly CSV from the committed analytical result. Use the Pro Excel export layer when the workflow requires native XLSX workbook features, and validate the exact Pivot headers, totals, formatting, and worksheet structure required by your users.

### Can it use a server-side analytical engine?

Yes. RevoGrid Pivot exposes server-side request, response, capability, cache, paging, filter, saved-view, and drill-down contracts for application-owned backends.

### Is Pivot included in the open-source grid?

No. Pivot is part of RevoGrid Pro Advanced. The grid foundation is open source, while the analytical module and its commercial workflows require a Pro license or trial.

## Evaluate the React Pivot Table

[Open the live demo](https://pivot.rv-grid.com/demo/), [clone the repository](https://github.com/revolist/pivot), or [request a Pro trial](/trial). Developers ready to implement can continue with the [large-dataset React Pivot tutorial](/blog/react-pivot-table-large-datasets).
