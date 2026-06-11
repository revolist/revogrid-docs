[RevoGrid Documentation v4.23.15](README.md) / ViewportColumn

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
 } & Partial<RevogrViewportScroll> & {
  noHorizontalScrollTransfer: boolean;
} & Partial<RevogrHeader>;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `colStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | [src/types/viewport.interfaces.ts:49](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L49) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | [src/types/viewport.interfaces.ts:40](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L40) |
| `dimensions` | [`DimensionStoreCollection`](TypeAlias.DimensionStoreCollection.md) | [src/types/viewport.interfaces.ts:46](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L46) |
| `fixWidth` | `boolean` | [src/types/viewport.interfaces.ts:43](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L43) |
| `position` | [`Cell`](Interface.Cell.md) | [src/types/viewport.interfaces.ts:41](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L41) |
| `rowStores` | `RowDataSources` | [src/types/viewport.interfaces.ts:48](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L48) |
| `viewports` | [`ViewportStoreCollection`](TypeAlias.ViewportStoreCollection.md) | [src/types/viewport.interfaces.ts:45](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L45) |

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `noHorizontalScrollTransfer` | `boolean` | [src/types/viewport.interfaces.ts:52](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L52) |

## Defined in

[src/types/viewport.interfaces.ts:39](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/viewport.interfaces.ts#L39)
