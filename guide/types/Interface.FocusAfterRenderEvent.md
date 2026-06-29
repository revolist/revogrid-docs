[RevoGrid Documentation v4.23.19](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent\<TModel\>

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | - | [src/types/interfaces.ts:889](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L889) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L845) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | - | - | [src/types/interfaces.ts:881](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L881) |
| `model?` | `TModel` | - | - | [src/types/interfaces.ts:880](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L880) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | - | [src/types/interfaces.ts:885](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L885) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L840) |
