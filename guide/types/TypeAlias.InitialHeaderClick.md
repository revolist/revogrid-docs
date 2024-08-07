[@revolist/revogrid](README.md) / InitialHeaderClick

# Type Alias: InitialHeaderClick

```ts
type InitialHeaderClick: {
  column: ColumnRegular;
  index: number;
  originalEvent: MouseEvent;
  providers: Providers<DimensionCols | "rowHeaders">;
};
```

`InitialHeaderClick` represents the information needed to handle a click
event on the initial column header.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:487](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L487) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:479](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L479) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:483](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L483) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | - | [src/types/interfaces.ts:488](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L488) |

## Defined in

[src/types/interfaces.ts:475](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L475)
