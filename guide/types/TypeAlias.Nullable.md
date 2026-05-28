[RevoGrid Documentation v4.23.4](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/interfaces.ts#L22)
