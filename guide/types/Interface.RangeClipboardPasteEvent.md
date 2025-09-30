[RevoGrid Documentation v4.17.3](README.md) / RangeClipboardPasteEvent

# Interface: RangeClipboardPasteEvent

Range paste.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/interfaces.ts#L788) |
| `data` | [`DataLookup`](TypeAlias.DataLookup.md)\<`any`\> | - | - | [src/types/interfaces.ts:850](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/interfaces.ts#L850) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\<`any`\>\> | - | - | [src/types/interfaces.ts:851](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/interfaces.ts#L851) |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:852](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/interfaces.ts#L852) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:783](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/interfaces.ts#L783) |
