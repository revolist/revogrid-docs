[RevoGrid Documentation v4.21.7](README.md) / DataType

# Type Alias: DataType\<D, K\>

```ts
type DataType<D, K>: { [T in K]: DataFormat<D> };
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `D` | `any` |
| `K` *extends* [`ColumnProp`](TypeAlias.ColumnProp.md) | [`ColumnProp`](TypeAlias.ColumnProp.md) |

## Defined in

[src/types/interfaces.ts:457](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L457)
