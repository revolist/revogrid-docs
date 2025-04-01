[RevoGrid Documentation v4.14.11](README.md) / OnChangeHandler

# Interface: OnChangeHandler()\<StoreType\>

## Type Parameters

| Type Parameter |
| ------ |
| `StoreType` |

```ts
interface OnChangeHandler<Key>(propName: Key, cb: (newValue: StoreType[Key]) => void): () => void
```

## Type Parameters

| Type Parameter |
| ------ |
| `Key` *extends* `string` \| `number` \| `symbol` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `propName` | `Key` |
| `cb` | (`newValue`: `StoreType`\[`Key`\]) => `void` |

## Returns

`Function`

### Returns

`void`

## Defined in

[src/utils/store.types.ts:18](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/utils/store.types.ts#L18)
