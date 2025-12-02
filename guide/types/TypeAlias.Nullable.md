[RevoGrid Documentation v4.19.3](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/types/interfaces.ts#L22)
