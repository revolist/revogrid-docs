---
title: How to Build an Angular Pivot Table for Large Datasets
description: Build an Angular Pivot Table with signals, typed dimensions, drag-and-drop fields, totals, custom aggregations, linked charts, Excel-friendly export, saved state, and a 350,000-row benchmark.
outline: deep
date: 2026-08-06
author: RevoGrid Team
category: Pivot
tags:
  - Angular
  - Pivot Table
  - Large Datasets
  - Excel
  - RevoGrid Pro
image: /img/pivot-preview.jpg
imageAlt: Angular Pivot Table analytics application with signals, field configuration, and chart
head:
  - - meta
    - name: keywords
      content: angular pivot table, angular pivot table component, angular pivot grid, how to build a pivot table in Angular, angular pivot table large datasets, drag-and-drop pivot table Angular, Angular signals data grid
  - - link
    - rel: canonical
      href: https://rv-grid.com/blog/angular-pivot-table-large-datasets
  - - meta
    - property: og:title
      content: How to Build an Angular Pivot Table for Large Datasets
  - - meta
    - property: og:description
      content: Build one Angular Pivot analytics app with signals, OnPush change detection, field configuration, totals, charts, export, persistence, and a 350,000-row benchmark.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://rv-grid.com/blog/angular-pivot-table-large-datasets
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
        "headline": "How to Build an Angular Pivot Table for Large Datasets",
        "description": "Build an Angular Pivot Table with signals, typed dimensions, drag-and-drop fields, totals, custom aggregations, linked charts, Excel-friendly export, saved state, and a 350,000-row benchmark.",
        "image": "https://rv-grid.com/img/pivot-preview.jpg",
        "datePublished": "2026-08-06",
        "dateModified": "2026-08-06",
        "author": { "@type": "Organization", "name": "RevoGrid" },
        "publisher": { "@type": "Organization", "name": "RevoGrid", "url": "https://rv-grid.com/" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://rv-grid.com/blog/angular-pivot-table-large-datasets" },
        "proficiencyLevel": "Intermediate",
        "dependencies": "Angular, RevoGrid, RevoGrid Pro Advanced"
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
            "name": "Can an Angular Pivot Table handle 350,000 rows?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes for suitable data shapes and devices. Use the public Pivot commit event to measure the real configuration, then switch to a server-side analytical engine when latency, memory, or data-governance requirements demand it." }
          },
          {
            "@type": "Question",
            "name": "Why use Angular signals for Pivot state?",
            "acceptedAnswer": { "@type": "Answer", "text": "Writable signals provide explicit replacement of source rows and configuration, computed signals derive grid inputs and status, and effects synchronize configuration to external storage without manual change-detection calls." }
          },
          {
            "@type": "Question",
            "name": "Does an Angular Pivot Table work with SSR?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Render the page shell on the server and initialize the interactive grid only in the browser. Keep custom aggregators, DOM references, storage, chart mounting, and plugin instances outside serialized server state." }
          }
        ]
      }
---

<script setup lang="ts">
import PivotFrameworkNav from '../pivot/PivotFrameworkNav.vue'
</script>

# How to Build an Angular Pivot Table for Large Datasets

![Angular Pivot Table analytics application with signals, field configuration, and chart](/img/pivot-preview.jpg)

This guide builds a standalone Angular analytics component rather than a static report. It combines a typed Pivot model, drag-and-drop field configuration, standard and custom aggregations, subtotals, grand totals, linked charts, persisted views, Excel-friendly export, and repeatable 10K/100K/350K tests.

