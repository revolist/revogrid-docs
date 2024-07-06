[@revolist/revogrid](README.md) / CellTemplateProp

# Interface: CellTemplateProp

Template property for each cell, extends the column data schema model.
Additionally, it provides access to the providers injected into the template.

## Extends

- [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | `ColumnDataSchemaModel.colIndex` | [src/types/interfaces.ts:40](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L40) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | `ColumnDataSchemaModel.colType` | [src/types/interfaces.ts:44](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L44) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | `ColumnDataSchemaModel.column` | [src/types/interfaces.ts:32](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L32) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | `ColumnDataSchemaModel.data` | [src/types/interfaces.ts:52](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L52) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | `ColumnDataSchemaModel.model` | [src/types/interfaces.ts:28](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L28) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | `ColumnDataSchemaModel.prop` | [src/types/interfaces.ts:24](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L24) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionRows`](TypeAlias.DimensionRows.md)\> | Providers injected into the template | - | [src/types/interfaces.ts:66](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L66) |
| `rowIndex` | `number` | Index of the row in the viewport | `ColumnDataSchemaModel.rowIndex` | [src/types/interfaces.ts:36](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L36) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | `ColumnDataSchemaModel.type` | [src/types/interfaces.ts:48](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L48) |
| `value` | `any` | Current cell data | `ColumnDataSchemaModel.value` | [src/types/interfaces.ts:56](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L56) |
