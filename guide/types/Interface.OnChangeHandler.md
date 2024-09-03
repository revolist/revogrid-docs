[@revolist/revogrid](README.md) / OnChangeHandler

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

[src/utils/store.types.ts:18](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/utils/store.types.ts#L18)
