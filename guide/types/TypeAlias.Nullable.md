[RevoGrid Documentation v4.12.5](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L21)
