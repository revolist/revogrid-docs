[RevoGrid Documentation v4.23.19](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent **Default** `{}` | [src/components.d.ts:558](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L558) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:562](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L562) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>[] | Columns - defines an array of grid columns. | [src/components.d.ts:566](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L566) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:570](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L570) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:574](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L574) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping **Default** `0` | [src/components.d.ts:579](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L579) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:583](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L583) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:587](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L587) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:591](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L591) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:595](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L595) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:599](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L599) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:603](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/components.d.ts#L603) |
