[RevoGrid Documentation v4.23.16](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/interfaces.ts#L22)
