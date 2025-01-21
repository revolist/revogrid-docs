// App.tsx
import { type ColumnDataSchemaModel, RevoGrid, Template } from '@revolist/react-datagrid';

/**
 * Custom cell component
 */
const Cell = ({ value }: Partial<ColumnDataSchemaModel>) => {
  return <div><strong>{value}</strong></div>;
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

export default App;
