<!--@include: ../parts/renderer.header.md-->

```tsx{5,15-18,25}

// App.tsx
import { createContext, useContext } from 'react';
import { ColumnDataSchemaModel } from '@revolist/revogrid';
import { RevoGrid, Template } from '@revolist/react-datagrid';

/**
 * Showcase
 */
export const LevelContext = createContext('My custom context to pass to cell');

/**
 * Custom cell component
 */
const Cell = ({ model, prop }: ColumnDataSchemaModel) => {
  const level = useContext(LevelContext);
  return <div><strong title={level}>{model[prop]}</strong></div>;
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


Check [Sandbox](https://codesandbox.io/s/Revogrid-react-g3ygo?file=/src/App.js) for real live sample.
<demo-react/>

<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-react-g3ygo?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
     title="Revogrid-React"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
  </div>
</ClientOnly>