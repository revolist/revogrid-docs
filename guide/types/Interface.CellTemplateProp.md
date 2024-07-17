[@revolist/revogrid](README.md) / CellTemplateProp

# Interface: CellTemplateProp

Template property for each cell, extends the column data schema model.
Additionally, it provides access to the providers injected into the template.

## Extends

- [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | `ColumnDataSchemaModel.colIndex` | [src/types/interfaces.ts:43](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L43) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | `ColumnDataSchemaModel.colType` | [src/types/interfaces.ts:47](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L47) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | `ColumnDataSchemaModel.column` | [src/types/interfaces.ts:35](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L35) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | `ColumnDataSchemaModel.data` | [src/types/interfaces.ts:55](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L55) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | `ColumnDataSchemaModel.model` | [src/types/interfaces.ts:31](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L31) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | `ColumnDataSchemaModel.prop` | [src/types/interfaces.ts:27](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L27) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionRows`](TypeAlias.DimensionRows.md)\> | Providers injected into the template | - | [src/types/interfaces.ts:69](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L69) |
| `rowIndex` | `number` | Index of the row in the viewport | `ColumnDataSchemaModel.rowIndex` | [src/types/interfaces.ts:39](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L39) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | `ColumnDataSchemaModel.type` | [src/types/interfaces.ts:51](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L51) |
| `value` | `any` | Current cell data | `ColumnDataSchemaModel.value` | [src/types/interfaces.ts:59](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/types/interfaces.ts#L59) |
