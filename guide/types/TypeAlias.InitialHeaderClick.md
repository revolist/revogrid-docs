[RevoGrid Documentation v4.14.8](README.md) / InitialHeaderClick

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
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:500](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L500) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:492](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L492) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:496](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L496) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | - | [src/types/interfaces.ts:501](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L501) |

## Defined in

[src/types/interfaces.ts:488](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L488)