- [Live Pivot demo](https://pivot.rv-grid.com/demo/)
- [Complete four-framework repository](https://github.com/revolist/pivot)
- [Angular implementation](https://github.com/revolist/pivot/blob/main/src/pivot.angular.ts)
- [Pivot product overview](/pivot/)

<PivotFrameworkNav active="angular" />

## Angular architecture for an analytical grid

Use Angular for application state and orchestration, not for rendering every Pivot cell. RevoGrid owns the virtualized viewport and analytical plugin runtime. The Angular wrapper binds properties and events to that custom element.

The component uses:

- writable signals for source rows, Pivot configuration, busy state, and benchmark results;
- computed signals for the final Pivot input and user-facing status;
- an effect for the non-reactive local-storage boundary;
- `OnPush` change detection so signal reads determine when Angular marks the component;
- `ViewChild`/`ElementRef` for public grid methods and properties after the view exists.

Angular's official [signals guide](https://angular.dev/guide/signals) documents writable and computed signals, memoized derivations, and their integration with `OnPush` templates. Angular also documents when [view queries become available](https://angular.dev/guide/components/lifecycle).

## 1. Install RevoGrid and Pivot for Angular

```bash
pnpm add @revolist/revogrid @revolist/angular-datagrid \
  @revolist/revogrid-pro @revolist/revogrid-enterprise
```

Add the commercial styles to `angular.json` or a global application stylesheet:

```scss
@use '@revolist/revogrid-pro/dist/revogrid-pro.css';
@use '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css';
```

Configure your licensed registry or follow the [trial installation guide](https://pro.rv-grid.com/guides/installation-npm-trial/). Tokens belong in environment or package-manager configuration, not the repository.

## 2. Define the typed analytical contract

One input row should represent one business observation. Dimensions describe fields and available aggregations; Values choose which aggregation runs in the initial report.

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

Rows build the vertical hierarchy, Columns build grouped headers, Values select calculations, and Filters constrain source members before aggregation. This matches the familiar model described in Microsoft's [PivotTable Field List guide](https://support.microsoft.com/en-us/excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable).

## 3. Build the standalone Angular component

The following component shows the framework-specific core. The [repository implementation](https://github.com/revolist/pivot/blob/main/src/pivot.angular.ts) adds shared financial presets and production styling.

```ts
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevoGrid } from '@revolist/angular-datagrid';
import {
  createPivotChartsRenderer,
  createSerializablePivotConfig,
  exportVisiblePivotToCsv,
  parsePivotStateJson,
  PIVOT_MODEL_CHANGED_EVENT,
  PivotChartsPlugin,
  PivotChartsUiPlugin,
  PivotPlugin,
  serializePivotStateJson,
  type PivotConfig,
} from '@revolist/revogrid-enterprise';
import { createPivotConfig, dimensions } from './pivot-config';
import { generateSalesRows, type SalesRow } from './sales-data';

const STORAGE_KEY = 'angular-sales-pivot:v1';
const DATASET_SIZES = [10_000, 100_000, 350_000] as const;

@Component({
  selector: 'app-sales-pivot',
  standalone: true,
  imports: [CommonModule, RevoGrid],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <main class="analytics-workspace">
      <header>
        <button
          *ngFor="let size of datasetSizes"
          [disabled]="busy()"
          (click)="runDataset(size)"
        >
          Test {{ size.toLocaleString() }} rows
        </button>
        <button (click)="openChart()">Open linked chart</button>
        <button (click)="downloadCsv()">Export CSV for Excel</button>
        <span aria-live="polite">{{ status() }}</span>
      </header>

      <revo-grid
        #gridElement
        style="height: 680px"
        [source]="rows()"
        [pivot]="pivot()"
        [pivotCharts]="pivotCharts"
        [pivotChartsUi]="pivotChartsUi"
        [plugins]="plugins"
        [readonly]="true"
        [resize]="true"
        [filter]="true"
        [range]="true"
        [hideAttribution]="true"
        (pivot-config-update)="configUpdate($event)"
      ></revo-grid>
    </main>
  `,
})
export class SalesPivotComponent {
  @ViewChild('gridElement', { read: ElementRef })
  gridElement?: ElementRef<HTMLRevoGridElement>;

  readonly datasetSizes = DATASET_SIZES;
  readonly plugins = [PivotPlugin, PivotChartsPlugin, PivotChartsUiPlugin];
  readonly pivotCharts = {
    renderer: createPivotChartsRenderer(),
    defaultChartType: 'groupedColumn' as const,
    limits: { maxCategories: 100, maxSeries: 80, maxDataPoints: 2_000 },
  };
  readonly pivotChartsUi = { contextMenu: true };
  readonly rows = signal<SalesRow[]>(generateSalesRows(10_000));
  readonly pivotConfig = signal<PivotConfig>(this.restoreConfig());
  readonly busy = signal(false);
  readonly benchmarkMs = signal<number | null>(null);
  readonly pivot = computed(() => this.pivotConfig());
  readonly status = computed(() => this.busy()
    ? 'Building Pivot…'
    : `${this.rows().length.toLocaleString()} rows${this.benchmarkMs() === null ? '' : ` · Pivot ${this.benchmarkMs()!.toFixed(1)} ms`}`);

  constructor() {
    effect(() => {
      try {
        const state = createSerializablePivotConfig(this.pivotConfig());
        localStorage.setItem(STORAGE_KEY, serializePivotStateJson(state));
      } catch {}
    });
  }

  configUpdate(event: CustomEvent<Partial<PivotConfig>>) {
    this.pivotConfig.update((current) => ({
      ...current,
      ...event.detail,
      dimensions,
    }));
  }

  async runDataset(rowCount: number) {
    const grid = this.gridElement?.nativeElement;
    if (!grid || this.busy()) return;
    this.busy.set(true);
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
    this.rows.set(nextRows);
    this.benchmarkMs.set(await committed);
    this.busy.set(false);
  }

  async openChart() {
    const grid = this.gridElement?.nativeElement;
    if (!grid) return;
    const plugins = await grid.getPlugins();
    const chartsUi = plugins.find(
      (plugin) => plugin instanceof PivotChartsUiPlugin,
    ) as PivotChartsUiPlugin | undefined;
    await chartsUi?.openChart({ linked: true, drillSyncMode: 'both' });
  }

  downloadCsv() {
    const grid = this.gridElement?.nativeElement as
      | (HTMLRevoGridElement & { pinnedBottomSource?: SalesRow[] })
      | undefined;
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
    link.download = 'angular-sales-pivot.csv';
    link.click();
    URL.revokeObjectURL(url);
  }

  private restoreConfig(): PivotConfig {
    const fallback = createPivotConfig();
    try {
      const json = localStorage.getItem(STORAGE_KEY);
      if (!json) return fallback;
      return { ...fallback, ...parsePivotStateJson(json), dimensions } as PivotConfig;
    } catch {
      return fallback;
    }
  }
}
```

The grid query is only used for public properties, plugin discovery, and event attachment. It does not inspect or mutate RevoGrid's internal DOM.

## 4. Signals, configuration events, and persistence

`pivot-config-update` is the boundary from user actions to Angular state. Replace the configuration signal with a new object so the computed grid input is invalidated predictably.

Use `effect` for local storage because it synchronizes signal state to a non-reactive browser API. Do not put storage writes in `computed`: computed signals should remain derivations. Angular's current guidance describes effects as the escape hatch for [side effects on non-reactive APIs](https://angular.dev/guide/signals/effect).

Serialization removes functions and DOM references. Restore the saved fields onto a fresh runtime config and explicitly replace `dimensions` so custom aggregators return.

## 5. Linked charts and cleanup

`PivotChartsUiPlugin.openChart({ linked: true })` creates a chart that refreshes after committed Pivot revisions. `drillSyncMode: 'both'` synchronizes supported chart drill navigation with the Pivot frontier.

If the application mounts a chart into its own container with `mountPivotChart`, store the returned ref and call `destroy()` from `ngOnDestroy`. The dialog-based example delegates dialog cleanup to the UI plugin.

## 6. Export a report that Excel can open

The Pivot-aware CSV helper reads generated columns, the current Pivot body, and pinned grand totals. It exports the analytical answer rather than the raw input.

Use native XLSX only when the workflow requires workbook styling, formulas, multiple worksheets, or Excel metadata. Keep that workbook layer separate and test exact generated-header, subtotal, and grand-total fidelity.

## 7. Test 10,000, 100,000, and 350,000 rows

The benchmark starts immediately before signal replacement and ends at `pivot-model-changed`. It therefore includes the Angular-to-grid property update and Pivot computation but avoids guessing from a timeout.

### Reference model baseline

| Source rows | Median model time | Product implication |
| ---: | ---: | --- |
| 10,000 | 126.76 ms | Interactive for the reference configuration. |
| 100,000 | 1,202.23 ms | Use an explicit progress state. |
| 350,000 | 4,334.02 ms | Completes, but consider worker/server execution. |

Environment: Apple M1 Pro, 8 CPU cores, 16 GiB, macOS 26.4, Node.js 24.13.0. The isolated run used two row dimensions, two column dimensions, one filter, four measures, totals, and a sorting-based P90 aggregation. It excluded Angular rendering, data generation, chart refresh, and export.

Measure a production Angular build on the median target device. High-cardinality axes, expanded groups, many measures, and percentile-style aggregations can be more expensive than this controlled fixture.

## 8. Client-side versus server-side analytics

Client-side Pivot works well when source rows already belong in the browser, memory is acceptable, and reconfiguration meets the latency objective. Choose the remote Pivot contracts when:

- authorization must be applied before aggregation;
- raw records must remain on the server;
- a warehouse or OLAP service owns authoritative measures;
- high cardinality or custom calculations exceed browser budgets;
- multiple products must share saved views and definitions.

Angular still controls Rows, Columns, Values, Filters, and drill state; the server performs analytical requests and returns a renderable model.

## 9. Angular SSR and hydration

Server-render static headings, filters, and loading states, but create the grid only in the browser. Keep plugin classes, aggregator functions, local storage, `ElementRef`, and chart containers out of transferred state.

For route-level lazy loading, import the standalone Pivot component only on the analytics route. For SSR applications, guard browser APIs with `isPlatformBrowser` or mount the interactive component in a browser-only branch. Pass serializable source rows or a remote analytical endpoint from server-owned data services.

## Angular Pivot Table production checklist

- Use signals for array/config replacement and computed signals for pure inputs.
- Keep the component `OnPush`.
- Use public grid properties, events, and plugin methods through the view query.
- Rehydrate runtime functions after saved-state parsing.
- Include pinned totals in export.
- Show progress and disable overlapping benchmarks.
- Destroy application-mounted charts in `ngOnDestroy`.
- Benchmark production bundles on representative devices.
- Move aggregation to a server when governance or latency requires it.

## Angular Pivot Table FAQ

### Does drag-and-drop configuration work with Angular signals?

Yes. The field panel emits a configuration patch. Merge it into the configuration signal, and Angular updates the bound `pivot` input.

### Should every Pivot cell be an Angular component?

No. Angular owns the product shell and state; RevoGrid virtualizes the high-frequency cell viewport. Use cell templates only where application-specific rendering adds value.

### Can it export XLSX?

The tutorial uses Pivot-aware UTF-8 CSV for dependable Excel interchange. Add the Pro XLSX layer when native workbook structure is part of the acceptance criteria.

### Is 350,000 rows guaranteed to be fast?

No. The reference shape completes, but its custom P90 measure took roughly 4.3 seconds in the isolated model test. Your cardinality, device, filters, totals, and aggregations determine the real result.

## Next steps

Run the [live Pivot demo](https://pivot.rv-grid.com/demo/), inspect the [Angular source](https://github.com/revolist/pivot/blob/main/src/pivot.angular.ts), and evaluate licensing and server-side options on the [Pivot product page](/pivot/).
