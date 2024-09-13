[@revolist/revogrid](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | - | [src/types/interfaces.ts:773](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/types/interfaces.ts#L773) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:734](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/types/interfaces.ts#L734) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:765](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/types/interfaces.ts#L765) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:764](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/types/interfaces.ts#L764) |
| `rowIndex` | `number` | Index of the row in the viewport | - | [src/types/interfaces.ts:769](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/types/interfaces.ts#L769) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:729](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/types/interfaces.ts#L729) |
