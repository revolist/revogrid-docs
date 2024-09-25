[@revolist/revogrid](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:499](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/types/interfaces.ts#L499) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:510](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/types/interfaces.ts#L510) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:520](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/types/interfaces.ts#L520) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:495](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/types/interfaces.ts#L495) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:524](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/types/interfaces.ts#L524) |
