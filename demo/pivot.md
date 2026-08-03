---
title: Pivot Grid Analytics Demo
description: Analyze data with RevoGrid Pro Pivot Grid using drag-and-drop fields, aggregation, filtering, drill-down, grouped axes, totals, and export.
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
head:
  - - meta
    - name: keywords
      content: RevoGrid Pivot Grid demo, JavaScript pivot grid, pivot table data grid, analytics workspace, aggregation grid, drill-down data grid, React pivot grid, Vue pivot grid, Angular pivot grid, enterprise data grid
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
