[RevoGrid Documentation v4.23.17](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/types/interfaces.ts#L22)
