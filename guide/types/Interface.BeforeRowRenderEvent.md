[RevoGrid Documentation v4.27.1](README.md) / BeforeRowRenderEvent

# Interface: BeforeRowRenderEvent\<T\>

Represents the event object that is emitted before row rendering.
It includes information about the dimension type, data item, item, and node.

## Extends

- `Pick`\<[`AllDimensionType`](Interface.AllDimensionType.md), `"rowType"`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column viewport rendering the row, including the row-header viewport. | - | [src/types/interfaces.ts:811](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L811) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:820](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L820) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:815](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L815) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:825](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L825) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | `Pick.rowType` | [src/types/interfaces.ts:846](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L846) |
