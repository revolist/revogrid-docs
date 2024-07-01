[@revolist/revogrid](README.md) / CellTemplateProp

# Interface: CellTemplateProp

Template property for each cell, extends the column data schema model.
Additionally, it provides access to the providers injected into the template.

## Extends

- [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | `ColumnDataSchemaModel.colIndex` | [src/types/interfaces.ts:46](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L46) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | `ColumnDataSchemaModel.colType` | [src/types/interfaces.ts:50](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L50) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | `ColumnDataSchemaModel.column` | [src/types/interfaces.ts:38](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L38) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | `ColumnDataSchemaModel.data` | [src/types/interfaces.ts:58](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L58) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | `ColumnDataSchemaModel.model` | [src/types/interfaces.ts:34](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L34) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | `ColumnDataSchemaModel.prop` | [src/types/interfaces.ts:30](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L30) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionRows`](TypeAlias.DimensionRows.md)\> | Providers injected into the template | - | [src/types/interfaces.ts:72](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L72) |
| `rowIndex` | `number` | Index of the row in the viewport | `ColumnDataSchemaModel.rowIndex` | [src/types/interfaces.ts:42](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L42) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | `ColumnDataSchemaModel.type` | [src/types/interfaces.ts:54](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L54) |
| `value` | `any` | Current cell data | `ColumnDataSchemaModel.value` | [src/types/interfaces.ts:62](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L62) |
