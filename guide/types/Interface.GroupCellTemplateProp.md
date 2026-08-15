[RevoGrid Documentation v4.25.2](README.md) / GroupCellTemplateProp

# Interface: GroupCellTemplateProp

## Extends

- `Omit`\<[`CellTemplateProp`](Interface.CellTemplateProp.md), `"colType"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | `Omit.colIndex` | [src/types/interfaces.ts:60](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L60) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column viewport type that owns the cell. | - | [src/plugins/groupingRow/grouping.row.types.ts:77](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L77) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | Column data object | `Omit.column` | [src/types/interfaces.ts:52](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L52) |
| `columnItem` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Current virtual column position. Only columns rendered by the viewport are passed to the group cell template. | - | [src/plugins/groupingRow/grouping.row.types.ts:82](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L82) |
| `data` | [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>[] | Row models based on viewport | `Omit.data` | [src/types/interfaces.ts:72](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L72) |
| `group` | \{ `canExpand`: `boolean`; `depth`: `number`; `expanded`: `boolean`; `isLabelColumn`: `boolean`; `name`: `string`; `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); `onExpand`: `void`; \} | Semantic information about the synthetic group row. | - | [src/plugins/groupingRow/grouping.row.types.ts:90](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L90) |
| `group.canExpand` | `boolean` | - | - | [src/plugins/groupingRow/grouping.row.types.ts:96](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L96) |
| `group.depth` | `number` | - | - | [src/plugins/groupingRow/grouping.row.types.ts:92](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L92) |
| `group.expanded` | `boolean` | - | - | [src/plugins/groupingRow/grouping.row.types.ts:93](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L93) |
| `group.isLabelColumn` | `boolean` | - | - | [src/plugins/groupingRow/grouping.row.types.ts:95](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L95) |
| `group.name` | `string` | - | - | [src/plugins/groupingRow/grouping.row.types.ts:91](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L91) |
| `group.prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | - | [src/plugins/groupingRow/grouping.row.types.ts:94](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L94) |
| `group.onExpand` | `void` | - | - | [src/plugins/groupingRow/grouping.row.types.ts:97](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L97) |
| `model` | [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Row data object | `Omit.model` | [src/types/interfaces.ts:48](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L48) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | `Omit.prop` | [src/types/interfaces.ts:44](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L44) |
| `providers` | [`Providers`](Interface.Providers.md)\<[`DimensionRows`](TypeAlias.DimensionRows.md)\> | Providers injected into the template Also to get grouping depth | `Omit.providers` | [src/types/interfaces.ts:92](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L92) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | `Omit.rowIndex` | [src/types/interfaces.ts:56](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L56) |
| `rowItem` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Current virtual row position. | - | [src/plugins/groupingRow/grouping.row.types.ts:86](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/groupingRow/grouping.row.types.ts#L86) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | `Omit.type` | [src/types/interfaces.ts:68](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L68) |
| `value?` | `any` | Current cell data value Mapped from model through column property like model['prop'] | `Omit.value` | [src/types/interfaces.ts:77](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L77) |
