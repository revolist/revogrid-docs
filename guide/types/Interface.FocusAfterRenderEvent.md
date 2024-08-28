[@revolist/revogrid](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | - | [src/types/interfaces.ts:766](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L766) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:731](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L731) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:758](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L758) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:757](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L757) |
| `rowIndex` | `number` | Index of the row in the viewport | - | [src/types/interfaces.ts:762](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L762) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:726](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L726) |
