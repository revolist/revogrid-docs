---
title: Tree Data Grid Hierarchy Demo
description: Explore expandable hierarchical data grid rows with sticky parents, animated transitions, drag ordering, filters, selection, and export.
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
      content: RevoGrid tree data demo, hierarchical data grid, expandable tree rows, sticky parent rows, drag row ordering, tree filtering, Excel export, JavaScript data grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent } from 'vue'

const TreeDataDemo = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-tree-data/src/tree.vue')
)
</script>

<DemoPageLayout demo-id="tree-data">
  <div class="demo-main-widget">
    <TreeDataDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
