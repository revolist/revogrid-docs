[RevoGrid Documentation v4.27.9](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/454d5862c03c84c4e0967bdb49edf69110897611/src/types/interfaces.ts#L23)
