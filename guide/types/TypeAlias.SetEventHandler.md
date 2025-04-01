[RevoGrid Documentation v4.14.12](README.md) / SetEventHandler

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

[src/utils/store.types.ts:7](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/utils/store.types.ts#L7)
