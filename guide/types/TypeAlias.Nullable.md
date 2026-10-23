[RevoGrid Documentation v4.29.0](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/types/interfaces.ts#L23)
