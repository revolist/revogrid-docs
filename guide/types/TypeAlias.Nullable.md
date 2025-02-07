[RevoGrid Documentation v4.11.21](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/types/interfaces.ts#L21)
