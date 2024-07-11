# Getting Started

Revogrid provide special wrapper based on [stenciljs svelte adapter](https://www.npmjs.com/package/@stencil/svelte-output-target). Just import it to your project and it can be used as part of svelte system.

::: code-group

```npm
npm i @revolist/svelte-datagrid

```

```pnpm
pnpm add @revolist/svelte-datagrid
```

```yarn
yarn add @revolist/svelte-datagrid
```

```bun
bun add @revolist/svelte-datagrid
```
:::


```svelte
// App.svelte
<script lang="ts">
    import { RevoGrid, type ColumnRegular } from '@revolist/svelte-datagrid';
    const source = [
    {
      name: '1',
      details: 'Item 1',
    },
    {
      name: '2',
      details: 'Item 2',
    },
  ];
    const columns: ColumnRegular[] = [
    {
      prop: 'name',
      name: 'First',
      cellTemplate(h, { value }) {
        return h('span', { style: { background: 'red' } }, value);
      }
    },
    {
      prop: 'details',
      name: 'Second',
    },
  ];
</script>

<main>
	<RevoGrid {source} {columns}></RevoGrid>
</main>
```


<!--@include: ../../demo/svelte/svelte.sample.md-->
