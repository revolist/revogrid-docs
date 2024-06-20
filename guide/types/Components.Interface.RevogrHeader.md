[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent |
| `canResize` | `boolean` | If columns can be resized |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. |
| `columnFilter` | `boolean` | Column filter |
| `dimensionCol` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping |
| `groups` | [`Groups`](Type.Groups.md) | Column groups |
| `readonly` | `boolean` | Readonly mode |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position |
| `selectionStore` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> | Selection, range, focus |
| `type` | [`DimensionCols`](Type.DimensionCols.md) \| `"rowHeaders"` | Column type |
| `viewportCol` | [`Observable`](Type.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X |
