[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1967](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1967) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1971](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1971) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1975](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1975) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:1979](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1979) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:1983](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1983) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:1987](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1987) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:1991](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1991) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1995](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L1995) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:2003](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L2003) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2011](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L2011) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2012](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L2012) |
