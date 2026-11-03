[RevoGrid Documentation v4.31.1](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/e5ea71da84a5bfcacfb74d2f230cdffaebb47d28/src/types/interfaces.ts#L23)
