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
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:490](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L490) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:482](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L482) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:486](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L486) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | - | [src/types/interfaces.ts:491](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L491) |

## Defined in

[src/types/interfaces.ts:478](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/types/interfaces.ts#L478)
