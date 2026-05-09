<template>
  <div class="rg-module-preview" :class="`is-${type}`">
    <MiniGridPreview v-if="type === 'pivot'" :rows="pivotRows" />
    <div v-else-if="type === 'gantt'" class="gantt-mini">
      <div v-for="(row, index) in ganttRows" :key="row" class="gantt-row">
        <span>{{ row }}</span>
        <i><b :style="{ left: `${index * 18}%`, width: `${60 - index * 10}%` }"></b></i>
      </div>
    </div>
    <MiniGridPreview v-else :rows="erpRows" />
  </div>
</template>

<script lang="ts" setup>
import MiniGridPreview from './MiniGridPreview.vue'

defineProps<{
  type: string
}>()

const pivotRows = [['Region', 'Q1', 'Q2', 'Total'], ['EMEA', '2.1M', '2.4M', '4.5M'], ['APAC', '1.8M', '2.1M', '3.9M']]
const erpRows = [['SKU', 'Stock', 'Status'], ['PRD-001', '1,240', 'In'], ['PRD-002', '12', 'Low'], ['PRD-003', '0', 'Out']]
const ganttRows = ['Plan', 'Dev', 'QA', 'Ship']
</script>
