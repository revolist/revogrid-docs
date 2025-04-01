[RevoGrid Documentation v4.14.13](README.md) / Setter

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

[src/utils/store.types.ts:30](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/utils/store.types.ts#L30)
