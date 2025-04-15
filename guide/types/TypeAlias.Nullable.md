[RevoGrid Documentation v4.15.3](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/0f25b4576d7b148a35319cded1f6d62c5f4ebd98/src/types/interfaces.ts#L22)
