[@revolist/revogrid](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | - | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L788) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:749](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L749) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:780](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L780) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:779](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L779) |
| `rowIndex` | `number` | Index of the row in the viewport | - | [src/types/interfaces.ts:784](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L784) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:744](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L744) |
