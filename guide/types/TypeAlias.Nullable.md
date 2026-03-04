[RevoGrid Documentation v4.20.4](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/cfeb4fc76813e849e961384dd1448ab9e5490d6a/src/types/interfaces.ts#L22)
