---
title: AI Agent Demo
description: Ask questions about grid data and apply filters, sorting, and other actions from the assistant.
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
---

<script setup>
import { useData } from 'vitepress'
import '@revolist/revogrid-pro/styles.css'
import '@revolist/ui/styles.css'
import AiAgent from '@revogrid-demos/pro-ai-agent/src/AiAssistant.vue'
const { isDark } = useData()
const endpoint = import.meta.env.VITE_AI_AGENT_ENDPOINT?.trim() || undefined
</script>

<DemoPageLayout demo-id="ai-agent">
  <div class="demo-main-widget"><AiAgent :is-dark="isDark" :endpoint="endpoint" /></div>
</DemoPageLayout>

<style scoped>
.demo-main-widget { min-height: 0; height: 100%; }
</style>
