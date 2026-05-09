<template>
  <div class="mini-grid">
    <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="mini-row">
      <span
        v-for="(cell, cellIndex) in row"
        :key="`${rowIndex}-${cellIndex}`"
        class="mini-cell"
        :class="[cellClass(cell), { header: rowIndex === 0 && !cellClass(cell).includes('group-head') }]"
        :style="{ flex: cellSpan(cell) }"
      >
        {{ cellText(cell) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
type MiniCell = string | {
  text: string
  class?: string
  span?: number
}

defineProps<{
  rows: MiniCell[][]
}>()

const cellText = (cell: MiniCell) => typeof cell === 'string' ? cell.replace('*', '') : cell.text
const cellClass = (cell: MiniCell) => {
  if (typeof cell !== 'string') return cell.class ?? ''
  return cell.includes('*') ? 'selected' : ''
}
const cellSpan = (cell: MiniCell) => typeof cell === 'string' ? undefined : cell.span
</script>

<style lang="scss" scoped>
.mini-grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--rg-bg);
}

.mini-row {
  display: flex;
  flex: 1;
  border-bottom: 1px solid var(--rg-grid-line);
}

.mini-cell {
  flex: 1;
  border-right: 1px solid var(--rg-grid-line);
  padding: 3px 5px;
  color: var(--rg-text-3);
  font-size: 9px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &.header {
    background: var(--rg-bg-4);
    color: var(--rg-text-2);
    font-weight: 600;
  }

  &.selected {
    background: var(--rg-green-bg);
    color: var(--rg-green);
    font-weight: 600;
  }

  &.editing {
    outline: 2px solid var(--rg-green);
    outline-offset: -2px;
    background: color-mix(in srgb, var(--rg-green) 6%, var(--rg-bg));
    color: var(--rg-text);
  }

  &.muted-small {
    color: var(--rg-text-3);
    font-size: 8px;
  }

  &.group-head {
    background: var(--rg-bg-4);
    color: var(--rg-text-2);
    font-weight: 600;
    text-align: center;
  }

  &.accent {
    color: var(--rg-green);
  }

  &.no-border {
    border-right: 0;
  }
}
</style>
