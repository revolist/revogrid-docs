[RevoGrid Documentation v4.14.5](README.md) / RangeClipboardPasteEvent

# Interface: RangeClipboardPasteEvent

Range paste.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:770](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L770) |
| `data` | [`DataLookup`](TypeAlias.DataLookup.md)\<`any`\> | - | - | [src/types/interfaces.ts:832](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L832) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\<`any`\>\> | - | - | [src/types/interfaces.ts:833](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L833) |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:834](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L834) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:765](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L765) |
