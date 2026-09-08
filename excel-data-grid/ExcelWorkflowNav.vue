<template>
  <nav class="excel-workflow-nav" aria-label="Excel data grid product story">
    <div class="excel-container">
      <div class="excel-workflow-nav__heading">
        <h2>{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </div>
      <div class="excel-workflow-nav__inner">
        <a v-for="item in content.items" :key="item.id" :href="`#${item.id}`">
          <span>{{ item.number }}</span>
          <strong>{{ item.title }}</strong>
          <small>{{ item.detail }}</small>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['workflowNav'] }>()
</script>
