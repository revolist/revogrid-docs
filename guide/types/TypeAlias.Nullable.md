[RevoGrid Documentation v4.15.2](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L22)
