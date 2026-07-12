[RevoGrid Documentation v4.23.21](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/types/interfaces.ts#L22)
