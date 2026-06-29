[RevoGrid Documentation v4.23.19](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L22)
