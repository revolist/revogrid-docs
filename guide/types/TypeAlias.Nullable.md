[RevoGrid Documentation v4.31.2](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/a02f07fc03861e63a6c2cf8430472223ac943612/src/types/interfaces.ts#L23)
