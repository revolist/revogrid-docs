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

[src/types/interfaces.ts:20](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L20)
