[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `clearOrder` | () => `Promise`\<`void`\> | - |
| `dataStore` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`DataType`](Type.DataType.md), [`DimensionRows`](Type.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime |
| `dimensionCol` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X |
| `dimensionRow` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y |
| `dragStart` | (`e`: [`DragStartEvent`](Type.DragStartEvent.md)) => `Promise`\<`void`\> | - |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - |
| `parent` | `HTMLElement` | Parent element |
