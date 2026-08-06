---
title: Project Tracker Data Grid Demo
description: Edit projects, owners, priorities, statuses, and deadlines in a color-coded RevoGrid Pro project tracker with filtering and drag ordering.
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
      content: RevoGrid Project Tracker demo, project tracking grid, color-coded data grid, task management grid, editable project grid, priority tracking, status grid, JavaScript data grid demo, React data grid, Vue data grid, Angular data grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const ProjectTable = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-project-table/src/project-table.vue')
)
</script>

<DemoPageLayout demo-id="project-tracker">
  <div class="demo-main-widget">
    <ProjectTable />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
