---
title: Gantt Chart Demo - RevoGrid Pro Planning Workspace
description: Explore the RevoGrid Pro Gantt Chart demo for project planning, task timelines, dependencies, milestones, drag-and-resize scheduling, and resource views.
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
head:
  - - meta
    - name: description
      content: Explore the RevoGrid Pro Gantt Chart demo for project planning, task timelines, dependencies, milestones, drag-and-resize scheduling, and resource views.
  - - meta
    - name: keywords
      content: RevoGrid Gantt demo, JavaScript Gantt chart, project planning grid, task timeline, scheduling grid, dependencies, milestones, resource planning, React Gantt grid, Vue Gantt grid, Angular Gantt grid
  - - meta
    - property: og:title
      content: Gantt Chart Demo - RevoGrid Pro Planning Workspace
  - - meta
    - property: og:description
      content: Build planning and timeline interfaces with RevoGrid Pro Gantt Chart, task scheduling, dependencies, milestones, and resource views.
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const GanttShowcase = defineAsyncComponent(() =>
  import('@revolist/revogrid-examples/components/gantt/GanttBasic.vue')
)
</script>

<ClientOnly>
  <div class="demo-main-widget">
    <GanttShowcase />
  </div>
</ClientOnly>

<style scoped>
.demo-main-widget {
  min-height: calc(100vh - 60px);
  height: calc(100vh - 60px);
  margin-top: 40px;
  padding-top: 10px;
  border-radius: 0;
}
</style>
