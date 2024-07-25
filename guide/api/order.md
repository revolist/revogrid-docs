
<!-- Auto Generated Below -->


## Overview

Component for handling row order editor.

## Properties

| Property       | Attribute | Description                                                     | Type                                                   | Default     |
| -------------- | --------- | --------------------------------------------------------------- | ------------------------------------------------------ | ----------- |
| `dataStore`    | --        | Static stores, not expected to change during component lifetime | `ObservableMap<DSourceState<DataType, DimensionRows>>` | `undefined` |
| `dimensionCol` | --        | Dimension settings X                                            | `ObservableMap<DimensionSettingsState>`                | `undefined` |
| `dimensionRow` | --        | Dimension settings Y                                            | `ObservableMap<DimensionSettingsState>`                | `undefined` |
| `parent`       | --        | Parent element                                                  | `HTMLElement`                                          | `undefined` |


## Events

| Event              | Description                                | Type                                                                               |
| ------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| `rowdragendinit`   | Row drag ended started                     | `CustomEvent<any>`                                                                 |
| `rowdragmousemove` | Row mouse move started                     | `CustomEvent<Cell>`                                                                |
| `rowdragmoveinit`  | Row move started                           | `CustomEvent<PositionItem>`                                                        |
| `rowdragstartinit` | Row drag started                           | `CustomEvent<{ cell: Cell; text: string; pos: PositionItem; event: MouseEvent; }>` |
| `rowdropinit`      | Row dragged, new range ready to be applied | `CustomEvent<{ from: number; to: number; }>`                                       |


## Methods

### `clearOrder() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `dragStart(e: DragStartEvent) => Promise<void>`



#### Parameters

| Name | Type             | Description |
| ---- | ---------------- | ----------- |
| `e`  | `DragStartEvent` |             |

#### Returns

Type: `Promise<void>`



### `endOrder(e: MouseEvent) => Promise<void>`



#### Parameters

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| `e`  | `MouseEvent` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [revogr-overlay-selection](../overlay)

### Graph
```mermaid
graph TD;
  revogr-overlay-selection --> revogr-order-editor
  style revogr-order-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with ❤️ by Revolist OU*
