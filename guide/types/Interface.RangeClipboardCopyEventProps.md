[RevoGrid Documentation v4.23.10](README.md) / RangeClipboardCopyEventProps

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/90b91787366997fc2dd0d419e5fc00e9e9b74f80/src/types/interfaces.ts#L845) |
| `data` | `T`[][] | - | - | [src/types/interfaces.ts:914](https://github.com/revolist/revogrid/blob/90b91787366997fc2dd0d419e5fc00e9e9b74f80/src/types/interfaces.ts#L914) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | - | - | [src/types/interfaces.ts:916](https://github.com/revolist/revogrid/blob/90b91787366997fc2dd0d419e5fc00e9e9b74f80/src/types/interfaces.ts#L916) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:915](https://github.com/revolist/revogrid/blob/90b91787366997fc2dd0d419e5fc00e9e9b74f80/src/types/interfaces.ts#L915) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/90b91787366997fc2dd0d419e5fc00e9e9b74f80/src/types/interfaces.ts#L840) |
