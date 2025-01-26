[RevoGrid Documentation v4.11.17](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/types/interfaces.ts#L21)
