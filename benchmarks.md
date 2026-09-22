---
title: RevoGrid Data Grid Benchmarks
description: Reproducible RevoGrid benchmark results and methodology for large-grid rendering, scrolling, memory, and editing latency.
pageClass: benchmarks-page
aside: false
outline: false
head:
  - - meta
    - name: keywords
      content: RevoGrid benchmarks, data grid performance benchmark, JavaScript grid FPS, grid memory usage, grid edit latency, virtual scrolling benchmark
---

<script setup>
import BenchmarkLiveDemo from './.vitepress/theme/BenchmarkLiveDemo.vue'
</script>

# RevoGrid Benchmarks

::: info Scheduling benchmark
Looking for scheduling measurements? See the [**RevoGrid Gantt browser benchmark**](/benchmarks/gantt), including the full 100/1K/5K/10K task matrix, dependency densities, raw JSON/CSV, screenshot, video, and live workload.
:::

This page records a reproducible local RevoGrid benchmark run across 1K, 10K, 100K, and 1 million rows. The results below were captured on September 22, 2026, against a local VitePress dev server.

Benchmark numbers are environment-dependent. Treat these as a published run with its machine, browser, dataset, and renderer setup documented, not as a universal guarantee for every application.

::: tip Related comparative benchmark
Read [**Battle of the Rows: The Limits of Data Performance**](https://dev.to/kumakint/battle-of-the-rows-the-limits-of-data-performance-4mcn) for a 2024 comparison of RevoGrid, AG Grid, and Handsontable across datasets up to 400,000 rows, covering memory usage, scrolling FPS, and initial rendering. Its harness differs from the benchmark documented here, so compare the results with that context in mind.
:::

## Measure performance in your browser

These live values describe this page and the selected workload. They are not universal product guarantees or directly comparable with results collected on another machine, browser, display, or page. You can also open the same workspace on the dedicated [Grid at Scale demo](/demo/).

<ClientOnly>
  <BenchmarkLiveDemo />
</ClientOnly>

## Dataset and renderer

| Field                    | Value                                                                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Row counts               | 1,000; 10,000; 100,000; 1,000,000                                                                                                                               |
| Column counts            | 100 for every workload                                                                                                                                          |
| Total logical cells      | 100,000; 1,000,000; 10,000,000; 100,000,000 respectively                                                                                                        |
| Cell renderer complexity | Each scenario uses 1 pinned custom name cell with status badge, 1 custom status badge column, 8 custom formatted numeric columns, and 90 plain numeric columns. |
| Editors enabled          | Built-in editing available; latency measured through targeted `setDataAt` updates                                                                               |
| Pinned rows or columns   | 1 pinned start column                                                                                                                                           |
| Row height               | 36 px                                                                                                                                                           |
| Column width             | 110 px default, with custom widths for pinned/status columns                                                                                                    |

Every workload uses the same 100-column shape, so the matrix isolates row-count growth while retaining the same visible column and renderer workload.

## Results

Each workload was measured **five times in a fresh browser context**. The headline number is the median of those five runs; the range shows the smallest and largest run. Arithmetic means and every individual run are also available in [the result JSON](/benchmarks/result.json).

| Workload (rows × columns) | Data preparation, ms (range) | First data paint, ms (range) | Prepare + paint, ms (range) |
| ------------------------- | ---------------------------: | ---------------------------: | --------------------------: |
| 1,000 × 100               |             0.40 (0.30–0.50) |        101.00 (93.30–101.60) |       101.40 (93.80–102.00) |
| 10,000 × 100              |             1.30 (1.20–1.40) |         92.20 (91.40–106.60) |        93.50 (92.60–107.90) |
| 100,000 × 100             |          12.30 (11.60–13.40) |       106.40 (101.30–141.70) |      118.70 (112.90–155.10) |
| 1,000,000 × 100           |       122.10 (118.40–147.40) |       112.90 (109.10–124.20) |      233.00 (231.00–265.20) |

| Workload   | Scroll FPS, raw headless (range) | Heap after warmup, MiB (range) | Heap after interactions, MiB (range) |
| ---------- | -------------------------------: | -----------------------------: | -----------------------------------: |
| 1K × 100   |            118.33 (84.67–120.33) |            93.09 (93.05–93.53) |                110.19 (90.65–124.66) |
| 10K × 100  |            120.00 (83.67–120.67) |            92.58 (92.39–92.76) |                102.42 (90.48–126.70) |
| 100K × 100 |            120.00 (90.33–120.33) |          103.38 (98.75–104.33) |               118.23 (111.08–136.81) |
| 1M × 100   |           120.00 (107.33–120.33) |         174.00 (172.23–174.01) |               196.97 (180.71–212.03) |

Data preparation measures construction of the columns and one row record per source row. Numeric metric values use shared lazy accessors, so the benchmark retains a 100-column grid without allocating 100 million duplicate properties for the 1M-row case. First data paint starts just before assigning `columns` and `source`, waits until the first data row appears, and then waits two animation frames. Prepare + paint is calculated within each run before taking its median; it excludes page load and the grid's initial empty mount. The previous table timed the first `aftergridrender` event, which could arrive before data was painted; those values should not be compared with this run. The row count does not increase paint time proportionally because the grid virtualizes rows.

The scripted vertical scroll lasts three seconds and travels at most 140,000 px. Raw headless Chromium FPS is not display-refresh capped and varies between runs; each run reached at least 60 FPS. The median dropped-frame counts (gaps over 20 ms) were 2, 0, 0, and 0. The median per-run p95 of 30 targeted `setDataAt` calls was 0.10, 0.20, 0.10, and 0.20 ms. This measures the API call, not a user typing into an editor or a visible edit paint, and browser timer precision limits its usefulness as a comparison.

Median page-wide DOM node counts were 896, 896, 896, and 838. The grid rendered 60 viewport rows in every run, with a median of 260, 260, 260, and 220 data cells. The machine was a MacBookPro18,3 (Apple M1 Pro, 8 CPU cores, 16 GiB RAM) running macOS 26.4; the browser was Chromium 145.0.7632.6 at a 1440 × 900 viewport.

## Memory verification

In each run, the benchmark reads Chromium `performance.memory.usedJSHeapSize` five times after a one-second idle warmup and five times after the scroll and edit loop. It takes the median within each run, then the median of five run medians for the headline table. These numbers describe the whole benchmark page, not just grid-owned objects. All 200 raw heap samples and their per-run medians are in [the published result JSON](/benchmarks/result.json).

| Workload   | Five warmup run medians (MiB)          | Five interaction run medians (MiB)     |
| ---------- | -------------------------------------- | -------------------------------------- |
| 1K × 100   | 93.53, 93.09, 93.09, 93.08, 93.05      | 109.81, 90.65, 110.19, 112.96, 124.66  |
| 10K × 100  | 92.39, 92.58, 92.76, 92.57, 92.61      | 100.77, 126.70, 112.56, 90.48, 102.42  |
| 100K × 100 | 98.75, 103.38, 104.33, 103.40, 99.39   | 118.23, 111.08, 116.98, 136.81, 136.58 |
| 1M × 100   | 174.00, 173.99, 174.00, 172.23, 174.01 | 196.85, 180.71, 196.97, 208.92, 212.03 |

## Comparison methodology

Use the same benchmark harness for every grid being compared. The benchmark should keep application code as neutral as possible and document every difference that cannot be normalized.

- Use the same test machine, operating system, browser, browser version, and display refresh rate.
- Run cold and warm measurements separately for cross-grid comparisons.
- Use the same row count, column count, data shape, renderer complexity, row height, and column width.
- Repeat each scenario and publish the median and spread. This run uses five browser contexts per workload and records all individual measurements.
- Measure scrolling with scripted scroll, not only manual observation. This run measures vertical scroll FPS.
- Measure memory after initial warmup and again after a documented interaction loop.
- Measure edit latency with a defined update operation; this harness times targeted `setDataAt` calls, not typing through an editor.
- Keep virtualization settings, pinned areas, custom renderers, filtering, sorting, and editors visible in the benchmark configuration.
- Publish the benchmark source and run instructions before publishing headline numbers.

The published runner measures each of these workloads with the same render, scroll, heap, and update sequence:

| Dataset                      | Logical cells | Focus                          |
| ---------------------------- | ------------: | ------------------------------ |
| 1K rows × 100 columns        |  100 thousand | Baseline fixed-column workload |
| 10K rows × 100 columns       |     1 million | Moderate row scale             |
| 100K rows × 100 columns      |    10 million | Large row scale                |
| 1 million rows × 100 columns |   100 million | Maximum fixed-column workload  |

## Runnable benchmark repo

The benchmark is runnable from this docs workspace:

```sh
pnpm exec vitepress dev --host 127.0.0.1 --port 5173
node scripts/run-benchmark.mjs
```

The script writes:

- `public/benchmarks/result.json` with all four workloads, raw samples, machine details, and asset paths
- One illustrative screenshot and video per workload from the first run in `public/benchmarks/`

## Screenshots and video

| Workload   | Screenshot after interactions                  | Scroll and update video                          |
| ---------- | ---------------------------------------------- | ------------------------------------------------ |
| 1K × 100   | [PNG](/benchmarks/revo-grid-benchmark-1k.png)  | [WebM](/benchmarks/revo-grid-benchmark-1k.webm)  |
| 10K × 100  | [PNG](/benchmarks/revo-grid-benchmark-10k.png) | [WebM](/benchmarks/revo-grid-benchmark-10k.webm) |
| 100K × 100 | [PNG](/benchmarks/revo-grid-benchmark.png)     | [WebM](/benchmarks/revo-grid-benchmark.webm)     |
| 1M × 100   | [PNG](/benchmarks/revo-grid-benchmark-1m.png)  | [WebM](/benchmarks/revo-grid-benchmark-1m.webm)  |

[Raw result data](/benchmarks/result.json) includes the machine, browser, dataset, five runs, medians, means, ranges, heap samples, and asset paths. No browser performance trace was recorded.

![RevoGrid benchmark screenshot](/benchmarks/revo-grid-benchmark.png)

## Related docs

- [Battle of the Rows: The Limits of Data Performance](https://dev.to/kumakint/battle-of-the-rows-the-limits-of-data-performance-4mcn)
- [Performance and Virtualization](/guide/performance)
- [Understanding Viewports](/guide/viewports)
- [Programmatic Grid Control](/guide/programmatic-control)
