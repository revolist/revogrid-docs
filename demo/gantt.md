---
title: JavaScript Gantt Chart Demo – RevoGrid Gantt
description: Try RevoGrid Gantt with editable tasks, dependencies, milestones, drag-and-resize scheduling, resources, calendars, and critical path.
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
      content: RevoGrid Gantt demo, RevoGrid Gantt JavaScript Gantt chart, JavaScript Gantt chart demo, Gantt chart JS, project planning grid, task timeline, scheduling grid, dependencies, milestones, resource planning, React Gantt grid, Vue Gantt grid, Angular Gantt grid
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
