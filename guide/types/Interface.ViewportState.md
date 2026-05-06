[RevoGrid Documentation v4.21.7](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `clientSize` | `number` | The client size of the viewport. Usually it's same as virtual size. Until virtualization is not disabled. | - | [src/types/interfaces.ts:588](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L588) |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:556](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L556) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:567](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L567) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:577](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L577) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:552](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L552) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L581) |
