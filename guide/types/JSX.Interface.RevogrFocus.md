[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1829](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1829) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1833](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1833) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1837](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1837) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1841](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1841) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1845](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1845) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1849](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1849) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1853](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1853) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1857](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1857) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1861](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1861) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1865](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1865) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1869](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1869) |
