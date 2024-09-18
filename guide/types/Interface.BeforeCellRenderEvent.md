[@revolist/revogrid](README.md) / BeforeCellRenderEvent

# Interface: BeforeCellRenderEvent\<T\>

Represents the event object that is emitted before cell rendering.
It includes information about the dimension type, column, row, and model.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:734](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/interfaces.ts#L734) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:677](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/interfaces.ts#L677) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:687](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/interfaces.ts#L687) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:682](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/interfaces.ts#L682) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:729](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/interfaces.ts#L729) |
