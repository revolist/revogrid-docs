[RevoGrid Documentation v4.14.14](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L22)
