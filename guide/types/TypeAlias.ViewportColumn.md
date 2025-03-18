[RevoGrid Documentation v4.14.0](README.md) / ViewportColumn

# Type Alias: ViewportColumn

```ts
type ViewportColumn: {
  colStore: Observable<DSourceState<ColumnRegular, DimensionCols>>;
  colType: DimensionCols;
  dimensions: DimensionStoreCollection;
  fixWidth: boolean;
  position: Cell;
  rowStores: RowDataSources;
  viewports: ViewportStoreCollection;
} & Partial<RevogrViewportScroll> & Partial<RevogrHeader>;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `colStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | [src/types/viewport.interfaces.ts:45](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L45) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | [src/types/viewport.interfaces.ts:36](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L36) |
| `dimensions` | [`DimensionStoreCollection`](TypeAlias.DimensionStoreCollection.md) | [src/types/viewport.interfaces.ts:42](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L42) |
| `fixWidth` | `boolean` | [src/types/viewport.interfaces.ts:39](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L39) |
| `position` | [`Cell`](Interface.Cell.md) | [src/types/viewport.interfaces.ts:37](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L37) |
| `rowStores` | `RowDataSources` | [src/types/viewport.interfaces.ts:44](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L44) |
| `viewports` | [`ViewportStoreCollection`](TypeAlias.ViewportStoreCollection.md) | [src/types/viewport.interfaces.ts:41](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L41) |

## Defined in

[src/types/viewport.interfaces.ts:35](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L35)
