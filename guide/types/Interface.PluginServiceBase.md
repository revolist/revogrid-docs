[RevoGrid Documentation v4.20.1](README.md) / PluginServiceBase

# Interface: PluginServiceBase

## Methods

### add()

```ts
add(plugin: PluginBaseComponent): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `plugin` | [`PluginBaseComponent`](Interface.PluginBaseComponent.md) |

#### Returns

`void`

#### Defined in

[src/types/plugin.types.ts:10](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/plugin.types.ts#L10)

***

### get()

```ts
get(): PluginBaseComponent[]
```

#### Returns

[`PluginBaseComponent`](Interface.PluginBaseComponent.md)[]

#### Defined in

[src/types/plugin.types.ts:9](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/plugin.types.ts#L9)

***

### getByClass()

```ts
getByClass<T>(pluginClass: (...args: any[]) => T): undefined | T
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`PluginBaseComponent`](Interface.PluginBaseComponent.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginClass` | (...`args`: `any`[]) => `T` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/types/plugin.types.ts:12](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/plugin.types.ts#L12)

***

### remove()

```ts
remove(plugin: PluginBaseComponent): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `plugin` | [`PluginBaseComponent`](Interface.PluginBaseComponent.md) |

#### Returns

`void`

#### Defined in

[src/types/plugin.types.ts:11](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/types/plugin.types.ts#L11)
