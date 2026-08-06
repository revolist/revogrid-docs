---
title: JavaScript Data Grid Demo for Large Datasets
description: Test RevoGrid with a large editable dataset, virtual scrolling, filtering, sorting, and framework-ready JavaScript data grid interactions.
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
      content: RevoGrid demo, JavaScript data grid demo, large dataset grid, virtual scrolling, editable data grid, React data grid, Vue data grid, Angular data grid
---

<script setup>
import HRDemo from '@revogrid-demos/core-free/src/hr.vue'
</script>

<DemoPageLayout demo-id="grid-at-scale">
  <div class="demo-main-widget">
    <HRDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  padding-top: 10px;
  border-radius: 0;
}
:deep(.hr-toolbar) {
  margin: 16px 20px;
  padding: 4px;
  font-size: 12px;
}
</style>
