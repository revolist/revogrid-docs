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
  import { RevoGrid } from '@revolist/svelte-datagrid';
  import type { ColumnRegular } from '@revolist/revogrid';

  // This part to makesure revogrid component is loaded and ready
  import { defineCustomElements } from '@revolist/revogrid/loader';
  defineCustomElements();

  const columns = [
      {
        prop: 'name',
        name: 'First',
      },
      {
        prop: 'details',
        name: 'Second',
      },
  ];
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
</script>

<RevoGrid {source} {columns}></RevoGrid>
```


Check [Sandbox](https://codesandbox.io/s/Revogrid-svelte-latest-7g7vo8?file=/Grid.svelte:1152-1208) for real live sample.
<demo-svelte/>

<ClientOnly>
  <div class="tile">
   <iframe src="https://codesandbox.io/embed/Revogrid-svelte-latest-7g7vo8?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Revogrid-Svelte_Latest"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</ClientOnly>
