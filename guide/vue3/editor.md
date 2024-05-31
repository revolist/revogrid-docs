<!--@include: ../parts/editor.header.md-->

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
import Grid, { VGridVueEditor } from '@revolist/vue3-datagrid';

import Editor from './Editor.vue';
import { Editors } from '@revolist/revogrid';

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



```vue
// Editor.vue
<template>
  <button @click="onBtn">Finish edit</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['rowIndex', 'model', 'save', 'close'],
  methods: {
    onBtn(e: MouseEvent) {
      // create and dispatch event
      const event = new CustomEvent('cell', {
        bubbles: true,
        detail: { row: this.model },
      });
      this.$el.dispatchEvent(event);

      e.stopPropagation();
      if (typeof this.close === 'function') {
        (this.close as () => void)();
      }
    },
  },
});
</script>

```


Check [Sandbox](https://codesandbox.io/s/Revogrid-vueeditor-bxpq0?file=/src/App.vue) for real live sample.
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-vueeditor-bxpq0?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
      title="Revogrid-VueEditor"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div>
</ClientOnly>



