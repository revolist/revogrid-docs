---
title: Pivot at Scale Demo
description: Measure 10K, 100K, and opt-in 1M Pivot workloads in your browser.
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
import ScaleDemo from '@revogrid-demos/pro-advanced-pivot/examples/scale/src/ScaleDemo.vue'
</script>

<DemoPageLayout demo-id="pivot-scale">
  <div class="demo-main-widget"><ScaleDemo /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; }
.demo-main-widget :deep(.pivot-scale-embed) { min-height: 0; height: 100%; }
.demo-main-widget :deep(.scale-demo) { display: flex; min-height: 0; height: 100%; flex-direction: column; }
.demo-main-widget :deep(.grid-host) { flex: 1 1 0; min-height: 0; height: auto; }
</style>
