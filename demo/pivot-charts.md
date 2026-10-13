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
  <div class="demo-main-widget"><ChartsDashboard /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; }
.demo-main-widget :deep(.dashboard-controls),
.demo-main-widget :deep(.dashboard-layout) {
  box-sizing: border-box;
  width: 100%;
  max-width: none;
}
</style>
