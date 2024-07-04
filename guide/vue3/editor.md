<!--@include: ../parts/editor.header.md-->


## App
```vue
// App.vue
<template>
    <Grid
      :editors="gridEditors"
      :source="source"
      :columns="columns"
      @cell-custom-action="testCustomCellAction"
      @cell-click="testAction"
    />
</template>

<script lang="ts" setup>
/**
 * This is an example of a Vue3 component using Revogrid
 */
import { provide, readonly, ref } from 'vue';
/**
 * Import Revogrid, Renderer and Editor for Vue
 */
import Grid, { VGridVueEditor, Editors } from '@revolist/vue3-datagrid';

import Editor from './Editor.vue';

const count = ref(0)
provide('read-only-count', readonly(count));

const MY_EDITOR = 'custom-editor';
// Vue column editor register
const gridEditors: Editors = { [MY_EDITOR]: VGridVueEditor(Editor) };
// Define columns
const columns = [
  {
    prop: 'name',
    name: 'First',
    // editor type
    editor: MY_EDITOR,
  },
];
// Define source
const source = [
  {
    name: '1',
    details: 'Item 1',
  },
];

// For testing events
function testCustomCellAction(e: CustomEvent) {
  console.log('Custom cell action', e);
}
function testAction(e: CustomEvent) {
  console.log('Editor action', e);
}
</script>
```

## Editor Component

```vue
// Editor.vue
<template>
  <button @click="onBtn">Finish edit</button>
</template>
<script lang="ts" setup>
import { defineProps, ref, inject } from "vue";
import { EditorType } from "@revolist/vue3-datagrid";

const props = defineProps<EditorType>();

function onBtn(e: MouseEvent) {
  // create and dispatch event
  const event = new CustomEvent("cell", {
    bubbles: true,
    detail: { row: this.model },
  });
  this.$el.dispatchEvent(event);

  e.stopPropagation();
  if (typeof this.close === "function") {
    (this.close as () => void)();
  }
}
</script>

```


<!--@include: ../../demo/vue/vue.editor.composition.md-->



