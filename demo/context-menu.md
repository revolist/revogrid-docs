---
title: Context Menu & Cell Formatting Demo
description: Open selection-aware menus for cells, rows, columns, and grouped headers, then apply rich cell formatting in this RevoGrid Pro data grid demo.
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
      content: RevoGrid context menu demo, data grid cell formatting, format cells editor, row context menu, column context menu, multi-range formatting, JavaScript data grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent } from 'vue'

const ContextMenuDemo = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.vue')
)
</script>

<DemoPageLayout demo-id="context-menu">
  <div class="demo-main-widget">
    <ContextMenuDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
