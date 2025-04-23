[RevoGrid Documentation v4.15.6](README.md) / InitialHeaderClick

# Type Alias: InitialHeaderClick

```ts
type InitialHeaderClick: {
  column: ColumnRegular;
  index: number;
  originalEvent: MouseEvent;
  providers: ProvidersColumns;
};
```

`InitialHeaderClick` represents the information needed to handle a click
event on the initial column header.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:518](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/types/interfaces.ts#L518) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:510](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/types/interfaces.ts#L510) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:514](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/types/interfaces.ts#L514) |
| `providers` | [`ProvidersColumns`](Interface.ProvidersColumns.md) | - | [src/types/interfaces.ts:519](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/types/interfaces.ts#L519) |

## Defined in

[src/types/interfaces.ts:506](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/types/interfaces.ts#L506)
