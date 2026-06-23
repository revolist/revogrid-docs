---
title: Event Scheduler Demo - RevoGrid Enterprise Shift Planning Workspace
description: Explore the RevoGrid Event Scheduler demo for employee shifts, weekly calendars, resource scheduling, locked events, overlap conflicts, drag creation, move, resize, and delete flows.
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
      content: Explore the RevoGrid Event Scheduler demo for employee shifts, weekly calendars, resource scheduling, locked events, overlap conflicts, drag creation, move, resize, and delete flows.
  - - meta
    - name: keywords
      content: RevoGrid Event Scheduler demo, JavaScript event scheduler demo, shift planner demo, employee scheduling demo, resource scheduler demo, weekly scheduler, booking scheduler, workforce scheduler, React event scheduler, Vue event scheduler, Angular event scheduler
  - - meta
    - property: og:title
      content: Event Scheduler Demo - RevoGrid Enterprise Shift Planning Workspace
  - - meta
    - property: og:description
      content: Build shift planning and event scheduling workflows with RevoGrid Event Scheduler, week views, resources, conflicts, and controlled editing.
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'

const EventSchedulerShiftWeek = defineAsyncComponent(() =>
  import('@revolist/revogrid-examples/components/event-scheduler/shift-week/index.vue')
)
</script>

<ClientOnly>
  <div class="demo-main-widget">
    <EventSchedulerShiftWeek />
  </div>
</ClientOnly>

<style scoped>
.demo-main-widget {
  min-height: calc(100vh - 60px);
  height: calc(100vh - 60px);
  margin-top: 40px;
  border-radius: 0;
}
:deep(.event-scheduler-shift-week-sidebar) {
  display: none !important;
}
</style>
