
<!-- Auto Generated Below -->


## Overview

Component for overlaying the grid with the selection.

## Properties

| Property                    | Attribute                | Description                                                                                     | Type                                                        | Default     |
| --------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `additionalData`            | `additional-data`        | Additional data to pass to renderer.                                                            | `any`                                                       | `undefined` |
| `applyChangesOnClose`       | `apply-changes-on-close` | If true applys changes when cell closes if not Escape.                                          | `boolean`                                                   | `false`     |
| `canDrag`                   | `can-drag`               | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D.  | `boolean`                                                   | `undefined` |
| `colData`                   | --                       | Column data store.                                                                              | `ObservableMap<DSourceState<ColumnRegular, DimensionCols>>` | `undefined` |
| `dataStore`                 | --                       | Row data store.                                                                                 | `ObservableMap<DSourceState<DataType, DimensionRows>>`      | `undefined` |
| `dimensionCol` _(required)_ | --                       | Dimension settings X.                                                                           | `ObservableMap<DimensionSettingsState>`                     | `undefined` |
| `dimensionRow`              | --                       | Dimension settings Y.                                                                           | `ObservableMap<DimensionSettingsState>`                     | `undefined` |
| `editors`                   | --                       | Custom editors register.                                                                        | `{ [name: string]: EditorCtr; }`                            | `undefined` |
| `isMobileDevice`            | `is-mobile-device`       | Is mobile view mode.                                                                            | `boolean`                                                   | `undefined` |
| `lastCell`                  | --                       | Last real coordinates positions + 1.                                                            | `Cell`                                                      | `undefined` |
| `range`                     | `range`                  | Range selection allowed.                                                                        | `boolean`                                                   | `undefined` |
| `readonly`                  | `readonly`               | Readonly mode.                                                                                  | `boolean`                                                   | `undefined` |
| `selectionStore`            | --                       | Selection, range, focus.                                                                        | `ObservableMap<SelectionStoreState>`                        | `undefined` |
| `useClipboard`              | `use-clipboard`          | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. | `boolean`                                                   | `undefined` |


## Events

| Event                  | Description                                                                                                                                                                                      | Type                                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applyfocus`           | Before cell get focused. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`.                                                                           | `CustomEvent<FocusRenderEvent>`                                                                                                                                               |
| `beforeapplyrange`     | Before range applied. First step in triggerRangeEvent.                                                                                                                                           | `CustomEvent<FocusRenderEvent>`                                                                                                                                               |
| `beforecellfocusinit`  | Before cell focus.                                                                                                                                                                               | `CustomEvent<{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }>`             |
| `beforecellsave`       | Runs before cell save. Can be used to override or cancel original save.                                                                                                                          | `CustomEvent<any>`                                                                                                                                                            |
| `beforecopyregion`     | Before clipboard copy happened. Validate data before copy. To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`.                           | `CustomEvent<any>`                                                                                                                                                            |
| `beforeeditrender`     | Before editor render.                                                                                                                                                                            | `CustomEvent<FocusRenderEvent>`                                                                                                                                               |
| `beforekeydown`        | Before key up event proxy, used to prevent key up trigger. If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic. Call preventDefault().     | `CustomEvent<{ original: KeyboardEvent; } & EventData>`                                                                                                                       |
| `beforekeyup`          | Before key down event proxy, used to prevent key down trigger. If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic. Call preventDefault(). | `CustomEvent<{ original: KeyboardEvent; } & EventData>`                                                                                                                       |
| `beforenextvpfocus`    | Fired when change of viewport happens. Usually when we switch between pinned regions.                                                                                                            | `CustomEvent<Cell>`                                                                                                                                                           |
| `beforepasteregion`    | Before region paste happened.                                                                                                                                                                    | `CustomEvent<any>`                                                                                                                                                            |
| `beforerangecopyapply` | Before range copy.                                                                                                                                                                               | `CustomEvent<{ type: DimensionRows; colType: DimensionCols; newRange: RangeArea; oldRange: RangeArea; mapping: OldNewRangeMapping; newData: { [key: number]: DataType; }; }>` |
| `beforerangedataapply` | Range data apply.                                                                                                                                                                                | `CustomEvent<FocusRenderEvent>`                                                                                                                                               |
| `beforesetrange`       | Before range selection applied. Second step in triggerRangeEvent.                                                                                                                                | `CustomEvent<any>`                                                                                                                                                            |
| `beforesettemprange`   | Before set temp range area during autofill.                                                                                                                                                      | `CustomEvent<{ tempRange: Nullable<TempRange> \| null; } & EventData & AllDimensionType>`                                                                                     |
| `canceledit`           | Used for editors support when editor close requested.                                                                                                                                            | `CustomEvent<any>`                                                                                                                                                            |
| `celleditapply`        | Cell edit apply to the data source. Triggers datasource edit on the root level.                                                                                                                  | `CustomEvent<{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }>`             |
| `clipboardrangecopy`   | Range copy.                                                                                                                                                                                      | `CustomEvent<{ data: any[][]; range: RangeArea; mapping: OldNewRangeMapping; } & AllDimensionType>`                                                                           |
| `clipboardrangepaste`  | Range paste event.                                                                                                                                                                               | `CustomEvent<{ data: DataLookup<any>; models: Partial<DataLookup<any>>; range: RangeArea \| null; } & AllDimensionType>`                                                      |
| `focuscell`            | Cell get focused. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`.                                                                                  | `CustomEvent<ApplyFocusEvent>`                                                                                                                                                |
| `rangeeditapply`       | Range data apply. Triggers datasource edit on the root level.                                                                                                                                    | `CustomEvent<{ data: DataLookup; models: Partial<DataLookup>; type: DimensionRows; }>`                                                                                        |
| `selectall`            | Select all.                                                                                                                                                                                      | `CustomEvent<any>`                                                                                                                                                            |
| `selectionchangeinit`  | Selection range changed.                                                                                                                                                                         | `CustomEvent<{ type: DimensionRows; colType: DimensionCols; newRange: RangeArea; oldRange: RangeArea; mapping: OldNewRangeMapping; newData: { [key: number]: DataType; }; }>` |
| `setedit`              | Set edit cell.                                                                                                                                                                                   | `CustomEvent<{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }>`             |
| `setrange`             | Set range.                                                                                                                                                                                       | `CustomEvent<RangeArea & { type: MultiDimensionType; }>`                                                                                                                      |
| `settemprange`         | Set temp range area during autofill.                                                                                                                                                             | `CustomEvent<null \| { type: string \| null; area: RangeArea \| null; }>`                                                                                                     |


## Dependencies

### Used by

 - [revo-grid](../revoGrid)

### Depends on

- [revogr-edit](../editors)
- [revogr-clipboard](../clipboard)
- [revogr-order-editor](../order)

### Graph
```mermaid
graph TD;
  revogr-overlay-selection --> revogr-edit
  revogr-overlay-selection --> revogr-clipboard
  revogr-overlay-selection --> revogr-order-editor
  revo-grid --> revogr-overlay-selection
  style revogr-overlay-selection fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with ❤️ by Revolist OU*
