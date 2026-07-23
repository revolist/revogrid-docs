[RevoGrid Documentation v4.23.23](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent **Default** `{}` | [src/components.d.ts:563](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L563) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:567](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L567) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>[] | Columns - defines an array of grid columns. | [src/components.d.ts:571](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L571) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:575](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L575) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:579](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L579) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping **Default** `0` | [src/components.d.ts:584](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L584) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:588](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L588) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:592](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L592) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:596](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L596) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:600](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L600) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:604](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L604) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:608](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L608) |
