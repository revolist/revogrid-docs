[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1841](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1841) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1845](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1845) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1849](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1849) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1853](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1853) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1857](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1857) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1861](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1861) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1865](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1865) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1874](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1874) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1881](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/components.d.ts#L1881) |
