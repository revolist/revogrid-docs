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
  <nav class="pivot-demo-links" aria-label="Pivot demo collection">[Overview](/demo/pivot) · [Charts](/demo/pivot-charts) · [Financial](/demo/pivot-financial) · [Operations](/demo/pivot-operations) · [Scale](/demo/pivot-scale) · [Import](/demo/pivot-import)</nav>
  <div class="demo-main-widget"><FinancialDemo /></div>
</DemoPageLayout>

<style scoped>
.pivot-demo-links { display: flex; flex-wrap: wrap; gap: 12px; padding: 8px 16px; border-bottom: 1px solid var(--vp-c-divider); }
.pivot-demo-links a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.demo-main-widget { min-height: 0; height: 100%; }
</style>
