[RevoGrid Documentation v4.16.0](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:604](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L604) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:608](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L608) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:612](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L612) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:616](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L616) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:617](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L617) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:618](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L618) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:622](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L622) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:623](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L623) |
