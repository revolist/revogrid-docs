[RevoGrid Documentation v4.23.9](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/7210be05d48d189d4cce2e41db0fe306da2f48fe/src/types/interfaces.ts#L22)
