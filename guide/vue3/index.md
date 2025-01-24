---
title: Vue 3 Data Grid
description: Learn how to use Vue 3 Data Grid to build fast, scalable data applications with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, data grid, vue 3 table, vue 3 data grid, virtual grid, virtual rows, virtual columns, reactive data grid, Vue 3 grid example, grid performance, large data sets, customizable grid
---


<div style="text-align: center">


# Vue 3 Data Grid

This page covers the key concepts of RevoGrid - a high-performance, customizable Vue Table and Vue Data Grid for managing large datasets.

<img src="/vuejs.svg" alt="Vue logo" width="300" height="300" style="margin: 20px auto;" />

</div>

::: info
This tutorial assumes that an Vue project has already been set up.
If not, please refer to the official documentation [Vue Installation](https://vuejs.org/guide/quick-start)
:::



To start, just import [vue-datagrid](https://github.com/revolist/vue3-datagrid) to your project and it can be used as part of vue system.

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


<!--@include: ../../demo/vue/vue.sample.options.md-->



### Method on Vue Data Grid instance is not a function

In order to access a method on a Stencil component in Vue, you will need to access the underlying Web Component instance first:

```js
// ✅ This is correct
myComponentRef.value.$el.someMethod();

// ❌ This is incorrect and will result in an error.
myComponentRef.value.someMethod();
```


<!--@include: ./_examples.md-->
