---
title: Project Workspace Planning Demo
description: Edit one shared task model across synchronized Data Grid, Kanban, Gantt, Scheduler, and Calendar views in RevoGrid Pro Advanced.
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
      content: RevoGrid planning demo, project workspace, synchronized data grid, Kanban board, Gantt chart, scheduler, calendar, Vue data grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/gantt/styles.css'
import '@revolist/kanban/styles.css'
import '@revolist/scheduler/styles.css'
import { defineAsyncComponent } from 'vue'
const PlanningViews = defineAsyncComponent(() => import('@revogrid-demos/pro-advanced-planning/src/planning.vue'))
</script>

<DemoPageLayout demo-id="planning">
  <div class="demo-main-widget">
    <PlanningViews />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  padding-top: 0;
  border-radius: 0;
}
</style>
