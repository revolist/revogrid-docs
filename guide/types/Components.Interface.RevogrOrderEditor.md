[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:496](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L496) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:500](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L500) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:504](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L504) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:508](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L508) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:509](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L509) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:510](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L510) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:514](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L514) |
