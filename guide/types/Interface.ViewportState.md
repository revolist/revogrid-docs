[@revolist/revogrid](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:506](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L506) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:517](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L517) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:527](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L527) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:502](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L502) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:531](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L531) |
