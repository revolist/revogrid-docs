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