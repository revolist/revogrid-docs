<!--@include: ../parts/editor.header.md-->

```tsx{4,8-11,13,18,27}

// App.tsx
import { RevoGrid, Editor, type EditorType, type Editors } from '@revolist/react-datagrid';

/**
 * Custom editor component
 */
const Button = ({ close } : EditorType) => {
  return <button onClick={close}>Close</button>
};

function App() {
  const MY_EDITOR = 'custom-editor';
  const columns = [
    {
      prop: 'name',
      name: 'First',
      editor: MY_EDITOR,
    },
  ];
  const source = [
    {
      name: '1',
      details: 'Item 1',
    },
  ];
  const gridEditors: Editors = { [MY_EDITOR]: Editor(Button) };
  return (
    <>
      <RevoGrid columns={columns} source={source} editors={gridEditors} />
    </>
  )
}

export default App

```

<!--@include: ../../demo/react/react.editor.md-->


