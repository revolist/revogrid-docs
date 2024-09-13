[@revolist/revogrid](README.md) / SetEventHandler

# Type Alias: SetEventHandler()\<StoreType\>

```ts
type SetEventHandler<StoreType>: (key: keyof StoreType, newValue: any, oldValue: any) => void;
```

## Type Parameters

| Type Parameter |
| ------ |
| `StoreType` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | keyof `StoreType` |
| `newValue` | `any` |
| `oldValue` | `any` |

## Returns

`void`

## Defined in

[src/utils/store.types.ts:7](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/utils/store.types.ts#L7)
