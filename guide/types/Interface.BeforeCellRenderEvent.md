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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:732](https://github.com/revolist/revogrid/blob/a849a2bedd405f9be6994ce2465b998f17fd214c/src/types/interfaces.ts#L732) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:675](https://github.com/revolist/revogrid/blob/a849a2bedd405f9be6994ce2465b998f17fd214c/src/types/interfaces.ts#L675) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:685](https://github.com/revolist/revogrid/blob/a849a2bedd405f9be6994ce2465b998f17fd214c/src/types/interfaces.ts#L685) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:680](https://github.com/revolist/revogrid/blob/a849a2bedd405f9be6994ce2465b998f17fd214c/src/types/interfaces.ts#L680) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:727](https://github.com/revolist/revogrid/blob/a849a2bedd405f9be6994ce2465b998f17fd214c/src/types/interfaces.ts#L727) |
