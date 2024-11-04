[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:486](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L486) |
| `canResize` | `boolean` | If columns can be resized | [src/components.d.ts:490](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L490) |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:494](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L494) |
| `columnFilter` | `boolean` | Column filter | [src/components.d.ts:498](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L498) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:502](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L502) |
| `groupingDepth` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:506](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L506) |
| `groups` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:510](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L510) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:514](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L514) |
| `resizeHandler` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:518](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L518) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:522](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L522) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:526](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L526) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:530](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L530) |
