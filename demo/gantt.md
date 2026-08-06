---
title: Gantt Chart Project Planning Demo
description: Plan tasks in RevoGrid Pro Gantt with dependencies, milestones, drag-and-resize scheduling, resources, working calendars, and critical paths.
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
      content: RevoGrid Gantt demo, JavaScript Gantt chart, project planning grid, task timeline, scheduling grid, dependencies, milestones, resource planning, React Gantt grid, Vue Gantt grid, Angular Gantt grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const GanttShowcase = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.vue')
)
</script>

<DemoPageLayout demo-id="gantt">
  <div class="demo-main-widget">
    <GanttShowcase />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  padding-top: 10px;
  border-radius: 0;
}
:deep(.gantt-showcase-controls) {
  display: none;
}
</style>
