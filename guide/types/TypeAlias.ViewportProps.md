[@revolist/revogrid](README.md) / ViewportProps

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
| `columnSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | - | [src/types/viewport.interfaces.ts:78](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L78) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | viewport rows | [src/types/viewport.interfaces.ts:76](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L76) |
| `headerProp` | [`HeaderProperties`](TypeAlias.HeaderProperties.md) | header container props | [src/types/viewport.interfaces.ts:70](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L70) |
| `position` | [`Cell`](Interface.Cell.md) | - | [src/types/viewport.interfaces.ts:64](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L64) |
| `prop` | [`RevogrViewportScroll`](JSX.Interface.RevogrViewportScroll.md) & `JSXBase.HTMLAttributes`\<`HTMLRevogrViewportScrollElement`\> | - | [src/types/viewport.interfaces.ts:62](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L62) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) | - | [src/types/viewport.interfaces.ts:65](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L65) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Cols dataset | [src/types/viewport.interfaces.ts:67](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L67) |

## Defined in

[src/types/viewport.interfaces.ts:61](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/viewport.interfaces.ts#L61)
