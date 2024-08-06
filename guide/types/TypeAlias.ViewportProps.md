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
| `columnSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | - | [src/types/viewport.interfaces.ts:76](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L76) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | viewport rows | [src/types/viewport.interfaces.ts:74](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L74) |
| `headerProp` | [`HeaderProperties`](TypeAlias.HeaderProperties.md) | header container props | [src/types/viewport.interfaces.ts:68](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L68) |
| `position` | [`Cell`](Interface.Cell.md) | - | [src/types/viewport.interfaces.ts:62](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L62) |
| `prop` | [`RevogrViewportScroll`](JSX.Interface.RevogrViewportScroll.md) & `JSXBase.HTMLAttributes`\<`HTMLRevogrViewportScrollElement`\> | - | [src/types/viewport.interfaces.ts:60](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L60) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) | - | [src/types/viewport.interfaces.ts:63](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L63) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Cols dataset | [src/types/viewport.interfaces.ts:65](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L65) |

## Defined in

[src/types/viewport.interfaces.ts:59](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/types/viewport.interfaces.ts#L59)
