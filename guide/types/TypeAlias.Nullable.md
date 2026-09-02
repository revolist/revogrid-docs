[RevoGrid Documentation v4.27.0](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/types/interfaces.ts#L23)
