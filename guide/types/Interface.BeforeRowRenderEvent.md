[RevoGrid Documentation v4.15.7](README.md) / BeforeRowRenderEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L788) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:757](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L757) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:752](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L752) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:762](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L762) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:783](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L783) |
