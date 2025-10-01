[RevoGrid Documentation v4.17.3](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `clientSize` | `number` | The client size of the viewport. Usually it's same as virtual size. Until virtualization is not disabled. | - | [src/types/interfaces.ts:565](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L565) |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:533](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L533) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:544](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L544) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:554](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L554) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:529](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L529) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:558](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L558) |
