---
title: Advanced Data Grid Filtering Demo
description: Combine filter presets, global search, expressions, selection cascades, date rules, and numeric sliders in the RevoGrid Pro filtering demo.
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
      content: RevoGrid filtering demo, advanced data grid filters, quick filter, expression filter, selection filter, slider filter, date filter, JavaScript data grid filtering
---

<script setup>
import 'virtual:uno.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent } from 'vue'

const FilteringDemo = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-filtering/src/filtering.vue')
)
</script>

<DemoPageLayout demo-id="filtering">
  <div class="demo-main-widget">
    <FilteringDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
