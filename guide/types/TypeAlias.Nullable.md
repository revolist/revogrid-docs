[RevoGrid Documentation v4.31.6](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/types/interfaces.ts#L23)
