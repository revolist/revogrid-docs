[@revolist/revogrid](README.md) / CellTemplateProp

# Interface: CellTemplateProp

Template property for each cell, extends the column data schema model.
Additionally, it provides access to the providers injected into the template.

## Extends

- [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | `ColumnDataSchemaModel.colIndex` | [src/types/interfaces.ts:49](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L49) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | `ColumnDataSchemaModel.colType` | [src/types/interfaces.ts:53](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L53) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | `ColumnDataSchemaModel.column` | [src/types/interfaces.ts:41](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L41) |
| `data` | [`DataType`](TypeAlias.DataType.md)\<`any`\>[] | Row models based on viewport | `ColumnDataSchemaModel.data` | [src/types/interfaces.ts:61](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L61) |
| `model` | [`DataType`](TypeAlias.DataType.md)\<`any`\> | Row data object | `ColumnDataSchemaModel.model` | [src/types/interfaces.ts:37](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L37) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | `ColumnDataSchemaModel.prop` | [src/types/interfaces.ts:33](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L33) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionRows`](TypeAlias.DimensionRows.md)\> | Providers injected into the template | - | [src/types/interfaces.ts:75](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L75) |
| `rowIndex` | `number` | Index of the row in the viewport | `ColumnDataSchemaModel.rowIndex` | [src/types/interfaces.ts:45](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L45) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | `ColumnDataSchemaModel.type` | [src/types/interfaces.ts:57](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L57) |
| `value` | `any` | Current cell data | `ColumnDataSchemaModel.value` | [src/types/interfaces.ts:65](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/interfaces.ts#L65) |
