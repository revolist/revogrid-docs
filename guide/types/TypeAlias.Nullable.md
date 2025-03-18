[RevoGrid Documentation v4.13.5](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L21)
