---
title: Row Master Detail Data Grid Demo
description: Expand hierarchical project rows into rich master-detail panels with asynchronous content and virtualized grid navigation in RevoGrid Pro.
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
      content: RevoGrid row master demo, master detail data grid, expandable rows, nested row details, asynchronous detail panel, hierarchical data grid, virtualized grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent } from 'vue'

const RowMasterDemo = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-row-master/src/row-master.vue')
)
</script>

<DemoPageLayout demo-id="row-master">
  <div class="demo-main-widget">
    <RowMasterDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
