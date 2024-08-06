[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1818](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1818) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1822](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1822) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1826](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1826) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1830](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1830) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1834](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1834) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1838](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1838) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1842](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1842) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1851](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1851) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1858](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1858) |
