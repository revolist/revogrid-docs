[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1939](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1939) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1943](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1943) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1947](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1947) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:1951](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1951) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:1955](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1955) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:1959](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1959) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:1963](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1963) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1967](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1967) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:1975](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1975) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1983](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1983) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:1984](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1984) |
