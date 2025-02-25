[RevoGrid Documentation v4.12.6](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/293c9e1b6198b802a0690dc2e0b9faebd722e77f/src/types/interfaces.ts#L21)
