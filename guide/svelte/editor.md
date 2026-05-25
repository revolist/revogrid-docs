---
title: Svelte Data Grid Editor
description: Build custom RevoGrid editors with native Svelte components.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Svelte, Svelte data grid editor, custom editor, in-cell editing, Svelte grid components
---

# Svelte Data Grid Editor

<!--@include: ../parts/_editor.header.md-->

Use `Editor(Component)` from `@revolist/svelte-datagrid` to register a Svelte component as a custom editor.

## Basic Setup

```svelte
<!--@include: ../../demo/svelte/svelte.editor.svelte-->
```

## Editor Component

```svelte
<!--@include: ../../demo/svelte/svelte.editor.template.svelte-->
```

The editor component receives flat props from `EditorType`, including the current edit-cell data plus:

- `column`: the column data schema model.
- `save(value, preventFocus?)`: saves the value and closes the editor.
- `close(focusNext?)`: closes the editor without saving.

If the editor should participate in autosave-on-close, export `getValue()` from the Svelte component.

<!--@include: ../parts/editor.why.md-->
