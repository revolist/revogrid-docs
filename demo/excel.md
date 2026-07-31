---
title: Excel-Style Spreadsheet Data Grid Demo
description: Try spreadsheet editing, formulas, validation, formatting, collaboration, and Excel import or export in the RevoGrid Pro workbook demo.
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
      content: RevoGrid Excel Workbench demo, spreadsheet workbench, Excel data grid, spreadsheet data grid, workbook editor, Excel import export, formulas data grid, JavaScript spreadsheet grid, React spreadsheet grid, Vue spreadsheet grid
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import { defineAsyncComponent } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const SpreadsheetWorkbench = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-excel/src/excel.vue')
)
</script>

<DemoPageLayout demo-id="excel">
  <div class="demo-main-widget">
    <SpreadsheetWorkbench :is-dark="isDark" />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  padding-top: 0;
  border-radius: 0;
}
</style>
