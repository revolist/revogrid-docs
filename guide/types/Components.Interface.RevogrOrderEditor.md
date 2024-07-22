[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:494](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L494) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:498](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L498) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:502](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L502) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:506](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L506) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:507](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L507) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:508](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L508) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:512](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/components.d.ts#L512) |
