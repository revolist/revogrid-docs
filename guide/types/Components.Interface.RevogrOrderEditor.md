[RevoGrid Documentation v4.24.2](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:619](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L619) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:623](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L623) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:627](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L627) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:631](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L631) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\>) => `Promise`\<`void`\> | - | [src/components.d.ts:632](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L632) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:633](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L633) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:637](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L637) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:638](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L638) |
