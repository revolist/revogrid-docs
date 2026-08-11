---
title: JavaScript Scheduler and Shift Planning Demo
description: Schedule employee shifts and resources with RevoGrid Pro Advanced using calendar views, conflict detection, and drag-to-create, move, or resize.
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
      content: JavaScript Scheduler, JavaScript event scheduler demo, shift planner demo, employee scheduling demo, resource scheduler demo, weekly scheduler, booking scheduler, workforce scheduler, React event scheduler, Vue event scheduler, Angular event scheduler
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/scheduler/styles.css'
import { defineAsyncComponent } from 'vue'

const EventSchedulerShiftWeek = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-scheduler/src/scheduler.vue')
)
</script>

<DemoPageLayout demo-id="event-scheduler">
  <div class="demo-main-widget">
    <EventSchedulerShiftWeek />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
:deep(.event-scheduler-shift-week-sidebar) {
  display: none !important;
}
</style>
