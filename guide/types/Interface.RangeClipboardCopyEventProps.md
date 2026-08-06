[RevoGrid Documentation v4.25.0](README.md) / RangeClipboardCopyEventProps

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/types/interfaces.ts#L845) |
| `data` | `T`[][] | - | - | [src/types/interfaces.ts:919](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/types/interfaces.ts#L919) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | - | - | [src/types/interfaces.ts:921](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/types/interfaces.ts#L921) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:920](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/types/interfaces.ts#L920) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/types/interfaces.ts#L840) |
