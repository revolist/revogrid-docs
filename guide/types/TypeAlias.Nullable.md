[RevoGrid Documentation v4.17.0](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/types/interfaces.ts#L22)
