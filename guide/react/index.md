---
title: React Integration Guide
description: Learn how to integrate RevoGrid with React to build fast, scalable data grids with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, React, data grid, React integration, virtual grid, virtual rows, virtual columns, React grid example, grid performance, large data sets, customizable grid, RevoGrid React components
---

# Getting Started

Revogrid provide special wrapper based on [stenciljs react adapter](https://www.npmjs.com/package/@stencil/react-output-target). Just import it to your project and it can be used as part of react system.

::: code-group

```npm
npm i @revolist/react-datagrid

```

```pnpm
pnpm add @revolist/react-datagrid
```

```yarn
yarn add @revolist/react-datagrid
```

```bun
bun add @revolist/react-datagrid
```
:::



```tsx
// App.tsx
import { RevoGrid } from '@revolist/react-datagrid';

function App() {
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
  return (
    <>
      <RevoGrid columns={columns} source={source} />
    </>
  )
}

export default App

```

<!--@include: ../../demo/react/react.sample.md-->
