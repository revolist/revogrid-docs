<!--@include: ../parts/editor.header.md-->

```tsx{4,9-11,14,19,28}

// App.tsx
import { ColumnDataSchemaModel, Editors } from '@revolist/revogrid';
import { RevoGrid, Editor, type EditorType } from '@revolist/react-datagrid';

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


Check [Sandbox](https://codesandbox.io/s/Revogrid-vueeditor-bxpq0?file=/src/App.vue) for real live sample.
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-vueeditor-bxpq0?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
      title="Revogrid-VueEditor"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div>
</ClientOnly>



