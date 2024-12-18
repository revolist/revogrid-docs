[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1893](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1893) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1897](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1897) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1901](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1901) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1905](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1905) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1909](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1909) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1913](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1913) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1917](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1917) |
| `onAfterheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\>\>) => `void` | After all header cells rendered. Finalizes cell rendering. | [src/components.d.ts:1921](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1921) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1925](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1925) |
| `onBeforeheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`HeaderRenderProps`](TypeAlias.HeaderRenderProps.md)\>) => `void` | Before each header cell render function. Allows to override cell properties | [src/components.d.ts:1929](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1929) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1933](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1933) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1937](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1937) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1941](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1941) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1945](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1945) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1949](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1949) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1953](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1953) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1957](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1957) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1961](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L1961) |
