[@revolist/revogrid](README.md) / Providers

# Type Alias: Providers\<T\>

```ts
type Providers<T>: {
  data: Observable<DataSourceState<any, any>> | ColumnRegular[];
  dimension: Observable<DimensionSettingsState>;
  readonly: boolean;
  selection: Observable<SelectionStoreState>;
  type: T;
  viewport: Observable<ViewportState>;
};
```

Providers for grid which are going to be injected into each cell template

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`DimensionRows`](TypeAlias.DimensionRows.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `data` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<`any`, `any`\>\> \| [`ColumnRegular`](Interface.ColumnRegular.md)[] | Data source store | [src/types/interfaces.ts:303](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L303) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | [src/types/interfaces.ts:311](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L311) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | [src/types/interfaces.ts:299](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L299) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | [src/types/interfaces.ts:315](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L315) |
| `type` | `T` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:295](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L295) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | [src/types/interfaces.ts:307](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L307) |

## Defined in

[src/types/interfaces.ts:291](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L291)
