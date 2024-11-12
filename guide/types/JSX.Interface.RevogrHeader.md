[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1875](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1875) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1879](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1879) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1883](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1883) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1887](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1887) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1891](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1891) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1895](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1895) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1899](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1899) |
| `onAfterheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\>\>) => `void` | After all header cells rendered. Finalizes cell rendering. | [src/components.d.ts:1903](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1903) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1907](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1907) |
| `onBeforeheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`HeaderRenderProps`](TypeAlias.HeaderRenderProps.md)\>) => `void` | Before each header cell render function. Allows to override cell properties | [src/components.d.ts:1911](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1911) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1915](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1915) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1919](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1919) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1923](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1923) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1927](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1927) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1931](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1931) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1935](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1935) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1939](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1939) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1943](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/components.d.ts#L1943) |
