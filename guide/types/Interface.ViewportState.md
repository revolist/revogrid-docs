[@revolist/revogrid](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:500](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L500) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:511](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L511) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:521](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L521) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:496](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L496) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:525](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L525) |
