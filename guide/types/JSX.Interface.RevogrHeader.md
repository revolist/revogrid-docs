[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1738](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1738) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1742](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1742) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1746](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1746) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1750](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1750) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1754](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1754) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1758](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1758) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1762](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1762) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1766](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1766) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1770](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1770) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1774](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1774) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1778](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1778) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1782](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1782) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1786](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1786) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1790](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1790) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1794](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1794) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1798](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1798) |
