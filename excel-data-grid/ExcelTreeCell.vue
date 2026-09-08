<template>
  <button
    v-if="model.hasChildren"
    class="excel-tree-cell is-branch"
    type="button"
    :style="indentStyle"
    :aria-expanded="model.expanded"
    :aria-label="`${model.expanded ? 'Collapse' : 'Expand'} ${model.label}`"
    @click.stop="toggleBranch"
  >
    <FontAwesomeSvgIcon :name="model.expanded ? 'caretDown' : 'caretRight'" />
    <span>{{ model.label }}</span>
  </button>
  <span v-else class="excel-tree-cell is-leaf" :style="indentStyle">
    <span class="excel-tree-cell__leaf-space" aria-hidden="true"></span>
    <span>{{ model.label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ColumnDataSchemaModel } from '@revolist/vue3-datagrid'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'

interface TreeCellModel {
  id: string
  label: string
  depth: number
  hasChildren: boolean
  expanded: boolean
}

const props = defineProps<ColumnDataSchemaModel & { model: TreeCellModel }>()
const indentStyle = computed(() => ({ paddingLeft: `${10 + props.model.depth * 18}px` }))

function toggleBranch(event: MouseEvent) {
  event.currentTarget?.dispatchEvent(new CustomEvent('tree-toggle', {
    bubbles: true,
    composed: true,
    detail: { id: props.model.id },
  }))
}
</script>

<style scoped>
.excel-tree-cell {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 8px;
  border: 0;
  padding-right: 10px;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
}

button.excel-tree-cell { cursor: pointer; }
button.excel-tree-cell:hover { color: var(--xl-accent); }
button.excel-tree-cell:focus-visible { outline: 2px solid var(--xl-accent); outline-offset: -2px; }
.excel-tree-cell .fa-svg-icon { flex: 0 0 11px; width: 11px; height: 11px; color: var(--xl-accent); }
.excel-tree-cell__leaf-space { flex: 0 0 11px; width: 11px; }
</style>
