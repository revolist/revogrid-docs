[RevoGrid Documentation v4.15.1](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/types/interfaces.ts#L22)
