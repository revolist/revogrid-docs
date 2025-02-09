[RevoGrid Documentation v4.12.0](README.md) / Setter

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

[src/utils/store.types.ts:30](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/utils/store.types.ts#L30)
