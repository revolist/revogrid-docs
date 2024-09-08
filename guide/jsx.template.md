---
title: TSX Template
---

# JSX/TSX - Custom Content Rendering

JSX (or TSX if you're using TypeScript) is a syntax extension to JavaScript that simplifies template rendering. We highly recommend using JSX/TSX as it will make your development process much easier.

```jsx
const MyTemplate = (h, column) =>
  <span style={{ color: 'red' }}>
    <div class="me">{ column.name }</div>
  </span>
```

While JSX is commonly associated with React, it is not exclusive to it. JSX is simply a way to render content and can be used in any project you choose. We use JSX/TSX in all our projects because it simplifies the rendering process. 

For example, consider a regular column header rendered with `createElement`:

```js
const columnTemplate = (createElement, column) => {
  return createElement('span', {
    style: {
      color: 'red'
    },
  }, createElement('div', {
    class: 'me'
  }, column.name));
};
const columns = [{
  name: 'Person name',
  prop: 'name',
  columnTemplate 
}];
```

Now imagine having 10 or more child nodes. This can quickly become complex. Let's simplify it with JSX or TSX.

> [!WARNING]
> Remember to escape any HTML code to prevent XSS attacks.


First, create a myJsx.jsx file:

```jsx
export const myTemplate = (h, column) => {
  return <span style={{color: 'red'}}>
    <div class="me">{column.name}</div>
  </span>;
}
```

Then in our main file:

```js
import { myTemplate } from `./myJsx`;
const columns = [{
  name: 'Person name',
  prop: 'name',
  columnTemplate: myTemplate
}];
```

Quite simple, right?


<!--@include: ../demo/jsx/jsx.simple.example.md -->