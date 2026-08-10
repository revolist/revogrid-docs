---
title: Project Portfolio Row Grouping Demo
description: Explore a realistic project portfolio with two-level row grouping, custom progress cells, sorting, and filtering in the open-source Core grid.
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
      content: project portfolio grid, row grouping data grid, grouped rows, project tracker, open source data grid, Vue data grid demo
---

<script setup>
import { useData } from 'vitepress'
import ProjectPortfolio from '@revogrid-demos/core-project-portfolio/src/project-portfolio.vue'
const { isDark } = useData()
</script>

<DemoPageLayout demo-id="project-portfolio">
  <div class="demo-main-widget"><ProjectPortfolio :is-dark="isDark" /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; }
</style>
