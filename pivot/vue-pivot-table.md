---
title: Vue Pivot Table Component
description: Add a production-ready Vue Pivot Table Component with drag-and-drop fields, custom aggregations, totals, linked charts, Excel-friendly export, saved layouts, and client- or server-side data models.
outline: deep
commercialFaqKeys:
  - plan-difference
  - trial
  - source-access
faq:
  heading: Vue Pivot Table Component FAQ
  items:
    - q: Does RevoGrid Pivot work with Vue 3?
      a: Yes. Use <code>@revolist/vue3-datagrid</code> for property and component integration, then install Pivot through the standard RevoGrid plugin contract.
    - q: Can users drag fields between Pivot areas?
      a: Yes. Enable the configurator or field panel and handle <code>pivot-config-update</code> when users rearrange Rows, Columns, Values, and Filters.
    - q: Does it support custom aggregations and repeated measures?
      a: Yes. Dimensions can register application-defined aggregator functions, and a field can appear more than once in Values with stable IDs.
    - q: Can Vue export directly to Excel?
      a: The Pivot helper produces Excel-friendly CSV from the committed analytical model. Use the Pro Excel layer when native XLSX workbook features are required.
    - q: Can the Vue Pivot Table use server-side data?
      a: Yes. Connect the same Vue surface to RevoGrid's server-side Pivot contracts and an application-owned analytical backend.
head:
  - - meta
    - name: keywords
      content: Vue Pivot Table Component, Vue pivot grid component, Vue pivot table library, Vue 3 embedded analytics, Vue Pivot Table Excel export, Vue pivot chart, Vue pivot large data
  - - link
    - rel: canonical
      href: https://rv-grid.com/pivot/vue-pivot-table
  - - meta
    - property: og:title
      content: Vue Pivot Table Component | RevoGrid Pivot
  - - meta
    - property: og:description
      content: Embed configurable Pivot analytics in Vue 3 with field drag-and-drop, totals, custom metrics, linked charts, export, saved views, and remote analytical models.
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://rv-grid.com/pivot/vue-pivot-table
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
        "name": "RevoGrid Vue Pivot Table Component",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A Vue Pivot Table Component for embedded analytics with configurable fields, aggregations, totals, charts, export, persistence, and client- or server-side analytical models.",
        "url": "https://rv-grid.com/pivot/vue-pivot-table",
        "softwareHelp": "https://pro.rv-grid.com/guides/pivot/",
        "isPartOf": { "@type": "SoftwareApplication", "name": "RevoGrid Pro Advanced" }
      }
---

<script setup lang="ts">
import PivotFrameworkNav from './PivotFrameworkNav.vue'
import CommercialFaq from '../pro/CommercialFaq.vue'
</script>

# Vue Pivot Table Component

Embed self-service Pivot analytics directly in a Vue 3 product. RevoGrid Pivot gives users an Excel-familiar field workflow while Vue controls source data, reactive configuration, saved views, permissions, and the surrounding application experience.

