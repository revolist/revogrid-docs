
<!-- Auto Generated Below -->


## Overview

Viewport scroll component for RevoGrid

## Properties

| Property               | Attribute        | Description             | Type                                                      | Default     |
| ---------------------- | ---------------- | ----------------------- | --------------------------------------------------------- | ----------- |
| `colType` _(required)_ | `col-type`       |                         | `"colPinEnd" \| "colPinStart" \| "rgCol" \| "rowHeaders"` | `undefined` |
| `contentHeight`        | `content-height` | Height of inner content | `number`                                                  | `0`         |
| `contentWidth`         | `content-width`  | Width of inner content  | `number`                                                  | `0`         |
| `rowHeader`            | `row-header`     | Enable row header       | `boolean`                                                 | `undefined` |


## Events

| Event                  | Description                                                                         | Type                                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `resizeviewport`       | Viewport resize                                                                     | `CustomEvent<{ dimension: DimensionType; size: number; rowHeader?: boolean \| undefined; }>`                                  |
| `scrollchange`         | Triggered on scroll change, can be used to get information about scroll visibility  | `CustomEvent<{ type: DimensionType; hasScroll: boolean; }>`                                                                   |
| `scrollviewport`       | Before scroll event                                                                 | `CustomEvent<{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }>` |
| `scrollviewportsilent` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | `CustomEvent<{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }>` |


## Methods

### `applyScroll(type: DimensionType, e: UIEvent) => Promise<void>`

Extra layer for scroll event monitoring, where MouseWheel event is not passing
We need to trigger scroll event in case there is no mousewheel event

#### Parameters

| Name   | Type                 | Description |
| ------ | -------------------- | ----------- |
| `type` | `"rgCol" \| "rgRow"` |             |
| `e`    | `UIEvent`            |             |

#### Returns

Type: `Promise<void>`



### `changeScroll(e: ViewPortScrollEvent, silent?: boolean) => Promise<ViewPortScrollEvent | undefined>`

update on delta in case we don't know existing position or external change

#### Parameters

| Name     | Type                                                                                                             | Description |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| `e`      | `{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }` |             |
| `silent` | `boolean`                                                                                                        |             |

#### Returns

Type: `Promise<ViewPortScrollEvent | undefined>`



### `setScroll(e: ViewPortScrollEvent) => Promise<void>`



#### Parameters

| Name | Type                                                                                                             | Description |
| ---- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| `e`  | `{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot       | Description |
| ---------- | ----------- |
|            | content     |
| `"footer"` | footer      |
| `"header"` | header      |


## Dependencies

### Used by

 - [revo-grid](./revoGrid)
 - [revogr-row-headers](./rowHeaders)

### Graph
```mermaid
graph TD;
  revo-grid --> revogr-viewport-scroll
  revogr-row-headers --> revogr-viewport-scroll
  style revogr-viewport-scroll fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with ❤️ by Revolist OU*
