[RevoGrid Documentation v4.24.2](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent **Default** `{}` | [src/components.d.ts:568](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L568) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:572](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L572) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>[] | Columns - defines an array of grid columns. | [src/components.d.ts:576](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L576) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:580](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L580) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:584](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L584) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping **Default** `0` | [src/components.d.ts:589](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L589) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:593](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L593) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:597](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L597) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:601](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L601) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:605](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L605) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:609](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L609) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:613](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L613) |
