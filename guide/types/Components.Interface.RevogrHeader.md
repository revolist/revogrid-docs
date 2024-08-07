[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L445) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L449) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:453](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L453) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:457](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L457) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:461](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L461) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:465](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L465) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:469](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L469) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:473](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L473) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:477](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L477) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:481](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L481) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:485](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L485) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:489](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L489) |
