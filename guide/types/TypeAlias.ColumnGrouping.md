[@revolist/revogrid](README.md) / ColumnGrouping

# Type Alias: ColumnGrouping\<T\>

```ts
type ColumnGrouping<T>: {
  children: (ColumnGrouping<T> | ColumnRegular)[];
  name: DataFormat<T>;
};
```

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnGrouping`](TypeAlias.ColumnGrouping.md)\<`T`\> \| [`ColumnRegular`](Interface.ColumnRegular.md))[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:99](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/types/interfaces.ts#L99) |
| `name` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\> | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:103](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/types/interfaces.ts#L103) |

## Defined in

[src/types/interfaces.ts:95](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/types/interfaces.ts#L95)
