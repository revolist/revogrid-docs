---
title: React Native Cell Render Support in RevoGrid
description: Explore native cell rendering in RevoGrid for React, allowing the use of custom React components inside grid cells.
head:
  - - meta
    - name: keywords
      content: RevoGrid, React, native cell rendering, custom cell rendering, React components in grid, data grid rendering, React grid integration, RevoGrid React cells, grid component render, React custom cells
---

<!--@include: ../parts/renderer.header.md-->

```tsx{5,9-13,18}

// App.tsx
import { createContext, useContext } from 'react';
import { type ColumnDataSchemaModel, RevoGrid, Template } from '@revolist/react-datagrid';

/**
 * Custom cell component
 */
const Cell = ({ model, prop }: ColumnDataSchemaModel) => {
  return <div><strong>{model[prop]}</strong></div>;
};

function App() {
  const columns = [
    {
      prop: 'name',
      name: 'First',
      cellTemplate: Template(Cell),
    },
  ];
  const source = [
    {
      name: '1',
      details: 'Item 1',
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

<!--@include: ../../demo/react/react.cell.md-->
