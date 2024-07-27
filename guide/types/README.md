# @revolist/revogrid

## BasePlugin

Base layer for plugins
Provide minimal starting core for plugins to work
Extend this class to create plugin

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

[src/plugins/base.plugin.ts:12](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L12)

### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `providers` | `public` | [`PluginProviders`](TypeAlias.PluginProviders.md) | `undefined` | [src/plugins/base.plugin.ts:12](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L12) |
| `revogrid` | `public` | `HTMLRevoGridElement` | `undefined` | [src/plugins/base.plugin.ts:12](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L12) |
| `subscriptions` | `readonly` | `Record`\<`string`, (...`args`: `any`[]) => `void`\> | `{}` | [src/plugins/base.plugin.ts:11](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L11) |

### Methods

#### addEventListener()

```ts
addEventListener(eventName: string, callback: (e: CustomEvent<any>) => void): void
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick') |
| `callback` | (`e`: `CustomEvent`\<`any`\>) => `void` | callback function for event |

##### Returns

`void`

##### Defined in

[src/plugins/base.plugin.ts:18](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L18)

***

#### clearSubscriptions()

```ts
clearSubscriptions(): void
```

Clear all subscriptions

##### Returns

`void`

##### Defined in

[src/plugins/base.plugin.ts:85](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L85)

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

[src/plugins/base.plugin.ts:94](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L94)

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

[src/plugins/base.plugin.ts:76](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L76)

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

[src/plugins/base.plugin.ts:67](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L67)

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
| `immediate` | `Partial`\<`WatchConfig`\> | trigger callback immediately with current value |

##### Returns

`void`

##### Defined in

[src/plugins/base.plugin.ts:34](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/base.plugin.ts#L34)

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

[src/store/dataSource/data.store.ts:44](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L44)

### Accessors

#### store

```ts
get store(): Observable<DSourceState<T, ST>>
```

##### Returns

[`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `ST`\>\>

##### Defined in

[src/store/dataSource/data.store.ts:41](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L41)

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

[src/store/dataSource/data.store.ts:99](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L99)

***

#### refresh()

```ts
refresh(): void
```

##### Returns

`void`

##### Defined in

[src/store/dataSource/data.store.ts:113](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L113)

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

[src/store/dataSource/data.store.ts:106](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L106)

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
| `grouping.customRenderer`? | `GroupLabelTemplateFunc` | `undefined` | - |
| `grouping.depth`? | `number` | `undefined` | - |
| `grouping.groups`? | [`Groups`](TypeAlias.Groups.md) | `undefined` | - |
| `silent`? | `boolean` | `false` | - |

##### Returns

`void`

##### Defined in

[src/store/dataSource/data.store.ts:65](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L65)

***

## DimensionStore

### Constructors

#### new DimensionStore()

```ts
new DimensionStore(): DimensionStore
```

##### Returns

