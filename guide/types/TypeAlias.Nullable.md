[RevoGrid Documentation v4.23.20](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/0426d53a46c1f3da5ce6b3adf7d65996494f6b42/src/types/interfaces.ts#L22)
