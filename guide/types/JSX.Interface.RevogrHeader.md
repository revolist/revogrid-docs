[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrHeader

# Interface: RevogrHeader

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Extra properties to pass into header renderer, such as vue or react components to handle parent | [src/components.d.ts:1749](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1749) |
| `canResize?` | `boolean` | If columns can be resized | [src/components.d.ts:1753](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1753) |
| `colData?` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Columns - defines an array of grid columns. | [src/components.d.ts:1757](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1757) |
| `columnFilter?` | `boolean` | Column filter | [src/components.d.ts:1761](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1761) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1765](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1765) |
| `groupingDepth?` | `number` | Grouping depth, how many levels of grouping | [src/components.d.ts:1769](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1769) |
| `groups?` | [`Groups`](TypeAlias.Groups.md) | Column groups | [src/components.d.ts:1773](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1773) |
| `onBeforeheaderclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On initial header click | [src/components.d.ts:1777](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1777) |
| `onBeforeheaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)[]\>) => `void` | On before header resize | [src/components.d.ts:1781](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1781) |
| `onHeaderdblclick?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`InitialHeaderClick`](TypeAlias.InitialHeaderClick.md)\>) => `void` | On header double click | [src/components.d.ts:1785](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1785) |
| `onHeaderresize?` | (`event`: [`RevogrHeaderCustomEvent`](Interface.RevogrHeaderCustomEvent.md)\<[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)\>) => `void` | On header resize | [src/components.d.ts:1789](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1789) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1793](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1793) |
| `resizeHandler?` | ( \| `"r"` \| `"b"` \| `"rt"` \| `"lt"` \| `"rb"` \| `"lb"` \| `"l"` \| `"t"`)[] | Defines resize position | [src/components.d.ts:1797](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1797) |
| `selectionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus | [src/components.d.ts:1801](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1801) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column type | [src/components.d.ts:1805](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1805) |
| `viewportCol?` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1809](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1809) |
