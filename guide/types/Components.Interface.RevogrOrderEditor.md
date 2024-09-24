[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:517](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L517) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:521](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L521) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:525](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L525) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:529](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L529) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:530](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L530) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:531](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L531) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:535](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L535) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:536](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L536) |
