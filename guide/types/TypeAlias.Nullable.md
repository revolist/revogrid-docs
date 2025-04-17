[RevoGrid Documentation v4.15.4](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/types/interfaces.ts#L22)
