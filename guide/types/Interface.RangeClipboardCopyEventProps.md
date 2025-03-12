[RevoGrid Documentation v4.13.3](README.md) / RangeClipboardCopyEventProps

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:769](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L769) |
| `data` | `T`[][] | - | - | [src/types/interfaces.ts:838](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L838) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | - | - | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L840) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:839](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L839) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:764](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L764) |
