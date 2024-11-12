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
| `columnSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | - | [src/types/viewport.interfaces.ts:75](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L75) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | viewport rows | [src/types/viewport.interfaces.ts:73](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L73) |
| `headerProp` | [`HeaderProperties`](TypeAlias.HeaderProperties.md) | header container props | [src/types/viewport.interfaces.ts:67](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L67) |
| `position` | [`Cell`](Interface.Cell.md) | - | [src/types/viewport.interfaces.ts:61](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L61) |
| `prop` | [`RevogrViewportScroll`](JSX.Interface.RevogrViewportScroll.md) & `JSXBase.HTMLAttributes`\<`HTMLRevogrViewportScrollElement`\> | - | [src/types/viewport.interfaces.ts:59](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L59) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) | - | [src/types/viewport.interfaces.ts:62](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L62) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Cols dataset | [src/types/viewport.interfaces.ts:64](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L64) |

## Defined in

[src/types/viewport.interfaces.ts:58](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/types/viewport.interfaces.ts#L58)
