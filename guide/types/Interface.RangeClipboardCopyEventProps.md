[RevoGrid Documentation v4.14.13](README.md) / RangeClipboardCopyEventProps

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:787](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L787) |
| `data` | `T`[][] | - | - | [src/types/interfaces.ts:856](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L856) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | - | - | [src/types/interfaces.ts:858](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L858) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:857](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L857) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:782](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L782) |
