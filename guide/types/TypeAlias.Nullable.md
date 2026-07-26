[RevoGrid Documentation v4.23.24](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/types/interfaces.ts#L22)
