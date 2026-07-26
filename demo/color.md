---
title: Project Tracker Demo - RevoGrid Pro Color-Coded Workspace
description: Explore the RevoGrid Pro Project Tracker demo with color-coded status cells, editable task data, priority tracking, owners, deadlines, and high-performance project grids.
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
      content: Explore the RevoGrid Pro Project Tracker demo with color-coded status cells, editable task data, priority tracking, owners, deadlines, and high-performance project grids.
  - - meta
    - name: keywords
      content: RevoGrid Project Tracker demo, project tracking grid, color-coded data grid, task management grid, editable project grid, priority tracking, status grid, JavaScript data grid demo, React data grid, Vue data grid, Angular data grid
  - - meta
    - property: og:title
      content: Project Tracker Demo - RevoGrid Pro Color-Coded Workspace
  - - meta
    - property: og:description
      content: Track projects, owners, deadlines, priorities, and statuses in a color-coded RevoGrid Pro workspace with fast editable grid interactions.
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
