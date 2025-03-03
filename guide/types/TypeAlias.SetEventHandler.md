[RevoGrid Documentation v4.12.9](README.md) / SetEventHandler

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

[src/utils/store.types.ts:7](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/utils/store.types.ts#L7)
