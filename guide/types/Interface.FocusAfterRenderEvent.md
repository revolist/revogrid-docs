[@revolist/revogrid](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | - | [src/types/interfaces.ts:772](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L772) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:737](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L737) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:764](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L764) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:763](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L763) |
| `rowIndex` | `number` | Index of the row in the viewport | - | [src/types/interfaces.ts:768](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L768) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:732](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L732) |
