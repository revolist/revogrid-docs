<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from 'vue'
import { useData } from 'vitepress'
import { VGrid } from '@revolist/vue3-datagrid'
import type { ColumnRegular, ColumnTypes } from '@revolist/revogrid'

const props = defineProps<{
  format: 'string' | 'number' | 'select' | 'date'
  columnLabel: string
}>()
const { isDark } = useData()
const values = {
  string: ['Plan the release', 'Review the changes', 'Update the docs'],
  number: [1234.5, 99.95, 7800],
  select: ['Planned', 'Active', 'Done'],
  date: ['2026-05-18', '2026-05-21', '2026-05-24'],
}
const source = ref(values[props.format].map(value => ({ value })))
const columnTypes = shallowRef<ColumnTypes>({})
const ready = ref(false)
const columns = computed<ColumnRegular[]>(() => [
  {
    prop: 'value',
    name: props.columnLabel,
    size: 280,
    ...(props.format !== 'string' ? { columnType: props.format } : {}),
    ...(props.format === 'select' ? { source: ['Planned', 'Active', 'Blocked', 'Done'] } : {}),
  },
])

onMounted(async () => {
  if (props.format === 'number') {
    const { default: NumberColumnType } = await import('@revolist/revogrid-column-numeral')
    columnTypes.value = { number: new NumberColumnType('0,0.00') }
  } else if (props.format === 'select') {
    const { default: SelectColumnType } = await import('@revolist/revogrid-column-select')
    columnTypes.value = { select: new SelectColumnType() }
  } else if (props.format === 'date') {
    const { default: DateColumnType } = await import('@revolist/revogrid-column-date')
    columnTypes.value = { date: new DateColumnType() }
  }
  ready.value = true
})
</script>

<template>
  <div class="format-example" :data-format="format">
    <VGrid
      v-if="ready"
      :theme="isDark ? 'darkCompact' : 'compact'"
      :columns="columns"
      :source="source"
      :column-types="columnTypes"
      :row-headers="true"
      style="height: 190px; width: 100%"
    />
  </div>
</template>

<style scoped>
.format-example {
  margin: 16px 0 24px;
  min-height: 190px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
</style>
