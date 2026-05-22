[RevoGrid Documentation v4.21.11](README.md) / FocusAfterRenderEvent

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
| `colIndex` | `number` | Virtual index of the column in the viewport | - | [src/types/interfaces.ts:871](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L871) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:832](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L832) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | - | - | [src/types/interfaces.ts:863](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L863) |
| `model?` | `TModel` | - | - | [src/types/interfaces.ts:862](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L862) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | - | [src/types/interfaces.ts:867](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L867) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:827](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L827) |
