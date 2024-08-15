[@revolist/revogrid](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:20](https://github.com/revolist/revogrid/blob/a84fead7f1878a976ea465cbf9b4f0472345b7b1/src/types/interfaces.ts#L20)
