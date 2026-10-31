---
title: Pivot Your Data — Excel and CSV Import Demo
description: Open your Excel or CSV file, review automatically detected fields, and build an interactive Pivot entirely in your browser.
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
import '@revolist/revogrid-pro/styles.css'
import '@revolist/pivot/styles.css'
import ImportDemo from '@revogrid-demos/pro-advanced-pivot/examples/import/src/ImportDemo.vue'
</script>

<DemoPageLayout demo-id="pivot-import">
  <div class="demo-main-widget"><ImportDemo /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; overflow: auto; }
.demo-main-widget :deep(.pivot-import-embed) { height: 100%; min-height: 0; }
</style>
