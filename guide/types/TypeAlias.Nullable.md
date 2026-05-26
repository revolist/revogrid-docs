[RevoGrid Documentation v4.23.1](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/ecd87cafef00335964bf62b5550ca31914bb6ae2/src/types/interfaces.ts#L22)
