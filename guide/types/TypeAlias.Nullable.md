[RevoGrid Documentation v4.14.0](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/interfaces.ts#L21)
