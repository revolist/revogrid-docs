# Cell renderer

This article explains how to use a custom cell function to display HTML content in a cell.
<br>Alternatively, you can use [predefined column types](../column/types.md).

> [!WARNING]
> Remember to escape any HTML code that could be used for XSS attacks.

<!--@include: ../parts/framework.cell.md-->

<br/>

> [!TIP]
> Use [JSX](../jsx.template.md) to simplify your code and render HTML content.


```js
const columns = [{
  name: 'Person name',
  prop: 'name',
  cellTemplate: (createElement, props) => {
    return createElement('span', {
      style: {
        color: 'red'
      },
    }, props.model[props.prop]);
  },
}];
```