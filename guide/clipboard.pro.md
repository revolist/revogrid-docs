# Advanced Clipboard Operations with JSON

RevoGrid Pro supports advanced clipboard operations over copy-paste methods, including support for JSON objects. This allows for more complex data manipulations and integrations, making it ideal for applications that require precise data handling.

## Introducing ClipboardJsonPlugin

The `ClipboardJsonPlugin` in RevoGrid Pro allows you to copy and paste JSON objects directly within the grid. This plugin is especially useful when working with structured data, as it enables seamless transfer of complex data types between grid cells and external applications.

### Example Setup

Here’s an example of how to set up RevoGrid with the `ClipboardJsonPlugin` to handle JSON data:

```javascript
import { defineCustomElement } from '@revolist/revogrid/standalone';
import { ClipboardJsonPlugin } from '../plugins/clipboard-json';
defineCustomElement();

import { useRandomData, currentTheme } from '../composables/useRandomData';
import type { ColumnRegular } from '@revolist/revogrid';

const { createRandomData } = useRandomData();
const { isDark } = currentTheme();

// Define columns
const columns: ColumnRegular[] = [
  {
    name: 'Json Stringified',
    prop: 'json',
    size: 300,
    cellTemplate: (h, data) => {
      return h('div', {}, JSON.stringify(data.value));
    }
  },
  {
    name: 'Json Paste Parsed',
    prop: 'new',
    size: 220,
    cellTemplate: (h, data) => {
      return data.value?.emoji;
    }
  }
];

// Initialize the grid
const grid = document.querySelector('revo-grid');
if (grid) {
  grid.source = createRandomData(100);
  grid.columns = columns;
  // Enable the ClipboardJsonPlugin
  grid.plugins = [ClipboardJsonPlugin];
}
```

### How It Works

In this example:

- **Json Stringified Column**: The `json` column displays JSON objects as stringified text. This makes it easy to visualize the JSON structure directly within the grid.
- **Json Paste Parsed Column**: The `new` column demonstrates how pasted JSON data can be parsed and displayed. In this case, the cell template extracts and displays the `emoji` property from the pasted JSON object.

### Advanced JSON Handling

With the `ClipboardJsonPlugin`, you can copy JSON data from the grid to other applications and paste JSON data directly into the grid. The plugin ensures that JSON data is correctly serialized and deserialized during these operations, maintaining data integrity.

For example, when copying a cell with JSON data:

1. The JSON object is serialized to a string format.
2. This string can then be pasted into another application, like a text editor or spreadsheet.

When pasting JSON data back into the grid:

1. The plugin parses the JSON string back into an object.
2. The grid can then display or further manipulate this object based on your configuration.

### Customizing JSON Copy-Paste Behavior

RevoGrid Pro's advanced clipboard operations also allow you to customize the behavior of JSON copy-paste interactions. This includes handling specific events to modify or prevent default actions.


## Benefits of Using ClipboardJsonPlugin

- **Enhanced Data Integrity**: The plugin ensures that complex JSON data is accurately copied and pasted, maintaining the structure and integrity of your data.
- **Customizability**: You can intercept and modify clipboard events, giving you full control over how JSON data is handled within your application.

## Conclusion

The advanced clipboard operations in RevoGrid Pro, powered by the `ClipboardJsonPlugin`, offer flexibility for handling JSON data.
