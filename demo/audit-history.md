---
title: Audit History Data Grid Demo
description: Track attributed data grid edits, compare revisions, export audit records, and restore earlier cell values in the RevoGrid Pro audit history demo.
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
      content: RevoGrid audit history demo, data grid audit trail, attributed changes, revision comparison, restore cell values, export audit log, JavaScript data grid audit
---

<script setup>
import 'virtual:uno.css'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import { defineAsyncComponent } from 'vue'

const AuditHistoryDemo = defineAsyncComponent(() =>
  import('@revogrid-demos/pro-audit-history/src/audit-history.vue')
)
</script>

<DemoPageLayout demo-id="audit-history">
  <div class="demo-main-widget">
    <AuditHistoryDemo />
  </div>
</DemoPageLayout>

<style scoped>
.demo-main-widget {
  min-height: 0;
  height: 100%;
  border-radius: 0;
}
</style>
