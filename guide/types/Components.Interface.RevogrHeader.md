[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L446) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L450) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:454](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L454) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:458](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L458) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:462](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L462) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:466](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L466) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:470](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L470) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:474](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L474) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:478](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L478) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:482](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L482) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:486](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L486) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:490](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L490) |
