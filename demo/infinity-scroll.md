---
title: Infinity Scroll Data Grid Demo
description: Load remote data grid rows in buffered chunks with server-side sorting, filtering, pinned summaries, and Excel export in RevoGrid Pro.
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
      content: RevoGrid infinity scroll demo, infinite scrolling data grid, remote data loading, server-side sorting, server-side filtering, virtual data grid, Excel export
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent } from 'vue'

const InfinityScrollDemo = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-infinity-scroll/src/infinity-scroll.vue')
)
</script>

<DemoPageLayout demo-id="infinity-scroll">
  <div class="demo-main-widget">
    <InfinityScrollDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
