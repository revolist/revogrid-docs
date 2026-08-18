[RevoGrid Documentation v4.26.1](README.md) / ViewportState

# Interface: ViewportState

`ViewportState` is an object that represents the state of a viewport.

## Extends

- [`ViewportStateItems`](TypeAlias.ViewportStateItems.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `clientSize` | `number` | The client size of the viewport. Usually it's same as virtual size. Until virtualization is not disabled. | - | [src/types/interfaces.ts:609](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L609) |
| `end` | `number` | The end of the range. | `ViewportStateItems.end` | [src/types/interfaces.ts:577](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L577) |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | The items in the viewport. | `ViewportStateItems.items` | [src/types/interfaces.ts:588](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L588) |
| `realCount` | `number` | The number of real items in the viewport. | - | [src/types/interfaces.ts:598](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L598) |
| `renderOffset?` | `number` | Difference between logical coordinate and browser-safe rendered coordinate. Internal scroll virtualization offset used when content exceeds browser native scroll size limits. | - | [src/types/interfaces.ts:616](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L616) |
| `start` | `number` | The start of the range. | `ViewportStateItems.start` | [src/types/interfaces.ts:573](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L573) |
| `virtualSize` | `number` | The virtual size of the viewport. | - | [src/types/interfaces.ts:602](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L602) |
