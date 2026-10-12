[RevoGrid Documentation v4.28.3](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/237f5d7f5379065aebb85b7a81753679e1b45365/src/types/interfaces.ts#L23)
