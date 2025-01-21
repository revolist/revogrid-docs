---
title: React Data Grid Native Editor Rendering 
description: Learn how to use React for native editor rendering in RevoGrid, allowing custom in-cell editing with React components.
head:
  - - meta
    - name: keywords
      content: RevoGrid, React, native editor rendering, custom editor, in-cell editing, React editor grid, data grid editor, React integration, custom cell editor, React grid components
---

<!--@include: ../parts/editor.header.md-->

By integrating React components as native editors, RevoGrid gives you full control over how each cell behaves during the editing process, enabling complex and highly interactive editing scenarios.


<!--@include: ../../demo/react/react.editor.md-->

<!--@include: ../parts/editor.why.md-->

## Basic Setup

RevoGrid allows you to define custom editors for grid cells using the editor property on columns. You can then assign React components to handle the rendering and editing of cell values.

In this example, we’ll create a custom button editor that, when clicked, closes the editor. This demonstrates how you can use React components as editors.


```tsx{4,9-11,19,28}


<!--@include: ../../demo/react/react.editor.tsx-->

```

### Key Components
-	**Custom Editor**: The Button component is a simple React component that will be used as a custom editor for the “First” column. When clicked, it will close the editor.
-	**Editor Registration**: The gridEditors object registers the custom editor using the Editor function. In this case, it links the custom editor (the Button component) to the identifier MY_EDITOR.
-	**Editor Prop**: In the columns array, the editor property is set to MY_EDITOR, indicating that the custom editor should be used for the “First” column.




<!--@include: ./examples.md-->

