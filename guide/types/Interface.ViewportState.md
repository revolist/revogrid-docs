[@revolist/revogrid](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:495](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L495) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:506](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L506) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:516](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L516) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:491](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L491) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:520](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/interfaces.ts#L520) |
