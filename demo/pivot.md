---
title: Pivot Grid Demo - RevoGrid Pro Analytics Workspace
description: Explore the RevoGrid Pro Pivot Grid demo for in-app analytics, aggregation, drill-down, row and column grouping, reordering, and high-performance data exploration.
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
head:
  - - meta
    - name: description
      content: Explore the RevoGrid Pro Pivot Grid demo for in-app analytics, aggregation, drill-down, row and column grouping, reordering, and high-performance data exploration.
  - - meta
    - name: keywords
      content: RevoGrid Pivot Grid demo, JavaScript pivot grid, pivot table data grid, analytics workspace, aggregation grid, drill-down data grid, React pivot grid, Vue pivot grid, Angular pivot grid, enterprise data grid
  - - meta
    - property: og:title
      content: Pivot Grid Demo - RevoGrid Pro Analytics Workspace
  - - meta
    - property: og:description
      content: Analyze complex datasets inside your application with RevoGrid Pro Pivot Grid, aggregation, grouping, drill-down, and high-performance grid rendering.
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

import PivotShowcase from '@revogrid-demos/pro-advanced-pivot/src/pivot.vue'
</script>

<DemoPageLayout demo-id="pivot">
  <div class="demo-main-widget">
    <PivotShowcase />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}

.demo-main-widget :deep(.financial-pivot-showcase) {
  padding-top: 8px;
}

.demo-main-widget :deep(financial-pivot-guidance) {
  display: none !important;
}
</style>
