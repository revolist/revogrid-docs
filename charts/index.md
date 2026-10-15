---
title: JavaScript Charts Library & Live Demos
description: Build interactive dashboards with RevoGrid Charts, a JavaScript and TypeScript chart library for React, Vue, and Angular. Explore live chart examples.
layout: page
sidebar: false
aside: false
outline: false
editLink: false
footer: true
pageClass: charts-product-page
head:
  - - meta
    - property: og:image
      content: https://rv-grid.com/img/charts/overview.png
  - - meta
    - property: og:image:alt
      content: RevoGrid Charts combination chart and treemap with illustrative dashboard data
  - - meta
    - name: twitter:image
      content: https://rv-grid.com/img/charts/overview.png
  - - meta
    - name: twitter:image:alt
      content: RevoGrid Charts combination chart and treemap with illustrative dashboard data
faq:
  heading: JavaScript charts — common questions
  items:
    - q: What is RevoGrid Charts?
      a: RevoGrid Charts is a standalone JavaScript and TypeScript chart library for interactive dashboards and data visualization. Create charts without a data grid, or connect them to RevoGrid Pivot for report-driven analysis.
    - q: Can I use these charts with React, Vue, or Angular?
      a: Yes. Mount a chart in a DOM container and connect its updates and cleanup to your framework's component lifecycle. The same chart API also works in vanilla JavaScript and TypeScript applications.
    - q: What chart examples can I explore on this page?
      a: Try live bar, column, line, area, donut, treemap, scatter, heatmap, funnel, financial, and statistical charts. Each section groups a few examples around a practical question, such as tracking growth, comparing performance, or understanding variation.
    - q: How do I connect charts to an interactive report?
      a: 'Use <a href="/pivot/">RevoGrid Pivot</a> to group and aggregate records, then create linked charts that follow report filters. Explore the <a href="/demo/pivot-charts">live Pivot Charts dashboard</a> to see this workflow.'
    - q: Can I download a chart as SVG?
      a: Yes. Open any chart preview with Explore chart, then select Download SVG to save that visualization.
---

<script setup>
import ChartsPage from './ChartsPage.vue'
</script>

<ChartsPage />
