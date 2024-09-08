[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1820](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1820) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1824](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1824) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1828](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1828) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1832](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1832) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1836](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1836) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1840](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1840) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1844](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1844) |
| `onAfterheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\>\>) => `void` | After all header cells rendered. Finalizes cell rendering. | [src/components.d.ts:1848](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1848) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1852](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1852) |
| `onBeforeheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`HeaderRenderProps`](TypeAlias.HeaderRenderProps.md)\>) => `void` | Before each header cell render function. Allows to override cell properties | [src/components.d.ts:1856](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1856) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1860](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1860) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1864](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1864) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1868](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1868) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1872](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1872) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1876](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1876) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1880](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1880) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1884](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1884) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1888](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L1888) |
