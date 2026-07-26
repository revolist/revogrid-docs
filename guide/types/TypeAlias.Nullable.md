[RevoGrid Documentation v4.23.23](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/types/interfaces.ts#L22)
