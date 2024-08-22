[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:503](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/components.d.ts#L503) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:507](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/components.d.ts#L507) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:511](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/components.d.ts#L511) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:515](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/components.d.ts#L515) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:516](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/components.d.ts#L516) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:517](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/components.d.ts#L517) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:521](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/components.d.ts#L521) |
