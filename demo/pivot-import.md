---
title: Pivot Your Data Demo
description: Create a Pivot report from browser-local CSV or JSON with field types, date groups, and numeric bins.
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
import ImportDemo from '@revogrid-demos/pro-pivot-import/src/ImportDemo.vue'
</script>

<DemoPageLayout demo-id="pivot-import">
  <nav class="pivot-demo-links" aria-label="Pivot demo collection">
    <a href="/demo/pivot">Overview</a>
    <a href="/demo/pivot-charts">Charts</a>
    <a href="/demo/pivot-financial">Financial</a>
    <a href="/demo/pivot-operations">Operations</a>
    <a href="/demo/pivot-scale">Scale</a>
    <a href="/demo/pivot-import" aria-current="page">Import</a>
  </nav>
  <div class="demo-main-widget"><ImportDemo /></div>
</DemoPageLayout>

The source tabs show framework integration examples. Each adapter mounts the same shared demo implementation, which is included alongside it in the source viewer.

<style scoped>
.pivot-demo-links { display: flex; flex-wrap: wrap; column-gap: 16px; row-gap: 4px; padding: 6px 16px; font-size: 12px; line-height: 20px; border-bottom: 1px solid var(--vp-c-divider); }
.pivot-demo-links a { white-space: nowrap; }
.pivot-demo-links a[aria-current="page"] { font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
.pivot-demo-links a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.demo-main-widget { min-height: 0; height: 100%; }
</style>
