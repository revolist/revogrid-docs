---
title: React Native Cell component in Data Grid
description: Native cell template rendering in RevoGrid for React Table, allowing the use of custom React components inside grid cells.
head:
  - - meta
    - name: keywords
      content: RevoGrid, React, native cell rendering, custom cell rendering, React components in grid, data grid rendering, React grid integration, RevoGrid React cells, grid component render, React custom cells, React Table
---


## React Custom Cell Template Example

<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/jgt3mv?view=preview&module=%2Fsrc%2FApp.tsx&hidenavigation=1"
     style="width:100%; height: 300px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-revogrid-cell"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</ClientOnly>

[![Edit react-revogrid-cell](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/react-revogrid-cell-jgt3mv)



### Key Considerations for Custom Cell Templates
-	**Data Access**: Each custom cell component will have access to the data for that row via its props. The primary prop that is passed to custom renderers is the value of the cell.
-	**Performance**: Custom renderers can impact grid performance, especially with large datasets. RevoGrid optimizes rendering by only updating cells that have changed, but it’s important to keep performance in mind when creating complex cell templates.
-	**Conditional Rendering**: You can use conditional logic inside your custom cell component to change its appearance based on the data. For example, you can display different colors or icons based on numeric values or boolean flags.
-	**Event Handling**: Custom cells can include event handlers, such as onClick, onChange, etc., to make the grid interactive. This is ideal for rendering editable fields, buttons, or custom controls.


### Advanced Use Cases

RevoGrid’s native rendering support opens up even more complex scenarios where you can render interactive components, such as:
- **Dynamic Dropdowns**: Populate a dropdown inside a cell based on the data in the grid or external sources.
- **Custom Formatting**: Display values with custom formatting, such as currency symbols, percentages, or styled numbers.
- **Inline Editing**: Build advanced inline editing components, such as date pickers, checkboxes, or toggles, inside grid cells.