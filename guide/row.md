# Row
<!--@include: ./parts/row.md-->

## Pinned rows (Fixed rows)

Pinned rows are separate data sources for row at the top and at the bottom.

```js
const pinnedTopSource = [{ name: 'Dixon Hudson' }];
const pinnedBottomSource = [{ name: 'Weber Henderson' }];

const grid = div.querySelector('revo-grid');
grid.pinnedTopSource = pinnedTopSource;
grid.pinnedBottomSource = pinnedBottomSource;
```

## Row size

Use `rowSize` property if you are aiming to change all rows sizes.
In HTML:

```html
<revo-grid row-size="50"/>
```

Or in JS:
```js
const grid = div.querySelector('revo-grid');
grid.rowSize = 50;
```

### Individual row sizes
To define individual row sizes use `rowDefinitions` property. 
<br>Size definition is quite straightforward:

```js
const grid = div.querySelector('revo-grid');
const rowDefinitions = [{ type: 'row', index: 0, size: 45 }]; // row with index 0 will receive size of 45px.
grid.rowDefinitions = rowDefinitions;
```


[Demo](https://codesandbox.io/s/revo-infinity-list-select-all-custom-row-size-6ql68).

<ClientOnly>
  <iframe src="https://codesandbox.io/embed/revo-infinity-list-select-all-custom-row-size-6ql68?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="revo-infinity-list-select-all-custom-row-size"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
</ClientOnly>


## Row class binding

Define property which is going to be your `rowClass` simply with `rowClass` attribute `<revo-grid rowClass="myRowClass"/>`.
After this in source row model add this property `myRowClass` in example below.


```tsx
// tsx
const columns = [{
  name: 'Person',
  prop: 'name'
}];

const source = [
  { name: 'Steve', myRowClass: 'blue' },
  { name: 'John', myRowClass: 'green' }
];
return '<revo-grid rowClass="myRowClass" source={source} columns={columns}/>';
```


## Row headers
Excel like feature. Shows row number at the left side of the table. 
If `row-headers` is `true` then it's available. `false` by default.

```js
<revo-grid row-headers="true"/>
```

Or from the code:
```js
const grid = document.querySelector('revo-grid');
grid.rowHeaders = true;
```

Alternatively you can use `rowHeaders` as additional fixed column on the left. `rowHeaders` accept all params as regular column does (`size`, `cellTemplate` etc).

```js
const grid = document.querySelector('revo-grid');
grid.rowHeaders = {
  size: 200
};
```
