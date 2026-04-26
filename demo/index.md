---
title: Grid at Scale
pageClass: demo-page-class
layout: doc
aside: false
head:
    - - meta
      - name: description
        content: Demo page showcasing RevoGrid Filtering and Sorting, Resizing, Pinned and Grouped Columns
      - name: keywords
        content: RevoGrid Demo, Data Grid, Data Table, JavaScript Grid, Vue Grid, React Grid, Angular Grid, High-Performance Grid, Excel Export, React Table, Scalable Data Grids, Customizable Grid, Data Filtering
---

<script setup>
import ShowoffBanner from '../guide/parts/ShowoffBanner.vue'
import Grid from './vue/DemoHR.vue'
</script>

# Grid at Scale

<a class="demo-info-card" href="https://demo.rv-grid.com/?framework=all">
  <span class="demo-info-card__label">Interactive Demos</span>
  <span class="demo-info-card__text">Explore framework-ready examples in the new Interactive Demos portal.</span>
</a>

<br />

<Grid />

<div style="max-width: 800px;">

<!--@include: ../guide/parts/_fake-data-banner.md-->

<br /><br />
<ShowoffBanner />



<!--@include: ../guide/parts/_framework.md-->

</div>

<style scoped>
.demo-info-card {
  display: block;
  max-width: 640px;
  margin: 16px 0 24px;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.demo-info-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.demo-info-card__label {
  display: block;
  margin-bottom: 4px;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.demo-info-card__text {
  display: block;
  color: var(--vp-c-text-1);
}
</style>
