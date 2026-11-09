---
title: Pivot Financial Analysis Demo
description: Compare profit, contribution, running totals, year-over-year change, and ranking.
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
import FinancialDemo from '@revogrid-demos/pro-advanced-pivot/src/financial-demo.vue'
</script>

<DemoPageLayout demo-id="pivot-financial">
  <div class="demo-main-widget"><FinancialDemo /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; }
</style>
