[RevoGrid Documentation v4.21.2](README.md) / Nullable

# Type Alias: Nullable\<T\>

```ts
type Nullable<T>: { [P in keyof T]: T[P] | null };
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

[src/types/interfaces.ts:22](https://github.com/revolist/revogrid/blob/3af08818f9f1fedaed7deba00c15404a09ccf4a6/src/types/interfaces.ts#L22)
