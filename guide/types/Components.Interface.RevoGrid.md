[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevoGrid

# Interface: RevoGrid

Revogrid - High-performance, customizable grid library for managing large datasets.
:::tip
Read [type definition file](https://github.com/revolist/revogrid/blob/master/src/interfaces.d.ts) for the full interface information.
All complex property types such as `ColumnRegular`, `ColumnProp`, `ColumnDataSchemaModel` can be found there.
:::
:::tip
For a comprehensive events guide, check the [dependency tree](#Dependencies).
All events propagate to the root level of the grid.
:::

## Examples

```ts
data-rgCol-rgRow - main data slot. Applies extra elements in <revogr-data />.
```

```ts
focus-rgCol-rgRow - focus layer for main data. Applies extra elements in <revogr-focus />.
```

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `addTrimmed` | (`trimmed`: `Record`\<`number`, `boolean`\>, `trimmedType`?: `string`, `type`?: [`DimensionRows`](Type.DimensionRows.md)) => `Promise`\<`CustomEvent`\<\{ `trimmed`: `Record`\<`number`, `boolean`\>; `trimmedType`: `string`; `type`: `string`; \}\>\> | Add trimmed by type |
| `additionalData` | `any` | Additional data to be passed to plugins, renders or editors. For example if you need to pass Vue component instance. |
| `applyOnClose` | `boolean` | Apply changes in editor when closed except 'Escape' cases. If custom editor in use method getValue required. Check interfaces.d.ts `EditorBase` for more info. |
| `autoSizeColumn` | `boolean` \| [`AutoSizeColumnConfig`](Type.AutoSizeColumnConfig.md) | Autosize config. Enables columns autoSize. For more details check `autoSizeColumn` plugin. By default disabled, hence operation is not performance efficient. `true` to enable with default params (double header separator click for autosize). Or define config. See `AutoSizeColumnConfig` for more details. |
| `canFocus` | `boolean` | When true cell focus appear. |
| `canMoveColumns` | `boolean` | Enable column move plugin. |
| `clearFocus` | () => `Promise`\<`void`\> | Clear current grid focus. Grid has no longer focus on it. |
| `clearSorting` | () => `Promise`\<`void`\> | Clears column sorting |
| `colSize` | `number` | Indicates default column size. |
| `columnTypes` | \{\} | Column Types Format. Every type represent multiple column properties. Types will be merged but can be replaced with column properties. Types were made as separate objects to be reusable per multiple columns. |
| `columns` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Type.ColumnGrouping.md))[] | Columns - defines an array of grid columns. Can be column or grouped column. |
| `disableVirtualX` | `boolean` | Disable lazy rendering mode for the `X axis`. Use when not many columns present and you don't need rerenader cells during scroll. Can be used for initial rendering performance improvement. |
| `disableVirtualY` | `boolean` | Disable lazy rendering mode for the `Y axis`. Use when not many rows present and you don't need rerenader cells during scroll. Can be used for initial rendering performance improvement. |
| `editors` | [`Editors`](Type.Editors.md) | Custom editors register. |
| `exporting` | `boolean` | Enable export plugin. |
| `filter` | `boolean` \| `ColumnFilterConfig` | Enables filter plugin. Can be boolean. Or can be filter collection See `FilterCollection` for more info. |
| `focusTemplate` | [`FocusTemplateFunc`](Type.FocusTemplateFunc.md) | Apply changes typed in editor on editor close except Escape cases. If custom editor in use method `getValue` required. Check `interfaces.d.ts` `EditorBase` for more info. |
| `frameSize` | `number` | Defines how many rows/columns should be rendered outside visible area. |
| `getColumnStore` | (`type`?: [`DimensionCols`](Type.DimensionCols.md)) => `Promise`\<[`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](Type.DimensionCols.md)\>\>\> | Provides access to column internal store observer Can be used for plugin support |
| `getColumns` | () => `Promise`\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Receive all columns in data source |
| `getContentSize` | () => `Promise`\<[`Cell`](Interface.Cell.md)\> | Get size of content Including all pinned data |
| `getFocused` | () => `Promise`\<[`FocusedData`](Type.FocusedData.md)\> | Get the currently focused cell. |
| `getPlugins` | () => `Promise`\<[`PluginBaseComponent`](Interface.PluginBaseComponent.md)[]\> | Get all active plugins instances |
| `getSelectedRange` | () => `Promise`\<[`RangeArea`](Type.RangeArea.md)\> | Get the currently selected Range. |
| `getSource` | (`type`?: [`DimensionRows`](Type.DimensionRows.md)) => `Promise`\<[`DataType`](Type.DataType.md)[]\> | Get data from source |
| `getSourceStore` | (`type`?: [`DimensionRows`](Type.DimensionRows.md)) => `Promise`\<[`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`DataType`](Type.DataType.md), [`DimensionRows`](Type.DimensionRows.md)\>\>\> | Provides access to rows internal store observer Can be used for plugin support |
| `getVisibleSource` | (`type`?: [`DimensionRows`](Type.DimensionRows.md)) => `Promise`\<`any`[]\> | Get data from visible part of source Trimmed/filtered rows will be excluded |
| `grouping` | [`GroupingOptions`](Type.GroupingOptions.md) | Group rows based on this property. Define properties to be groped by grouping plugin See `GroupingOptions`. |
| `hideAttribution` | `boolean` | Please only hide the attribution if you are subscribed to Pro version |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. |
| `pinnedBottomSource` | [`DataType`](Type.DataType.md)[] | Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source. |
| `pinnedTopSource` | [`DataType`](Type.DataType.md)[] | Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source. |
| `plugins` | [`PluginExternalConstructor`](Interface.PluginExternalConstructor.md)[] | Custom grid plugins. Has to be predefined during first grid init. Every plugin should be inherited from BasePlugin. |
| `range` | `boolean` | When true, user can range selection. |
| `readonly` | `boolean` | When true, grid in read only mode. |
| `refresh` | (`type`?: [`DimensionRows`](Type.DimensionRows.md) \| `"all"`) => `Promise`\<`void`\> | Refreshes data viewport. Can be specific part as rgRow or pinned rgRow or 'all' by default. |
| `registerVNode` | [`VNode`](Interface.VNode.md)[] | Register new virtual node inside of grid. Used for additional items creation such as plugin elements. Should be set before grid render inside of plugins. |
| `resize` | `boolean` | When true, columns are resizable. |
| `rowClass` | `string` | Row class property mapping. Map custom classes to rows from row object data. Define this property in rgRow object and this will be mapped as rgRow class. |
| `rowDefinitions` | [`RowDefinition`](Type.RowDefinition.md)[] | Custom row properies to be applied. See `RowDefinition` for more info. |
| `rowHeaders` | `boolean` \| [`RowHeaders`](Interface.RowHeaders.md) | Excel like functionality. Show row numbers. Also can be used for custom row header render if object provided. |
| `rowSize` | `number` | Indicates default rgRow size. By default 0, means theme package size will be applied  Alternatively you can use `rowSize` to reset viewport |
| `scrollToColumnIndex` | (`coordinate`?: `number`) => `Promise`\<`void`\> | Scrolls viewport to specified column by index. |
| `scrollToColumnProp` | (`prop`: [`ColumnProp`](Type.ColumnProp.md), `dimension`?: `"rgCol"`) => `Promise`\<`void`\> | Scrolls viewport to specified column by prop |
| `scrollToCoordinate` | (`cell`: `Partial`\<[`Cell`](Interface.Cell.md)\>) => `Promise`\<`void`\> | Scrolls view port to coordinate |
| `scrollToRow` | (`coordinate`?: `number`) => `Promise`\<`void`\> | Scrolls viewport to specified row by index. |
| `setCellEdit` | (`rgRow`: `number`, `prop`: [`ColumnProp`](Type.ColumnProp.md), `rowSource`?: [`DimensionRows`](Type.DimensionRows.md)) => `Promise`\<`void`\> | Open editor for cell. |
| `setCellsFocus` | (`cellStart`?: [`Cell`](Interface.Cell.md), `cellEnd`?: [`Cell`](Interface.Cell.md), `colType`?: `string`, `rowType`?: `string`) => `Promise`\<`void`\> | Set focus range. |
| `setDataAt` | (`data`: \{ `col`: `number`; `row`: `number`; \} & [`AllDimensionType`](Interface.AllDimensionType.md)) => `Promise`\<`void`\> | Sets data at specified cell. Useful for performance optimization. No viewport update will be triggered. |
| `source` | [`DataType`](Type.DataType.md)[] | Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop. |
| `stretch` | `string` \| `boolean` | Stretch strategy for columns by `StretchColumn` plugin. For example if there are more space on the right last column size would be increased. |
| `theme` | `string` | Theme name. |
| `trimmedRows` | `Record`\<`number`, `boolean`\> | Trimmed rows. Functionality which allows to hide rows from main data set. `trimmedRows` are physical `rgRow` indexes to hide. |
| `updateColumnSorting` | (`column`: [`ColumnRegular`](Interface.ColumnRegular.md), `index`: `number`, `order`: `"asc"` \| `"desc"`, `additive`: `boolean`) => `Promise`\<[`ColumnRegular`](Interface.ColumnRegular.md)\> | Update column sorting |
| `updateColumns` | (`cols`: [`ColumnRegular`](Interface.ColumnRegular.md)[]) => `Promise`\<`void`\> | Update columns |
| `useClipboard` | `boolean` | When true enable clipboard. |
