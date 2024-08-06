[@revolist/revogrid](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:501](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/interfaces.ts#L501) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:512](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/interfaces.ts#L512) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:522](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/interfaces.ts#L522) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:497](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/interfaces.ts#L497) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:526](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/interfaces.ts#L526) |
