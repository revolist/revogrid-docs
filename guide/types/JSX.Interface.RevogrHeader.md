[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1814](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1814) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1818](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1818) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1822](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1822) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1826](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1826) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1830](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1830) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1834](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1834) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1838](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1838) |
| `onAfterheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\>\>) => `void` | After all header cells rendered. Finalizes cell rendering. | [src/components.d.ts:1842](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1842) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1846](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1846) |
| `onBeforeheaderrender?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`HeaderRenderProps`](TypeAlias.HeaderRenderProps.md)\>) => `void` | Before each header cell render function. Allows to override cell properties | [src/components.d.ts:1850](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1850) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1854](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1854) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1858](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1858) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1862](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1862) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1866](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1866) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1870](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1870) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1874](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1874) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1878](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1878) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1882](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1882) |
