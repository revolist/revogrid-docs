---
title: Large Dataset Gantt Demo
description: Explore 10,000 virtualized Gantt tasks and 19,796 dependencies across a three-month project while keeping timeline rendering responsive.
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
      content: RevoGantt big data demo, 10000 task Gantt chart, Gantt performance, virtualized Gantt, large project timeline, JavaScript Gantt benchmark, React Gantt, Vue Gantt, Angular Gantt
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const GanttBigData = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.vue')
)
</script>

<DemoPageLayout demo-id="gantt-big-data">
  <div class="demo-main-widget">
    <GanttBigData />
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
