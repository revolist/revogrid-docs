[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:500](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L500) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:504](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L504) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:508](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L508) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:512](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L512) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:513](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L513) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:514](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L514) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:518](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L518) |
