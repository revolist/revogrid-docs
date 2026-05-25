[RevoGrid Documentation v4.21.11](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/interfaces.ts#L22)
