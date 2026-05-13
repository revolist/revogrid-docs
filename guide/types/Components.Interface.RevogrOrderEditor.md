[RevoGrid Documentation v4.21.8](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:609](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L609) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:613](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L613) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:617](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L617) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:621](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L621) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\>) => `Promise`\<`void`\> | - | [src/components.d.ts:622](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L622) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:623](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L623) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:627](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L627) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:628](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/components.d.ts#L628) |
