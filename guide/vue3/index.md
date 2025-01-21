---
title: Vue 3 Integration Guide
description: Learn how to integrate RevoGrid with Vue 3 for creating efficient, scalable data grids with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Vue 3, data grid, Vue 3 integration, virtual grid, virtual rows, virtual columns, reactive data grid, Vue 3 grid example, grid performance, large data sets, customizable grid
---


<div style="text-align: center">


# Vue 3 Data Grid Getting Started

<img src="/vuejs.svg" alt="Vue logo" width="300" height="300" style="margin: 20px auto;" />

<p>

Revogrid provide special [Vue adapter](https://github.com/revolist/vue3-datagrid). Just import it to your project and it can be used as part of vue system.

</p>

</div>

::: info
This tutorial assumes that an Vue project has already been set up.
If not, please refer to the official documentation [Vue Installation](https://vuejs.org/guide/quick-start)
:::

<!--@include: ./install.md-->

## Usage

### App Composition Api
```vue
<template>
  <RevoGrid :columns="columns" :source="rows" />
</template>

<script setup>
import { ref } from "vue";
import RevoGrid from "@revolist/vue3-datagrid";
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
    <RevoGrid
      theme="compact"
      :source="rows"
      :columns="columns"
    />
  </div>
</template>
 
<script>
import RevoGrid from "@revolist/vue3-datagrid";
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
    RevoGrid,
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