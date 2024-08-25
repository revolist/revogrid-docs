[@revolist/revogrid](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | - | [src/types/interfaces.ts:765](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L765) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:730](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L730) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:757](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L757) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:756](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L756) |
| `rowIndex` | `number` | Index of the row in the viewport | - | [src/types/interfaces.ts:761](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L761) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:725](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L725) |
