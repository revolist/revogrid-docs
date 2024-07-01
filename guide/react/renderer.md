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
