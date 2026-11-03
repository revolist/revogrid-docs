[RevoGrid Documentation v4.31.0](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/5f0ca90a7ec9397a6b530ff404c0b3ff06e39076/src/types/interfaces.ts#L23)
