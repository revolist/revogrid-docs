---
title: 20Y-Timeline Gantt Demo
description: Explore 100 linked tasks across a twenty-year Gantt timeline with month-and-quarter scaling and responsive horizontal rendering.
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
      content: RevoGrid long timeline Gantt demo, 20 year Gantt chart, horizontal Gantt performance, multi-year project timeline, JavaScript Gantt, React Gantt, Vue Gantt, Angular Gantt
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const GanttHorizontalBigData = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-gantt/src/examples/horizontal-big-data/gantt-horizontal-big-data.vue')
)
</script>

<DemoPageLayout demo-id="gantt-horizontal-big-data">
  <div class="demo-main-widget">
    <GanttHorizontalBigData />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  padding-top: 10px;
  border-radius: 0;
}
</style>
