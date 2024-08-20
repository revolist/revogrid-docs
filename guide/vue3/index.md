# Getting Started

Revogrid provide special wrapper based on [stenciljs vue3 adapter](https://www.npmjs.com/package/@stencil/vue3-output-target). Just import it to your project and it can be used as part of vue3 system.

### Installation

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

## Usage

### App Composition Api
```vue
<template>
  <VGrid :columns="columns" :source="rows" />
</template>

<script setup>
import { ref } from "vue";
import VGrid from "@revolist/vue3-datagrid";
const columns = ref([
  { prop: "name", name: "A" },
  { prop: "details", name: "B" },
]);
const rows = ref([
  {
    name: "1",
    details: "Item 1",
  },
]);
</script>

```


### App Options Api
```vue
<template>
  <div id="app">
    <v-grid
      theme="compact"
      :source="rows"
      :columns="columns"
    />
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


<!--@include: ../../demo/vue/vue.sample.options.md-->



### Method on component is not a function

In order to access a method on a Stencil component in Vue, you will need to access the underlying Web Component instance first:

```js
// ✅ This is correct
myComponentRef.value.$el.someMethod();

// ❌ This is incorrect and will result in an error.
myComponentRef.value.someMethod();
```