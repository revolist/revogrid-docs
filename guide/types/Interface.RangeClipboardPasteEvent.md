[RevoGrid Documentation v4.23.22](README.md) / RangeClipboardPasteEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/types/interfaces.ts#L845) |
| `data` | \{\} | - | - | [src/types/interfaces.ts:912](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/types/interfaces.ts#L912) |
| `models` | \{\} | - | - | [src/types/interfaces.ts:913](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/types/interfaces.ts#L913) |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:914](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/types/interfaces.ts#L914) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/types/interfaces.ts#L840) |
