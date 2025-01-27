[RevoGrid Documentation v4.11.20](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/types/interfaces.ts#L21)
