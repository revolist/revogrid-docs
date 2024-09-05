[@revolist/revogrid](README.md) / Getter

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

[src/utils/store.types.ts:27](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/utils/store.types.ts#L27)
