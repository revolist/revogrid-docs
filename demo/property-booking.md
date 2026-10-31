---
title: Property Booking Scheduler Demo
description: Book properties by the night with conflict prevention, guest capacity checks, and daily occupancy totals.
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
      content: property booking demo, reservation calendar, nightly booking scheduler, occupancy totals, React booking calendar, Vue booking calendar, Angular booking calendar
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/scheduler/styles.css'
import { defineAsyncComponent } from 'vue'

const PropertyBooking = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-advanced-scheduler/src/examples/property-booking/PropertyBooking.vue')
)
</script>

<DemoPageLayout demo-id="property-booking">
  <div class="demo-main-widget">
    <PropertyBooking />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
