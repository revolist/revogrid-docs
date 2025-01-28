---
title: Vue 3 Data Grid
description: Learn how to use Vue 3 Data Grid to build fast, scalable data applications with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, data grid, vue 3 table, vue 3 data grid, virtual grid, virtual rows, virtual columns, reactive data grid, Vue 3 grid example, grid performance, large data sets, customizable grid
---
<script lang="ts">
import Grid from '@/demo/vue/DemoHR.vue'
import Examples from './examples.vue'
</script>

<style lang="scss" scoped>
.example {
    max-width: 100%;    
}
:deep() {
    .demo-page-wrapper .demo-container {
        width: 100%;
    }
}
</style>



# Vue 3 Data Grid

This page covers the key concepts of RevoGrid - a high-performance, customizable Vue Table and Vue Data Grid for managing large datasets.

<!--@include: ../parts/_why.md-->

<div class="example">
<Grid />
</div>

::: info
This tutorial assumes that an Vue project has already been set up.
If not, please refer to the official documentation [Vue Installation](https://vuejs.org/guide/quick-start)
:::



<!--@include: ./_install.md-->

## Vue Data Grid Usage

### Composition Api
```vue

<!--@include: ../../demo/vue/vue3-datagrid.composition.getstarted.vue-->
```
 


### Options Api
```vue
<!--@include: ../../demo/vue/vue3-datagrid.options.getstarted.vue-->
```

##  Getting Started with Options API

<!--@include: ../../demo/vue/vue.sample.options.md-->



### Method on Vue Data Grid instance is not a function

In order to access a method on a data grid component in Vue, you will need to access the underlying Web Component instance first:

```js
// ✅ This is correct
myComponentRef.value.$el.someMethod();

// ❌ This is incorrect and will result in an error.
myComponentRef.value.someMethod();
```


<Examples />