[@revolist/revogrid](README.md) / ViewportColumn

# Type alias: ViewportColumn

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

| Member | Type |
| :------ | :------ |
| `colStore` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](Type.DimensionCols.md)\>\> |
| `colType` | [`DimensionCols`](Type.DimensionCols.md) |
| `dimensions` | [`DimensionStoreCollection`](Type.DimensionStoreCollection.md) |
| `fixWidth` | `boolean` |
| `position` | [`Cell`](Interface.Cell.md) |
| `rowStores` | `RowDataSources` |
| `viewports` | [`ViewportStoreCollection`](Type.ViewportStoreCollection.md) |

## Source

[src/types/viewport.interfaces.ts:24](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/viewport.interfaces.ts#L24)
