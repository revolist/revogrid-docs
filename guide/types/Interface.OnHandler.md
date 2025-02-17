[RevoGrid Documentation v4.12.3](README.md) / OnHandler

# Interface: OnHandler()\<StoreType\>

## Type Parameters

| Type Parameter |
| ------ |
| `StoreType` |

```ts
interface OnHandler(eventName: "set", callback: SetEventHandler<StoreType>): () => void
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"set"` |
| `callback` | [`SetEventHandler`](TypeAlias.SetEventHandler.md)\<`StoreType`\> |

## Returns

`Function`

### Returns

`void`

## Defined in

[src/utils/store.types.ts:12](https://github.com/revolist/revogrid/blob/d8faaf908685ef9767dc3ea8ccad1628e41fbf76/src/utils/store.types.ts#L12)

```ts
interface OnHandler(eventName: "get", callback: GetEventHandler<StoreType>): () => void
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"get"` |
| `callback` | [`GetEventHandler`](TypeAlias.GetEventHandler.md)\<`StoreType`\> |

## Returns

`Function`

### Returns

`void`

## Defined in

[src/utils/store.types.ts:13](https://github.com/revolist/revogrid/blob/d8faaf908685ef9767dc3ea8ccad1628e41fbf76/src/utils/store.types.ts#L13)

```ts
interface OnHandler(eventName: "dispose", callback: DisposeEventHandler): () => void
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"dispose"` |
| `callback` | [`DisposeEventHandler`](TypeAlias.DisposeEventHandler.md) |

## Returns

`Function`

### Returns

`void`

## Defined in

[src/utils/store.types.ts:14](https://github.com/revolist/revogrid/blob/d8faaf908685ef9767dc3ea8ccad1628e41fbf76/src/utils/store.types.ts#L14)

```ts
interface OnHandler(eventName: "reset", callback: ResetEventHandler): () => void
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"reset"` |
| `callback` | [`ResetEventHandler`](TypeAlias.ResetEventHandler.md) |

## Returns

`Function`

### Returns

`void`

## Defined in

[src/utils/store.types.ts:15](https://github.com/revolist/revogrid/blob/d8faaf908685ef9767dc3ea8ccad1628e41fbf76/src/utils/store.types.ts#L15)
