[RevoGrid Documentation v4.15.0](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L22)
