---
title: HR and Workforce Data Grid Demo
description: Explore editable employee records, filtering, grouping, and virtual scrolling in the RevoGrid HR data grid for high-volume workforce operations.
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
head:
  - - link
    - rel: canonical
      href: https://rv-grid.com/demo/grid-at-scale
  - - meta
    - name: keywords
      content: RevoGrid HR demo, large dataset grid, editable data grid, virtual scrolling, React data grid, Vue data grid, Angular data grid
---

<script setup>
import HRDemo from '@revogrid-demos/core-free/src/hr.vue'
</script>

<DemoPageLayout demo-id="grid-at-scale">
  <div class="demo-main-widget"><HRDemo /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget{min-height:0;height:100%;padding-top:10px;border-radius:0}:deep(.hr-toolbar){margin:16px 20px;padding:4px;font-size:12px}
</style>
