[RevoGrid Documentation v4.23.22](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/types/interfaces.ts#L22)
