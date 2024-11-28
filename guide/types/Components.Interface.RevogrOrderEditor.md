[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:541](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L541) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:545](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L545) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:549](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L549) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L553) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:554](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L554) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:555](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L555) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:559](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L559) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:560](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/components.d.ts#L560) |
