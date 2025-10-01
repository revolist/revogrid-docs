[RevoGrid Documentation v4.17.3](README.md) / BeforeSaveDataDetails

# Interface: BeforeSaveDataDetails

Advanced column data schema model.
Used for transpassing data to cell renderer and editor.

## Extends

- [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`colIndex` | [src/types/interfaces.ts:50](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L50) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`colType` | [src/types/interfaces.ts:54](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L54) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`column` | [src/types/interfaces.ts:42](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L42) |
| `data` | [`DataType`](TypeAlias.DataType.md)\<`any`\>[] | Row models based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`data` | [src/types/interfaces.ts:62](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L62) |
| `model` | [`DataType`](TypeAlias.DataType.md)\<`any`\> | Row data object | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`model` | [src/types/interfaces.ts:38](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L38) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`prop` | [src/types/interfaces.ts:34](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L34) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`rowIndex` | [src/types/interfaces.ts:46](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L46) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`type` | [src/types/interfaces.ts:58](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L58) |
| `val?` | `any` | Value from editor to save, not part of the model value yet | - | [src/types/selection.ts:124](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/selection.ts#L124) |
| `value?` | `any` | Current cell data value Mapped from model through column property like model['prop'] | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`value` | [src/types/interfaces.ts:67](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L67) |
