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
  <nav class="pivot-demo-links" aria-label="Pivot demo collection">[Overview](/demo/pivot) · [Charts](/demo/pivot-charts) · [Financial](/demo/pivot-financial) · [Operations](/demo/pivot-operations) · [Scale](/demo/pivot-scale) · [Import](/demo/pivot-import)</nav>
  <div class="demo-main-widget"><ImportDemo /></div>
</DemoPageLayout>

The source tabs show framework integration examples. Each adapter mounts the same shared demo implementation, which is included alongside it in the source viewer.

<style scoped>
.pivot-demo-links { display: flex; flex-wrap: wrap; gap: 12px; padding: 8px 16px; border-bottom: 1px solid var(--vp-c-divider); }
.pivot-demo-links a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.demo-main-widget { min-height: 0; height: 100%; }
</style>
