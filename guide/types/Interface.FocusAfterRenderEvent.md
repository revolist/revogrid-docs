[RevoGrid Documentation v4.20.1](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | - | [src/types/interfaces.ts:827](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/interfaces.ts#L827) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/interfaces.ts#L788) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:819](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/interfaces.ts#L819) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:818](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/interfaces.ts#L818) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | - | [src/types/interfaces.ts:823](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/interfaces.ts#L823) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:783](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/interfaces.ts#L783) |
