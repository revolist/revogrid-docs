// App.tsx
import { type ColumnDataSchemaModel, RevoGrid, Template } from '@revolist/react-datagrid';
import { useState } from 'react'

/**
 * Custom cell component
 */
const Cell = ({ value }: Partial<ColumnDataSchemaModel>) => {
  return <div><strong>{value}</strong></div>;
};

/**
 * note: columns & source need a "stable" reference in order to prevent infinite re-renders
 */
const columns = [
  {
    prop: 'name',
    name: 'First',
    cellTemplate: Template(Cell),
  },
];

function App() {
  const [source] = useState([
    {
      name: '1',
      details: 'Item 1',
    },
  ]);
  return (
    <>
      <RevoGrid columns={columns} source={source} />
    </>
  )
}

export default App;
