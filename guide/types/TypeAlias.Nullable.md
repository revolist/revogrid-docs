[@revolist/revogrid](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:20](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/types/interfaces.ts#L20)
