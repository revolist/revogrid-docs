[@revolist/revogrid](README.md) / Setter

# Interface: Setter()\<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

```ts
interface Setter<P>(propName: P & string, value: T[P]): void
```

## Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* `string` \| `number` \| `symbol` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `propName` | `P` & `string` |
| `value` | `T`\[`P`\] |

## Returns

`void`

## Defined in

[src/utils/store.types.ts:30](https://github.com/revolist/revogrid/blob/21cf5bd8103ee03a0cd211a424e38941bf038335/src/utils/store.types.ts#L30)
