# Getting Started

Revogrid provide special wrapper based on [stenciljs vue3 adapter](https://www.npmjs.com/package/@stencil/vue3-output-target). Just import it to your project and it can be used as part of vue3 system.

::: code-group

```npm
npm i @revolist/vue3-datagrid

```

```pnpm
pnpm add @revolist/vue3-datagrid
```

```yarn
yarn add @revolist/vue3-datagrid
```

```bun
bun add @revolist/vue3-datagrid
```
:::


```vue
<template>
  <div id="app">
    <v-grid
      theme="compact"
      :source="rows"
      :columns="columns"
    ></v-grid>
  </div>
</template>
 
<script>
import VGrid from "@revolist/vue3-datagrid";
export default {
  name: "App",
  data() {
    return {
      columns: [{ prop: "name" }, { prop: "details" }],
      rows: [{
        name: "1",
        details: "Item 1",
      }]
    };
  },
  components: {
    VGrid,
  },
};
</script>
```

Check [Sandbox](https://codesandbox.io/s/data-vue-test-3wkzi?file=/src/App.vue) for real live sample.
<ClientOnly>
    <iframe src="https://codesandbox.io/embed/revo-grid-vue3-thry7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="revo-grid-vue3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
</ClientOnly>
