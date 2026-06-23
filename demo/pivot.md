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

import PivotShowcase from '@revolist/revogrid-examples/components/showcase-pivot/PivotShowcase.vue'
import ecommerceData from '@revolist/revogrid-examples/components/sys-data/ecommerce.data.json'

const pivotRows = ecommerceData.map((row, index) => ({
  ...row,
  Time: `${String(index % 24).padStart(2, '0')}:00`,
}))
</script>

<ClientOnly>
  <div class="demo-main-widget">
    <PivotShowcase :rows="pivotRows" />
  </div>
</ClientOnly>

<style scoped>
.demo-main-widget {
  min-height: calc(100vh - 60px);
  height: calc(100vh - 60px);
  margin-top: 40px;
  border-radius: 0;
}
</style>
