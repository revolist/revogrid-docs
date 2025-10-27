[RevoGrid Documentation v4.19.2](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/types/interfaces.ts#L22)
