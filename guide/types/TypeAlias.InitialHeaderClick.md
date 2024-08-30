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
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:484](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/types/interfaces.ts#L484) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:476](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/types/interfaces.ts#L476) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:480](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/types/interfaces.ts#L480) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | - | [src/types/interfaces.ts:485](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/types/interfaces.ts#L485) |

## Defined in

[src/types/interfaces.ts:472](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/types/interfaces.ts#L472)
