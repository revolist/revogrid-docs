[RevoGrid Documentation v4.11.16](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | - | [src/types/interfaces.ts:795](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L795) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:756](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L756) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:787](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L787) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:786](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L786) |
| `rowIndex` | `number` | Index of the row in the viewport | - | [src/types/interfaces.ts:791](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L791) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:751](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L751) |
