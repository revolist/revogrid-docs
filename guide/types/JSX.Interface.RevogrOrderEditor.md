[RevoGrid Documentation v4.17.2](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:2108](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2108) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:2112](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2112) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:2116](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2116) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:2120](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2120) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:2124](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2124) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:2128](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2128) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:2132](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2132) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:2136](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2136) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:2144](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2144) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2152](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2152) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2153](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L2153) |
