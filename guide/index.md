# What's `Revogrid` is all about?

 Let's say you've got a ton of data to display on your web app. It's all about letting you throw in loads of data and manipulate it any way you fancy—without breaking a sweat. Think of it as the Swiss Army knife for data in your web projects. Read more about how and why you should use `Revogrid` in our [Overview section](./overview).

## Find guides for your framework

<!--@include: ./framework.md-->


## Play online
Try `Revogrid` directly on CodeSandbox without setting up anything locally

<ClientOnly>
<iframe src="https://codesandbox.io/embed/8qjv9q?view=Preview&module=%2Fsrc%2Findex.ts&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Revogrid - Vue - Overview"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</ClientOnly>


## Revogrid in 60 seconds

This method is perfect for prototypes, quick projects, or just getting a feel of what it can do. Directly include `Revogrid` in your HTML file to get started.

Embed the library using a script tag in the `<head>` section of your `index.html`. This loads the `Revogrid` webcomponent, making it available throughout your document.

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.jsdelivr.net/npm/@revolist/Revogrid@latest/dist/revo-grid/revo-grid.js"></script>
</head>
<body>
  <revo-grid style="height: 200px"/>
</body>
</html>
  
```


Once you've integrated grid into your `html`, the next step is to breathe life into it. It's as simple as defining your grid's structure and feeding it the data it's meant to display:

```js
// Snag your grid element from the DOM
const grid = document.querySelector('revo-grid');

// Sketch out your column blueprint
const columns = [
  {
      prop: 'first', // This is the key in your data array
      name: 'First column' // This is the name that will appear in the header
  },
  {
      prop: 'second',
      name: 'Second column', // Another column for good measure
      // Spice up your cell with a custom template
      cellTemplate: (createElement, props) => {
        return createElement('div', {
          style: { backgroundColor: 'red' }, // Because red is fast
          class: { 'inner-cell': true } // A touch of styling
        }, props.model[props.prop] || ''); // Display the data, or nothing at all
      }
  }
];

// Here's your data, ready to be displayed
const rows = [{
  first: 'New item', // Matches the 'first' prop in columns
  second: 'Item description' // Ditto for 'second'
}];

// Let the grid know about your columns and data
grid.columns = columns;
grid.source = rows;

```


[![Edit Revogrid - Quick Start](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/Revogrid-60s-tlxgwn)


<ClientOnly>
  <iframe src="https://codesandbox.io/embed/tlxgwn?view=Editor+%2B+Preview&module=%2Findex.html&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Revogrid - 60s"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</ClientOnly>