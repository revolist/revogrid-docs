[RevoGrid Documentation v4.27.1](README.md) / RangeClipboardPasteEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:851](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L851) |
| `data` | \{\} | - | - | [src/types/interfaces.ts:918](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L918) |
| `models` | \{\} | - | - | [src/types/interfaces.ts:919](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L919) |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) | - | - | [src/types/interfaces.ts:920](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L920) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:846](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L846) |
