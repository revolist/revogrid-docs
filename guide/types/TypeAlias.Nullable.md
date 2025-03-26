[RevoGrid Documentation v4.14.9](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L22)
