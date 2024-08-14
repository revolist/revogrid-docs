[@revolist/revogrid](README.md) / ColumnGrouping

# Type Alias: ColumnGrouping

```ts
type ColumnGrouping: {
  children: (ColumnGrouping | ColumnRegular)[];
  name: DataFormat;
};
```

`ColumnGrouping` type is used to define a grouping in a column.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnGrouping`](TypeAlias.ColumnGrouping.md) \| [`ColumnRegular`](Interface.ColumnRegular.md))[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:99](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L99) |
| `name` | [`DataFormat`](TypeAlias.DataFormat.md) | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:103](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L103) |

## Defined in

[src/types/interfaces.ts:95](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L95)
