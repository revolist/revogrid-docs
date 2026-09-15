---
title: RevoGrid Keyboard Navigation
description: Use RevoGrid keyboard navigation for cell focus, range selection, inline editing, clipboard actions, and grid-edge shortcuts.
head:
  - - meta
    - name: keywords
      content: RevoGrid keyboard navigation, data grid keyboard shortcuts, range selection, inline editing, Ctrl Arrow, Cmd Arrow
---

# Keyboard Navigation

RevoGrid supports spreadsheet-style keyboard interaction for moving the focused cell, selecting ranges, editing values, and using the clipboard. Keyboard actions apply to the focused grid; configure `range` and `useClipboard` when your workflow needs range selection or clipboard operations.

```ts
const grid = document.querySelector('revo-grid');

if (grid) {
  grid.range = true;
  grid.useClipboard = true;
}
```

## Move focus and select ranges

| Shortcut | Behavior |
| --- | --- |
| <kbd>Arrow</kbd> | Move the focused cell one position in the selected direction. |
| <kbd>Tab</kbd> | Move focus one cell to the right. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move focus one cell to the left. |
| <kbd>Shift</kbd> + <kbd>Arrow</kbd> | Extend the active range in that direction when `range` is enabled. |

## Jump to a grid edge

Use the primary platform modifier with an arrow key to move directly to the first or last available row or column.

| Platform | Shortcut |
| --- | --- |
| Windows and Linux | <kbd>Ctrl</kbd> + <kbd>Arrow</kbd> |
| macOS | <kbd>Cmd</kbd> + <kbd>Arrow</kbd> |

Add <kbd>Shift</kbd> to either shortcut to extend the active range to that edge. Range extension requires `range: true`.

RevoGrid does not consume primary-modifier shortcuts that use <kbd>Tab</kbd> or <kbd>Alt</kbd> + <kbd>Arrow</kbd>, so the browser can retain those shortcuts.

## Edit and clear cells

| Shortcut | Behavior |
| --- | --- |
| Printable key | Start editing the focused cell with that value. |
| <kbd>Enter</kbd> | Start editing the focused cell. |
| <kbd>Escape</kbd> while editing | Cancel the active edit. |
| <kbd>Backspace</kbd> or <kbd>Delete</kbd> | Clear the active selection when the grid is editable. |

Whether an edit can be applied still follows the grid and column `readonly` settings. See [Editing](/guide/editing) for editor configuration and lifecycle events.

## Select all and use the clipboard

| Shortcut | Behavior |
| --- | --- |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd> | Select all cells when `range` is enabled. |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>C</kbd> | Copy the active selection. |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>X</kbd> | Cut the active selection. |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>V</kbd> | Paste at the focused cell. |

Clipboard actions require `useClipboard`. For clipboard configuration, range fill behavior, and events, see [Clipboard Operations](/guide/clipboard).

## Customize keyboard behavior

Listen for the cancelable `beforekeydown` event to inspect or replace a keyboard action before RevoGrid handles it:

```ts
grid.addEventListener('beforekeydown', event => {
  const { original } = event.detail;

  if (original.key === 'F2') {
    event.preventDefault();
    // Run an application-specific action.
  }
});
```

For focus management and wider accessibility guidance, see [Accessibility](/guide/wcag).
