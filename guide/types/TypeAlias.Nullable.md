[RevoGrid Documentation v4.14.4](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/interfaces.ts#L21)
