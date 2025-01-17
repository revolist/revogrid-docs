[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1890](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1890) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1894](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1894) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1898](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1898) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1902](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1902) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1906](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1906) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1910](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1910) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1914](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1914) |
| `onAfterheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\>\>) => `void` | After all header cells rendered. Finalizes cell rendering. | [src/components.d.ts:1918](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1918) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1922](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1922) |
| `onBeforeheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`HeaderRenderProps`](TypeAlias.HeaderRenderProps.md)\>) => `void` | Before each header cell render function. Allows to override cell properties | [src/components.d.ts:1926](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1926) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1930](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1930) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1934](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1934) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1938](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1938) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1942](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1942) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1946](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1946) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1950](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1950) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1954](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1954) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1958](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L1958) |
