[RevoGrid Documentation v4.12.11](README.md) / SetEventHandler

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

[src/utils/store.types.ts:7](https://github.com/revolist/revogrid/blob/6f8df4eb606fcbd6f32b575f3753800c08ad78f6/src/utils/store.types.ts#L7)
