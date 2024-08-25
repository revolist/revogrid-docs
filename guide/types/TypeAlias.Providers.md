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
| `data` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<`any`, `any`\>\> \| [`ColumnRegular`](Interface.ColumnRegular.md)[] | Data source store | [src/types/interfaces.ts:296](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L296) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | [src/types/interfaces.ts:304](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L304) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | [src/types/interfaces.ts:292](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L292) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | [src/types/interfaces.ts:308](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L308) |
| `type` | `T` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:288](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L288) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | [src/types/interfaces.ts:300](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L300) |

## Defined in

[src/types/interfaces.ts:284](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L284)
