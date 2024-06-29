[@revolist/revogrid](README.md) / ColumnGrouping

# Type Alias: ColumnGrouping

```ts
type ColumnGrouping: {
  children: ColumnDataSchema[];
  name: DataFormat;
};
```

`ColumnGrouping` type is used to define a grouping in a column.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | [`ColumnDataSchema`](TypeAlias.ColumnDataSchema.md)[] | An array of `ColumnDataSchema` objects that represent the children of the grouping. | [src/types/interfaces.ts:97](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L97) |
| `name` | [`DataFormat`](TypeAlias.DataFormat.md) | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:101](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L101) |

## Defined in

[src/types/interfaces.ts:93](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L93)