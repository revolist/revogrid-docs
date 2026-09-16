[RevoGrid Documentation v4.27.11](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/interfaces.ts#L23)
