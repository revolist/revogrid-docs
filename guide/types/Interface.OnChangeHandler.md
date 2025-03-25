[RevoGrid Documentation v4.14.7](README.md) / OnChangeHandler

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

[src/utils/store.types.ts:18](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/utils/store.types.ts#L18)
