[RevoGrid Documentation v4.20.2](README.md) / OnChangeHandler

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

[src/utils/store.types.ts:18](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/utils/store.types.ts#L18)
