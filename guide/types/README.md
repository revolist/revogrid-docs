# RevoGrid Documentation v4.13.2

## AutoAddRowsPlugin

Automatically adds new rows when pasted data is larger than current rows
 newRows - is triggered when new rows are added. Data of new rows can be filled with default values. If the event is prevented, no rows will be added

### Extends

- [`BasePlugin`](README.md#baseplugin)

### Constructors

#### new AutoAddRowsPlugin()

```ts
new AutoAddRowsPlugin(revogrid: HTMLRevoGridElement, providers: PluginProviders): AutoAddRowsPlugin
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |

##### Returns

[`AutoAddRowsPlugin`](README.md#autoaddrowsplugin)

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`constructor`](README.md#constructors-1)

##### Defined in

[src/plugins/add-rows-on-paste.plugin.ts:9](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/add-rows-on-paste.plugin.ts#L9)

### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | [`BasePlugin`](README.md#baseplugin).`h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [`BasePlugin`](README.md#baseplugin).`providers` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [`BasePlugin`](README.md#baseplugin).`revogrid` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [`BasePlugin`](README.md#baseplugin).`subscriptions` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`addEventListener`](README.md#addeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`clearSubscriptions`](README.md#clearsubscriptions-1)

##### Defined in

[src/plugins/base.plugin.ts:88](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L88)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`destroy`](README.md#destroy-1)

##### Defined in

[src/plugins/base.plugin.ts:97](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L97)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`emit`](README.md#emit-1)

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### handleBeforePasteApply()

```ts
handleBeforePasteApply(event: CustomEvent<{
  event: ClipboardEvent;
  parsed: string[][];
  raw: string;
 }>): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `CustomEvent`\<\{ `event`: `ClipboardEvent`; `parsed`: `string`[][]; `raw`: `string`; \}\> |

##### Returns

`void`

##### Defined in

[src/plugins/add-rows-on-paste.plugin.ts:16](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/add-rows-on-paste.plugin.ts#L16)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`removeEventListener`](README.md#removeeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`watch`](README.md#watch-1)

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## AutoSizeColumnPlugin

Base layer for plugins
Provide minimal starting core for plugins to work
Extend this class to create plugin

### Extends

- [`BasePlugin`](README.md#baseplugin)

### Constructors

#### new AutoSizeColumnPlugin()

```ts
new AutoSizeColumnPlugin(
   revogrid: HTMLRevoGridElement, 
   providers: PluginProviders, 
   config?: AutoSizeColumnConfig): AutoSizeColumnPlugin
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |
| `config`? | [`AutoSizeColumnConfig`](TypeAlias.AutoSizeColumnConfig.md) |

##### Returns

[`AutoSizeColumnPlugin`](README.md#autosizecolumnplugin)

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`constructor`](README.md#constructors-1)

##### Defined in

[src/plugins/column.auto-size.plugin.ts:75](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L75)

### Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `autoSizeColumns` | `public` | `null` \| `Partial`\<`AutoSizeColumns`\> | `null` | - | - | [src/plugins/column.auto-size.plugin.ts:65](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L65) |
| `config?` | `public` | [`AutoSizeColumnConfig`](TypeAlias.AutoSizeColumnConfig.md) | `undefined` | - | - | [src/plugins/column.auto-size.plugin.ts:78](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L78) |
| `dataReject` | `public` | `null` \| `Reject` | `null` | - | - | [src/plugins/column.auto-size.plugin.ts:73](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L73) |
| `dataResolve` | `public` | `null` \| `Resolve` | `null` | for edge case when no columns defined before data | - | [src/plugins/column.auto-size.plugin.ts:72](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L72) |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | - | [`BasePlugin`](README.md#baseplugin).`h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `letterBlockSize` | `readonly` | `number` | `undefined` | - | - | [src/plugins/column.auto-size.plugin.ts:66](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L66) |
| `precsizeCalculationArea` | `readonly` | `HTMLElement` | `undefined` | for config option when preciseSize enabled | - | [src/plugins/column.auto-size.plugin.ts:69](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L69) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | - | [`BasePlugin`](README.md#baseplugin).`providers` | [src/plugins/column.auto-size.plugin.ts:77](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L77) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | - | [`BasePlugin`](README.md#baseplugin).`revogrid` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | - | [`BasePlugin`](README.md#baseplugin).`subscriptions` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`addEventListener`](README.md#addeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### afterEditAll()

```ts
afterEditAll(e: EditEvent): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `EditEvent` |

##### Returns

`void`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:216](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L216)

***

#### afteredit()

```ts
afteredit(e: EditEvent): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `EditEvent` |

##### Returns

`void`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:184](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L184)

***

#### clearPromise()

```ts
clearPromise(): void
```

##### Returns

`void`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:287](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L287)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`clearSubscriptions`](README.md#clearsubscriptions-1)

##### Defined in

[src/plugins/base.plugin.ts:88](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L88)

***

#### columnSet()

```ts
columnSet(columns: Record<DimensionCols, ColumnRegular[]>): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> |

##### Returns

`void`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:260](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L260)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`destroy`](README.md#destroy-1)

##### Defined in

[src/plugins/column.auto-size.plugin.ts:316](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L316)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`emit`](README.md#emit-1)

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### getColumnSize()

```ts
getColumnSize(index: number, type: DimensionCols): number
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) |

##### Returns

`number`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:238](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L238)

***

#### getLength()

```ts
getLength(len?: any): number
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `len`? | `any` |

##### Returns

`number`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:165](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L165)

***

#### initiatePresizeElement()

```ts
initiatePresizeElement(): HTMLElement
```

##### Returns

`HTMLElement`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:296](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L296)

***

#### isRangeEdit()

```ts
isRangeEdit(e: EditEvent): e is BeforeRangeSaveDataDetails
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `EditEvent` |

##### Returns

`e is BeforeRangeSaveDataDetails`

##### Defined in

[src/plugins/column.auto-size.plugin.ts:292](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L292)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`removeEventListener`](README.md#removeeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### setSource()

```ts
setSource(source: DataType[]): Promise<void>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | [`DataType`](TypeAlias.DataType.md)[] |

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/plugins/column.auto-size.plugin.ts:131](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.auto-size.plugin.ts#L131)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`watch`](README.md#watch-1)

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## BasePlugin

Base layer for plugins
Provide minimal starting core for plugins to work
Extend this class to create plugin

### Extended by

- [`AutoSizeColumnPlugin`](README.md#autosizecolumnplugin)
- [`StretchColumn`](README.md#stretchcolumn)
- [`ExportFilePlugin`](README.md#exportfileplugin)
- [`GroupingRowPlugin`](README.md#groupingrowplugin)
- [`ColumnMovePlugin`](README.md#columnmoveplugin)
- [`SortingPlugin`](README.md#sortingplugin)
- [`AutoAddRowsPlugin`](README.md#autoaddrowsplugin)

### Implements

- [`PluginBaseComponent`](Interface.PluginBaseComponent.md)

### Constructors

#### new BasePlugin()

```ts
new BasePlugin(revogrid: HTMLRevoGridElement, providers: PluginProviders): BasePlugin
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |

##### Returns

[`BasePlugin`](README.md#baseplugin)

##### Defined in

[src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15)

### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Defined in

[src/plugins/base.plugin.ts:88](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L88)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Implementation of

[`PluginBaseComponent`](Interface.PluginBaseComponent.md).[`destroy`](Interface.PluginBaseComponent.md#destroy)

##### Defined in

[src/plugins/base.plugin.ts:97](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L97)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## ColumnMovePlugin

Base layer for plugins
Provide minimal starting core for plugins to work
Extend this class to create plugin

### Extends

- [`BasePlugin`](README.md#baseplugin)

### Constructors

#### new ColumnMovePlugin()

```ts
new ColumnMovePlugin(revogrid: HTMLRevoGridElement, providers: PluginProviders): ColumnMovePlugin
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |

##### Returns

[`ColumnMovePlugin`](README.md#columnmoveplugin)

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`constructor`](README.md#constructors-1)

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:54](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L54)

### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | [`BasePlugin`](README.md#baseplugin).`h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [`BasePlugin`](README.md#baseplugin).`providers` | [src/plugins/moveColumn/column.drag.plugin.ts:54](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L54) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [`BasePlugin`](README.md#baseplugin).`revogrid` | [src/plugins/moveColumn/column.drag.plugin.ts:54](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L54) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [`BasePlugin`](README.md#baseplugin).`subscriptions` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`addEventListener`](README.md#addeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### clearOrder()

```ts
clearOrder(): void
```

##### Returns

`void`

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:197](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L197)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clearing subscription

##### Returns

`void`

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`clearSubscriptions`](README.md#clearsubscriptions-1)

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:206](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L206)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`destroy`](README.md#destroy-1)

##### Defined in

[src/plugins/base.plugin.ts:97](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L97)

***

#### doMove()

```ts
doMove(e: MouseEvent): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `MouseEvent` |

##### Returns

`void`

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:127](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L127)

***

#### dragStart()

```ts
dragStart(__namedParameters: DragStartEventDetails): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`DragStartEventDetails`](TypeAlias.DragStartEventDetails.md) |

##### Returns

`void`

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:78](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L78)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`emit`](README.md#emit-1)

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### move()

```ts
move(e: MouseEvent): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `MouseEvent` |

##### Returns

`void`

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:153](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L153)

***

#### onMouseOut()

```ts
onMouseOut(_: MouseEvent): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `_` | `MouseEvent` |

##### Returns

`void`

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:158](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L158)

***

#### onMouseUp()

```ts
onMouseUp(e: MouseEvent): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `MouseEvent` |

##### Returns

`void`

##### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:161](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L161)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`removeEventListener`](README.md#removeeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`watch`](README.md#watch-1)

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## DataStore\<T, ST\>

Data store
Manage the state of a data source and provide methods for updating, adding, and refreshing the data.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `ST` *extends* [`GDimension`](TypeAlias.GDimension.md) |

### Constructors

#### new DataStore()

```ts
new DataStore<T, ST>(type: ST, storeData?: DSourceState<T, ST>): DataStore<T, ST>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `ST` |
| `storeData`? | [`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `ST`\> |

##### Returns

[`DataStore`](README.md#datastoret-st)\<`T`, `ST`\>

##### Defined in

[src/store/dataSource/data.store.ts:45](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L45)

### Accessors

#### store

```ts
get store(): Observable<DSourceState<T, ST>>
```

##### Returns

[`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `ST`\>\>

##### Defined in

[src/store/dataSource/data.store.ts:42](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L42)

### Methods

#### addTrimmed()

```ts
addTrimmed(some: Partial<Trimmed>): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `some` | `Partial`\<[`Trimmed`](TypeAlias.Trimmed.md)\> |

##### Returns

`void`

##### Defined in

[src/store/dataSource/data.store.ts:100](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L100)

***

#### refresh()

```ts
refresh(): void
```

##### Returns

`void`

##### Defined in

[src/store/dataSource/data.store.ts:118](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L118)

***

#### setData()

```ts
setData(input: Partial<DSourceState<T, ST>>): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Partial`\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `ST`\>\> |

##### Returns

`void`

##### Defined in

[src/store/dataSource/data.store.ts:111](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L111)

***

#### setSourceData()

```ts
setSourceData(items: Record<number, any>, mutate: boolean): void
```

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `items` | `Record`\<`number`, `any`\> | `undefined` |
| `mutate` | `boolean` | `true` |

##### Returns

`void`

##### Defined in

[src/store/dataSource/data.store.ts:106](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L106)

***

#### updateData()

```ts
updateData(
   source: T[], 
   grouping?: {
  customRenderer: GroupLabelTemplateFunc;
  depth: number;
  groups: Groups;
 }, 
   silent?: boolean): void
```

full data source update

##### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `source` | `T`[] | `undefined` | data column/rgRow source |
| `grouping`? | `object` | `undefined` | grouping information if present |
| `grouping.customRenderer`? | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | `undefined` | - |
| `grouping.depth`? | `number` | `undefined` | - |
| `grouping.groups`? | [`Groups`](TypeAlias.Groups.md) | `undefined` | - |
| `silent`? | `boolean` | `false` | - |

##### Returns

`void`

##### Defined in

[src/store/dataSource/data.store.ts:66](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L66)

***

## DimensionStore

### Constructors

#### new DimensionStore()

```ts
new DimensionStore(type: MultiDimensionType): DimensionStore
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`MultiDimensionType`](TypeAlias.MultiDimensionType.md) |

##### Returns

