[RevoGrid Documentation v4.27.5](README.md) / ColumnDataSchemaModel

# Interface: ColumnDataSchemaModel\<TModel, TColumn, TProp\>

## Extended by

- [`CellTemplateProp`](Interface.CellTemplateProp.md)
- [`BeforeSaveDataDetails`](Interface.BeforeSaveDataDetails.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |
| `TColumn` *extends* [`ColumnRegular`](Interface.ColumnRegular.md) | [`ColumnRegular`](Interface.ColumnRegular.md) |
| `TProp` *extends* [`ColumnProp`](TypeAlias.ColumnProp.md) | `TColumn`\[`"prop"`\] |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | [src/types/interfaces.ts:60](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L60) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:64](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L64) |
| `column` | `TColumn` | Column data object | [src/types/interfaces.ts:52](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L52) |
| `data` | `TModel`[] | Row models based on viewport | [src/types/interfaces.ts:72](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L72) |
| `model` | `TModel` | Row data object | [src/types/interfaces.ts:48](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L48) |
| `prop` | `TProp` | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:44](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L44) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | [src/types/interfaces.ts:56](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L56) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:68](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L68) |
| `value?` | `ModelValueByProp`\<`TModel`, `TProp`\> | Current cell data value Mapped from model through column property like model['prop'] | [src/types/interfaces.ts:77](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/types/interfaces.ts#L77) |
