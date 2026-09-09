---
title: RevoGrid AI Prompt Library Demo
description: Explore 100 searchable, filterable, and editable prompts for building, debugging, optimizing, and extending RevoGrid.
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
      content: RevoGrid AI prompts, RevoGrid prompt library, data grid development, editable data grid, multiline grid editor, open source data grid
---

<script setup>
import { useData } from 'vitepress'
import PromptLibrary from '@revogrid-demos/core-ai-prompts/src/prompt-library.vue'
const { isDark } = useData()
</script>

<DemoPageLayout demo-id="ai-prompt-library">
  <div class="demo-main-widget"><PromptLibrary :is-dark="isDark" /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; }
</style>
