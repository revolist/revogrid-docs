[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1891](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1891) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1895](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1895) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1899](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1899) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:1903](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1903) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:1907](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1907) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:1911](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1911) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1915](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1915) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1925](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1925) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:1933](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1933) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1941](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1941) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:1942](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1942) |
