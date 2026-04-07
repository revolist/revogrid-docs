[RevoGrid Documentation v4.21.3](README.md) / Setter

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

[src/utils/store.types.ts:30](https://github.com/revolist/revogrid/blob/304684a5d02f0b3704e5d01464221cd793f499b5/src/utils/store.types.ts#L30)
