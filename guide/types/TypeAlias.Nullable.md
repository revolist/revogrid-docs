[RevoGrid Documentation v4.23.11](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/types/interfaces.ts#L22)
