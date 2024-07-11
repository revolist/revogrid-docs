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
| `data` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<`any`, `any`\>\> \| [`ColumnRegular`](Interface.ColumnRegular.md)[] | Data source store | [src/types/interfaces.ts:298](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L298) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | [src/types/interfaces.ts:306](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L306) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | [src/types/interfaces.ts:294](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L294) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | [src/types/interfaces.ts:310](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L310) |
| `type` | `T` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:290](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L290) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | [src/types/interfaces.ts:302](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L302) |

## Defined in

[src/types/interfaces.ts:286](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L286)
