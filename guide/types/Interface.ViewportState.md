[@revolist/revogrid](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `clientSize` | `number` | The client size of the viewport. Usually it's same as virtual size. Until virtualization is not disabled. | - | [src/types/interfaces.ts:546](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/interfaces.ts#L546) |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:514](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/interfaces.ts#L514) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:525](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/interfaces.ts#L525) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:535](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/interfaces.ts#L535) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:510](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/interfaces.ts#L510) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:539](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/interfaces.ts#L539) |
