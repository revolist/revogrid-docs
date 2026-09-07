---
title: JavaScript Data Grid Demo for Large Datasets
description: Test RevoGrid with a large editable dataset, virtual scrolling, filtering, sorting, and framework-ready JavaScript data grid interactions.
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
      content: RevoGrid demo, JavaScript data grid demo, large dataset grid, virtual scrolling, editable data grid, React data grid, Vue data grid, Angular data grid
---

<script setup>
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { isOrderFirstEntryLanding } from '../.vitepress/theme/demoFirstEntry'
const ready = ref(false)
const firstEntry = ref(false)
const HRDemo = defineAsyncComponent(() => import('@revogrid-demos/core-free/src/hr.vue'))
const FilteringDemo = defineAsyncComponent(() => import('@revogrid-demos/pro-filtering/src/filtering.vue'))
onMounted(() => {
  firstEntry.value = isOrderFirstEntryLanding(window.location.search)
  ready.value = true
})
</script>

<DemoPageLayout v-if="ready" :demo-id="firstEntry ? 'filtering' : 'grid-at-scale'" :first-entry="firstEntry">
  <div class="demo-main-widget">
    <FilteringDemo v-if="firstEntry" mode="first-entry" />
    <HRDemo v-else />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  padding-top: 10px;
  border-radius: 0;
}
:deep(.hr-toolbar) {
  margin: 16px 20px;
  padding: 4px;
  font-size: 12px;
}
</style>
