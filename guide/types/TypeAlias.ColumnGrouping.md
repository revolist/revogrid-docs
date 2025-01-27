[RevoGrid Documentation v4.11.20](README.md) / ColumnGrouping

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
| `children` | ([`ColumnGrouping`](TypeAlias.ColumnGrouping.md)\<`T`\> \| [`ColumnRegular`](Interface.ColumnRegular.md))[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:101](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/types/interfaces.ts#L101) |
| `name` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\> | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:105](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/types/interfaces.ts#L105) |

## Defined in

[src/types/interfaces.ts:97](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/types/interfaces.ts#L97)
