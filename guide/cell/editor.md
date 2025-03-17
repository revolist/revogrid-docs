# Cell editor in Data Grid

`RevoGrid` provides a way to define your own editors. Or you can use [predefined column types](../column/types).
In order to do so you have to define your class with render method.

## As a Function
```js

function TextEditor(dataSchema, saveCallback, closeCallback) {
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
      *  @dataSchema: {ColumnDataSchemaModel} - data
      *  @editCallback: { (val) => void } - callback for finishing edit
      */

    constructor(
        public dataSchema: ColumnDataSchemaModel,
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

    /**
     * Optional method to get the current value from the editor
     * Called during auto-save process
     */
    getValue() {
        // Return the current value from your editor
        return this.element?.value;
    }

    /**
     * Optional method called before auto-save is performed
     * Return false to prevent the auto-save
     * @param value The current value to be saved
     */
    beforeAutoSave(value: any): boolean {
        // Return false to prevent save, true to allow
        return true;
    }

    /**
     * Optional method called before the editor is disconnected
     * Use this to cleanup any resources
     */
    beforeDisconnect() {
        // Cleanup any resources before editor is destroyed
    }
}
```

## Editor Lifecycle and Save Behavior

The editor component includes several important methods for handling save operations and lifecycle events:

### Auto-Save Process

When auto-save is triggered (either through `saveOnClose` or programmatically):

1. The editor calls `getValue()` to retrieve the current value
2. If `beforeAutoSave()` is defined, it's called with the value:
   - Return `false` to prevent the save
   - Return `true` (or undefined) to allow the save
3. If save is allowed, the value is saved and the editor closes

### Save Options

You can control save behavior through:

- `saveOnClose` property - When true, editor attempts to save on close
- Manual save - Call save callback directly from your editor
- Cancel changes - Prevent save on close by calling `cancelChanges()`

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