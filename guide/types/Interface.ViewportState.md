[RevoGrid Documentation v4.23.5](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `clientSize` | `number` | The client size of the viewport. Usually it's same as virtual size. Until virtualization is not disabled. | - | [src/types/interfaces.ts:606](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/types/interfaces.ts#L606) |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:574](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/types/interfaces.ts#L574) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:585](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/types/interfaces.ts#L585) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:595](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/types/interfaces.ts#L595) |
| `renderOffset?` | `number` | Difference between logical coordinate and browser-safe rendered coordinate. Internal scroll virtualization offset used when content exceeds browser native scroll size limits. | - | [src/types/interfaces.ts:613](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/types/interfaces.ts#L613) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:570](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/types/interfaces.ts#L570) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:599](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/types/interfaces.ts#L599) |
