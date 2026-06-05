---
title: Clipboard Operations in Data Grid
description: Use Clipboard Operations in Data Grid to copy and paste data within the grid.
head:
  - - meta
    - name: keywords
      content: RevoGrid, data grid, vue data grid, clipboard operations, copy, paste, grid performance, large data sets, customizable grid, change data, data copy, data paste
---

# Clipboard Operations in Data Grid

Our Data Grid provides clipboard functionality, allowing users to easily copy and paste data within the grid. This feature is essential for enhancing productivity, particularly in environments where data manipulation is frequent. The data table's event-driven approach allows for a high degree of customization and control. For JSON support, see the [Advanced Clipboard Operations with JSON](./clipboard.pro.md) guide.

## Enable or Disable Clipboard

Clipboard support is enabled by default through the `useClipboard` grid property.

```ts
const grid = document.querySelector('revo-grid');

if (grid) {
  grid.useClipboard = true;
}
```

Set `useClipboard` to `false` to disable the internal clipboard component and ignore grid copy, cut, and paste handling:

```ts
grid.useClipboard = false;
```

`useClipboard` can also receive a configuration object. Use this form when clipboard is enabled but you need extra clipboard behavior:

```ts
grid.useClipboard = {
  rangeFill: true,
};
```

### Clipboard Configuration

| Option | Type | Default | Description |
|:--|:--|:--|:--|
| `rangeFill` | `boolean` | `false` | When `true`, pasting one clipboard cell into a selected multi-cell range fills every writable cell in that range. Requires `range: true`. |

## Clipboard Copy

RevoGrid allows you to copy selected grid data to the clipboard using the standard keyboard shortcut `Ctrl+C` (or `⌘ Command+C` on macOS). When data is copied, it is formatted as tab-separated values, which can be easily pasted into other applications like Excel or text editors.

### How Data is Formatted for Copy

When copying data, RevoGrid uses the following method to format the selected cells into a string that can be placed on the clipboard:

```typescript
parserCopy(data: DataFormat[][]) {
  return data.map(rgRow => rgRow.join('\t')).join('\n');
}
```

This method ensures that the data is properly formatted as tab-separated rows, making it compatible with other applications that support this format.

### Handling Clipboard Events

RevoGrid's clipboard operations (copy, cut, paste) are driven by events, giving you the flexibility to customize how these operations are handled.

#### Copy Events

- **`beforecopy`**: Fired before a copy operation is triggered. You can prevent the copy operation by calling `event.preventDefault()`.
- **`beforecopyapply`**: Fired before the data is copied to the clipboard from outside the grid. Allows you to modify or cancel the copy operation.
- **`copyregion`**: Fired when a region of the grid is copied. You can intercept this event to customize or log copy operations.

#### Paste Events

- **`beforepaste`**: Fired before a paste operation is applied to the grid. You can prevent the paste by calling `event.preventDefault()`.
- **`beforepasteapply`**: Fired before the parsed data is applied to the grid, allowing you to modify the data or cancel the paste operation.
- **`pasteregion`**: An internal event fired when the data region is ready to be pasted into the grid.
- **`afterpasteapply`**: Fired after the paste operation is applied to the grid. This event is useful for triggering updates or validations after data is pasted.

#### Cut Events

- **`beforecut`**: Fired before a cut operation is triggered. You can cancel the cut operation by calling `event.preventDefault()`.
- **`clearregion`**: Fired when the cut operation is completed, typically used to clear the region from which data was cut.

## Range Copy and Paste

RevoGrid also supports range-based copy and paste operations, allowing users to work with blocks of data. Range selection must be enabled for users to select more than one cell:

```ts
grid.range = true;
```

You can also set it in markup:

```html
<revo-grid range></revo-grid>
```

### Range Copy Event

- **`clipboardrangecopy`**: This event is triggered when data is ready to be copied to the clipboard. You can intercept this event to modify the copied data or prevent the default copy behavior.


### Range Paste Event

- **`clipboardrangepaste`**: This event is triggered when a range of data is pasted into the grid. Similar to the copy event, you can modify the pasted data or prevent the operation.

By default, paste starts at the focused cell and applies only the pasted clipboard matrix. For example, pasting one copied value changes only the focused cell, even if several cells are selected.

To use spreadsheet-style fill behavior for a single copied value, enable both `range` and `useClipboard.rangeFill`:

```ts
const grid = document.querySelector('revo-grid');

if (grid) {
  grid.range = true;
  grid.useClipboard = {
    rangeFill: true,
  };
}
```

With this configuration, selecting a multi-cell range and pasting one clipboard cell writes that value into every writable cell in the selected range. Pasting multi-cell clipboard data keeps the normal matrix paste behavior. Read-only cells are skipped.

## Adding Rows on Paste

By default, paste only applies values inside the currently available row and column range. If your workflow needs spreadsheet-style row growth when users paste more rows than the grid currently has, register `AutoAddRowsPlugin`.

```ts
import { AutoAddRowsPlugin } from '@revolist/revogrid';

const grid = document.querySelector('revo-grid');

if (grid) {
  grid.plugins = [AutoAddRowsPlugin];
}
```

When pasted data extends below the current main row source, the plugin adds the missing rows before RevoGrid applies the paste. The plugin emits a cancelable `newRows` event so applications can provide default values or block the insertion:

```ts
grid.addEventListener('newRows', event => {
  event.detail.newRows = event.detail.newRows.map(row => ({
    ...row,
    data: {
      status: 'new',
    },
  }));
});
```

The plugin only adds rows. RevoGrid does not automatically create columns during paste because new columns need application-owned definitions such as `prop`, header text, sizing, renderers, editors, and validation rules. To support pasted data with more columns than the current grid, update `grid.columns` before paste is applied or handle `beforepasteapply` in your application.

## Read-Only Mode

If the grid is set to read-only mode, paste operations are disabled by default. This ensures that data integrity is maintained when editing is not permitted.

## Conclusion

The clipboard functionality in RevoGrid provides a flexible and powerful way to manage data within the grid. By leveraging the built-in events for copy, paste, and cut operations, developers can customize the behavior to fit their specific needs, ensuring that RevoGrid integrates smoothly into any workflow.
