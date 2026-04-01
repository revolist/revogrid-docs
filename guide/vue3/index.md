---
title: Vue 3 Data Grid
description: Learn how to use RevoGrid in Vue 3 with Composition API or Options API, pass columns and source data, access instance methods, and build custom renderers.
head:
  - - meta
    - name: keywords
      content: Vue 3 data grid, RevoGrid Vue 3, Vue grid instance methods, Vue editable data grid, Vue virtual grid
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

RevoGrid fits naturally into Vue 3 applications when you need a fast grid with native component integrations. You can use it from either the Composition API or the Options API, and still rely on the same core RevoGrid methods and events.

<div class="example">
  <Grid />
</div>

::: info
This guide assumes your Vue project already exists. If not, start with the official [Vue quick start](https://vuejs.org/guide/quick-start).
:::

<!--@include: ./_install.md-->

## Composition API setup

```vue
<!--@include: ../../demo/vue/vue3-datagrid.composition.getstarted.vue-->
```

## Options API setup

```vue
<!--@include: ../../demo/vue/vue3-datagrid.options.getstarted.vue-->
```

## Passing `columns` and `source`

The most common Vue pattern is:

- keep `columns` in component state
- pass `source` as reactive data
- use grid methods when you need imperative actions like scrolling, focusing, or opening an editor


<!--@include: ../../demo/vue/vue.sample.options.md-->

## Accessing grid instance methods

To call a method on the underlying grid, use the wrapped Web Component instance:

```js
// ✅ Correct
myComponentRef.value.$el.someMethod();

// ❌ Incorrect
myComponentRef.value.someMethod();
```

This matters for methods like `setCellEdit`, `scrollToRow`, `setCellsFocus`, and `getVisibleSource`.

## Custom renderers and editors

Use these guides for framework-native customization:

- [Vue 3 Cell Template](/guide/vue3/renderer)
- [Vue 3 Cell Editor](/guide/vue3/editor)

## Event handling

For application workflows, the most useful events are:

- `beforeedit`
- `afteredit`
- `beforefilterapply`
- `beforecellfocus`

## SSR and client-only behavior

Like the core Web Component, RevoGrid depends on browser APIs. If you use Vue in an SSR setup, render the grid on the client side or guard the component load accordingly.

## Related guides

- [Programmatic Grid Control](/guide/programmatic-control)
- [Advanced Configuration](/guide/advanced-configuration)
- [Grid Performance and Virtualization](/guide/performance)

## More Vue examples

<!--@include: ../../demo/vue/vue.sample.options.md-->

<Examples />
