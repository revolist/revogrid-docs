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

[src/utils/store.types.ts:7](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/utils/store.types.ts#L7)
