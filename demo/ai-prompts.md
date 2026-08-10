---
title: AI Prompt Library Data Grid Demo
description: Explore a searchable, filterable, and editable AI prompt catalog with multiline content and instant local data loading in the open-source Core grid.
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
      content: AI prompt library, prompt catalog, editable data grid, multiline grid editor, open source data grid, Vue data grid demo
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
