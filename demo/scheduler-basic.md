---
title: Basic JavaScript Scheduler Demo
description: Create, move, resize, and delete events on a simple resource timeline with eight team members.
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
      content: basic scheduler demo, resource timeline, JavaScript scheduler, React scheduler, Vue scheduler, Angular scheduler
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/scheduler/styles.css'
import { defineAsyncComponent } from 'vue'

const SchedulerBasic = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-scheduler/src/examples/scheduler-basic/SchedulerBasic.vue')
)
</script>

<DemoPageLayout demo-id="scheduler-basic">
  <div class="demo-main-widget">
    <SchedulerBasic />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
:deep(.scheduler-basic) {
  height: 100%;
  min-height: 0;
}
</style>
