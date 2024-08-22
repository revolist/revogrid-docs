[@revolist/revogrid](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:20](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L20)
