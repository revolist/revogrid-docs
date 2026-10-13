---
title: Pivot Support Investigation Demo
description: Inspect synthetic support tickets with Pivot counts, averages, and source-record drill-through.
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/pivot/styles.css'
import OperationsDemo from '@revogrid-demos/pro-advanced-pivot/examples/operations/src/OperationsDemo.vue'
</script>

<DemoPageLayout demo-id="pivot-operations">
  <div class="demo-main-widget"><OperationsDemo /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; }
@media (min-width: 1051px) {
  .demo-main-widget :deep(.pivot-operations-embed) {
    height: 100%;
    min-height: 0;
  }
  .demo-main-widget :deep(.operations-demo) {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    overflow: hidden;
  }
  .demo-main-widget :deep(.controls) {
    box-sizing: border-box;
    width: 100%;
    max-width: none;
  }
  .demo-main-widget :deep(.workspace) {
    flex: 1;
    width: 100%;
    max-width: none;
    min-height: 0;
  }
  .demo-main-widget :deep(.pivot-panel),
  .demo-main-widget :deep(.detail-panel) {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .demo-main-widget :deep(.pivot-panel > :is(.pivot-grid, .pivot-plugin)) {
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .demo-main-widget :deep(.pivot-panel revo-grid) {
    width: 100%;
    min-width: 0;
    height: 100%;
  }
  .demo-main-widget :deep(.ticket-grid) {
    flex: 1;
    min-height: 0;
    height: auto;
  }
}
</style>