[`DimensionStore`](README.md#dimensionstore)

##### Defined in

[src/store/dimension/dimension.store.ts:111](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.store.ts#L111)

### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `store` | `readonly` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | [src/store/dimension/dimension.store.ts:110](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.store.ts#L110) |

### Methods

#### dispose()

```ts
dispose(): void
```

##### Returns

`void`

##### Defined in

[src/store/dimension/dimension.store.ts:131](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.store.ts#L131)

***

#### drop()

```ts
drop(): void
```

##### Returns

`void`

##### Defined in

[src/store/dimension/dimension.store.ts:139](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.store.ts#L139)

***

#### getCurrentState()

```ts
getCurrentState(): DimensionSettingsState
```

##### Returns

[`DimensionSettingsState`](Interface.DimensionSettingsState.md)

##### Defined in

[src/store/dimension/dimension.store.ts:117](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.store.ts#L117)

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

[src/store/dimension/dimension.store.ts:148](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.store.ts#L148)

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

[src/store/dimension/dimension.store.ts:135](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.store.ts#L135)

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

[src/store/selection/selection.store.ts:25](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L25)

### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `store` | `readonly` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | [src/store/selection/selection.store.ts:23](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L23) |

### Methods

#### clearFocus()

```ts
clearFocus(): void
```

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:38](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L38)

***

#### clearTemp()

```ts
clearTemp(): void
```

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:63](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L63)

***

#### dispose()

```ts
dispose(): void
```

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:90](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L90)

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

[src/store/selection/selection.store.ts:34](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L34)

***

#### setEdit()

```ts
setEdit(val: string | boolean): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `val` | `string` \| `boolean` |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:79](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L79)

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

[src/store/selection/selection.store.ts:42](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L42)

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

[src/store/selection/selection.store.ts:75](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L75)

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

[src/store/selection/selection.store.ts:55](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L55)

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

[src/store/selection/selection.store.ts:71](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L71)

***

#### setRangeArea()

```ts
setRangeArea(range: RangeArea): void
```

Can be applied from selection change or from simple keyboard change clicks

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:68](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L68)

***

#### setTempArea()

```ts
setTempArea(range: TempRange): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `range` | [`TempRange`](TypeAlias.TempRange.md) |

##### Returns

`void`

##### Defined in

[src/store/selection/selection.store.ts:59](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.store.ts#L59)

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

[src/store/vp/viewport.store.ts:58](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L58)

### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `store` | `readonly` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | [src/store/vp/viewport.store.ts:47](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L47) |
| `type` | `readonly` | [`MultiDimensionType`](TypeAlias.MultiDimensionType.md) | [src/store/vp/viewport.store.ts:58](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L58) |

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

[src/store/vp/viewport.store.ts:52](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L52)

### Methods

#### clearItems()

```ts
clearItems(): void
```

##### Returns

`void`

##### Defined in

[src/store/vp/viewport.store.ts:255](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L255)

***

#### getItems()

```ts
getItems(): Pick<ViewportStateItems, "items" | "end" | "start">
```

##### Returns

`Pick`\<[`ViewportStateItems`](TypeAlias.ViewportStateItems.md), `"items"` \| `"end"` \| `"start"`\>

##### Defined in

[src/store/vp/viewport.store.ts:243](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L243)

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

[src/store/vp/viewport.store.ts:225](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L225)

***

#### setViewPortCoordinate()

```ts
setViewPortCoordinate(position: number, dimension: DimensionDataViewport): void
```

Render viewport based on coordinate
It's the main method for draw

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `number` |
| `dimension` | [`DimensionDataViewport`](TypeAlias.DimensionDataViewport.md) |

##### Returns

`void`

##### Defined in

[src/store/vp/viewport.store.ts:70](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L70)

***

#### setViewPortDimensionSizes()

```ts
setViewPortDimensionSizes(sizes: ViewSettingSizeProp, dropToOriginalSize?: number): void
```

Update viewport sizes for existing items
This method is generating new item positions based on custom sizes and original sizes

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | custom sizes for each item |
| `dropToOriginalSize`? | `number` | drop to original size if requested |

##### Returns

`void`

##### Defined in

[src/store/vp/viewport.store.ts:168](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L168)

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

[src/store/vp/viewport.store.ts:251](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.store.ts#L251)

***

## columnTypes

```ts
const columnTypes: DimensionCols[];
```

### Defined in

[src/store/index.ts:9](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/index.ts#L9)

***

## rowTypes

```ts
const rowTypes: DimensionRows[];
```

### Defined in

[src/store/index.ts:8](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/index.ts#L8)

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
| `T` *extends* `ItemsToUpdate` |

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

[src/store/vp/viewport.helpers.ts:123](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L123)

***

## calculateDimensionData()

```ts
function calculateDimensionData(originItemSize: number, newSizes: ViewSettingSizeProp): {
  indexToItem: {};
  indexes: newIndexes;
  positionIndexToItem: {};
  positionIndexes: number[];
  sizes: {};
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
  sizes: {};
}
```

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `indexToItem` | \{\} | - | [src/store/dimension/dimension.helpers.ts:78](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L78) |
| `indexes` | `number`[] | newIndexes | [src/store/dimension/dimension.helpers.ts:75](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L75) |
| `positionIndexToItem` | \{\} | - | [src/store/dimension/dimension.helpers.ts:77](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L77) |
| `positionIndexes` | `number`[] | - | [src/store/dimension/dimension.helpers.ts:76](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L76) |
| `sizes` | \{\} | - | [src/store/dimension/dimension.helpers.ts:79](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L79) |

### Defined in

[src/store/dimension/dimension.helpers.ts:33](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L33)

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

[src/store/selection/selection.helpers.ts:29](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.helpers.ts#L29)

***

## dispatch()

```ts
function dispatch<DispatchDetail>(
   target: EventTarget, 
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
| `target` | `EventTarget` | The target element to dispatch the event to. |
| `eventName` | `string` | The name of the custom event. |
| `detail`? | `DispatchDetail` | Optional. The detail of the custom event. |

### Returns

`CustomEvent`\<`DispatchDetail`\>

The custom event that was dispatched.

### Defined in

[src/plugins/dispatcher.ts:9](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/dispatcher.ts#L9)

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

[src/plugins/dispatcher.ts:36](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/plugins/dispatcher.ts#L36)

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

[src/store/dataSource/trimmed.plugin.ts:32](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/trimmed.plugin.ts#L32)

***

## getFirstItem()

```ts
function getFirstItem(s: ItemsToUpdate): VirtualPositionItem | undefined
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `ItemsToUpdate` |

### Returns

[`VirtualPositionItem`](Interface.VirtualPositionItem.md) \| `undefined`

### Defined in

[src/store/vp/viewport.helpers.ts:338](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L338)

***

## getItemByIndex()

```ts
function getItemByIndex(dimension: DimensionIndexInput, index: number): PositionItem
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `dimension` | [`DimensionIndexInput`](TypeAlias.DimensionIndexInput.md) |
| `index` | `number` |

### Returns

[`PositionItem`](Interface.PositionItem.md)

### Defined in

[src/store/dimension/dimension.helpers.ts:122](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L122)

***

## getItemByPosition()

```ts
function getItemByPosition(__namedParameters: DimensionPosition, pos: number): PositionItem
```

Calculate item by position

### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`DimensionPosition`](TypeAlias.DimensionPosition.md) |
| `pos` | `number` |

### Returns

[`PositionItem`](Interface.PositionItem.md)

### Defined in

[src/store/dimension/dimension.helpers.ts:86](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dimension/dimension.helpers.ts#L86)

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

[src/store/vp/viewport.helpers.ts:146](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L146)

***

## getLastItem()

```ts
function getLastItem(s: ItemsToUpdate): VirtualPositionItem
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `ItemsToUpdate` |

### Returns

[`VirtualPositionItem`](Interface.VirtualPositionItem.md)

### Defined in

[src/store/vp/viewport.helpers.ts:344](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L344)

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

[src/store/dataSource/data.store.ts:122](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L122)

***

## getRange()

```ts
function getRange(start?: Cell, end?: Cell): RangeArea | null
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `start`? | [`Cell`](Interface.Cell.md) |
| `end`? | [`Cell`](Interface.Cell.md) |

### Returns

[`RangeArea`](TypeAlias.RangeArea.md) \| `null`

### Defined in

[src/store/selection/selection.helpers.ts:47](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.helpers.ts#L47)

***

## getSourceItem()

```ts
function getSourceItem(store: Observable<DSourceState<any, any>>, virtualIndex: number): any
```

get mapped item from source

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`any`, `any`\>\> | store to process |
| `virtualIndex` | `number` | virtual index to process |

### Returns

`any`

### Defined in

[src/store/dataSource/data.store.ts:146](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L146)

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

[src/store/dataSource/data.store.ts:205](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L205)

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
| `T` *extends* `ItemsToUpdate` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `number` |
| `items` | `T` |
| `realCount` | `number` |
| `virtualSize` | `number` |
| `dimension` | [`DimensionDataViewport`](TypeAlias.DimensionDataViewport.md) |

### Returns

`ItemsToUpdate`

### Defined in

[src/store/vp/viewport.helpers.ts:28](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L28)

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

[src/store/dataSource/data.store.ts:134](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L134)

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

[src/store/vp/viewport.helpers.ts:308](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L308)

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

[src/store/vp/viewport.helpers.ts:325](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L325)

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

[src/store/selection/selection.helpers.ts:4](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.helpers.ts#L4)

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

[src/store/selection/selection.helpers.ts:58](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.helpers.ts#L58)

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

[src/store/index.ts:15](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/index.ts#L15)

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

[src/store/selection/selection.helpers.ts:8](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/selection/selection.helpers.ts#L8)

***

## proxyPlugin()

```ts
function proxyPlugin(store: Observable<State>): PluginSubscribe<State>
```

All items
Used as proxy for sorting
Keep order but do not modify final source

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<`State`\> |

### Returns

[`PluginSubscribe`](TypeAlias.PluginSubscribe.md)\<`State`\>

### Defined in

[src/store/dataSource/data.proxy.ts:11](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.proxy.ts#L11)

***

## recombineByOffset()

```ts
function recombineByOffset(offset: number, data: RecombineOffsetData): ItemsToUpdate | null
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | `number` |
| `data` | `RecombineOffsetData` |

### Returns

`ItemsToUpdate` \| `null`

### Defined in

[src/store/vp/viewport.helpers.ts:189](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L189)

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

[src/store/vp/viewport.helpers.ts:356](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L356)

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

[src/store/dataSource/data.store.ts:198](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L198)

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

[src/store/dataSource/data.store.ts:184](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L184)

***

## setSourceByVirtualIndex()

```ts
function setSourceByVirtualIndex<T>(
   store: Observable<DSourceState<T, any>>, 
   modelByIndex: Record<number, T>, 
   mutate: boolean): void
```

Apple item/model/row value to data source

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`GDataType`](TypeAlias.GDataType.md) |

### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<`T`, `any`\>\> | `undefined` | data source with changes |
| `modelByIndex` | `Record`\<`number`, `T`\> | `undefined` | collection of rows/values with virtual indexes to setup/replace in store/data source |
| `mutate` | `boolean` | `true` | if true, store will be mutated and whole viewport will be re-rendered |

### Returns

`void`

### Defined in

[src/store/dataSource/data.store.ts:161](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/data.store.ts#L161)

***

## setStore()

```ts
function setStore<T>(store: Observable<T>, data: Partial<T>): void
```

Set stores data

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \{\} |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Observable`](TypeAlias.Observable.md)\<`T`\> |
| `data` | `Partial`\<`T`\> |

### Returns

`void`

### Defined in

[src/utils/store.utils.ts:8](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/utils/store.utils.ts#L8)

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

[src/store/dataSource/trimmed.plugin.ts:11](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/dataSource/trimmed.plugin.ts#L11)

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

[src/store/vp/viewport.helpers.ts:103](https://github.com/revolist/revogrid/blob/aad859c5867a15f34f8919817adea85dcff4ee63/src/store/vp/viewport.helpers.ts#L103)

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Components](Namespace.Components.md) | - |
| [JSX](Namespace.JSX.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AllDimensionType](Interface.AllDimensionType.md) | Represents the mapping of dimension types to their corresponding dimension types. |
| [ApplyFocusEvent](Interface.ApplyFocusEvent.md) | Represents the event object that is emitted when applying focus. It includes information about the dimension type and focused cells. |
| [BeforeCellRenderEvent](Interface.BeforeCellRenderEvent.md) | Represents the event object that is emitted before cell rendering. It includes information about the dimension type, column, row, and model. |
| [BeforeRowRenderEvent](Interface.BeforeRowRenderEvent.md) | Represents the event object that is emitted before row rendering. It includes information about the dimension type, data item, item, and node. |
| [Cell](Interface.Cell.md) | Cell coordinates |
| [CellTemplate](Interface.CellTemplate.md) | - |
| [CellTemplateProp](Interface.CellTemplateProp.md) | Template property for each cell, extends the column data schema model. Additionally, it provides access to the providers injected into the template. |
| [ColumnProperties](Interface.ColumnProperties.md) | Configuration for header inner template properties |
| [ColumnRegular](Interface.ColumnRegular.md) | ColumnRegular interface represents regular column definition. Regular column can be any column that is not a grouping column. |
| [ColumnTemplateProp](Interface.ColumnTemplateProp.md) | Column template property. Contains extended properties for column. |
| [ColumnType](Interface.ColumnType.md) | Interface for regular column definition. Regular column can be any column that is not a grouping column. |
| [DimensionCalc](Interface.DimensionCalc.md) | Object containing information about calculated dimensions. Used for both columns and rows. |
| [DimensionSettingsState](Interface.DimensionSettingsState.md) | Represents the settings state of a dimension. It extends the calculation properties of a dimension. It also includes the real size and origin item size of the dimension. |
| [DragStartEvent](Interface.DragStartEvent.md) | Represents the event object that is emitted when the drag operation starts. |
| [EditCellStore](Interface.EditCellStore.md) | Edit cell info for store |
| [EditorBase](Interface.EditorBase.md) | Editor interface |
| [EditorCtrConstructible](Interface.EditorCtrConstructible.md) | Editor component constructible class |
| [ElementScroll](Interface.ElementScroll.md) | - |
| [FocusRenderEvent](Interface.FocusRenderEvent.md) | Represents the event object that is emitted before focus rendering. It includes information about the dimension type and range area. |
| [Group](Interface.Group.md) | Configuration for header inner template properties |
| [HyperFunc](Interface.HyperFunc.md) | - |
| [PluginBaseComponent](Interface.PluginBaseComponent.md) | Interface for plugin components |
| [PositionItem](Interface.PositionItem.md) | - |
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
| [BeforeSaveDataDetails](TypeAlias.BeforeSaveDataDetails.md) | - |
| [CellCompareFunc](TypeAlias.CellCompareFunc.md) | `CellCompareFunc` is a function that takes the column property to compare, the data of the first cell, and the data of the second cell. It returns a number indicating the relative order of the two cells. |
| [CellProp](TypeAlias.CellProp.md) | - |
| [CellProps](TypeAlias.CellProps.md) | Additional properties applied to the cell. Contains style object where key is CSS property and value is CSS property value. Contains class object where key is CSS class and value is boolean flag indicating if class should be applied. Contains additional properties for custom cell rendering. |
| [ChangedRange](TypeAlias.ChangedRange.md) | - |
| [ColIndex](TypeAlias.ColIndex.md) | - |
| [ColPropertiesFunc](TypeAlias.ColPropertiesFunc.md) | - |
| [ColumnCollection](TypeAlias.ColumnCollection.md) | - |
| [ColumnData](TypeAlias.ColumnData.md) | - |
| [ColumnDataSchemaModel](TypeAlias.ColumnDataSchemaModel.md) | Advanced column data schema model. Used for transpassing data to cell renderer and editor. |
| [ColumnGrouping](TypeAlias.ColumnGrouping.md) | `ColumnGrouping` type is used to define a grouping in a column. |
| [ColumnProp](TypeAlias.ColumnProp.md) | - |
| [ColumnPropProp](TypeAlias.ColumnPropProp.md) | - |
| [ColumnTemplateFunc](TypeAlias.ColumnTemplateFunc.md) | - |
| [ColumnTypes](TypeAlias.ColumnTypes.md) | Type that represents a collection of column types. The keys are the names of the column types and the values are the corresponding column type objects. |
| [DSourceState](TypeAlias.DSourceState.md) | - |
| [DataFormat](TypeAlias.DataFormat.md) | - |
| [DataInput](TypeAlias.DataInput.md) | - |
| [DataLookup](TypeAlias.DataLookup.md) | - |
| [DataSourceState](TypeAlias.DataSourceState.md) | - |
| [DataType](TypeAlias.DataType.md) | - |
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
| [EditCell](TypeAlias.EditCell.md) | Edit cell info for editor |
| [EditorCtr](TypeAlias.EditorCtr.md) | Editor component |
| [EditorCtrCallable](TypeAlias.EditorCtrCallable.md) | Editor component callable function |
| [Editors](TypeAlias.Editors.md) | Available editors in grid |
| [ElementsScroll](TypeAlias.ElementsScroll.md) | - |
| [FilterCaptions](TypeAlias.FilterCaptions.md) | - |
| [FilterCollection](TypeAlias.FilterCollection.md) | - |
| [FocusTemplateFunc](TypeAlias.FocusTemplateFunc.md) | `FocusTemplateFunc` is a function that takes an HTML tag or component, and returns a JSX element. This function is used to create JSX elements in a context where JSX is not valid. |
| [FocusedCells](TypeAlias.FocusedCells.md) | - |
| [FocusedData](TypeAlias.FocusedData.md) | - |
| [GDataType](TypeAlias.GDataType.md) | - |
| [GDimension](TypeAlias.GDimension.md) | - |
| [GroupingOptions](TypeAlias.GroupingOptions.md) | - |
| [Groups](TypeAlias.Groups.md) | - |
| [HeaderProperties](TypeAlias.HeaderProperties.md) | - |
| [InitialHeaderClick](TypeAlias.InitialHeaderClick.md) | `InitialHeaderClick` represents the information needed to handle a click event on the initial column header. |
| [LogicFunction](TypeAlias.LogicFunction.md) | - |
| [MultiDimensionType](TypeAlias.MultiDimensionType.md) | - |
| [MultiFilterItem](TypeAlias.MultiFilterItem.md) | - |
| [Observable](TypeAlias.Observable.md) | - |
| [OldNewRangeMapping](TypeAlias.OldNewRangeMapping.md) | - |
| [Order](TypeAlias.Order.md) | - |
| [PluginProviders](TypeAlias.PluginProviders.md) | Services that are provided by the various plugins for use by the grid. Each plugin is responsible for providing a specific service, and the `PluginProviders` type collects all the services provided by the plugins. |
| [PluginSubscribe](TypeAlias.PluginSubscribe.md) | - |
| [PropertiesFunc](TypeAlias.PropertiesFunc.md) | - |
| [Providers](TypeAlias.Providers.md) | Providers for grid which are going to be injected into each cell template |
| [Range](TypeAlias.Range.md) | `Range` is an object that represents a range of values. |
| [RangeArea](TypeAlias.RangeArea.md) | - |
| [RangeAreaCss](TypeAlias.RangeAreaCss.md) | - |
| [ReadOnlyFormat](TypeAlias.ReadOnlyFormat.md) | The ReadOnlyFormat type is a boolean value or a function that takes ColumnDataSchemaModel as a parameter and returns a boolean value. |
| [ResizeProps](TypeAlias.ResizeProps.md) | - |
| [RowDefinition](TypeAlias.RowDefinition.md) | `RowDefinition` is a type that represents a row definition in the viewport. |
| [RowDrag](TypeAlias.RowDrag.md) | - |
| [RowIndex](TypeAlias.RowIndex.md) | - |
| [SaveData](TypeAlias.SaveData.md) | - |
| [SaveDataDetails](TypeAlias.SaveDataDetails.md) | - |
| [ScrollCoordinateEvent](TypeAlias.ScrollCoordinateEvent.md) | Represents the event object that is emitted when scrolling occurs. The `type` property indicates the type of dimension (row or column) being scrolled. The `coordinate` property represents the current scroll position in that dimension. |
| [SelectionStoreState](TypeAlias.SelectionStoreState.md) | Represents the state of the selection store. It contains information about the selection range, temporary range, focused cell, editing cell, last focused cell, and next cell to focus. |
| [ShowData](TypeAlias.ShowData.md) | - |
| [SlotType](TypeAlias.SlotType.md) | - |
| [TempRange](TypeAlias.TempRange.md) | - |
| [Theme](TypeAlias.Theme.md) | - |
| [ThemeConfig](TypeAlias.ThemeConfig.md) | - |
| [Trimmed](TypeAlias.Trimmed.md) | - |
| [TrimmedEntity](TypeAlias.TrimmedEntity.md) | - |
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
