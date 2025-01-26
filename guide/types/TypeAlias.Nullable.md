[RevoGrid Documentation v4.11.16](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L21)
