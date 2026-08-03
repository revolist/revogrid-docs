---
title: Unified Planning Suite Demo
description: Use Data Grid, Gantt, Scheduler, and Calendar together in one RevoGrid Pro Advanced package with synchronized tasks, dates, and assignments.
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
      content: RevoGrid planning demo, JavaScript planning grid, Gantt scheduler demo, resource planning, project calendar, synchronized planning views, React planning grid, Vue planning grid, Angular planning grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const PlanningViews = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-planning/src/planning.vue')
)
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
  padding-top: 10px;
  border-radius: 0;
}
</style>
