[RevoGrid Documentation v4.14.8](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L22)
