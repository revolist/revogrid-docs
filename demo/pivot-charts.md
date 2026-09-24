---
title: Pivot Charts Dashboard Demo
description: Explore linked charts and a Pivot report on synthetic USD sales data.
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/pivot/styles.css'
import ChartsDashboard from '@revogrid-demos/pro-advanced-pivot/src/charts-dashboard.vue'
</script>

<DemoPageLayout demo-id="pivot-charts">
  <nav class="pivot-demo-links" aria-label="Pivot demo collection">
    <a href="/demo/pivot">Overview</a>
    <a href="/demo/pivot-charts" aria-current="page">Charts</a>
    <a href="/demo/pivot-financial">Financial</a>
    <a href="/demo/pivot-operations">Operations</a>
    <a href="/demo/pivot-scale">Scale</a>
    <a href="/demo/pivot-import">Import</a>
  </nav>
  <div class="demo-main-widget"><ChartsDashboard /></div>
</DemoPageLayout>

<style scoped>
.pivot-demo-links { display: flex; flex-wrap: wrap; column-gap: 16px; row-gap: 4px; padding: 6px 16px; font-size: 12px; line-height: 20px; border-bottom: 1px solid var(--vp-c-divider); }
.pivot-demo-links a { white-space: nowrap; }
.pivot-demo-links a[aria-current="page"] { font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
.pivot-demo-links a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.demo-main-widget { min-height: 0; height: 100%; }
</style>
