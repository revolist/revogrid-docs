[RevoGrid Documentation v4.12.3](README.md) / Getter

# Interface: Getter()\<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

```ts
interface Getter<P>(propName: P & string): T[P]
```

## Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* `string` \| `number` \| `symbol` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `propName` | `P` & `string` |

## Returns

`T`\[`P`\]

## Defined in

[src/utils/store.types.ts:27](https://github.com/revolist/revogrid/blob/d8faaf908685ef9767dc3ea8ccad1628e41fbf76/src/utils/store.types.ts#L27)
