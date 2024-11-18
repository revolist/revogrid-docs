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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1816](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1816) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1820](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1820) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1824](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1824) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1828](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1828) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1832](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1832) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1836](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1836) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1840](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1840) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1844](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1844) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1848](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1848) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1852](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1852) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1856](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L1856) |
