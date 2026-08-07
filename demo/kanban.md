---
title: Kanban Workflow Board Demo
description: Manage cards across configurable workflow columns and swimlanes with drag-and-drop ordering, WIP limits, rules, and inline editing.
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
      content: RevoGrid Kanban demo, JavaScript Kanban board, workflow board, swimlanes, WIP limits, drag and drop cards, React Kanban, Vue Kanban, Angular Kanban
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const KanbanShowcase = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.vue')
)
</script>

<DemoPageLayout demo-id="kanban">
  <div class="demo-main-widget">
    <KanbanShowcase />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
