[RevoGrid Documentation v4.27.0](README.md) / Setter

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

[src/utils/store.types.ts:30](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/utils/store.types.ts#L30)
