// vue.row-grouping.vue
<template>
    <button style="border: 1px solid var(--vp-input-border-color); padding: 5px; border-radius: 5px;" @click="toggleGrouping">Expand all</button>
    <br/>
    <br/>
    <RevoGrid
        hide-attribution
        :source="source"
        :columns="columns"
        style="height: 400px"
        :theme="isDark ? 'darkCompact' : 'compact'"
        :grouping="{
            props: ['group'],
            prevExpanded: {},
            expandedAll: expanded
        }"
    />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
const { isDark } = useData()
/**
 * This is an example of a Vue3 component using RevoGrid
 */
/**
 * Import RevoGrid, Renderer and Editor for Vue
 */
import RevoGrid from '@revolist/vue3-datagrid'
import { ref } from 'vue';

// Define columns
const columns = [
  {
    name: "🎰",
    prop: "projectName",
    size: 300,
  },
  {
    name: "Group field",
    prop: "group",
    size: 150,
  },
];
// Define source
const source = makeRows(100);

const expanded = ref(false);
const toggleGrouping = () => {
    expanded.value = !expanded.value;
}


// Make rows
function makeRows(rowsNumber: number) {
  const result: {
    projectName: string;
    group: string;
  }[] = [];
  const all = rowsNumber;
  for (let j = 0; j < all; j++) {
    let row = j;
    if (!result[row]) {
      result[row] = {
        projectName: "Project " + row,
        group: j % 2 ? "yes" : "no",
      };
    }
    result[row]["projectName"] = `Project ${row}`;
  }
  return result;
}
</script>
