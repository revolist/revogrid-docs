[RevoGrid Documentation v4.26.1](README.md) / BeforeRowRenderEvent

# Interface: BeforeRowRenderEvent\<T\>

Represents the event object that is emitted before row rendering.
It includes information about the dimension type, data item, item, and node.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:848](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L848) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:817](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L817) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:812](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L812) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:822](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L822) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:843](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L843) |
