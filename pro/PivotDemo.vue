<template>
  <div class="pivot-showcase" :data-chart-stage="status">
    <section
      id="pivot-playground"
      class="container report-section"
      aria-label="Interactive Pivot workspace"
    >
      <div
        class="pivot-product-workspace"
        @aftergridinit="mountCharts"
        @pivot-model-changed.capture="mountCharts"
      >
        <ClientOnly>
          <PivotShowcase initial-preset="sales" />
          <template #fallback
            ><div class="pivot-workspace-loading" role="status">
              Loading the Pivot workspace…
            </div></template
          >
        </ClientOnly>
      </div>
      <div class="report-footnote">
        <span>Contoso retail sample · Revenue in USD</span
        ><a href="#pivot-charts">See this report in charts ↓</a>
      </div>
    </section>

    <section id="pivot-charts" class="charts-section" aria-labelledby="charts-title">
      <div class="container">
        <div class="showcase-heading">
          <div>
            <span class="section-tag">Pivot charts</span>
            <h2 id="charts-title">One report. Every perspective.</h2>
            <p>
              Compare quarterly revenue, country performance, and revenue share from the same Pivot
              report.
            </p>
          </div>
        </div>
        <div class="chart-context">
          <span class="linked-indicator"></span><span>Linked to report filters</span
          ><strong>{{ filterContext }}</strong>
        </div>
        <p v-if="status === 'loading'" role="status">Loading linked charts…</p>
        <p v-if="error" role="alert">{{ error }}</p>
        <div class="quarter-legend" aria-label="Chart legend: quarters">
          <span v-for="(quarter, index) in SHOWCASE_QUARTERS" :key="quarter"
            ><i :style="{ background: SHOWCASE_COLORS[index] }"></i>{{ quarter }}</span
          >
          <span class="legend-unit">Revenue in USD · Hover or focus a mark for details</span>
        </div>
        <div class="showcase-charts">
          <article class="showcase-chart-card">
            <span class="chart-kicker">Compare</span>
            <h3>Quarterly performance</h3>
            <p>See each country’s revenue, quarter by quarter.</p>
            <div
              ref="columnHost"
              class="showcase-chart"
              aria-label="Quarterly revenue by country"
            ></div>
          </article>
          <article class="showcase-chart-card">
            <span class="chart-kicker">Break it down</span>
            <h3>Country revenue mix</h3>
            <p>See the quarters behind each country’s total.</p>
            <div
              ref="comparisonHost"
              class="showcase-chart"
              aria-label="Stacked revenue by country"
            ></div>
          </article>
          <article class="showcase-chart-card">
            <span class="chart-kicker">See the whole</span>
            <h3>Share by quarter</h3>
            <p>Find the quarters that contribute the most.</p>
            <div ref="shareHost" class="showcase-chart" aria-label="Revenue share by quarter"></div>
          </article>
        </div>
        <div class="charts-more">
          <p>Go beyond the overview.</p>
          <span>Line &amp; area</span><span>Treemap</span><span>Heatmap</span
          ><span>Combination charts</span
          ><a :href="resolveLink('https://pro.rv-grid.com/guides/pivot-charts/')"
            >Discover the chart library ↗</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import PivotShowcase from '@revogrid-demos/pro-advanced-pivot/src/pivot.vue'
import {
  SHOWCASE_QUARTERS,
  SHOWCASE_COLORS,
  usePivotShowcaseCharts,
} from '../pivot/page-layout/usePivotShowcaseCharts'
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/pivot/styles.css'

defineProps<{ resolveLink: (href: string) => string }>()
const { isDark } = useData()
const { columnHost, comparisonHost, shareHost, status, error, filterContext, mountCharts } =
  usePivotShowcaseCharts(isDark)
</script>

<style lang="scss" src="../pivot/page-layout/pivot-showcase.scss"></style>
