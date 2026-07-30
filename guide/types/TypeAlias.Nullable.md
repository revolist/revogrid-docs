[RevoGrid Documentation v4.24.1](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/types/interfaces.ts#L22)
