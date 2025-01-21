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

export default App;
