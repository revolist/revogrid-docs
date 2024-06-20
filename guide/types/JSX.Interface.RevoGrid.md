[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevoGrid

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
| `additionalData?` | `any` | Additional data to be passed to plugins, renders or editors. For example if you need to pass Vue component instance. |
| `applyOnClose?` | `boolean` | Apply changes in editor when closed except 'Escape' cases. If custom editor in use method getValue required. Check interfaces.d.ts `EditorBase` for more info. |
| `autoSizeColumn?` | `boolean` \| [`AutoSizeColumnConfig`](Type.AutoSizeColumnConfig.md) | Autosize config. Enables columns autoSize. For more details check `autoSizeColumn` plugin. By default disabled, hence operation is not performance efficient. `true` to enable with default params (double header separator click for autosize). Or define config. See `AutoSizeColumnConfig` for more details. |
| `canFocus?` | `boolean` | When true cell focus appear. |
| `canMoveColumns?` | `boolean` | Enable column move plugin. |
| `colSize?` | `number` | Indicates default column size. |
| `columnTypes?` | \{\} | Column Types Format. Every type represent multiple column properties. Types will be merged but can be replaced with column properties. Types were made as separate objects to be reusable per multiple columns. |
| `columns?` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Type.ColumnGrouping.md))[] | Columns - defines an array of grid columns. Can be column or grouped column. |
| `disableVirtualX?` | `boolean` | Disable lazy rendering mode for the `X axis`. Use when not many columns present and you don't need rerenader cells during scroll. Can be used for initial rendering performance improvement. |
| `disableVirtualY?` | `boolean` | Disable lazy rendering mode for the `Y axis`. Use when not many rows present and you don't need rerenader cells during scroll. Can be used for initial rendering performance improvement. |
| `editors?` | [`Editors`](Type.Editors.md) | Custom editors register. |
| `exporting?` | `boolean` | Enable export plugin. |
| `filter?` | `boolean` \| `ColumnFilterConfig` | Enables filter plugin. Can be boolean. Or can be filter collection See `FilterCollection` for more info. |
| `focusTemplate?` | [`FocusTemplateFunc`](Type.FocusTemplateFunc.md) | Apply changes typed in editor on editor close except Escape cases. If custom editor in use method `getValue` required. Check `interfaces.d.ts` `EditorBase` for more info. |
| `frameSize?` | `number` | Defines how many rows/columns should be rendered outside visible area. |
| `grouping?` | [`GroupingOptions`](Type.GroupingOptions.md) | Group rows based on this property. Define properties to be groped by grouping plugin See `GroupingOptions`. |
| `hideAttribution?` | `boolean` | Please only hide the attribution if you are subscribed to Pro version |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. |
| `onAfteranysource?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `source`: [`DataType`](Type.DataType.md)[]; `type`: [`DimensionRows`](Type.DimensionRows.md); \}\>) => `void` | Emitted after each source update, whether from the pinned or main viewport. Useful for tracking all changes originating from sources in both the pinned and main viewports. |
| `onAftercolumnresize?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{\}\>) => `void` | Emitted after column resizing. Useful for retrieving the resized columns. |
| `onAftercolumnsset?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `columns`: [`ColumnCollection`](Type.ColumnCollection.md); `order`: `Record`\<[`ColumnProp`](Type.ColumnProp.md), `"asc"` \| `"desc"`\>; \}\>) => `void` | Column updated |
| `onAfteredit?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`AfterEditEvent`](Type.AfterEditEvent.md)\>) => `void` | Triggered after data applied or range changed. |
| `onAfterfocus?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `column`: [`ColumnRegular`](Interface.ColumnRegular.md); `model`: `any`; \}\>) => `void` | Triggered after focus render finished. Can be used to access a focus element through `event.target` |
| `onAftergridinit?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<`any`\>) => `void` | Emmited after the grid is initialized. Connected to the DOM. |
| `onAftersourceset?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `source`: [`DataType`](Type.DataType.md)[]; `type`: [`DimensionRows`](Type.DimensionRows.md); \}\>) => `void` | After main source/rows updated |
| `onAftertrimmed?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<`any`\>) => `void` | Emitted after trimmed values have been applied. Useful for notifying when trimming of values has taken place. |
| `onBeforeange?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`ChangedRange`](Type.ChangedRange.md)\>) => `void` | Triggered before range applied. Use e.preventDefault() to prevent range. |
| `onBeforeanysource?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `source`: [`DataType`](Type.DataType.md)[]; `type`: [`DimensionRows`](Type.DimensionRows.md); \}\>) => `void` | Before data apply on any source type. Can be source from pinned and main viewport. You can override data source here |
| `onBeforeautofill?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`ChangedRange`](Type.ChangedRange.md)\>) => `void` | This event is triggered before autofill is applied. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. |
| `onBeforecellfocus?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`BeforeSaveDataDetails`](Type.BeforeSaveDataDetails.md)\>) => `void` | This event is triggered before the cell focus is changed. To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`. |
| `onBeforecolumnapplied?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`ColumnCollection`](Type.ColumnCollection.md)\>) => `void` | Emitted before a column update is applied, after the column set is gathered and the viewport is updated. Useful for performing actions or modifications before the final application of the column update. |
| `onBeforecolumnsset?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`ColumnCollection`](Type.ColumnCollection.md)\>) => `void` | Emitted before a column update is applied. Listeners can use this event to perform any necessary actions or modifications before the column update is finalized. |
| `onBeforeedit?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`BeforeSaveDataDetails`](Type.BeforeSaveDataDetails.md)\>) => `void` | This event is triggered before the data is edited. To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`. To override the edit result with your own value, set the `e.val` property to your desired value. |
| `onBeforeeditstart?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`BeforeSaveDataDetails`](Type.BeforeSaveDataDetails.md)\>) => `void` | Emitted before editing starts. Use e.preventDefault() to prevent the default edit behavior. |
| `onBeforeexport?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`DataInput`](Type.DataInput.md)\>) => `void` | Before export Use e.preventDefault() to prevent export Replace data in Event in case you want to modify it in export |
| `onBeforefilterapply?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `collection`: [`FilterCollection`](Type.FilterCollection.md); \}\>) => `void` | <p>Emitted before applying a filter to the data source. Use e.preventDefault() to prevent cell focus change. Modify the</p><p>**Collection**</p><p>if you need to change filters.</p> |
| `onBeforefiltertrimmed?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `collection`: [`FilterCollection`](Type.FilterCollection.md); `itemsToFilter`: `Record`\<`number`, `boolean`\>; \}\>) => `void` | Emitted before applying a filter to the data source. Use e.preventDefault() to prevent the default behavior of trimming values and applying the filter. Modify the `collection` property if you want to change the filters. Modify the `itemsToFilter` property if you want to filter the indexes for trimming. |
| `onBeforefocuslost?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`FocusedData`](Type.FocusedData.md)\>) => `void` | This event is triggered before the grid focus is lost. To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`. |
| `onBeforegridrender?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<`any`\>) => `void` | Emmited before the grid is rendered. |
| `onBeforerangeedit?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`BeforeRangeSaveDataDetails`](Type.BeforeRangeSaveDataDetails.md)\>) => `void` | This event is triggered before applying range data, specifically when a range selection occurs. To customize the data and prevent the default edit data from being set, you can call `e.preventDefault()`. |
| `onBeforerowdefinition?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `oldVals`: `any`; `vals`: `any`; \}\>) => `void` | Emitted before the row definition is applied. Useful for modifying or preventing the default row definition behavior. |
| `onBeforesorting?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `additive`: `boolean`; `column`: [`ColumnRegular`](Interface.ColumnRegular.md); `order`: `"asc"` \| `"desc"`; \}\>) => `void` | Triggered by sorting.plugin.ts Before sorting event. Initial sorting triggered, if this event stops no other event called. Use e.preventDefault() to prevent sorting. |
| `onBeforesortingapply?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `additive`: `boolean`; `column`: [`ColumnRegular`](Interface.ColumnRegular.md); `order`: `"asc"` \| `"desc"`; \}\>) => `void` | Triggered by sorting.plugin.ts Before sorting apply. Use e.preventDefault() to prevent sorting data change. |
| `onBeforesourceset?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `source`: [`DataType`](Type.DataType.md)[]; `type`: [`DimensionRows`](Type.DimensionRows.md); \}\>) => `void` | Before main source/rows data apply. You can override data source here |
| `onBeforetrimmed?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `trimmed`: `Record`\<`number`, `boolean`\>; `trimmedType`: `string`; `type`: `string`; \}\>) => `void` | Emitted before trimming values. Use e.preventDefault() to prevent the default behavior of trimming values. Modify the `trimmed` property if you want to filter the indexes for trimming. |
| `onContentsizechanged?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`MultiDimensionType`](Type.MultiDimensionType.md)\>) => `void` | New content size has been applied. The size excludes the header. Currently, the event responsible for applying the new content size does not provide the actual size. To retrieve the actual content size, you can utilize the `getContentSize` function after the event has been triggered. |
| `onFilterconfigchanged?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<`any`\>) => `void` | Emitted when the filter configuration is changed |
| `onHeaderclick?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\>) => `void` | On header click. |
| `onRowdragstart?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | This event is triggered when the row order change is started. To prevent the default behavior of changing the row order, you can call `e.preventDefault()`. To change the item name at the start of the row order change, you can set `e.text` to the desired new name. |
| `onRowheaderschanged?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<`any`\>) => `void` | Emmited when the row headers are changed. |
| `onRoworderchanged?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | This event is triggered before the order of `rgRow` is applied. To prevent the default behavior of changing the order of `rgRow`, you can call `e.preventDefault()`. |
| `onViewportscroll?` | (`event`: [`RevoGridCustomEvent`](Interface.RevoGridCustomEvent.md)\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\>) => `void` | Emitted when the viewport is scrolled. Useful for tracking viewport scrolling events. |
| `pinnedBottomSource?` | [`DataType`](Type.DataType.md)[] | Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source. |
| `pinnedTopSource?` | [`DataType`](Type.DataType.md)[] | Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source. |
| `plugins?` | [`PluginExternalConstructor`](Interface.PluginExternalConstructor.md)[] | Custom grid plugins. Has to be predefined during first grid init. Every plugin should be inherited from BasePlugin. |
| `range?` | `boolean` | When true, user can range selection. |
| `readonly?` | `boolean` | When true, grid in read only mode. |
| `registerVNode?` | [`VNode`](Interface.VNode.md)[] | Register new virtual node inside of grid. Used for additional items creation such as plugin elements. Should be set before grid render inside of plugins. |
| `resize?` | `boolean` | When true, columns are resizable. |
| `rowClass?` | `string` | Row class property mapping. Map custom classes to rows from row object data. Define this property in rgRow object and this will be mapped as rgRow class. |
| `rowDefinitions?` | [`RowDefinition`](Type.RowDefinition.md)[] | Custom row properies to be applied. See `RowDefinition` for more info. |
| `rowHeaders?` | `boolean` \| [`RowHeaders`](Interface.RowHeaders.md) | Excel like functionality. Show row numbers. Also can be used for custom row header render if object provided. |
| `rowSize?` | `number` | Indicates default rgRow size. By default 0, means theme package size will be applied  Alternatively you can use `rowSize` to reset viewport |
| `source?` | [`DataType`](Type.DataType.md)[] | Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop. |
| `stretch?` | `string` \| `boolean` | Stretch strategy for columns by `StretchColumn` plugin. For example if there are more space on the right last column size would be increased. |
| `theme?` | `string` | Theme name. |
| `trimmedRows?` | `Record`\<`number`, `boolean`\> | Trimmed rows. Functionality which allows to hide rows from main data set. `trimmedRows` are physical `rgRow` indexes to hide. |
| `useClipboard?` | `boolean` | When true enable clipboard. |