[`DimensionStore`](README.md#dimensionstore)

##### Defined in

[src/store/dimension/dimension.store.ts:56](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L56)

### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `store` | `readonly` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | [src/store/dimension/dimension.store.ts:55](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L55) |
| `type` | `readonly` | [`MultiDimensionType`](TypeAlias.MultiDimensionType.md) | [src/store/dimension/dimension.store.ts:56](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L56) |

### Methods

#### dispose()

```ts
dispose(): void
```

##### Returns

`void`

##### Defined in

[src/store/dimension/dimension.store.ts:82](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L82)

***

#### drop()

```ts
drop(): void
```

##### Returns

`void`

##### Defined in

[src/store/dimension/dimension.store.ts:90](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L90)

***

#### getCurrentState()

```ts
getCurrentState(): DimensionSettingsState
```

##### Returns

[`DimensionSettingsState`](Interface.DimensionSettingsState.md)

##### Defined in

[src/store/dimension/dimension.store.ts:68](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L68)

***

#### setDimensionSize()

```ts
setDimensionSize(sizes: ViewSettingSizeProp): void
```

Set custom dimension sizes and overwrite old
Generates new indexes based on sizes

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | sizes to set |

##### Returns

`void`

##### Defined in

[src/store/dimension/dimension.store.ts:99](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L99)

***

#### setStore()

```ts
setStore<T>(data: Partial<T>): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`\<`string`, `any`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Partial`\<`T`\> |

##### Returns

`void`

##### Defined in

[src/store/dimension/dimension.store.ts:86](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L86)

***

#### updateSizesPositionByIndexes()

```ts
updateSizesPositionByIndexes(newItemsOrder: number[], prevItemsOrder: number[]): void
```

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `newItemsOrder` | `number`[] | `undefined` |
| `prevItemsOrder` | `number`[] | `[]` |

##### Returns

`void`

##### Defined in

[src/store/dimension/dimension.store.ts:110](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.store.ts#L110)

***

## ExportCsv

### Implements

- [`Formatter`](Interface.Formatter.md)

### Constructors

#### new ExportCsv()

```ts
new ExportCsv(options: Partial<CSVFormat>): ExportCsv
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `Partial`\<[`CSVFormat`](Interface.CSVFormat.md)\> |

##### Returns

[`ExportCsv`](README.md#exportcsv)

##### Defined in

[src/plugins/export/csv.ts:26](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/export/csv.ts#L26)

### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `options` | `readonly` | `Readonly`\<[`CSVFormat`](Interface.CSVFormat.md)\> | [src/plugins/export/csv.ts:25](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/export/csv.ts#L25) |

### Methods

#### doExport()

```ts
doExport(__namedParameters: DataInput): string
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`DataInput`](TypeAlias.DataInput.md) |

##### Returns

`string`

##### Implementation of

[`Formatter`](Interface.Formatter.md).[`doExport`](Interface.Formatter.md#doexport)

##### Defined in

[src/plugins/export/csv.ts:30](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/export/csv.ts#L30)

***

## ExportFilePlugin

Base layer for plugins
Provide minimal starting core for plugins to work
Extend this class to create plugin

### Extends

- [`BasePlugin`](README.md#baseplugin)

### Constructors

#### new ExportFilePlugin()

```ts
new ExportFilePlugin(revogrid: HTMLRevoGridElement, providers: PluginProviders): ExportFilePlugin
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |

##### Returns

[`ExportFilePlugin`](README.md#exportfileplugin)

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`constructor`](README.md#constructors-1)

##### Defined in

[src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15)

### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | [`BasePlugin`](README.md#baseplugin).`h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [`BasePlugin`](README.md#baseplugin).`providers` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [`BasePlugin`](README.md#baseplugin).`revogrid` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [`BasePlugin`](README.md#baseplugin).`subscriptions` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`addEventListener`](README.md#addeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`clearSubscriptions`](README.md#clearsubscriptions-1)

##### Defined in

[src/plugins/base.plugin.ts:88](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L88)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`destroy`](README.md#destroy-1)

##### Defined in

[src/plugins/base.plugin.ts:97](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L97)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`emit`](README.md#emit-1)

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### exportBlob()

```ts
exportBlob(options: Partial<CSVFormat>, t: ExportTypes): Promise<null | Blob>
```

Exports Blob

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `options` | `Partial`\<[`CSVFormat`](Interface.CSVFormat.md)\> | `{}` |
| `t` | `ExportTypes` | `ExportTypes.csv` |

##### Returns

`Promise`\<`null` \| `Blob`\>

##### Defined in

[src/plugins/export/export.plugin.ts:30](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/export/export.plugin.ts#L30)

***

#### exportFile()

```ts
exportFile(options: Partial<CSVFormat>, t: ExportTypes): Promise<void>
```

Export file

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `options` | `Partial`\<[`CSVFormat`](Interface.CSVFormat.md)\> | `{}` |
| `t` | `ExportTypes` | `ExportTypes.csv` |

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/plugins/export/export.plugin.ts:35](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/export/export.plugin.ts#L35)

***

#### exportString()

```ts
exportString(options: Partial<CSVFormat>, t: ExportTypes): Promise<null | string>
```

Exports string

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `options` | `Partial`\<[`CSVFormat`](Interface.CSVFormat.md)\> | `{}` |
| `t` | `ExportTypes` | `ExportTypes.csv` |

##### Returns

`Promise`\<`null` \| `string`\>

##### Defined in

[src/plugins/export/export.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/export/export.plugin.ts#L21)

***

#### getBlob()

```ts
getBlob(formatter: Formatter): Promise<null | Blob>
```

Blob object

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `formatter` | [`Formatter`](Interface.Formatter.md) |

##### Returns

`Promise`\<`null` \| `Blob`\>

##### Defined in

[src/plugins/export/export.plugin.ts:61](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/export/export.plugin.ts#L61)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`removeEventListener`](README.md#removeeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`watch`](README.md#watch-1)

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## GroupingRowPlugin

Base layer for plugins
Provide minimal starting core for plugins to work
Extend this class to create plugin

### Extends

- [`BasePlugin`](README.md#baseplugin)

### Constructors

#### new GroupingRowPlugin()

```ts
new GroupingRowPlugin(revogrid: HTMLRevoGridElement, providers: PluginProviders): GroupingRowPlugin
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |

##### Returns

[`GroupingRowPlugin`](README.md#groupingrowplugin)

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`constructor`](README.md#constructors-1)

##### Defined in

[src/plugins/groupingRow/grouping.row.plugin.ts:66](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.plugin.ts#L66)

### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | [`BasePlugin`](README.md#baseplugin).`h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [`BasePlugin`](README.md#baseplugin).`providers` | [src/plugins/groupingRow/grouping.row.plugin.ts:68](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.plugin.ts#L68) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [`BasePlugin`](README.md#baseplugin).`revogrid` | [src/plugins/groupingRow/grouping.row.plugin.ts:67](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.plugin.ts#L67) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [`BasePlugin`](README.md#baseplugin).`subscriptions` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`addEventListener`](README.md#addeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### clearGrouping()

```ts
clearGrouping(): void
```

##### Returns

`void`

##### Defined in

[src/plugins/groupingRow/grouping.row.plugin.ts:323](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.plugin.ts#L323)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`clearSubscriptions`](README.md#clearsubscriptions-1)

##### Defined in

[src/plugins/base.plugin.ts:88](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L88)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`destroy`](README.md#destroy-1)

##### Defined in

[src/plugins/base.plugin.ts:97](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L97)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`emit`](README.md#emit-1)

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### getStore()

```ts
getStore(type: DimensionRows): Observable<DSourceState<DataType, DimensionRows>>
```

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | `GROUPING_ROW_TYPE` |

##### Returns

[`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\>

##### Defined in

[src/plugins/groupingRow/grouping.row.plugin.ts:60](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.plugin.ts#L60)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`removeEventListener`](README.md#removeeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### setGrouping()

```ts
setGrouping(options: GroupingOptions): void
```

External call to apply grouping. Called by revogrid when prop changed.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GroupingOptions`](TypeAlias.GroupingOptions.md) |

##### Returns

`void`

##### Defined in

[src/plugins/groupingRow/grouping.row.plugin.ts:245](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.plugin.ts#L245)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`watch`](README.md#watch-1)

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## SelectionStore

### Constructors

#### new SelectionStore()

```ts
new SelectionStore(): SelectionStore
```

##### Returns

[`SelectionStore`](README.md#selectionstore)

##### Defined in

[src/store/selection/selection.store.ts:25](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L25)

### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `store` | `readonly` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | [src/store/selection/selection.store.ts:23](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L23) |

### Methods

#### clearFocus()

```ts
clearFocus(): void
```

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:38](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L38)

***

#### clearTemp()

```ts
clearTemp(): void
```

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:63](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L63)

***

#### dispose()

```ts
dispose(): void
```

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:91](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L91)

***

#### onChange()

```ts
onChange<Key>(propName: Key, cb: (newValue: SelectionStoreState[Key]) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `Key` *extends* keyof [`SelectionStoreState`](TypeAlias.SelectionStoreState.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `propName` | `Key` |
| `cb` | (`newValue`: [`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\[`Key`\]) => `void` |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:34](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L34)

***

#### setEdit()

```ts
setEdit(val?: string | boolean): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `val`? | `string` \| `boolean` |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:80](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L80)

***

#### setFocus()

```ts
setFocus(focus: Cell, end?: Cell): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `focus` | [`Cell`](Interface.Cell.md) |
| `end`? | [`Cell`](Interface.Cell.md) |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:42](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L42)

***

#### setLastCell()

```ts
setLastCell(lastCell: Cell): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `lastCell` | [`Cell`](Interface.Cell.md) |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:76](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L76)

***

#### setNextFocus()

```ts
setNextFocus(focus: Cell): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `focus` | [`Cell`](Interface.Cell.md) |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:55](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L55)

***

#### setRange()

```ts
setRange(start: Cell, end: Cell): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `start` | [`Cell`](Interface.Cell.md) |
| `end` | [`Cell`](Interface.Cell.md) |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:71](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L71)

***

#### setRangeArea()

```ts
setRangeArea(range: null | RangeArea): void
```

Can be applied from selection change or from simple keyboard change clicks

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `range` | `null` \| [`RangeArea`](TypeAlias.RangeArea.md) |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:68](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L68)

***

#### setTempArea()

```ts
setTempArea(range: null | Nullable<TempRange>): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `range` | `null` \| [`Nullable`](TypeAlias.Nullable.md)\<[`TempRange`](TypeAlias.TempRange.md)\> |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:59](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.store.ts#L59)

***

## SortingPlugin

Lifecycle
1.  `beforesorting` - Triggered when sorting just starts. Nothing has happened yet. This can be triggered from a column or from the source. If the type is from rows, the column will be undefined.
1.1.  `beforesourcesortingapply` - Triggered before the sorting data is applied to the data source. You can prevent this event, and the data will not be sorted.
2. Method `updateColumnSorting` - Updates the column sorting icon on the grid and the column itself, but the data remains untouched.
3.  `beforesortingapply` - Triggered before the sorting data is applied to the data source. You can prevent this event, and the data will not be sorted. This event is only called from a column sorting click.
4.  `aftersortingapply` - Triggered after sorting has been applied and completed. This event occurs for both row and column sorting.

Note: If you prevent an event, it will not proceed to the subsequent steps.

### Extends

- [`BasePlugin`](README.md#baseplugin)

### Constructors

#### new SortingPlugin()

```ts
new SortingPlugin(
   revogrid: HTMLRevoGridElement, 
   providers: PluginProviders, 
   config?: SortingConfig): SortingPlugin
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |
| `config`? | [`SortingConfig`](TypeAlias.SortingConfig.md) |

##### Returns

[`SortingPlugin`](README.md#sortingplugin)

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`constructor`](README.md#constructors-1)

##### Defined in

[src/plugins/sorting/sorting.plugin.ts:54](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L54)

### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | [`BasePlugin`](README.md#baseplugin).`h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `postponeSort` | `public` | `DebouncedFunc`\<(`order`?: [`SortingOrder`](TypeAlias.SortingOrder.md), `comparison`?: [`SortingOrderFunction`](TypeAlias.SortingOrderFunction.md), `ignoreViewportUpdate`?: `boolean`) => `void`\> | `undefined` | - | [src/plugins/sorting/sorting.plugin.ts:38](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L38) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [`BasePlugin`](README.md#baseplugin).`providers` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [`BasePlugin`](README.md#baseplugin).`revogrid` | [src/plugins/sorting/sorting.plugin.ts:55](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L55) |
| `sorting?` | `public` | [`SortingOrder`](TypeAlias.SortingOrder.md) | `undefined` | - | [src/plugins/sorting/sorting.plugin.ts:33](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L33) |
| `sortingFunc?` | `public` | [`SortingOrderFunction`](TypeAlias.SortingOrderFunction.md) | `undefined` | - | [src/plugins/sorting/sorting.plugin.ts:36](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L36) |
| `sortingPromise` | `public` | `null` \| () => `void` | `null` | - | [src/plugins/sorting/sorting.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L37) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [`BasePlugin`](README.md#baseplugin).`subscriptions` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`addEventListener`](README.md#addeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`clearSubscriptions`](README.md#clearsubscriptions-1)

##### Defined in

[src/plugins/base.plugin.ts:88](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L88)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`destroy`](README.md#destroy-1)

##### Defined in

[src/plugins/base.plugin.ts:97](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L97)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`emit`](README.md#emit-1)

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### headerclick()

```ts
headerclick(
   column: ColumnRegular, 
   index: number, 
   additive: boolean): void
```

Apply sorting to data on header click
If additive - add to existing sorting, multiple columns can be sorted

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) |
| `index` | `number` |
| `additive` | `boolean` |

##### Returns

`void`

##### Defined in

[src/plugins/sorting/sorting.plugin.ts:153](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L153)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`removeEventListener`](README.md#removeeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### runSorting()

```ts
runSorting(
   order?: SortingOrder, 
   comparison?: SortingOrderFunction, 
   ignoreViewportUpdate?: boolean): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `order`? | [`SortingOrder`](TypeAlias.SortingOrder.md) |
| `comparison`? | [`SortingOrderFunction`](TypeAlias.SortingOrderFunction.md) |
| `ignoreViewportUpdate`? | `boolean` |

##### Returns

`void`

##### Defined in

[src/plugins/sorting/sorting.plugin.ts:44](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L44)

***

#### sort()

```ts
sort(
   sorting?: SortingOrder, 
   sortingFunc?: SortingOrderFunction, 
   types?: DimensionRows[], 
   ignoreViewportUpdate?: boolean): void
```

Sort items by sorting function

##### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `sorting`? | [`SortingOrder`](TypeAlias.SortingOrder.md) | `undefined` | per column sorting |
| `sortingFunc`? | [`SortingOrderFunction`](TypeAlias.SortingOrderFunction.md) | `undefined` | - |
| `types`? | [`DimensionRows`](TypeAlias.DimensionRows.md)[] | `rowTypes` | - |
| `ignoreViewportUpdate`? | `boolean` | `false` | - |

##### Returns

`void`

##### Requires

proxyItems applied to row store

##### Requires

source applied to row store

##### Defined in

[src/plugins/sorting/sorting.plugin.ts:221](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L221)

***

#### startSorting()

```ts
startSorting(
   order?: SortingOrder, 
   sortingFunc?: SortingOrderFunction, 
   ignoreViewportUpdate?: boolean): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `order`? | [`SortingOrder`](TypeAlias.SortingOrder.md) |
| `sortingFunc`? | [`SortingOrderFunction`](TypeAlias.SortingOrderFunction.md) |
| `ignoreViewportUpdate`? | `boolean` |

##### Returns

`void`

##### Defined in

[src/plugins/sorting/sorting.plugin.ts:136](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.plugin.ts#L136)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`watch`](README.md#watch-1)

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## StretchColumn

Base layer for plugins
Provide minimal starting core for plugins to work
Extend this class to create plugin

### Extends

- [`BasePlugin`](README.md#baseplugin)

### Constructors

#### new StretchColumn()

```ts
new StretchColumn(revogrid: HTMLRevoGridElement, providers: PluginProviders): StretchColumn
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `revogrid` | `HTMLRevoGridElement` |
| `providers` | [`PluginProviders`](TypeAlias.PluginProviders.md) |

##### Returns

[`StretchColumn`](README.md#stretchcolumn)

##### Overrides

[`BasePlugin`](README.md#baseplugin).[`constructor`](README.md#constructors-1)

##### Defined in

[src/plugins/column.stretch.plugin.ts:26](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.stretch.plugin.ts#L26)

### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `h` | `readonly` | *typeof* [`h`](README.md#h) | `h` | [`BasePlugin`](README.md#baseplugin).`h` | [src/plugins/base.plugin.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L13) |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [`BasePlugin`](README.md#baseplugin).`providers` | [src/plugins/column.stretch.plugin.ts:28](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.stretch.plugin.ts#L28) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [`BasePlugin`](README.md#baseplugin).`revogrid` | [src/plugins/base.plugin.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L15) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [`BasePlugin`](README.md#baseplugin).`subscriptions` | [src/plugins/base.plugin.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L14) |

### Methods

#### addEventListener()

```ts
addEventListener<K>(eventName: K, callback: (this: BasePlugin, e: CustomEvent<HTMLRevoGridElementEventMap[K]>) => void): void
```

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `HTMLRevoGridElementEventMap` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`this`: [`BasePlugin`](README.md#baseplugin), `e`: `CustomEvent`\<`HTMLRevoGridElementEventMap`\[`K`\]\>) => `void` | callback function for event |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`addEventListener`](README.md#addeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L21)

***

#### applyStretch()

```ts
applyStretch(columns: Record<DimensionCols, ColumnRegular[]>): void
```

Apply stretch changes

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> |

##### Returns

`void`

##### Defined in

[src/plugins/column.stretch.plugin.ts:86](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.stretch.plugin.ts#L86)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`clearSubscriptions`](README.md#clearsubscriptions-1)

##### Defined in

[src/plugins/base.plugin.ts:88](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L88)

***

#### destroy()

```ts
destroy(): void
```

Destroy plugin and clear all subscriptions

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`destroy`](README.md#destroy-1)

##### Defined in

[src/plugins/base.plugin.ts:97](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L97)

***

#### emit()

```ts
emit<T>(eventName: string, detail?: T): CustomEvent<T>
```

Emit event from revo-grid component
Event can be cancelled by calling event.preventDefault() in callback

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail`? | `T` |

##### Returns

`CustomEvent`\<`T`\>

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`emit`](README.md#emit-1)

##### Defined in

[src/plugins/base.plugin.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L79)

***

#### removeEventListener()

```ts
removeEventListener(eventName: string): void
```

Remove event listener

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` |  |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`removeEventListener`](README.md#removeeventlistener-1)

##### Defined in

[src/plugins/base.plugin.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L70)

***

#### watch()

```ts
watch<T>(
   prop: string, 
   callback: (arg: T) => boolean | void, 
   immediate: Partial<WatchConfig>): void
```

Subscribe to property change in revo-grid component
You can return false in callback to prevent default value set

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prop` | `string` | property name |
| `callback` | (`arg`: `T`) => `boolean` \| `void` | callback function |
| `immediate` | `Partial`\<[`WatchConfig`](TypeAlias.WatchConfig.md)\> | trigger callback immediately with current value |

##### Returns

`void`

##### Inherited from

[`BasePlugin`](README.md#baseplugin).[`watch`](README.md#watch-1)

##### Defined in

[src/plugins/base.plugin.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/base.plugin.ts#L37)

***

## TextEditor

Editor interface

### Implements

- [`EditorBase`](Interface.EditorBase.md)

### Constructors

#### new TextEditor()

```ts
new TextEditor(data: ColumnDataSchemaModel, saveCallback?: SaveCallback): TextEditor
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) |
| `saveCallback`? | `SaveCallback` |

##### Returns

[`TextEditor`](README.md#texteditor)

##### Defined in

[src/components/editors/text-editor.ts:26](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L26)

### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `data` | `public` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | `undefined` | [src/components/editors/text-editor.ts:27](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L27) |
| `editCell?` | `public` | [`EditCell`](TypeAlias.EditCell.md) | `undefined` | [src/components/editors/text-editor.ts:24](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L24) |
| `editInput` | `public` | `null` \| `HTMLInputElement` | `null` | [src/components/editors/text-editor.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L21) |
| `element` | `public` | `null` \| `Element` | `null` | [src/components/editors/text-editor.ts:23](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L23) |

### Methods

#### beforeDisconnect()

```ts
beforeDisconnect(): void
```

IMPORTANT: Prevent scroll glitches when editor is closed and focus is on current input element.

##### Returns

`void`

##### Implementation of

[`EditorBase`](Interface.EditorBase.md).[`beforeDisconnect`](Interface.EditorBase.md#beforedisconnect)

##### Defined in

[src/components/editors/text-editor.ts:61](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L61)

***

#### componentDidRender()

```ts
componentDidRender(): Promise<void>
```

Callback triggered on cell editor render

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`EditorBase`](Interface.EditorBase.md).[`componentDidRender`](Interface.EditorBase.md#componentdidrender)

##### Defined in

[src/components/editors/text-editor.ts:34](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L34)

***

#### getValue()

```ts
getValue(): undefined | string
```

Get value from input

##### Returns

`undefined` \| `string`

##### Implementation of

[`EditorBase`](Interface.EditorBase.md).[`getValue`](Interface.EditorBase.md#getvalue)

##### Defined in

[src/components/editors/text-editor.ts:68](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L68)

***

#### onKeyDown()

```ts
onKeyDown(e: KeyboardEvent): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `KeyboardEvent` |

##### Returns

`void`

##### Defined in

[src/components/editors/text-editor.ts:41](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L41)

***

#### render()

```ts
render(h: typeof h, _additionalData: any): VNode | VNode[]
```

Render method for Editor plugin.
Renders input element with passed data from cell.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `h` | *typeof* [`h`](README.md#h) | h function from stencil render. |
| `_additionalData` | `any` | additional data from plugin. |

##### Returns

[`VNode`](Interface.VNode.md) \| [`VNode`](Interface.VNode.md)[]

- input element.

##### Implementation of

[`EditorBase`](Interface.EditorBase.md).[`render`](Interface.EditorBase.md#render)

##### Defined in

[src/components/editors/text-editor.ts:79](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components/editors/text-editor.ts#L79)

***

## ViewportStore

Viewport store class

### Constructors

#### new ViewportStore()

```ts
new ViewportStore(type: MultiDimensionType): ViewportStore
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`MultiDimensionType`](TypeAlias.MultiDimensionType.md) |

##### Returns

[`ViewportStore`](README.md#viewportstore)

##### Defined in

[src/store/vp/viewport.store.ts:60](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L60)

### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `store` | `readonly` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | [src/store/vp/viewport.store.ts:49](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L49) |
| `type` | `readonly` | [`MultiDimensionType`](TypeAlias.MultiDimensionType.md) | [src/store/vp/viewport.store.ts:60](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L60) |

### Accessors

#### lastCoordinate

```ts
get lastCoordinate(): number
```

```ts
set lastCoordinate(value: number): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`number`

##### Defined in

[src/store/vp/viewport.store.ts:54](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L54)

### Methods

#### getItems()

```ts
getItems(): ItemsToUpdate
```

##### Returns

[`ItemsToUpdate`](TypeAlias.ItemsToUpdate.md)

##### Defined in

[src/store/vp/viewport.store.ts:196](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L196)

***

#### setOriginalSizes()

```ts
setOriginalSizes(size: number): void
```

Set sizes for existing items

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |

##### Returns

`void`

##### Defined in

[src/store/vp/viewport.store.ts:178](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L178)

***

#### setViewPortCoordinate()

```ts
setViewPortCoordinate(
   position: number, 
   dimension: DimensionDataViewport, 
   force: boolean): void
```

Render viewport based on coordinate
It's the main method for draw
Use force if you want to re-render viewport

##### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | `number` | `undefined` |
| `dimension` | [`DimensionDataViewport`](TypeAlias.DimensionDataViewport.md) | `undefined` |
| `force` | `boolean` | `false` |

##### Returns

`void`

##### Defined in

[src/store/vp/viewport.store.ts:69](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L69)

***

#### setViewport()

```ts
setViewport(data: Partial<ViewportState>): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Partial`\<[`ViewportState`](Interface.ViewportState.md)\> |

##### Returns

`void`

##### Defined in

[src/store/vp/viewport.store.ts:204](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.store.ts#L204)

***

## AND\_OR\_BUTTON

```ts
const AND_OR_BUTTON: "and-or-button" = 'and-or-button';
```

### Defined in

[src/plugins/filter/filter.button.tsx:8](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L8)

***

## CELL\_CLASS

```ts
const CELL_CLASS: "rgCell" = 'rgCell';
```

### Defined in

[src/utils/consts.ts:8](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L8)

***

## CELL\_HANDLER\_CLASS

```ts
const CELL_HANDLER_CLASS: "autofill-handle" = 'autofill-handle';
```

### Defined in

[src/utils/consts.ts:23](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L23)

***

## DATA\_COL

```ts
const DATA_COL: "data-rgCol" = 'data-rgCol';
```

### Defined in

[src/utils/consts.ts:4](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L4)

***

## DATA\_ROW

```ts
const DATA_ROW: "data-rgRow" = 'data-rgRow';
```

### Defined in

[src/utils/consts.ts:5](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L5)

***

## DISABLED\_CLASS

```ts
const DISABLED_CLASS: "disabled" = 'disabled';
```

### Defined in

[src/utils/consts.ts:7](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L7)

***

## DRAGGABLE\_CLASS

```ts
const DRAGGABLE_CLASS: "revo-draggable" = 'revo-draggable';
```

### Defined in

[src/utils/consts.ts:16](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L16)

***

## DRAGG\_TEXT

```ts
const DRAGG_TEXT: "Draggable item" = 'Draggable item';
```

### Defined in

[src/utils/consts.ts:27](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L27)

***

## DRAG\_ICON\_CLASS

```ts
const DRAG_ICON_CLASS: "revo-drag-icon" = 'revo-drag-icon';
```

### Defined in

[src/utils/consts.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L15)

***

## EDIT\_INPUT\_WR

```ts
const EDIT_INPUT_WR: "edit-input-wrapper" = 'edit-input-wrapper';
```

### Defined in

[src/utils/consts.ts:25](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L25)

***

## FILTER\_BUTTON\_ACTIVE

```ts
const FILTER_BUTTON_ACTIVE: "active" = 'active';
```

### Defined in

[src/plugins/filter/filter.button.tsx:5](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L5)

***

## FILTER\_BUTTON\_CLASS

```ts
const FILTER_BUTTON_CLASS: "rv-filter" = 'rv-filter';
```

### Defined in

[src/plugins/filter/filter.button.tsx:4](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L4)

***

## FILTER\_CONFIG\_CHANGED\_EVENT

```ts
const FILTER_CONFIG_CHANGED_EVENT: "filterconfigchanged" = 'filterconfigchanged';
```

### Defined in

[src/plugins/filter/filter.plugin.tsx:35](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.plugin.tsx#L35)

***

## FILTER\_PROP

```ts
const FILTER_PROP: "hasFilter" = 'hasFilter';
```

### Defined in

[src/plugins/filter/filter.button.tsx:7](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L7)

***

## FILTER\_TRIMMED\_TYPE

```ts
const FILTER_TRIMMED_TYPE: "filter" = 'filter';
```

### Defined in

[src/plugins/filter/filter.plugin.tsx:34](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.plugin.tsx#L34)

***

## FILTE\_PANEL

```ts
const FILTE_PANEL: "revogr-filter-panel" = 'revogr-filter-panel';
```

### Defined in

[src/plugins/filter/filter.plugin.tsx:36](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.plugin.tsx#L36)

***

## FOCUS\_CLASS

```ts
const FOCUS_CLASS: "focused-cell" = 'focused-cell';
```

### Defined in

[src/utils/consts.ts:18](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L18)

***

## GRID\_INTERNALS

```ts
const GRID_INTERNALS: "__rvgr" = '__rvgr';
```

### Defined in

[src/utils/consts.ts:28](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L28)

***

## GROUPING\_ROW\_TYPE

```ts
const GROUPING_ROW_TYPE: DimensionRows = 'rgRow';
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L14)

***

## GROUP\_COLUMN\_PROP

```ts
const GROUP_COLUMN_PROP: "__rvgr-prop";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:10](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L10)

***

## GROUP\_DEPTH

```ts
const GROUP_DEPTH: "__rvgr-depth";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:4](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L4)

***

## GROUP\_EXPANDED

```ts
const GROUP_EXPANDED: "__rvgr-expanded";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:9](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L9)

***

## GROUP\_EXPAND\_BTN

```ts
const GROUP_EXPAND_BTN: "group-expand";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:12](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L12)

***

## GROUP\_EXPAND\_EVENT

```ts
const GROUP_EXPAND_EVENT: "groupexpandclick";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L13)

***

## GROUP\_ORIGINAL\_INDEX

```ts
const GROUP_ORIGINAL_INDEX: "__rvgr-original-index";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:11](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L11)

***

## HEADER\_ACTUAL\_ROW\_CLASS

```ts
const HEADER_ACTUAL_ROW_CLASS: "actual-rgRow" = 'actual-rgRow';
```

### Defined in

[src/utils/consts.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L13)

***

## HEADER\_CLASS

```ts
const HEADER_CLASS: "rgHeaderCell" = 'rgHeaderCell';
```

### Defined in

[src/utils/consts.ts:10](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L10)

***

## HEADER\_ROW\_CLASS

```ts
const HEADER_ROW_CLASS: "header-rgRow" = 'header-rgRow';
```

### Defined in

[src/utils/consts.ts:12](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L12)

***

## HEADER\_SORTABLE\_CLASS

```ts
const HEADER_SORTABLE_CLASS: "sortable" = 'sortable';
```

### Defined in

[src/utils/consts.ts:11](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L11)

***

## MIN\_COL\_SIZE

```ts
const MIN_COL_SIZE: 30 = 30;
```

### Defined in

[src/utils/consts.ts:1](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L1)

***

## MOBILE\_CLASS

```ts
const MOBILE_CLASS: "mobile-handler" = 'mobile-handler';
```

### Defined in

[src/utils/consts.ts:20](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L20)

***

## PSEUDO\_GROUP\_COLUMN

```ts
const PSEUDO_GROUP_COLUMN: "__rvgr-column";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:8](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L8)

***

## PSEUDO\_GROUP\_ITEM

```ts
const PSEUDO_GROUP_ITEM: "__rvgr-name";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:5](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L5)

***

## PSEUDO\_GROUP\_ITEM\_ID

```ts
const PSEUDO_GROUP_ITEM_ID: "__rvgr-id";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:6](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L6)

***

## PSEUDO\_GROUP\_ITEM\_VALUE

```ts
const PSEUDO_GROUP_ITEM_VALUE: "__rvgr-value";
```

### Defined in

[src/plugins/groupingRow/grouping.const.ts:7](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.const.ts#L7)

***

## RESIZE\_INTERVAL

```ts
const RESIZE_INTERVAL: 40 = 40;
```

### Defined in

[src/utils/consts.ts:2](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L2)

***

## REVOGRID\_EVENTS

```ts
const REVOGRID_EVENTS: Map<RevogridEvents, RevogridEvents>;
```

### Defined in

[src/types/events.ts:108](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/types/events.ts#L108)

***

## ROW\_FOCUSED\_CLASS

```ts
const ROW_FOCUSED_CLASS: "focused-rgRow" = 'focused-rgRow';
```

### Defined in

[src/utils/consts.ts:29](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L29)

***

## ROW\_HEADER\_TYPE

```ts
const ROW_HEADER_TYPE: "rowHeaders" = 'rowHeaders';
```

### Defined in

[src/utils/consts.ts:9](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L9)

***

## SELECTION\_BORDER\_CLASS

```ts
const SELECTION_BORDER_CLASS: "selection-border-range" = 'selection-border-range';
```

### Defined in

[src/utils/consts.ts:19](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L19)

***

## TMP\_SELECTION\_BG\_CLASS

```ts
const TMP_SELECTION_BG_CLASS: "temp-bg-range" = 'temp-bg-range';
```

### Defined in

[src/utils/consts.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/consts.ts#L21)

***

## TRASH\_BUTTON

```ts
const TRASH_BUTTON: "trash-button" = 'trash-button';
```

### Defined in

[src/plugins/filter/filter.button.tsx:9](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L9)

***

## columnTypes

```ts
const columnTypes: DimensionCols[];
```

### Defined in

[src/store/index.ts:9](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/index.ts#L9)

***

## filterCoreFunctionsIndexedByType

```ts
const filterCoreFunctionsIndexedByType: Record<FilterType, LogicFunction>;
```

### Defined in

[src/plugins/filter/filter.indexed.ts:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L14)

***

## filterNames

```ts
const filterNames: {
  begins: 'Begins with';
  contains: 'Contains';
  empty: 'Not set';
  eq: 'Equal';
  eqN: '=';
  gt: '>';
  gte: '>=';
  lt: '<';
  lte: '<=';
  neqN: '!=';
  none: 'None';
  notContains: 'Does not contain';
  notEmpty: 'Set';
  notEq: 'Not equal';
};
```

### Type declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `begins` | `string` | 'Begins with' | [src/plugins/filter/filter.indexed.ts:44](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L44) |
| `contains` | `string` | 'Contains' | [src/plugins/filter/filter.indexed.ts:45](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L45) |
| `empty` | `string` | 'Not set' | [src/plugins/filter/filter.indexed.ts:39](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L39) |
| `eq` | `string` | 'Equal' | [src/plugins/filter/filter.indexed.ts:42](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L42) |
| `eqN` | `string` | '=' | [src/plugins/filter/filter.indexed.ts:48](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L48) |
| `gt` | `string` | '\>' | [src/plugins/filter/filter.indexed.ts:50](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L50) |
| `gte` | `string` | '\>=' | [src/plugins/filter/filter.indexed.ts:51](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L51) |
| `lt` | `string` | '\<' | [src/plugins/filter/filter.indexed.ts:52](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L52) |
| `lte` | `string` | '\<=' | [src/plugins/filter/filter.indexed.ts:53](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L53) |
| `neqN` | `string` | '!=' | [src/plugins/filter/filter.indexed.ts:49](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L49) |
| `none` | `string` | 'None' | [src/plugins/filter/filter.indexed.ts:38](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L38) |
| `notContains` | `string` | 'Does not contain' | [src/plugins/filter/filter.indexed.ts:46](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L46) |
| `notEmpty` | `string` | 'Set' | [src/plugins/filter/filter.indexed.ts:40](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L40) |
| `notEq` | `string` | 'Not equal' | [src/plugins/filter/filter.indexed.ts:43](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L43) |

### Defined in

[src/plugins/filter/filter.indexed.ts:37](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L37)

***

## filterTypes

```ts
const filterTypes: Record<string, FilterType[]>;
```

### Defined in

[src/plugins/filter/filter.indexed.ts:32](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.indexed.ts#L32)

***

## rowTypes

```ts
const rowTypes: DimensionRows[];
```

### Defined in

[src/store/index.ts:8](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/index.ts#L8)

***

## AndOrButton()

```ts
function AndOrButton(__namedParameters: any): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `any` |

### Returns

`any`

### Defined in

[src/plugins/filter/filter.button.tsx:42](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L42)

***

## FilterButton()

```ts
function FilterButton(__namedParameters: Props): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `Props` |

### Returns

`any`

### Defined in

[src/plugins/filter/filter.button.tsx:14](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L14)

***

## GroupingRowRenderer()

```ts
function GroupingRowRenderer(props: RowGroupingProps): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`RowGroupingProps`](TypeAlias.RowGroupingProps.md) |

### Returns

`any`

### Defined in

[src/plugins/groupingRow/grouping.row.renderer.tsx:32](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.renderer.tsx#L32)

***

## SortingSign()

```ts
function SortingSign(__namedParameters: Props): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `Props` |

### Returns

`any`

### Defined in

[src/plugins/sorting/sorting.sign.tsx:7](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.sign.tsx#L7)

***

## TrashButton()

```ts
function TrashButton(): any
```

### Returns

`any`

### Defined in

[src/plugins/filter/filter.button.tsx:33](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L33)

***

## addMissingItems()

```ts
function addMissingItems<T>(
   firstItem: PositionItem, 
   realCount: number, 
   virtualSize: number, 
   existingCollection: T, 
   dimension: Pick<DimensionSettingsState, "originItemSize" | "sizes">): VirtualPositionItem[]
```

If partial replacement
this function adds items if viewport has some space left

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ItemsToUpdate`](TypeAlias.ItemsToUpdate.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `firstItem` | [`PositionItem`](Interface.PositionItem.md) |
| `realCount` | `number` |
| `virtualSize` | `number` |
| `existingCollection` | `T` |
| `dimension` | `Pick`\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md), `"originItemSize"` \| `"sizes"`\> |

### Returns

[`VirtualPositionItem`](Interface.VirtualPositionItem.md)[]

### Defined in

[src/store/vp/viewport.helpers.ts:123](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L123)

***

## applyMixins()

```ts
function applyMixins(derivedCtor: any, constructors: any[]): void
```

Type script mixins

### Parameters

| Parameter | Type |
| ------ | ------ |
| `derivedCtor` | `any` |
| `constructors` | `any`[] |

### Returns

`void`

### Defined in

[src/utils/index.ts:140](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L140)

***

## calculateDimensionData()

```ts
function calculateDimensionData(originItemSize: number, newSizes: ViewSettingSizeProp): {
  indexToItem: {};
  indexes: newIndexes;
  positionIndexToItem: {};
  positionIndexes: number[];
}
```

Pre-calculation
Dimension custom sizes for each cell
Keeps only changed sizes, skips origin size

### Parameters

| Parameter | Type |
| ------ | ------ |
| `originItemSize` | `number` |
| `newSizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) |

### Returns

```ts
{
  indexToItem: {};
  indexes: newIndexes;
  positionIndexToItem: {};
  positionIndexes: number[];
}
```

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `indexToItem` | \{\} | - | [src/store/dimension/dimension.helpers.ts:66](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.helpers.ts#L66) |
| `indexes` | `number`[] | newIndexes | [src/store/dimension/dimension.helpers.ts:63](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.helpers.ts#L63) |
| `positionIndexToItem` | \{\} | - | [src/store/dimension/dimension.helpers.ts:65](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.helpers.ts#L65) |
| `positionIndexes` | `number`[] | - | [src/store/dimension/dimension.helpers.ts:64](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.helpers.ts#L64) |

### Defined in

[src/store/dimension/dimension.helpers.ts:31](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.helpers.ts#L31)

***

## calculateRowHeaderSize()

```ts
function calculateRowHeaderSize(
   itemsLength: number, 
   rowHeaderColumn?: RowHeaders, 
   minWidth?: number): number
```

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `itemsLength` | `number` | `undefined` |
| `rowHeaderColumn`? | [`RowHeaders`](Interface.RowHeaders.md) | `undefined` |
| `minWidth`? | `number` | `50` |

### Returns

`number`

### Defined in

[src/utils/row-header-utils.ts:4](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/row-header-utils.ts#L4)

***

## cropCellToMax()

```ts
function cropCellToMax(cell: Cell, lastCell: Cell): Cell
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `cell` | [`Cell`](Interface.Cell.md) |
| `lastCell` | [`Cell`](Interface.Cell.md) |

### Returns

[`Cell`](Interface.Cell.md)

### Defined in

[src/store/selection/selection.helpers.ts:29](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.helpers.ts#L29)

***

## defaultCellCompare()

```ts
function defaultCellCompare(
   this: {
  column: ColumnRegular;
 }, 
   prop: ColumnProp, 
   a: DataType, 
   b: DataType): -1 | 0 | 1
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `object` |
| `this.column`? | [`ColumnRegular`](Interface.ColumnRegular.md) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) |
| `a` | [`DataType`](TypeAlias.DataType.md) |
| `b` | [`DataType`](TypeAlias.DataType.md) |

### Returns

`-1` \| `0` \| `1`

### Defined in

[src/plugins/sorting/sorting.func.ts:48](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.func.ts#L48)

***

## descCellCompare()

```ts
function descCellCompare(cmp: CellCompareFunc): (prop: ColumnProp, a: DataType, b: DataType) => number
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `cmp` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) |

### Returns

`Function`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) |
| `a` | [`DataType`](TypeAlias.DataType.md) |
| `b` | [`DataType`](TypeAlias.DataType.md) |

#### Returns

`number`

### Defined in

[src/plugins/sorting/sorting.func.ts:63](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.func.ts#L63)

***

## dispatch()

```ts
function dispatch<DispatchDetail>(
   target: null | EventTarget, 
   eventName: string, 
detail?: DispatchDetail): CustomEvent<DispatchDetail>
```

Dispatches a custom event to a specified target element.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DispatchDetail` | `any` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `null` \| `EventTarget` | The target element to dispatch the event to. |
| `eventName` | `string` | The name of the custom event. |
| `detail`? | `DispatchDetail` | Optional. The detail of the custom event. |

### Returns

`CustomEvent`\<`DispatchDetail`\>

The custom event that was dispatched.

### Defined in

[src/plugins/dispatcher.ts:9](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/dispatcher.ts#L9)

***

## dispatchByEvent()

```ts
function dispatchByEvent<DispatchDetail>(
   e: Pick<MouseEvent, "target" | "preventDefault">, 
   eventName: string, 
   detail?: DispatchDetail): CustomEvent
```

Dispatches a custom event based on an existing event object and prevents the default behavior of the original event.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DispatchDetail` | `any` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `e` | `Pick`\<`MouseEvent`, `"target"` \| `"preventDefault"`\> | The original event object containing the target and preventDefault method. |
| `eventName` | `string` | The name of the custom event. |
| `detail`? | `DispatchDetail` | Optional. The detail of the custom event. |

### Returns

`CustomEvent`

The custom event that was dispatched.

### Defined in

[src/plugins/dispatcher.ts:36](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/dispatcher.ts#L36)

***

## doCollapse()

```ts
function doCollapse(pIndex: number, source: DataType[]): {
  trimmed: Record<number, boolean>;
}
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `pIndex` | `number` |
| `source` | [`DataType`](TypeAlias.DataType.md)[] |

### Returns

```ts
{
  trimmed: Record<number, boolean>;
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `trimmed` | `Record`\<`number`, `boolean`\> | [src/plugins/groupingRow/grouping.row.expand.service.ts:24](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.expand.service.ts#L24) |

### Defined in

[src/plugins/groupingRow/grouping.row.expand.service.ts:6](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.expand.service.ts#L6)

***

## doExpand()

```ts
function doExpand(
   vIndex: number, 
   source: DataType[], 
   rowItemsIndexes: number[]): {
  items: number[];
  trimmed: Record<number, boolean>;
}
```

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vIndex` | `number` | virtual index, need to update item collection |
| `source` | [`DataType`](TypeAlias.DataType.md)[] | data source |
| `rowItemsIndexes` | `number`[] | rgRow indexes |

### Returns

```ts
{
  items: number[];
  trimmed: Record<number, boolean>;
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `items` | `number`[] | [src/plugins/groupingRow/grouping.row.expand.service.ts:73](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.expand.service.ts#L73) |
| `trimmed` | `Record`\<`number`, `boolean`\> | [src/plugins/groupingRow/grouping.row.expand.service.ts:72](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.expand.service.ts#L72) |

### Defined in

[src/plugins/groupingRow/grouping.row.expand.service.ts:34](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.expand.service.ts#L34)

***

## expandEvent()

```ts
function expandEvent(
   e: MouseEvent, 
   model: DataType, 
   virtualIndex: number): void
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `MouseEvent` |
| `model` | [`DataType`](TypeAlias.DataType.md) |
| `virtualIndex` | `number` |

### Returns

`void`

### Defined in

[src/plugins/groupingRow/grouping.row.renderer.tsx:20](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.renderer.tsx#L20)

***

## expandSvgIconVNode()

```ts
function expandSvgIconVNode(expanded: boolean): any
```

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `expanded` | `boolean` | `false` |

### Returns

`any`

### Defined in

[src/plugins/groupingRow/grouping.row.renderer.tsx:73](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.renderer.tsx#L73)

***

## findPositionInArray()

```ts
function findPositionInArray<T>(
   this: T[], 
   el: T, 
   compareFn: (el: T, el2: T) => number): number
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T`[] |
| `el` | `T` |
| `compareFn` | (`el`: `T`, `el2`: `T`) => `number` |

### Returns

`number`

### Defined in

[src/utils/index.ts:22](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L22)

***

## gatherGroup()

```ts
function gatherGroup<T>(
   res: T, 
   colData: ColumnGrouping<any>, 
   collection: T, 
   level: number): T
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ColumnCollection`](TypeAlias.ColumnCollection.md) |

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `res` | `T` | `undefined` |
| `colData` | [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`any`\> | `undefined` |
| `collection` | `T` | `undefined` |
| `level` | `number` | `0` |

### Returns

`T`

### Defined in

[src/utils/column.utils.ts:174](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L174)

***

## gatherGrouping()

```ts
function gatherGrouping(
   array: DataType[], 
   columnProps: ColumnProp[], 
   expanded: ExpandedOptions): {
  depth: groupingDepth;
  oldNewIndexMap: Record<number, number>;
  sourceWithGroups: DataType[];
  trimmed: Record<number, boolean>;
}
```

Gather data for grouping

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array` | [`DataType`](TypeAlias.DataType.md)[] | flat data array |
| `columnProps` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | ids of groups |
| `expanded` | [`ExpandedOptions`](TypeAlias.ExpandedOptions.md) | potentially expanded items if present |

### Returns

```ts
{
  depth: groupingDepth;
  oldNewIndexMap: Record<number, number>;
  sourceWithGroups: DataType[];
  trimmed: Record<number, boolean>;
}
```

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `depth` | `number` | groupingDepth | [src/plugins/groupingRow/grouping.service.ts:186](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L186) |
| `oldNewIndexMap` | `Record`\<`number`, `number`\> | - | [src/plugins/groupingRow/grouping.service.ts:188](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L188) |
| `sourceWithGroups` | [`DataType`](TypeAlias.DataType.md)[] | - | [src/plugins/groupingRow/grouping.service.ts:185](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L185) |
| `trimmed` | `Record`\<`number`, `boolean`\> | - | [src/plugins/groupingRow/grouping.service.ts:187](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L187) |

### Defined in

[src/plugins/groupingRow/grouping.service.ts:140](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L140)

***

## gatherTrimmedItems()

```ts
function gatherTrimmedItems(trimmedItems: Trimmed): TrimmedEntity
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `trimmedItems` | [`Trimmed`](TypeAlias.Trimmed.md) |

### Returns

[`TrimmedEntity`](TypeAlias.TrimmedEntity.md)

### Defined in

[src/store/dataSource/trimmed.plugin.ts:32](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/trimmed.plugin.ts#L32)

***

## getCellData()

```ts
function getCellData(val?: any): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `val`? | `any` |

### Returns

`any`

### Defined in

[src/utils/column.utils.ts:22](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L22)

***

## getCellDataParsed()

```ts
function getCellDataParsed(model: DataType, column: ColumnRegular): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`DataType`](TypeAlias.DataType.md) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) |

### Returns

`any`

### Defined in

[src/utils/column.utils.ts:39](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L39)

***

## getCellRaw()

```ts
function getCellRaw(model: DataType, column?: ColumnRegular): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`DataType`](TypeAlias.DataType.md) |
| `column`? | [`ColumnRegular`](Interface.ColumnRegular.md) |

### Returns

`any`

### Defined in

[src/utils/column.utils.ts:29](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L29)

***

## getColumnByProp()

```ts
function getColumnByProp(columns: ColumnData, prop: ColumnProp): ColumnRegular | undefined
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `columns` | [`ColumnData`](TypeAlias.ColumnData.md) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) |

### Returns

[`ColumnRegular`](Interface.ColumnRegular.md) \| `undefined`

### Defined in

[src/utils/column.utils.ts:239](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L239)

***

## getColumnSizes()

```ts
function getColumnSizes(cols: ColumnRegular[]): ViewSettingSizeProp
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `cols` | [`ColumnRegular`](Interface.ColumnRegular.md)[] |

### Returns

[`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md)

### Defined in

[src/utils/column.utils.ts:81](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L81)

***

## getColumnType()

```ts
function getColumnType(rgCol: ColumnRegular): DimensionCols
```

Get column type from column data

### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgCol` | [`ColumnRegular`](Interface.ColumnRegular.md) |

### Returns

[`DimensionCols`](TypeAlias.DimensionCols.md)

### Defined in

[src/utils/column.utils.ts:74](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L74)

***

## getColumns()

```ts
function getColumns(
   columns: ColumnData, 
   level: number, 
   types?: ColumnTypes): ColumnCollection
```

This function is used to create a collection of columns.

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `columns` | [`ColumnData`](TypeAlias.ColumnData.md) | `undefined` |
| `level` | `number` | `0` |
| `types`? | [`ColumnTypes`](TypeAlias.ColumnTypes.md) | `undefined` |

### Returns

[`ColumnCollection`](TypeAlias.ColumnCollection.md)

### Defined in

[src/utils/column.utils.ts:104](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L104)

***

## getComparer()

```ts
function getComparer(column: undefined | Partial<ColumnRegular>, order: Order): CellCompareFunc | undefined
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | `undefined` \| `Partial`\<[`ColumnRegular`](Interface.ColumnRegular.md)\> |
| `order` | [`Order`](TypeAlias.Order.md) |

### Returns

[`CellCompareFunc`](TypeAlias.CellCompareFunc.md) \| `undefined`

### Defined in

[src/plugins/sorting/sorting.func.ts:81](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.func.ts#L81)

***

## getExpanded()

```ts
function getExpanded(model: DataType): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`DataType`](TypeAlias.DataType.md) |

### Returns

`any`

### Defined in

[src/plugins/groupingRow/grouping.service.ts:54](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L54)

***

## getFirstItem()

```ts
function getFirstItem(s: ItemsToUpdate): VirtualPositionItem
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | [`ItemsToUpdate`](TypeAlias.ItemsToUpdate.md) |

### Returns

[`VirtualPositionItem`](Interface.VirtualPositionItem.md)

### Defined in

[src/store/vp/viewport.helpers.ts:340](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L340)

***

## getGroupingName()

```ts
function getGroupingName(rgRow?: DataType): any
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgRow`? | [`DataType`](TypeAlias.DataType.md) |

### Returns

`any`

### Defined in

[src/plugins/groupingRow/grouping.service.ts:192](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L192)

***

## getItemByIndex()

```ts
function getItemByIndex(dimension: Pick<DimensionIndexInput, "indexes" | "originItemSize" | "indexToItem">, index: number): PositionItem
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `dimension` | `Pick`\<[`DimensionIndexInput`](TypeAlias.DimensionIndexInput.md), `"indexes"` \| `"originItemSize"` \| `"indexToItem"`\> |
| `index` | `number` |

### Returns

[`PositionItem`](Interface.PositionItem.md)

### Defined in

[src/store/dimension/dimension.helpers.ts:109](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.helpers.ts#L109)

***

## getItemByPosition()

```ts
function getItemByPosition(__namedParameters: Pick<DimensionPosition, "indexes" | "positionIndexes" | "originItemSize" | "positionIndexToItem">, pos: number): PositionItem
```

Calculate item by position

### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `Pick`\<[`DimensionPosition`](TypeAlias.DimensionPosition.md), `"indexes"` \| `"positionIndexes"` \| `"originItemSize"` \| `"positionIndexToItem"`\> |
| `pos` | `number` |

### Returns

[`PositionItem`](Interface.PositionItem.md)

### Defined in

[src/store/dimension/dimension.helpers.ts:73](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dimension/dimension.helpers.ts#L73)

***

## getItems()

```ts
function getItems(opt: {
  firstItemIndex: number;
  firstItemStart: number;
  maxCount: number;
  maxSize: number;
  origSize: number;
  sizes: ViewSettingSizeProp;
 }, currentSize: number): VirtualPositionItem[]
```

Get wiewport items parameters
caching position and calculating items count in viewport

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `opt` | `object` | `undefined` |
| `opt.firstItemIndex` | `number` | `undefined` |
| `opt.firstItemStart` | `number` | `undefined` |
| `opt.maxCount` | `number` | `undefined` |
| `opt.maxSize` | `number` | `undefined` |
| `opt.origSize` | `number` | `undefined` |
| `opt.sizes`? | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | `undefined` |
| `currentSize` | `number` | `0` |

### Returns

[`VirtualPositionItem`](Interface.VirtualPositionItem.md)[]

### Defined in

[src/store/vp/viewport.helpers.ts:146](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L146)

***

## getLastItem()

```ts
function getLastItem(s: ItemsToUpdate): VirtualPositionItem
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | [`ItemsToUpdate`](TypeAlias.ItemsToUpdate.md) |

### Returns

[`VirtualPositionItem`](Interface.VirtualPositionItem.md)

### Defined in

[src/store/vp/viewport.helpers.ts:346](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L346)

***

## getLeftRelative()

```ts
function getLeftRelative(
   absoluteX: number, 
   gridPos: number, 
   offset: number): number
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `absoluteX` | `number` |
| `gridPos` | `number` |
| `offset` | `number` |

### Returns

`number`

### Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:231](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/moveColumn/column.drag.plugin.ts#L231)

***

## getNextOrder()

```ts
function getNextOrder(currentOrder: Order): Order
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `currentOrder` | [`Order`](TypeAlias.Order.md) |

### Returns

[`Order`](TypeAlias.Order.md)

### Defined in

[src/plugins/sorting/sorting.func.ts:69](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.func.ts#L69)

***

## getParsedGroup()

```ts
function getParsedGroup(id: string): null | any[]
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

### Returns

`null` \| `any`[]

### Defined in

[src/plugins/groupingRow/grouping.service.ts:223](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L223)

***

## getPhysical()

```ts
function getPhysical(store: Observable<DSourceState<any, any>>, virtualIndex: number): number
```

get physical index by virtual

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`any`, `any`\>\> | store to process |
| `virtualIndex` | `number` | - |

### Returns

`number`

### Defined in

[src/store/dataSource/data.store.ts:127](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L127)

***

## getRange()

```ts
function getRange(start?: null | Cell, end?: null | Cell): RangeArea | null
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `start`? | `null` \| [`Cell`](Interface.Cell.md) |
| `end`? | `null` \| [`Cell`](Interface.Cell.md) |

### Returns

[`RangeArea`](TypeAlias.RangeArea.md) \| `null`

### Defined in

[src/store/selection/selection.helpers.ts:44](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.helpers.ts#L44)

***

## getScrollbarSize()

```ts
function getScrollbarSize(document: Document): number
```

Calculate system scrollbar size

### Parameters

| Parameter | Type |
| ------ | ------ |
| `document` | `Document` |

### Returns

`number`

### Defined in

[src/utils/index.ts:87](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L87)

***

## getSource()

```ts
function getSource(
   source: DataType[], 
   items: number[], 
withoutGrouping: boolean): Required<SourceGather>
```

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `source` | [`DataType`](TypeAlias.DataType.md)[] | `undefined` |
| `items` | `number`[] | `undefined` |
| `withoutGrouping` | `boolean` | `false` |

### Returns

`Required`\<[`SourceGather`](TypeAlias.SourceGather.md)\>

### Defined in

[src/plugins/groupingRow/grouping.service.ts:21](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L21)

***

## getSourceItem()

```ts
function getSourceItem<T1, T2>(store: Observable<DSourceState<T1, T2>>, virtualIndex: number): T1
```

get mapped item from source

### Type Parameters

| Type Parameter |
| ------ |
| `T1` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `T2` *extends* [`GDimension`](TypeAlias.GDimension.md) |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T1`, `T2`\>\> | store to process |
| `virtualIndex` | `number` | virtual index to process |

### Returns

`T1`

### Defined in

[src/store/dataSource/data.store.ts:151](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L151)

***

## getSourceItemVirtualIndexByProp()

```ts
function getSourceItemVirtualIndexByProp(store: Observable<DSourceState<any, any>>, prop: ColumnProp): number
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`any`, `any`\>\> |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) |

### Returns

`number`

### Defined in

[src/store/dataSource/data.store.ts:220](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L220)

***

## getSourcePhysicalIndex()

```ts
function getSourcePhysicalIndex<T1, T2>(store: Observable<DSourceState<T1, T2>>, virtualIndex: number): number
```

Get physical index from virtual index

### Type Parameters

| Type Parameter |
| ------ |
| `T1` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `T2` *extends* [`GDimension`](TypeAlias.GDimension.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T1`, `T2`\>\> |
| `virtualIndex` | `number` |

### Returns

`number`

### Defined in

[src/store/dataSource/data.store.ts:161](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L161)

***

## getUpdatedItemsByPosition()

```ts
function getUpdatedItemsByPosition<T>(
   pos: number, 
   items: T, 
   realCount: number, 
   virtualSize: number, 
   dimension: DimensionDataViewport): ItemsToUpdate
```

Update items based on new scroll position
If viewport wasn't changed fully simple recombination of positions
Otherwise rebuild viewport items

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ItemsToUpdate`](TypeAlias.ItemsToUpdate.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `number` |
| `items` | `T` |
| `realCount` | `number` |
| `virtualSize` | `number` |
| `dimension` | [`DimensionDataViewport`](TypeAlias.DimensionDataViewport.md) |

### Returns

[`ItemsToUpdate`](TypeAlias.ItemsToUpdate.md)

### Defined in

[src/store/vp/viewport.helpers.ts:28](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L28)

***

## getVisibleSourceItem()

```ts
function getVisibleSourceItem(store: Observable<DSourceState<any, any>>): any[]
```

get all visible items

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`any`, `any`\>\> | store to process |

### Returns

`any`[]

### Defined in

[src/store/dataSource/data.store.ts:139](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L139)

***

## h()

### h(sel)

```ts
function h(sel: any): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:553

### h(sel, data)

```ts
function h(sel: Node, data: null | VNodeData): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `Node` |
| `data` | `null` \| `VNodeData` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:554

### h(sel, data)

```ts
function h(sel: any, data: null | VNodeData): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:555

### h(sel, text)

```ts
function h(sel: any, text: string): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `text` | `string` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:556

### h(sel, children)

```ts
function h(sel: any, children: (undefined | null | VNode)[]): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `children` | (`undefined` \| `null` \| [`VNode`](Interface.VNode.md))[] |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:557

### h(sel, data, text)

```ts
function h(
   sel: any, 
   data: null | VNodeData, 
   text: string): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |
| `text` | `string` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:558

### h(sel, data, children)

```ts
function h(
   sel: any, 
   data: null | VNodeData, 
   children: (undefined | null | VNode)[]): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |
| `children` | (`undefined` \| `null` \| [`VNode`](Interface.VNode.md))[] |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:559

### h(sel, data, children)

```ts
function h(
   sel: any, 
   data: null | VNodeData, 
   children: VNode): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |
| `children` | [`VNode`](Interface.VNode.md) |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:560

***

## isActiveRange()

```ts
function isActiveRange(
   pos: number, 
   realSize: number, 
   first?: PositionItem, 
   last?: PositionItem): boolean
```

Verify if position is in range of the PositionItem, start and end are included

### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `number` |
| `realSize` | `number` |
| `first`? | [`PositionItem`](Interface.PositionItem.md) |
| `last`? | [`PositionItem`](Interface.PositionItem.md) |

### Returns

`boolean`

### Defined in

[src/store/vp/viewport.helpers.ts:310](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L310)

***

## isActiveRangeOutsideLastItem()

```ts
function isActiveRangeOutsideLastItem(
   pos: number, 
   virtualSize: number, 
   firstItem?: PositionItem, 
   lastItem?: PositionItem): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `number` |
| `virtualSize` | `number` |
| `firstItem`? | [`PositionItem`](Interface.PositionItem.md) |
| `lastItem`? | [`PositionItem`](Interface.PositionItem.md) |

### Returns

`boolean`

### Defined in

[src/store/vp/viewport.helpers.ts:327](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L327)

***

## isAll()

```ts
function isAll(event: KeyboardEvent): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `KeyboardEvent` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:95](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L95)

***

## isClear()

```ts
function isClear(code: string): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:62](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L62)

***

## isColGrouping()

```ts
function isColGrouping(colData: ColumnRegular | ColumnGrouping<any>): colData is ColumnGrouping<any>
```

Check if column is grouping column

### Parameters

| Parameter | Type |
| ------ | ------ |
| `colData` | [`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`any`\> |

### Returns

`colData is ColumnGrouping<any>`

### Defined in

[src/utils/column.utils.ts:95](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/column.utils.ts#L95)

***

## isCopy()

```ts
function isCopy(event: KeyboardEvent): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `KeyboardEvent` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:83](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L83)

***

## isCtrlKey()

```ts
function isCtrlKey(code: number, platform: string): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `number` |
| `platform` | `string` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:41](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L41)

***

## isCtrlMetaKey()

```ts
function isCtrlMetaKey(code: codes): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `codes` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:53](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L53)

***

## isCut()

```ts
function isCut(event: KeyboardEvent): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `KeyboardEvent` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:77](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L77)

***

## isEnterKeyValue()

```ts
function isEnterKeyValue(key: string): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:73](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L73)

***

## isFilterBtn()

```ts
function isFilterBtn(e: HTMLElement): null | true | Element
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `HTMLElement` |

### Returns

`null` \| `true` \| `Element`

### Defined in

[src/plugins/filter/filter.button.tsx:46](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/filter/filter.button.tsx#L46)

***

## isGrouping()

```ts
function isGrouping(rgRow?: DataType): rgRow is GroupingItem
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgRow`? | [`DataType`](TypeAlias.DataType.md) |

### Returns

`rgRow is GroupingItem`

### Defined in

[src/plugins/groupingRow/grouping.service.ts:204](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L204)

***

## isGroupingColumn()

```ts
function isGroupingColumn(column?: ColumnRegular): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `column`? | [`ColumnRegular`](Interface.ColumnRegular.md) |

### Returns

`boolean`

### Defined in

[src/plugins/groupingRow/grouping.service.ts:208](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L208)

***

## isHiddenStore()

```ts
function isHiddenStore(pos: number): pos is -1
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `number` |

### Returns

`pos is -1`

### Defined in

[src/store/selection/selection.helpers.ts:4](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.helpers.ts#L4)

***

## isMetaKey()

```ts
function isMetaKey(code: number): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `number` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:5](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L5)

***

## isPaste()

```ts
function isPaste(event: KeyboardEvent): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `KeyboardEvent` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:89](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L89)

***

## isRangeSingleCell()

```ts
function isRangeSingleCell(a: RangeArea): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | [`RangeArea`](TypeAlias.RangeArea.md) |

### Returns

`boolean`

### Defined in

[src/store/selection/selection.helpers.ts:55](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.helpers.ts#L55)

***

## isRowType()

```ts
function isRowType(type: any): type is DimensionRows
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `any` |

### Returns

`type is DimensionRows`

### Defined in

[src/store/index.ts:15](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/index.ts#L15)

***

## isSameGroup()

```ts
function isSameGroup(
   currentGroup: any[], 
   currentModel: DataType, 
   nextModel: DataType): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `currentGroup` | `any`[] |
| `currentModel` | [`DataType`](TypeAlias.DataType.md) |
| `nextModel` | [`DataType`](TypeAlias.DataType.md) |

### Returns

`boolean`

### Defined in

[src/plugins/groupingRow/grouping.service.ts:233](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L233)

***

## isStretchPlugin()

```ts
function isStretchPlugin(plugin: PluginBaseComponent | StretchColumn): plugin is StretchColumn
```

Check plugin type is Stretch

### Parameters

| Parameter | Type |
| ------ | ------ |
| `plugin` | [`PluginBaseComponent`](Interface.PluginBaseComponent.md) \| [`StretchColumn`](README.md#stretchcolumn) |

### Returns

`plugin is StretchColumn`

### Defined in

[src/plugins/column.stretch.plugin.ts:136](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/column.stretch.plugin.ts#L136)

***

## isTab()

```ts
function isTab(code: string): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:66](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L66)

***

## isTabKeyValue()

```ts
function isTabKeyValue(key: string): boolean
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

### Returns

`boolean`

### Defined in

[src/utils/key.utils.ts:69](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/key.utils.ts#L69)

***

## measureEqualDepth()

```ts
function measureEqualDepth<T>(groupA: T[], groupB: T[]): number
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupA` | `T`[] |
| `groupB` | `T`[] |

### Returns

`number`

### Defined in

[src/plugins/groupingRow/grouping.service.ts:212](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.service.ts#L212)

***

## mergeSortedArray()

```ts
function mergeSortedArray<T>(
   arr1: T[], 
   arr2: T[], 
   compareFn: (el: T, el2: T) => boolean): T[]
```

Merge sorted array helper function

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `arr1` | `T`[] | `undefined` |
| `arr2` | `T`[] | `undefined` |
| `compareFn` | (`el`: `T`, `el2`: `T`) => `boolean` | `simpleCompare` |

### Returns

`T`[]

### Defined in

[src/utils/index.ts:60](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L60)

***

## nextCell()

```ts
function nextCell(cell: Cell, lastCell: Cell): Partial<Cell> | null
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `cell` | [`Cell`](Interface.Cell.md) |
| `lastCell` | [`Cell`](Interface.Cell.md) |

### Returns

`Partial`\<[`Cell`](Interface.Cell.md)\> \| `null`

### Defined in

[src/store/selection/selection.helpers.ts:8](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/selection/selection.helpers.ts#L8)

***

## proxyPlugin()

```ts
function proxyPlugin(store: Observable<State>): PluginSubscribe<State>
```

Proxy plugin for data source.

This plugin is used keep sortint in the data source, even when trimming is applied sorting has to be preserved.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<`State`\> |

### Returns

[`PluginSubscribe`](TypeAlias.PluginSubscribe.md)\<`State`\>

### Defined in

[src/store/dataSource/data.proxy.ts:16](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.proxy.ts#L16)

***

## pushSorted()

```ts
function pushSorted<T>(
   arr: T[], 
   el: T, 
   fn: (el: T, el2: T) => number): T[]
```

Sorted push

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `arr` | `T`[] |
| `el` | `T` |
| `fn` | (`el`: `T`, `el2`: `T`) => `number` |

### Returns

`T`[]

### Defined in

[src/utils/index.ts:47](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L47)

***

## range()

```ts
function range(size: number, startAt: number): number[]
```

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `size` | `number` | `undefined` |
| `startAt` | `number` | `0` |

### Returns

`number`[]

### Defined in

[src/utils/index.ts:12](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L12)

***

## recombineByOffset()

```ts
function recombineByOffset(offset: number, data: RecombineOffsetData): ItemsToUpdate | undefined
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | `number` |
| `data` | `RecombineOffsetData` |

### Returns

[`ItemsToUpdate`](TypeAlias.ItemsToUpdate.md) \| `undefined`

### Defined in

[src/store/vp/viewport.helpers.ts:189](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L189)

***

## scaleValue()

```ts
function scaleValue(
   value: number, 
   from: [number, number], 
   to: [number, number]): number
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `from` | [`number`, `number`] |
| `to` | [`number`, `number`] |

### Returns

`number`

### Defined in

[src/utils/index.ts:124](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L124)

***

## setItemSizes()

```ts
function setItemSizes(
   vpItems: VirtualPositionItem[], 
   initialIndex: number, 
   size: number, 
   lastCoordinate: number): VirtualPositionItem[]
```

Set items sizes from start index to end

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vpItems` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] |  |
| `initialIndex` | `number` | - |
| `size` | `number` |  |
| `lastCoordinate` | `number` |  |

### Returns

[`VirtualPositionItem`](Interface.VirtualPositionItem.md)[]

### Defined in

[src/store/vp/viewport.helpers.ts:358](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L358)

***

## setItems()

```ts
function setItems<T>(store: Observable<DSourceState<T, any>>, items: number[]): void
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`GDataType`](TypeAlias.GDataType.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `any`\>\> |
| `items` | `number`[] |

### Returns

`void`

### Defined in

[src/store/dataSource/data.store.ts:213](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L213)

***

## setSourceByPhysicalIndex()

```ts
function setSourceByPhysicalIndex<T>(
   store: Observable<DSourceState<T, any>>, 
   modelByIndex: Record<number, T>, 
   mutate: boolean): void
```

set item to source

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`GDataType`](TypeAlias.GDataType.md) |

### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `any`\>\> | `undefined` | store to process |
| `modelByIndex` | `Record`\<`number`, `T`\> | `undefined` | collection of rows with physical indexes to setup |
| `mutate` | `boolean` | `true` | if true, store will be mutated and whole viewport will be re-rendered |

### Returns

`void`

### Defined in

[src/store/dataSource/data.store.ts:199](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L199)

***

## setSourceByVirtualIndex()

```ts
function setSourceByVirtualIndex<T>(
   store: Observable<DSourceState<T, any>>, 
   modelByIndex: Record<number, undefined | T>, 
   mutate: boolean): void
```

Apply silently item/model/row value to data source

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`GDataType`](TypeAlias.GDataType.md) |

### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `any`\>\> | `undefined` | data source with changes |
| `modelByIndex` | `Record`\<`number`, `undefined` \| `T`\> | `undefined` | collection of rows/values with virtual indexes to setup/replace in store/data source |
| `mutate` | `boolean` | `true` | if true, store will be mutated and whole viewport will be re-rendered |

### Returns

`void`

### Defined in

[src/store/dataSource/data.store.ts:175](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/data.store.ts#L175)

***

## setStore()

```ts
function setStore<T>(store: ObservableMap<T>, data: Partial<T>): void
```

Sets the given data on the specified store.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`\<`string`, `any`\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`ObservableMap`](Interface.ObservableMap.md)\<`T`\> | The store to set data on. |
| `data` | `Partial`\<`T`\> | The data to set on the store. |

### Returns

`void`

### Defined in

[src/utils/store.utils.ts:13](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/store.utils.ts#L13)

***

## sortIndexByItems()

```ts
function sortIndexByItems(
   indexes: number[], 
   source: DataType[], 
   sortingFunc: SortingOrderFunction): number[]
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `indexes` | `number`[] |
| `source` | [`DataType`](TypeAlias.DataType.md)[] |
| `sortingFunc` | [`SortingOrderFunction`](TypeAlias.SortingOrderFunction.md) |

### Returns

`number`[]

### Defined in

[src/plugins/sorting/sorting.func.ts:6](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/sorting/sorting.func.ts#L6)

***

## timeout()

```ts
function timeout(delay: number): Promise<void>
```

Async timeout

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `delay` | `number` | `0` |

### Returns

`Promise`\<`void`\>

### Defined in

[src/utils/index.ts:131](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/utils/index.ts#L131)

***

## trimmedPlugin()

```ts
function trimmedPlugin<T>(store: Observable<DSourceState<T, any>>): PluginSubscribe<DSourceState<T, any>>
```

Hide items from main collection
But keep them in store

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`GDataType`](TypeAlias.GDataType.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `any`\>\> |

### Returns

[`PluginSubscribe`](TypeAlias.PluginSubscribe.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `any`\>\>

### Defined in

[src/store/dataSource/trimmed.plugin.ts:11](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/dataSource/trimmed.plugin.ts#L11)

***

## updateMissingAndRange()

```ts
function updateMissingAndRange(
   items: VirtualPositionItem[], 
   missing: VirtualPositionItem[], 
   range: Range): void
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] |
| `missing` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] |
| `range` | [`Range`](TypeAlias.Range.md) |

### Returns

`void`

### Defined in

[src/store/vp/viewport.helpers.ts:103](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/store/vp/viewport.helpers.ts#L103)

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Components](Namespace.Components.md) | - |
| [JSX](Namespace.JSX.md) | - |
| [h](Namespace.h.md) | The "h" namespace is used to import JSX types for elements and attributes. It is imported in order to avoid conflicting global JSX issues. |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ColumnAutoSizeMode](Enumeration.ColumnAutoSizeMode.md) | - |
| [codesLetter](Enumeration.codesLetter.md) | - |
| [keyValues](Enumeration.keyValues.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AllDimensionType](Interface.AllDimensionType.md) | Represents the mapping of dimension types to their corresponding dimension types. |
| [ApplyFocusEvent](Interface.ApplyFocusEvent.md) | Represents the event object that is emitted when applying focus. It includes information about the dimension type and focused cells. |
| [BeforeCellRenderEvent](Interface.BeforeCellRenderEvent.md) | Represents the event object that is emitted before cell rendering. It includes information about the dimension type, column, row, and model. |
| [BeforeRowRenderEvent](Interface.BeforeRowRenderEvent.md) | Represents the event object that is emitted before row rendering. It includes information about the dimension type, data item, item, and node. |
| [BeforeSaveDataDetails](Interface.BeforeSaveDataDetails.md) | Advanced column data schema model. Used for transpassing data to cell renderer and editor. |
| [CSVFormat](Interface.CSVFormat.md) | - |
| [Cell](Interface.Cell.md) | Cell coordinates |
| [CellTemplate](Interface.CellTemplate.md) | Interface for custom cell renderer. |
| [CellTemplateProp](Interface.CellTemplateProp.md) | Template property for each cell, extends the column data schema model. Additionally, it provides access to the providers injected into the template. |
| [ColumnDataSchemaModel](Interface.ColumnDataSchemaModel.md) | Advanced column data schema model. Used for transpassing data to cell renderer and editor. |
| [ColumnFilterConfig](Interface.ColumnFilterConfig.md) | Filter configuration for a column. This is the type of the `filter` property on a column. |
| [ColumnGroup](Interface.ColumnGroup.md) | Configuration for header inner template properties |
| [ColumnGrouping](Interface.ColumnGrouping.md) | `ColumnGrouping` type is used to define a grouping in a column. |
| [ColumnProperties](Interface.ColumnProperties.md) | Configuration for header inner template properties |
| [ColumnRegular](Interface.ColumnRegular.md) | ColumnRegular interface represents regular column definition. Regular column can be any column that is not a grouping column. |
| [ColumnTemplateProp](Interface.ColumnTemplateProp.md) | Column template property. Contains extended properties for column. |
| [ColumnType](Interface.ColumnType.md) | Interface for regular column definition. Regular column can be any column that is not a grouping column. |
| [CustomFilter](Interface.CustomFilter.md) | - |
| [DimensionCalc](Interface.DimensionCalc.md) | Object containing information about calculated dimensions. Used for both columns and rows. |
| [DimensionSettingsState](Interface.DimensionSettingsState.md) | Represents the settings state of a dimension. It extends the calculation properties of a dimension. It also includes the real size and origin item size of the dimension. |
| [DragStartEvent](Interface.DragStartEvent.md) | Represents the event object that is emitted when the drag operation starts. |
| [EditCellStore](Interface.EditCellStore.md) | Edit cell info for store |
| [EditorBase](Interface.EditorBase.md) | Editor interface |
| [EditorCtrConstructible](Interface.EditorCtrConstructible.md) | Editor component constructible class |
| [ElementScroll](Interface.ElementScroll.md) | - |
| [ExtraNodeFuncConfig](Interface.ExtraNodeFuncConfig.md) | `ExtraNodeFuncConfig` is a configuration object for `External nodes rendered in grid in HTMLRevogrExtraElement`. |
| [FilterCaptions](Interface.FilterCaptions.md) | - |
| [FilterData](Interface.FilterData.md) | - |
| [FilterItem](Interface.FilterItem.md) | - |
| [FilterLocalization](Interface.FilterLocalization.md) | - |
| [FocusAfterRenderEvent](Interface.FocusAfterRenderEvent.md) | Represents the mapping of dimension types to their corresponding dimension types. |
| [FocusRenderEvent](Interface.FocusRenderEvent.md) | Represents the event object that is emitted before focus rendering. It includes information about the dimension type and range area. |
| [Formatter](Interface.Formatter.md) | - |
| [FormatterOptions](Interface.FormatterOptions.md) | - |
| [FunctionalComponent](Interface.FunctionalComponent.md) | - |
| [Getter](Interface.Getter.md) | - |
| [Group](Interface.Group.md) | Configuration for header inner template properties |
| [Handlers](Interface.Handlers.md) | - |
| [HyperFunc](Interface.HyperFunc.md) | `HyperFunc` is a function that takes an HTML tag or component, and returns a JSX element. This function is used to create JSX elements in a context where JSX is not valid. |
| [LogicFunction](Interface.LogicFunction.md) | - |
| [MultiFilterItem](Interface.MultiFilterItem.md) | - |
| [ObservableMap](Interface.ObservableMap.md) | - |
| [OnChangeHandler](Interface.OnChangeHandler.md) | - |
| [OnHandler](Interface.OnHandler.md) | - |
| [PluginBaseComponent](Interface.PluginBaseComponent.md) | Interface for plugin components |
| [PluginServiceBase](Interface.PluginServiceBase.md) | - |
| [PositionItem](Interface.PositionItem.md) | - |
| [RangeClipboardCopyEventProps](Interface.RangeClipboardCopyEventProps.md) | Range copy. |
| [RangeClipboardPasteEvent](Interface.RangeClipboardPasteEvent.md) | Range paste. |
| [RevoGridCustomEvent](Interface.RevoGridCustomEvent.md) | - |
| [RevogrClipboardCustomEvent](Interface.RevogrClipboardCustomEvent.md) | - |
| [RevogrDataCustomEvent](Interface.RevogrDataCustomEvent.md) | - |
| [RevogrEditCustomEvent](Interface.RevogrEditCustomEvent.md) | - |
| [RevogrFilterPanelCustomEvent](Interface.RevogrFilterPanelCustomEvent.md) | - |
| [RevogrFocusCustomEvent](Interface.RevogrFocusCustomEvent.md) | - |
| [RevogrHeaderCustomEvent](Interface.RevogrHeaderCustomEvent.md) | - |
| [RevogrOrderEditorCustomEvent](Interface.RevogrOrderEditorCustomEvent.md) | - |
| [RevogrOverlaySelectionCustomEvent](Interface.RevogrOverlaySelectionCustomEvent.md) | - |
| [RevogrRowHeadersCustomEvent](Interface.RevogrRowHeadersCustomEvent.md) | - |
| [RevogrScrollVirtualCustomEvent](Interface.RevogrScrollVirtualCustomEvent.md) | - |
| [RevogrViewportScrollCustomEvent](Interface.RevogrViewportScrollCustomEvent.md) | - |
| [RowHeaders](Interface.RowHeaders.md) | ColumnRegular interface represents regular column definition. Regular column can be any column that is not a grouping column. |
| [Setter](Interface.Setter.md) | - |
| [ShowData](Interface.ShowData.md) | - |
| [Subscription](Interface.Subscription.md) | - |
| [ThemePackage](Interface.ThemePackage.md) | - |
| [VNode](Interface.VNode.md) | A virtual DOM node |
| [ViewportState](Interface.ViewportState.md) | `ViewportState` is an object that represents the state of a viewport. |
| [VirtualPositionItem](Interface.VirtualPositionItem.md) | `VirtualPositionItem` is an object that represents a virtual position item in the viewport. |
| [VnodeHtmlCustomEvent](Interface.VnodeHtmlCustomEvent.md) | - |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [AfterEditEvent](TypeAlias.AfterEditEvent.md) | - |
| [AfterRendererEvent](TypeAlias.AfterRendererEvent.md) | Represents the event object that is emitted after rendering. It includes information about the dimension type. |
| [AutoSizeColumnConfig](TypeAlias.AutoSizeColumnConfig.md) | - |
| [BeforeEdit](TypeAlias.BeforeEdit.md) | - |
| [BeforeRangeSaveDataDetails](TypeAlias.BeforeRangeSaveDataDetails.md) | - |
| [BeforeSourceSetEvent](TypeAlias.BeforeSourceSetEvent.md) | - |
| [CSVFormatter](TypeAlias.CSVFormatter.md) | - |
| [CellCompareFunc](TypeAlias.CellCompareFunc.md) | `CellCompareFunc` is a function that takes the column property to compare, the data of the first cell, and the data of the second cell. It returns a number indicating the relative order of the two cells. |
| [CellProps](TypeAlias.CellProps.md) | Additional properties applied to the cell. Contains properties for custom cell rendering. |
| [ChangedRange](TypeAlias.ChangedRange.md) | - |
| [ColIndex](TypeAlias.ColIndex.md) | - |
| [ColPropertiesFunc](TypeAlias.ColPropertiesFunc.md) | - |
| [ColSource](TypeAlias.ColSource.md) | - |
| [ColumnCollection](TypeAlias.ColumnCollection.md) | Column collection definition. Used to access indexed data for columns. Can be accessed via different events. |
| [ColumnData](TypeAlias.ColumnData.md) | - |
| [ColumnDragEventData](TypeAlias.ColumnDragEventData.md) | - |
| [ColumnGroupingCollection](TypeAlias.ColumnGroupingCollection.md) | - |
| [ColumnItems](TypeAlias.ColumnItems.md) | - |
| [ColumnProp](TypeAlias.ColumnProp.md) | - |
| [ColumnPropProp](TypeAlias.ColumnPropProp.md) | - |
| [ColumnSetEvent](TypeAlias.ColumnSetEvent.md) | - |
| [ColumnTemplateFunc](TypeAlias.ColumnTemplateFunc.md) | - |
| [ColumnTypes](TypeAlias.ColumnTypes.md) | Type that represents a collection of column types. The keys are the names of the column types and the values are the corresponding column type objects. |
| [DSourceState](TypeAlias.DSourceState.md) | - |
| [DataFormat](TypeAlias.DataFormat.md) | - |
| [DataInput](TypeAlias.DataInput.md) | - |
| [DataLookup](TypeAlias.DataLookup.md) | - |
| [DataSourceState](TypeAlias.DataSourceState.md) | - |
| [DataType](TypeAlias.DataType.md) | - |
| [DateEnum](TypeAlias.DateEnum.md) | - |
| [DimensionColPin](TypeAlias.DimensionColPin.md) | - |
| [DimensionCols](TypeAlias.DimensionCols.md) | - |
| [DimensionDataViewport](TypeAlias.DimensionDataViewport.md) | - |
| [DimensionIndexInput](TypeAlias.DimensionIndexInput.md) | - |
| [DimensionPosition](TypeAlias.DimensionPosition.md) | - |
| [DimensionRowPin](TypeAlias.DimensionRowPin.md) | - |
| [DimensionRows](TypeAlias.DimensionRows.md) | - |
| [DimensionSize](TypeAlias.DimensionSize.md) | - |
| [DimensionStoreCollection](TypeAlias.DimensionStoreCollection.md) | - |
| [DimensionStores](TypeAlias.DimensionStores.md) | Represents the mapping of dimension types to their corresponding observable stores. |
| [DimensionType](TypeAlias.DimensionType.md) | - |
| [DimensionTypeCol](TypeAlias.DimensionTypeCol.md) | - |
| [DimensionTypeRow](TypeAlias.DimensionTypeRow.md) | - |
| [DisposeEventHandler](TypeAlias.DisposeEventHandler.md) | - |
| [DragStartEventDetails](TypeAlias.DragStartEventDetails.md) | - |
| [EditCell](TypeAlias.EditCell.md) | Edit cell info for editor |
| [EditorCtr](TypeAlias.EditorCtr.md) | Editor component |
| [EditorCtrCallable](TypeAlias.EditorCtrCallable.md) | Editor component callable function |
| [Editors](TypeAlias.Editors.md) | Available editors in grid |
| [ElementsScroll](TypeAlias.ElementsScroll.md) | - |
| [EventData](TypeAlias.EventData.md) | - |
| [ExpandedOptions](TypeAlias.ExpandedOptions.md) | - |
| [ExportFormat](TypeAlias.ExportFormat.md) | - |
| [ExtraField](TypeAlias.ExtraField.md) | - |
| [FilterCollectionItem](TypeAlias.FilterCollectionItem.md) | - |
| [FilterType](TypeAlias.FilterType.md) | - |
| [FocusTemplateFunc](TypeAlias.FocusTemplateFunc.md) | `FocusTemplateFunc` is a function that takes an HTML tag or component, and returns a JSX element. This function is used to create JSX elements in a context where JSX is not valid. |
| [FocusedCells](TypeAlias.FocusedCells.md) | - |
| [FocusedData](TypeAlias.FocusedData.md) | - |
| [GDataType](TypeAlias.GDataType.md) | - |
| [GDimension](TypeAlias.GDimension.md) | - |
| [GetEventHandler](TypeAlias.GetEventHandler.md) | - |
| [GridPlugin](TypeAlias.GridPlugin.md) | - |
| [GroupLabelTemplateFunc](TypeAlias.GroupLabelTemplateFunc.md) | - |
| [GroupingOptions](TypeAlias.GroupingOptions.md) | - |
| [Groups](TypeAlias.Groups.md) | - |
| [HeaderProperties](TypeAlias.HeaderProperties.md) | - |
| [HeaderRenderProps](TypeAlias.HeaderRenderProps.md) | - |
| [InitialHeaderClick](TypeAlias.InitialHeaderClick.md) | `InitialHeaderClick` represents the information needed to handle a click event on the initial column header. |
| [ItemsToUpdate](TypeAlias.ItemsToUpdate.md) | - |
| [LogicFunctionExtraParam](TypeAlias.LogicFunctionExtraParam.md) | - |
| [LogicFunctionParam](TypeAlias.LogicFunctionParam.md) | - |
| [MultiDimensionType](TypeAlias.MultiDimensionType.md) | - |
| [Nullable](TypeAlias.Nullable.md) | - |
| [Observable](TypeAlias.Observable.md) | - |
| [OldNewRangeMapping](TypeAlias.OldNewRangeMapping.md) | - |
| [OnExpandEvent](TypeAlias.OnExpandEvent.md) | - |
| [Order](TypeAlias.Order.md) | - |
| [PluginProviders](TypeAlias.PluginProviders.md) | Services that are provided by the various plugins for use by the grid. Each plugin is responsible for providing a specific service, and the `PluginProviders` type collects all the services provided by the plugins. |
| [PluginSubscribe](TypeAlias.PluginSubscribe.md) | - |
| [PropertiesFunc](TypeAlias.PropertiesFunc.md) | - |
| [Providers](TypeAlias.Providers.md) | Providers for grid which are going to be injected into each cell template |
| [Range](TypeAlias.Range.md) | `Range` is an object that represents a range of values. |
| [RangeArea](TypeAlias.RangeArea.md) | - |
| [RangeAreaCss](TypeAlias.RangeAreaCss.md) | - |
| [ReadOnlyFormat](TypeAlias.ReadOnlyFormat.md) | The ReadOnlyFormat type is a boolean value or a function that takes ColumnDataSchemaModel as a parameter and returns a boolean value. |
| [ResetEventHandler](TypeAlias.ResetEventHandler.md) | - |
| [ResizeProps](TypeAlias.ResizeProps.md) | - |
| [RevogridEvents](TypeAlias.RevogridEvents.md) | - |
| [RowDefinition](TypeAlias.RowDefinition.md) | `RowDefinition` is a type that represents a row definition in the viewport. |
| [RowDrag](TypeAlias.RowDrag.md) | - |
| [RowDragStartDetails](TypeAlias.RowDragStartDetails.md) | - |
| [RowGroupingProps](TypeAlias.RowGroupingProps.md) | - |
| [RowIndex](TypeAlias.RowIndex.md) | - |
| [SaveDataDetails](TypeAlias.SaveDataDetails.md) | - |
| [ScrollCoordinateEvent](TypeAlias.ScrollCoordinateEvent.md) | Represents the event object that is emitted when scrolling occurs. The `type` property indicates the type of dimension (row or column) being scrolled. The `coordinate` property represents the current scroll position in that dimension. |
| [SelectionStoreState](TypeAlias.SelectionStoreState.md) | Represents the state of the selection store. It contains information about the selection range, temporary range, focused cell, editing cell, last focused cell, and next cell to focus. |
| [SetEventHandler](TypeAlias.SetEventHandler.md) | - |
| [SlotType](TypeAlias.SlotType.md) | - |
| [SortingConfig](TypeAlias.SortingConfig.md) | - |
| [SortingOrder](TypeAlias.SortingOrder.md) | - |
| [SortingOrderFunction](TypeAlias.SortingOrderFunction.md) | - |
| [SourceGather](TypeAlias.SourceGather.md) | - |
| [TempRange](TypeAlias.TempRange.md) | - |
| [Theme](TypeAlias.Theme.md) | - |
| [ThemeConfig](TypeAlias.ThemeConfig.md) | - |
| [Trimmed](TypeAlias.Trimmed.md) | - |
| [TrimmedEntity](TypeAlias.TrimmedEntity.md) | - |
| [VNodeResponse](TypeAlias.VNodeResponse.md) | `HyperFunc` is a function that takes an HTML tag or component, and returns a JSX element. This function is used to create JSX elements in a context where JSX is not valid. |
| [ViewPortResizeEvent](TypeAlias.ViewPortResizeEvent.md) | `ViewPortResizeEvent` is an object that contains information about a resize event in the viewport. |
| [ViewPortScrollEvent](TypeAlias.ViewPortScrollEvent.md) | `ViewPortScrollEvent` is an object that contains information about a scroll event in the viewport. |
| [ViewSettingSizeProp](TypeAlias.ViewSettingSizeProp.md) | `ViewSettingSizeProp` is a record that maps column or row indexes to their corresponding sizes. |
| [ViewportColumn](TypeAlias.ViewportColumn.md) | - |
| [ViewportData](TypeAlias.ViewportData.md) | - |
| [ViewportProperties](TypeAlias.ViewportProperties.md) | - |
| [ViewportProps](TypeAlias.ViewportProps.md) | - |
| [ViewportStateItems](TypeAlias.ViewportStateItems.md) | `ViewportStateItems` is an object that represents the items in a viewport along with their corresponding range. |
| [ViewportStoreCollection](TypeAlias.ViewportStoreCollection.md) | - |
| [ViewportStores](TypeAlias.ViewportStores.md) | Represents the mapping of dimension types to their corresponding observable stores for the viewport. |
| [WatchConfig](TypeAlias.WatchConfig.md) | - |
