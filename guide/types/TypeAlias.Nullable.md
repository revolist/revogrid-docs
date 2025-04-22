[RevoGrid Documentation v4.15.5](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/interfaces.ts#L22)
