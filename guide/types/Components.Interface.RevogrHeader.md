[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:485](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L485) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:489](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L489) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:493](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L493) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:497](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L497) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:501](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L501) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:505](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L505) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:509](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L509) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:513](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L513) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:517](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L517) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:521](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L521) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:525](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L525) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:529](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L529) |
