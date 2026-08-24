[RevoGrid Documentation v4.26.1](README.md) / DataType

# Type Alias: DataType\<D, K\>

```ts
type DataType<D, K>: { [T in K]: DataFormat<D> };
```

Represents a generic row data object used internally by the grid.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `D` | `any` | Value type for all properties (defaults to `any`). |
| `K` *extends* [`ColumnProp`](TypeAlias.ColumnProp.md) | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column property keys (defaults to `ColumnProp`). For type-safe usage, define your own row interface and pass it directly as the data source. Use `ColumnRegular` generics to bind column definitions to your row type: `type MyRow = { id: number; name: string }; const source: MyRow[] = [{ id: 1, name: 'Alice' }]; const columns: ColumnRegular<keyof MyRow, MyRow>[] = [ { prop: 'id', name: 'ID' }, { prop: 'name', name: 'Name' }, ];` |

## Defined in

[src/types/interfaces.ts:478](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L478)
