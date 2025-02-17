[RevoGrid Documentation v4.12.3](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/d8faaf908685ef9767dc3ea8ccad1628e41fbf76/src/types/interfaces.ts#L21)
