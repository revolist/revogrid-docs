[RevoGrid Documentation v4.23.0](README.md) / ViewportProps

# Type Alias: ViewportProps

```ts
type ViewportProps: {
  columnSelectionStore: Observable<SelectionStoreState>;
  dataPorts: ViewportData[];
  headerProp: HeaderProperties;
  position: Cell;
  prop: RevogrViewportScroll & JSXBase.HTMLAttributes<HTMLRevogrViewportScrollElement>;
  type: DimensionCols;
  viewportCol: Observable<ViewportState>;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | - | [src/types/viewport.interfaces.ts:82](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L82) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | viewport rows | [src/types/viewport.interfaces.ts:80](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L80) |
| `headerProp` | [`HeaderProperties`](TypeAlias.HeaderProperties.md) | header container props | [src/types/viewport.interfaces.ts:74](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L74) |
| `position` | [`Cell`](Interface.Cell.md) | - | [src/types/viewport.interfaces.ts:68](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L68) |
| `prop` | [`RevogrViewportScroll`](JSX.Interface.RevogrViewportScroll.md) & `JSXBase.HTMLAttributes`\<`HTMLRevogrViewportScrollElement`\> | - | [src/types/viewport.interfaces.ts:66](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L66) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) | - | [src/types/viewport.interfaces.ts:69](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L69) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Cols dataset | [src/types/viewport.interfaces.ts:71](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L71) |

## Defined in

[src/types/viewport.interfaces.ts:65](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/viewport.interfaces.ts#L65)
