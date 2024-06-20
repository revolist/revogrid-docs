### Date

Date [column type plugin](https://github.com/revolist/Revogrid-column-date) based on based on [duetds-date-picker](https://github.com/duetds/date-picker) library.

In order to improve datepicker functionality please contribute with [duetds-date-picker](https://github.com/duetds/date-picker).
Accept data as formated string or date format.

You can access any [duetds-date-picker](https://github.com/duetds/date-picker) properties in Column Definition:

```js
const columns = [
    {
        prop: 'birthdate',
        columnType: 'date',
        direction: 'left',
        required: 'true',
        valueAsDate: 'true',
    },
]
```

<b>Installation</b>

::: code-group

```npm
npm i @revolist/revogrid-column-date

```

```pnpm
pnpm add @revolist/revogrid-column-date
```

```yarn
yarn add @revolist/revogrid-column-date
```

```bun
bun add @revolist/revogrid-column-date
```

:::

<b>Basic usage</b>

-   Import column type;
-   Specify table data;
-   Per column specify column type;
-   Register your column type.

```js
// do import
import Plugin from '@revolist/revogrid-column-date'

const columns = [{ prop: 'birthdate', columnType: 'date' }]
const rows = [{ name: '2020-08-24' }, { name: '2022-08-24' }]

// register column type
const columnTypes = { date: new Plugin() }

// apply data to grid per your framework approach
<revo-grid source={rows} columns={columns} columnTypes={columnTypes} />
```

<ClientOnly>
  <div class="tile">
   <iframe src="https://codesandbox.io/embed/vue-grid-date-plugin-6wudi?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Vue-grid-date-plugin"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</ClientOnly>
