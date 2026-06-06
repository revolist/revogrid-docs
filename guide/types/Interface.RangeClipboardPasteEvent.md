[RevoGrid Documentation v4.23.12](README.md) / RangeClipboardPasteEvent

# Interface: RangeClipboardPasteEvent\<TModel\>

Range paste.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L845) |
| `data` | \{\} | - | - | [src/types/interfaces.ts:907](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L907) |
| `models` | \{\} | - | - | [src/types/interfaces.ts:908](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L908) |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:909](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L909) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/interfaces.ts#L840) |
