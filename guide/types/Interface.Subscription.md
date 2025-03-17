[RevoGrid Documentation v4.13.4](README.md) / Subscription

# Interface: Subscription\<StoreType\>

## Type Parameters

| Type Parameter |
| ------ |
| `StoreType` |

## Methods

### dispose()?

```ts
optional dispose(): void
```

#### Returns

`void`

#### Defined in

[src/utils/store.types.ts:21](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/utils/store.types.ts#L21)

***

### get()?

```ts
optional get<KeyFromStoreType>(key: KeyFromStoreType): void
```

#### Type Parameters

| Type Parameter |
| ------ |
| `KeyFromStoreType` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `KeyFromStoreType` |

#### Returns

`void`

#### Defined in

[src/utils/store.types.ts:22](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/utils/store.types.ts#L22)

***

### reset()?

```ts
optional reset(): void
```

#### Returns

`void`

#### Defined in

[src/utils/store.types.ts:24](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/utils/store.types.ts#L24)

***

### set()?

```ts
optional set<KeyFromStoreType>(
   key: KeyFromStoreType, 
   newValue: StoreType[KeyFromStoreType], 
   oldValue: StoreType[KeyFromStoreType]): void
```

#### Type Parameters

| Type Parameter |
| ------ |
| `KeyFromStoreType` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `KeyFromStoreType` |
| `newValue` | `StoreType`\[`KeyFromStoreType`\] |
| `oldValue` | `StoreType`\[`KeyFromStoreType`\] |

#### Returns

`void`

#### Defined in

[src/utils/store.types.ts:23](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/utils/store.types.ts#L23)
