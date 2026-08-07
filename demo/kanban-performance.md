---
title: 50K-Task Kanban Performance Demo
description: Explore 50,000 virtualized tasks across ten workflow columns and two team swimlanes while keeping a dense Kanban board responsive.
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
      content: RevoGrid Kanban performance demo, 50000 task Kanban, virtualized Kanban board, large workflow board, JavaScript Kanban benchmark
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const KanbanPerformance = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.vue')
)
</script>

<DemoPageLayout demo-id="kanban-performance">
  <div class="demo-main-widget">
    <KanbanPerformance />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
