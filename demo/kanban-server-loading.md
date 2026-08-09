---
title: 100K Kanban Server-Loading Demo
description: Page through 100,000 remote Kanban cards in small virtualized chunks while showing loading placeholders, accurate totals, and request status.
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
      content: RevoGrid Kanban server loading demo, remote Kanban data, 100000 card Kanban, virtualized workflow board, offset pagination
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
