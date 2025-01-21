---
title: React Native Editor Data Grid component
description: Learn how to use React for native editor rendering in RevoGrid, allowing custom in-cell editing with React components.
head:
  - - meta
    - name: keywords
      content: RevoGrid, React, native editor rendering, custom editor, in-cell editing, React editor grid, data grid editor, React integration, custom cell editor, React grid components
---


### Customizing Editors

RevoGrid allows for even more complex custom editors by passing data and handling events like onChange or onBlur. You can create more interactive editors such as input fields, checkboxes, or dropdowns that allow users to update cell values directly.


<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/vdjyp2?view=preview&module=%2Fsrc%2FApp.tsx&hidenavigation=1"
     style="width:100%; height: 300px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-revogrid-editor"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</ClientOnly>

[![Edit react-revogrid-editor](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/react-revogrid-cell-vdjyp2)



### Advanced Use Cases

You can extend RevoGrid’s native editor rendering by implementing more sophisticated editors, such as:
-	**Date Pickers**: Use a date picker React component to edit date values in a column.
-	**Select Menus**: Render a dropdown menu with dynamic options based on other grid data or external sources.
-	**Multistep Editors**: Create complex multi-field editors for advanced data entry.