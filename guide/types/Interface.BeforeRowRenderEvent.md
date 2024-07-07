[@revolist/revogrid](README.md) / BeforeRowRenderEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:732](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L732) |
| `dataItem` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:696](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L696) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:701](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L701) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:706](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L706) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:727](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/interfaces.ts#L727) |
