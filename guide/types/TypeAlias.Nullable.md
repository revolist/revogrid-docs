[RevoGrid Documentation v4.25.1](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/types/interfaces.ts#L22)
