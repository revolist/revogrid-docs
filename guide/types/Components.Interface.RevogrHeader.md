[RevoGrid Documentation v4.16.0](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent **Default** `{}` | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L553) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:557](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L557) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:561](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L561) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:565](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L565) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:569](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L569) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping **Default** `0` | [src/components.d.ts:574](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L574) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:578](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L578) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:582](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L582) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:586](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L586) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:590](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L590) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:594](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L594) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:598](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/components.d.ts#L598) |
