[RevoGrid Documentation v4.21.7](README.md) / RangeClipboardPasteEvent

# Interface: RangeClipboardPasteEvent

Range paste.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:814](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L814) |
| `data` | [`DataLookup`](TypeAlias.DataLookup.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | - | - | [src/types/interfaces.ts:876](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L876) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | - | - | [src/types/interfaces.ts:877](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L877) |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:878](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L878) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:809](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L809) |
