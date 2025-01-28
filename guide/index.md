# What's JavaScript Data Grid is all about?

RevoGrid is a high-performance data grid library, customizable Data Table and Data Grid for managing large datasets in JavaScript, Vue, React, Angular, Svelte and other JS frameworks.


<!--@include: ./parts/_why.md-->

### Find guides for your framework

<!--@include: ./parts/_framework.md-->

## Play online
Try `revo-grid` directly without setting up anything locally

<!--@include: ../demo/js/js.overview.md-->

<!--@include: ./parts/_key-concepts.md-->


## A quick start with DataGrid in 60 seconds

This method is perfect for prototypes, quick projects, or just getting a feel of what it can do. Directly include `revo-grid` in your HTML file to get started.

Embed the library using a script tag in the `<head>` section of your `index.html`. This loads the `revo-grid` webcomponent, making it available throughout your document.

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.jsdelivr.net/npm/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js"></script>
</head>
<body>
  <revo-grid style="height: 200px"/>
</body>
</html>
  
```


Once you've integrated JavaScript Data Grid into your `html`, the next step is to breathe life into it. It's as simple as defining your grid's structure and feeding it the data it's meant to display:

```typescript
<!--@include: ../demo/js/basic-setup.code.ts-->
```

[![Edit RevoGrid - Quick Start](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/revogrid-60s-tlxgwn)


<ClientOnly>
  <iframe src="https://codesandbox.io/embed/tlxgwn?view=Editor+%2B+Preview&module=%2Findex.html&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="DataGrid in 60s"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</ClientOnly>
