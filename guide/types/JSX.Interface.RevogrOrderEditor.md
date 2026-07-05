[RevoGrid Documentation v4.23.20](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:2142](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2142) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:2146](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2146) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:2150](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2150) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:2154](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2154) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:2158](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2158) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:2162](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2162) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:2166](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2166) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:2170](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2170) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:2178](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2178) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2186](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2186) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2187](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/components.d.ts#L2187) |
