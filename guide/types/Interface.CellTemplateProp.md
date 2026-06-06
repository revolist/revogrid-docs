[RevoGrid Documentation v4.23.12](README.md) / CellTemplateProp

# Interface: CellTemplateProp\<TModel, TColumn, TProp\>

Template property for each cell, extends the column data schema model.
Additionally, it provides access to the providers injected into the template.

## Extends

- [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<`TModel`, `TColumn`, `TProp`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |
| `TColumn` *extends* [`ColumnRegular`](Interface.ColumnRegular.md) | [`ColumnRegular`](Interface.ColumnRegular.md) |
| `TProp` *extends* [`ColumnProp`](TypeAlias.ColumnProp.md) | `TColumn`\[`"prop"`\] |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`colIndex` | [src/types/interfaces.ts:59](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L59) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`colType` | [src/types/interfaces.ts:63](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L63) |
| `column` | `TColumn` | Column data object | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`column` | [src/types/interfaces.ts:51](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L51) |
| `data` | `TModel`[] | Row models based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`data` | [src/types/interfaces.ts:71](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L71) |
| `model` | `TModel` | Row data object | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`model` | [src/types/interfaces.ts:47](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L47) |
| `prop` | `TProp` | Column prop used for mapping value to cell from data source model/row | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`prop` | [src/types/interfaces.ts:43](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L43) |
| `providers` | [`Providers`](Interface.Providers.md)\<[`DimensionRows`](TypeAlias.DimensionRows.md)\> | Providers injected into the template Also to get grouping depth | - | [src/types/interfaces.ts:91](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L91) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`rowIndex` | [src/types/interfaces.ts:55](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L55) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`type` | [src/types/interfaces.ts:67](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L67) |
| `value?` | `ModelValueByProp`\<`TModel`, `TProp`\> | Current cell data value Mapped from model through column property like model['prop'] | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md).`value` | [src/types/interfaces.ts:76](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L76) |
