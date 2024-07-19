[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:444](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L444) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:448](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L448) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:452](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L452) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:456](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L456) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:460](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L460) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:464](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L464) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:468](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L468) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:472](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L472) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:476](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L476) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:480](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L480) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:484](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L484) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:488](https://github.com/revolist/revogrid/blob/0c3bb4ec80c81d5563060679540746537ed4be52/src/components.d.ts#L488) |
