[@revolist/revogrid](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:505](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/types/interfaces.ts#L505) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:516](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/types/interfaces.ts#L516) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:526](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/types/interfaces.ts#L526) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:501](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/types/interfaces.ts#L501) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:530](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/types/interfaces.ts#L530) |
