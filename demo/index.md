---
title: RevoGrid Data Grid Demos
description: Explore RevoGrid demos for JavaScript, React, Vue, Angular, Svelte, Stencil, Pro workflows, pivot analytics, Gantt planning, and editable business grids.
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
        content: Explore RevoGrid demos for JavaScript, React, Vue, Angular, Svelte, Stencil, Pro workflows, pivot analytics, Gantt planning, and editable business grids.
      - name: keywords
        content: RevoGrid Pro Demo, Data Grid, Data Table, JavaScript Grid, Vue Grid, React Grid, Angular Grid, High-Performance Grid, Excel Export, Scalable Data Grids, Customizable Grid, Data Filtering
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
