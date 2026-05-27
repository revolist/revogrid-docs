[RevoGrid Documentation v4.23.3](README.md) / ColumnDataSchemaModel

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
| `colIndex` | `number` | Virtual index of the column in the viewport | [src/types/interfaces.ts:59](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L59) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:63](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L63) |
| `column` | `TColumn` | Column data object | [src/types/interfaces.ts:51](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L51) |
| `data` | `TModel`[] | Row models based on viewport | [src/types/interfaces.ts:71](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L71) |
| `model` | `TModel` | Row data object | [src/types/interfaces.ts:47](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L47) |
| `prop` | `TProp` | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:43](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L43) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | [src/types/interfaces.ts:55](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L55) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:67](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L67) |
| `value?` | `ModelValueByProp`\<`TModel`, `TProp`\> | Current cell data value Mapped from model through column property like model['prop'] | [src/types/interfaces.ts:76](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L76) |
