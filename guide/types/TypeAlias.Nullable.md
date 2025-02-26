[RevoGrid Documentation v4.12.7](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/435ff99a088c5c293d22eb08cc3e448f60f4eb56/src/types/interfaces.ts#L21)