[View the live Pivot demo](https://pivot.rv-grid.com/demo/) · [Get Pro Trial](/trial) · [Inspect the Vue example](https://github.com/revolist/pivot/blob/main/src/pivot.vue)

![Vue Pivot Table Component for embedded analytics](/img/pivot-preview.jpg)

<PivotFrameworkNav active="vue" />

## A Vue Pivot Table for product workflows

RevoGrid Pivot fits SaaS products, finance and operations tools, customer portals, admin systems, and reporting screens where users must reshape a report instead of consuming a fixed dashboard.

Users can drag fields between Rows, Columns, Values, and Filters; create nested hierarchies; choose standard or custom aggregations; inspect subtotals and grand totals; open linked charts; export the committed result; and restore reusable layouts. The same UI can run against browser-owned records or an application-owned server model.

Vue owns the reactive product state. RevoGrid owns the virtualized analytical viewport and Pivot runtime. Large immutable datasets can remain in a `shallowRef`, while computed configuration and explicit event handlers keep the integration predictable.

## Component capabilities

| Capability | Vue product value |
| --- | --- |
| Typed `PivotConfig` | Define dimensions, measures, filters, totals, formatting, and drill state in TypeScript. |
| Drag-and-drop fields | Let users reshape reports without changing routes or API response shapes. |
| Custom aggregations | Register application metrics beside sum, average, count, min/max, and median. |
| Totals and hierarchy | Show nested rows and columns with configurable subtotals and grand totals. |
| Linked Pivot charts | Keep charts synchronized as Vue replaces Pivot configuration or source data. |
| Export and state | Export Excel-friendly CSV and persist a JSON-safe configuration from emitted updates. |
| Client- or server-side | Start with local records or connect governed datasets to a remote analytical engine. |

## Vue 3 integration shape

Use the Vue wrapper with Composition API state. Pass complex properties with `.prop`, keep large row arrays shallow, and replace controlled configuration from `pivot-config-update`:

```vue
<template>
  <RevoGrid
    style="height: 680px"
    :source="rows"
    :pivot.prop="pivot"
    :plugins="plugins"
    readonly
    resize
    filter
    hide-attribution
    @pivot-config-update="onPivotConfigUpdate"
  />
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue';
import RevoGrid from '@revolist/vue3-datagrid';
import {
  PivotPlugin,
  type PivotConfig,
} from '@revolist/pivot';

const props = defineProps<{ source: Record<string, unknown>[] }>();
const rows = shallowRef(props.source);
const plugins = [PivotPlugin];
const config = shallowRef<PivotConfig>({
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
});
const pivot = computed(() => config.value);

function onPivotConfigUpdate(event: CustomEvent<PivotConfig>) {
  config.value = event.detail;
}
</script>
```

The [complete Vue implementation](https://github.com/revolist/pivot/blob/main/src/pivot.vue) adds custom aggregations, linked charts, Excel-friendly export, state restoration, and 10K/100K/350K evaluation controls.

## Client-side or server-side Pivot

| Use client-side Pivot when | Use server-side Pivot when |
| --- | --- |
| The complete dataset may safely live in the browser. | Raw records must remain behind authorization or governance boundaries. |
| Field changes meet the latency target on representative devices. | Cardinality or custom calculations exceed browser budgets. |
| Users need offline or zero-round-trip exploration. | Metrics must be shared and authoritative across applications. |
| The application can afford the source data's memory footprint. | A warehouse, cube, or analytical API should perform aggregation. |

Rows, Columns, Values, Filters, totals, and drill concepts remain consistent across both models, so moving computation to the server does not require replacing the Vue product surface.

## Vue reactivity, Nuxt, and lifecycle

Use `shallowRef` for large immutable arrays so Vue does not create deep proxies for every record. Use `computed` for derived Pivot input, `watch` for persistence side effects, and `onBeforeUnmount` to destroy linked charts or external subscriptions.

In Nuxt, render the surrounding page normally and place the interactive grid inside `<ClientOnly>`. Keep function-bearing aggregators, local storage access, chart mounting, and plugin classes within the browser boundary. Pass serializable records or a server analytical endpoint across the SSR boundary.

## Excel-oriented reporting

The Pivot-specific CSV helper exports generated headers, aggregated values, and pinned totals in a format Excel can open. Use a native XLSX provider when the workflow needs multiple worksheets, formulas, workbook metadata, or styled cells. Test the exact header and total structure required by finance or audit users.

## Large-data evaluation

During a trial, test 10,000, 100,000, and the maximum expected source rows with realistic dimension cardinality, measures, filters, totals, drill state, charts, and export. Record production-build performance on representative user hardware. Virtual rendering controls DOM work, but download size, aggregation cost, and source memory still belong in the capacity decision.

## Package and licensing

RevoGrid Pivot is included in **RevoGrid Pro Advanced**. RevoGrid Core remains MIT licensed; the Pivot engine, configurator, chart workflow, export/state helpers, and remote analytical contracts are commercial capabilities.

Use the [publicly installable trial](/trial) to validate your real dataset, Nuxt boundary, chart workflow, export requirements, and server architecture. Review the [Pivot product overview](/pivot/), [pricing](/pricing/), [live demo](https://pivot.rv-grid.com/demo/), and [complete repository](https://github.com/revolist/pivot).

<CommercialFaq id="vue-pivot-faq" />

## Evaluate the Vue Pivot Table

[Open the live demo](https://pivot.rv-grid.com/demo/), [inspect the Vue source](https://github.com/revolist/pivot/blob/main/src/pivot.vue), or [get the Pro trial](/trial).
