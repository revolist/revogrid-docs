[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1970](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1970) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1974](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1974) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1978](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1978) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:1982](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1982) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:1986](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1986) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:1990](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1990) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:1994](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1994) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1998](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1998) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:2006](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2006) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2014](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2014) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2015](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2015) |
