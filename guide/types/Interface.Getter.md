[RevoGrid Documentation v4.21.7](README.md) / Getter

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

[src/utils/store.types.ts:27](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/utils/store.types.ts#L27)
