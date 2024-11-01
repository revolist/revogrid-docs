[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1876](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1876) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1880](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1880) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1884](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1884) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1888](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1888) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1892](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1892) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1896](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1896) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1900](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1900) |
| `onAfterheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\>\>) => `void` | After all header cells rendered. Finalizes cell rendering. | [src/components.d.ts:1904](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1904) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1908](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1908) |
| `onBeforeheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`HeaderRenderProps`](TypeAlias.HeaderRenderProps.md)\>) => `void` | Before each header cell render function. Allows to override cell properties | [src/components.d.ts:1912](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1912) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1916](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1916) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1920](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1920) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1924](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1924) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1928](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1928) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1932](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1932) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1936](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1936) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1940](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1940) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1944](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1944) |
