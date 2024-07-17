[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1739](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1739) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1743](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1743) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1747](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1747) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1751](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1751) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1755](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1755) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1759](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1759) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1763](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1763) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1767](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1767) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1771](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1771) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1775](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1775) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1779](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1779) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1783](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1783) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1787](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1787) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1791](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1791) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1795](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1795) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1799](https://github.com/revolist/revogrid/blob/25c443de65de6e4fb3ac1b2c638df62d9ca5c202/src/components.d.ts#L1799) |
