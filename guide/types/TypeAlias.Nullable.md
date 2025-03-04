[RevoGrid Documentation v4.12.11](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:21](https://github.com/revolist/revogrid/blob/6f8df4eb606fcbd6f32b575f3753800c08ad78f6/src/types/interfaces.ts#L21)
