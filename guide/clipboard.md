# Copy and Paste

RevoGrid provides clipboard functionality, allowing users to easily copy and paste data within the grid. This feature is essential for enhancing productivity, particularly in environments where data manipulation is frequent. Whether you're copying data to another application or pasting data into RevoGrid, the grid's event-driven approach allows for a high degree of customization and control.

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

RevoGrid also supports range-based copy and paste operations, allowing users to work with blocks of data.

### Range Copy Event

- **`clipboardrangecopy`**: This event is triggered when data is ready to be copied to the clipboard. You can intercept this event to modify the copied data or prevent the default copy behavior.


### Range Paste Event

- **`clipboardrangepaste`**: This event is triggered when a range of data is pasted into the grid. Similar to the copy event, you can modify the pasted data or prevent the operation.

## Read-Only Mode

If the grid is set to read-only mode, paste operations are disabled by default. This ensures that data integrity is maintained when editing is not permitted.

## Conclusion

The clipboard functionality in RevoGrid provides a flexible and powerful way to manage data within the grid. By leveraging the built-in events for copy, paste, and cut operations, developers can customize the behavior to fit their specific needs, ensuring that RevoGrid integrates smoothly into any workflow.
