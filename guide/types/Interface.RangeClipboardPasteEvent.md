[RevoGrid Documentation v4.12.9](README.md) / RangeClipboardPasteEvent

# Interface: RangeClipboardPasteEvent

Range paste.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:769](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L769) |
| `data` | [`DataLookup`](TypeAlias.DataLookup.md)\<`any`\> | - | - | [src/types/interfaces.ts:831](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L831) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\<`any`\>\> | - | - | [src/types/interfaces.ts:832](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L832) |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:833](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L833) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:764](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L764) |
