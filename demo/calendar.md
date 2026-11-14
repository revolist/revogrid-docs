---
title: JavaScript Calendar Demo
description: Plan events with RevoGrid Scheduler calendar views, date navigation, multi-person assignments, team filters, and event editing.
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
      content: JavaScript Calendar, multi-assignment calendar demo, team calendar, shared event assignments, React calendar, Vue calendar, Angular calendar, day week month year schedule views
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/scheduler/styles.css'
import { defineAsyncComponent } from 'vue'

const CalendarMultiAssign = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-scheduler/src/examples/calendar-multiassign/CalendarMultiAssign.vue')
)
</script>

<DemoPageLayout demo-id="calendar">
  <div class="demo-main-widget">
    <CalendarMultiAssign />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
:deep(.calendar-multiassign) {
  height: 100%;
  min-height: 0;
  border-radius: 0;
}
</style>
