[RevoGrid Documentation v4.21.7](README.md) / BeforeSaveDataDetails

# Interface: BeforeSaveDataDetails

## Extends

- [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`colIndex` | [src/types/interfaces.ts:59](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L59) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`colType` | [src/types/interfaces.ts:63](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L63) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\> | Column data object | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`column` | [src/types/interfaces.ts:51](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L51) |
| `data` | [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>[] | Row models based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`data` | [src/types/interfaces.ts:71](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L71) |
| `model` | [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Row data object | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`model` | [src/types/interfaces.ts:47](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L47) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`prop` | [src/types/interfaces.ts:43](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L43) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`rowIndex` | [src/types/interfaces.ts:55](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L55) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`type` | [src/types/interfaces.ts:67](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L67) |
| `val?` | `any` | Value from editor to save, not part of the model value yet | - | [src/types/selection.ts:124](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/selection.ts#L124) |
| `value?` | `any` | Current cell data value Mapped from model through column property like model['prop'] | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`value` | [src/types/interfaces.ts:76](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L76) |
