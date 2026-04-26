[RevoGrid Documentation v4.21.5](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/types/interfaces.ts#L22)
