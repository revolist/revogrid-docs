[RevoGrid Documentation v4.31.4](README.md) / OnChangeHandler

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

[src/utils/store.types.ts:18](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/utils/store.types.ts#L18)
