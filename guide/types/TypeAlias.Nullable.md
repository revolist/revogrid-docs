[RevoGrid Documentation v4.12.0](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/types/interfaces.ts#L21)
