[RevoGrid Documentation v4.20.2](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/types/interfaces.ts#L22)
