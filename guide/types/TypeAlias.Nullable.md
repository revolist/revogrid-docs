[RevoGrid Documentation v4.21.3](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/304684a5d02f0b3704e5d01464221cd793f499b5/src/types/interfaces.ts#L22)
