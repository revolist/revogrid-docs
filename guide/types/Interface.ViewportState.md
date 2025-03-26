[RevoGrid Documentation v4.14.9](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `clientSize` | `number` | The client size of the viewport. Usually it's same as virtual size. Until virtualization is not disabled. | - | [src/types/interfaces.ts:547](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L547) |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:515](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L515) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:526](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L526) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:536](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L536) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:511](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L511) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:540](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L540) |
