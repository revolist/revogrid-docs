[@revolist/revogrid](README.md) / ViewportProps

# Type alias: ViewportProps

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

| Member | Type | Description |
| :------ | :------ | :------ |
| `columnSelectionStore` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> | - |
| `dataPorts` | [`ViewportData`](Type.ViewportData.md)[] | viewport rows |
| `headerProp` | [`HeaderProperties`](Type.HeaderProperties.md) | header container props |
| `position` | [`Cell`](Interface.Cell.md) | - |
| `prop` | [`RevogrViewportScroll`](JSX.Interface.RevogrViewportScroll.md) & `JSXBase.HTMLAttributes`\<`HTMLRevogrViewportScrollElement`\> | - |
| `type` | [`DimensionCols`](Type.DimensionCols.md) | - |
| `viewportCol` | [`Observable`](Type.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Cols dataset |

## Source

[src/types/viewport.interfaces.ts:50](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/viewport.interfaces.ts#L50)
