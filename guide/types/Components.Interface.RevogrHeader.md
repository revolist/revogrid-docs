[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:491](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L491) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:495](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L495) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:499](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L499) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:503](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L503) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:507](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L507) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:511](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L511) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:515](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L515) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:519](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L519) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:523](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L523) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:527](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L527) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:531](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L531) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:535](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L535) |
