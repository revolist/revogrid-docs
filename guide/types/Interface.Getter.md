[RevoGrid Documentation v4.14.3](README.md) / Getter

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

[src/utils/store.types.ts:27](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/utils/store.types.ts#L27)
