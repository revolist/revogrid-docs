[RevoGrid Documentation v4.21.6](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/types/interfaces.ts#L22)
