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
| `columnSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | - | [src/types/viewport.interfaces.ts:79](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L79) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | viewport rows | [src/types/viewport.interfaces.ts:77](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L77) |
| `headerProp` | [`HeaderProperties`](TypeAlias.HeaderProperties.md) | header container props | [src/types/viewport.interfaces.ts:71](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L71) |
| `position` | [`Cell`](Interface.Cell.md) | - | [src/types/viewport.interfaces.ts:65](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L65) |
| `prop` | [`RevogrViewportScroll`](JSX.Interface.RevogrViewportScroll.md) & `JSXBase.HTMLAttributes`\<`HTMLRevogrViewportScrollElement`\> | - | [src/types/viewport.interfaces.ts:63](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L63) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) | - | [src/types/viewport.interfaces.ts:66](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L66) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Cols dataset | [src/types/viewport.interfaces.ts:68](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L68) |

## Defined in

[src/types/viewport.interfaces.ts:62](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/viewport.interfaces.ts#L62)
