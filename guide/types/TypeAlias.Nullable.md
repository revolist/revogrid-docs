[RevoGrid Documentation v4.29.1](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/types/interfaces.ts#L23)
