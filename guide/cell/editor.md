# Cell editor

`Revogrid` provides a way to define your own editors. Or you can use [predefined column types](./column.types.html).
In order to do so you have to define your class with render method.

## As a Function
```js

function TextEditor(column, saveCallback, closeCallback) {
  return {
      element: null, // will be setup up after render
      editCell: null, // will be setup up after render
      /**
       * required, define custom component structure
       * @param createElement: (tagName: string, properties?: object, value?: any, children: Array) => VNode
       */
      render(createElement) {
          return createElement('input');
      },
      componentDidRender() {}, // optional, called after component rendered
      disconnectedCallback() {}, // optional, called after component destroyed

  };
};
```

## As a Class
```ts
class TextEditor {
    public element: Element|null = null;
    public editCell: EditCell|null = null;

    /**
      *  @column: {ColumnDataSchemaRegular} - column data
      *  @editCallback: { (val) => void } - callback for finishing edit
      */

    constructor(
        public column: ColumnDataSchemaRegular,
        saveCallback: (value: any) => void,
        closeCallback: () => void
    ) {}

    // optional, called after editor rendered
    componentDidRender() {}

    // optional, called after editor destroyed
    disconnectedCallback() {}

    /**
     * required, define custom component structure
     * @param createElement: (tagName: string, properties?: object, value?: any, children: Array) => VNode
     */
    render(createComponent: HyperFunc<VNode>) {
        return createComponent('input');
    }
}
```


## Use editor in the grid
```js
const columns = [{
    name: 'Person',
    prop: 'name',

    // define editor name
    editor: 'select',
}];
const grid = div.querySelector('revo-grid');
// define editor component and name
grid.editors = {
    'select': customSelect
};
```