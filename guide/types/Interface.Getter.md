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

[src/utils/store.types.ts:27](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/utils/store.types.ts#L27)
