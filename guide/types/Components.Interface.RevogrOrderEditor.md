[RevoGrid Documentation v4.15.5](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:549](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L549) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L553) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:557](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L557) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:561](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L561) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:562](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L562) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:563](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L563) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:567](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L567) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:568](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L568) |
