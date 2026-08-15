---
title: Column Collapse Data Grid Demo
description: Collapse grouped data grid columns into sealed summary fields, then expand, filter, resize, and select rows in this RevoGrid Pro demo.
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
      content: RevoGrid column collapse demo, collapsible columns, grouped column headers, column drill down, sealed columns, expandable data grid columns, JavaScript data grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent } from 'vue'

const ColumnCollapseDemo = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-column-collapse/src/column-collapse.vue')
)
</script>

<DemoPageLayout demo-id="column-collapse">
  <div class="demo-main-widget">
    <ColumnCollapseDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
