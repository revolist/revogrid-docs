[RevoGrid Documentation v4.27.1](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/efdee0ab92f26ace8caf4a94296facd42fc75704/src/types/interfaces.ts#L23)
