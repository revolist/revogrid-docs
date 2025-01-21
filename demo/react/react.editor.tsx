// App.tsx
import { RevoGrid, Editor, type EditorType, type Editors } from '@revolist/react-datagrid';
import { useState } from 'react'

/**
 * Custom editor component
 */
const Button = ({ close }: EditorType) => {
  return <button onClick={() => close()}>Close</button>
};

const MY_EDITOR = 'custom-editor';
/**
 * note: columns & source need a "stable" reference in order to prevent infinite re-renders
 */
const columns = [
  {
    prop: 'name',
    name: 'First',
    editor: MY_EDITOR,
  },
];

function App() {

  const [source] = useState([
    {
      name: '1',
      details: 'Item 1',
    },
  ]);
  const gridEditors: Editors = { [MY_EDITOR]: Editor(Button) };
  return (
    <>
      <RevoGrid columns={columns} source={source} editors={gridEditors} />
    </>
  )
}

export default App;
