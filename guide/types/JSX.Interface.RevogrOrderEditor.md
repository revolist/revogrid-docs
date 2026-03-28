[RevoGrid Documentation v4.21.1](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:2110](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2110) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:2114](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2114) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:2118](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2118) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:2122](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2122) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:2126](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2126) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:2130](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2130) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:2134](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2134) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:2138](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2138) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:2146](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2146) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2154](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2154) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2155](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2155) |
