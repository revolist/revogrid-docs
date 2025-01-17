[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:540](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L540) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:544](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L544) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:548](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L548) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:552](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L552) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L553) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:554](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L554) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:558](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L558) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:559](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L559) |
