[RevoGrid Documentation v4.23.10](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/90b91787366997fc2dd0d419e5fc00e9e9b74f80/src/types/interfaces.ts#L22)
