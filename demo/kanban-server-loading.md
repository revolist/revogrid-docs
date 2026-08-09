---
title: RevoKanban 100K Server-Loading Demo
description: Page through 100,000 remote cards in the RevoKanban JavaScript Kanban board component with virtualized loading, accurate totals, and request status.
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
      content: RevoKanban server loading demo, RevoKanban JS, remote Kanban data, 100000 card Kanban, virtualized JavaScript Kanban board, offset pagination
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const KanbanServerLoading = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.vue')
)
</script>

<DemoPageLayout demo-id="kanban-server-loading">
  <div class="demo-main-widget">
    <KanbanServerLoading />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
