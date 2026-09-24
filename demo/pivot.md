---
title: JavaScript Pivot Table Component Demo
description: Try the RevoGrid JavaScript pivot table component with drag-and-drop fields, aggregation, filtering, drill-down, grouped axes, totals, and export.
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
      content: JavaScript pivot table component demo, RevoGrid Pivot demo, JavaScript pivot grid, pivot table data grid, analytics workspace, React pivot table, Vue pivot table, Angular pivot table, enterprise data grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/pivot/styles.css'

import PivotShowcase from '@revogrid-demos/pro-advanced-pivot/src/pivot.vue'
</script>

<DemoPageLayout demo-id="pivot">
  <nav class="pivot-demo-links" aria-label="Pivot demo collection">[Overview](/demo/pivot) · [Charts](/demo/pivot-charts) · [Financial](/demo/pivot-financial) · [Operations](/demo/pivot-operations) · [Scale](/demo/pivot-scale) · [Import](/demo/pivot-import)</nav>
  <div class="demo-main-widget">
    <PivotShowcase />
  </div>
</DemoPageLayout>

<style scoped>
.pivot-demo-links { display: flex; flex-wrap: wrap; gap: 12px; padding: 8px 16px; border-bottom: 1px solid var(--vp-c-divider); }
.pivot-demo-links a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
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
