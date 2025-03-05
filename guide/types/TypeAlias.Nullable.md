[RevoGrid Documentation v4.12.12](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/interfaces.ts#L21)
