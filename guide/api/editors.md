
<!-- Auto Generated Below -->


## Overview

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property         | Attribute         | Description                                                            | Type                                                                                                                                                                                                       | Default     |
| ---------------- | ----------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `additionalData` | `additional-data` | Additional data to pass to renderer                                    | `any`                                                                                                                                                                                                      | `undefined` |
| `column`         | --                | Column data for editor.                                                | `null \| { prop: ColumnProp; model: DataType<any>; column: ColumnRegular; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; data: DataType<any>[]; value: any; }`           | `undefined` |
| `editCell`       | --                | Cell to edit data.                                                     | `EditCellStore & BeforeSaveDataDetails`                                                                                                                                                                    | `undefined` |
| `editor`         | --                | Custom editors register                                                | `((column: ColumnDataSchemaModel, save: (value: string, preventFocus?: boolean \| undefined) => void, close: (focusNext?: boolean \| undefined) => void) => EditorBase) \| EditorCtrConstructible \| null` | `undefined` |
| `saveOnClose`    | `save-on-close`   | Save on editor close. Defines if data should be saved on editor close. | `boolean`                                                                                                                                                                                                  | `false`     |


## Events

| Event       | Description                                         | Type                                                                                                                                   |
| ----------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `celledit`  | Cell edit event                                     | `CustomEvent<{ rgRow: number; rgCol: number; type: DimensionRows; prop: ColumnProp; val: any; preventFocus?: boolean \| undefined; }>` |
| `closeedit` | Close editor event pass true if requires focus next | `CustomEvent<boolean \| undefined>`                                                                                                    |


## Methods

### `beforeDisconnect() => Promise<void>`

Before editor got disconnected.
Can be triggered multiple times before actual disconnect.

#### Returns

Type: `Promise<void>`



### `cancelChanges() => Promise<void>`

Cancel pending changes flag. Editor will be closed without autosave.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [revogr-overlay-selection](./overlay)

### Graph
```mermaid
graph TD;
  revogr-overlay-selection --> revogr-edit
  style revogr-edit fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with ❤️ by Revolist OU*
