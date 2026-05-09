<template>
  <div class="mini-grid">
    <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="mini-row">
      <span
        v-for="(cell, cellIndex) in row"
        :key="`${rowIndex}-${cellIndex}`"
        class="mini-cell"
        :class="{ header: rowIndex === 0, selected: cell.includes('*') }"
      >
        {{ cell.replace('*', '') }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  rows: string[][]
}>()
</script>
