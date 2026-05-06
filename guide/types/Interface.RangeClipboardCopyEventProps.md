[RevoGrid Documentation v4.21.6](README.md) / RangeClipboardCopyEventProps

# Interface: RangeClipboardCopyEventProps\<T\>

Range copy.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/types/interfaces.ts#L788) |
| `data` | `T`[][] | - | - | [src/types/interfaces.ts:857](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/types/interfaces.ts#L857) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | - | - | [src/types/interfaces.ts:859](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/types/interfaces.ts#L859) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:858](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/types/interfaces.ts#L858) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:783](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/types/interfaces.ts#L783) |
