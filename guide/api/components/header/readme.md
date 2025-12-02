
<!-- Auto Generated Below -->


## Properties

| Property            | Attribute         | Description                                                                                     | Type                                                           | Default     |
| ------------------- | ----------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| `additionalData`    | `additional-data` | Extra properties to pass into header renderer, such as vue or react components to handle parent | `any`                                                          | `{}`        |
| `canResize`         | `can-resize`      | If columns can be resized                                                                       | `boolean`                                                      | `undefined` |
| `colData`           | `col-data`        | Columns - defines an array of grid columns.                                                     | `ColumnRegular[]`                                              | `undefined` |
| `columnFilter`      | `column-filter`   | Column filter                                                                                   | `boolean`                                                      | `undefined` |
| `dimensionCol`      | `dimension-col`   | Dimension settings X                                                                            | `ObservableMap<DimensionSettingsState>`                        | `undefined` |
| `groupingDepth`     | `grouping-depth`  | Grouping depth, how many levels of grouping                                                     | `number`                                                       | `0`         |
| `groups`            | `groups`          | Column groups                                                                                   | `{ [x: number]: Group[]; }`                                    | `undefined` |
| `readonly`          | `readonly`        | Readonly mode                                                                                   | `boolean`                                                      | `undefined` |
| `resizeHandler`     | `resize-handler`  | Defines resize position                                                                         | `("r" \| "b" \| "rt" \| "lt" \| "rb" \| "lb" \| "l" \| "t")[]` | `undefined` |
| `selectionStore`    | `selection-store` | Selection, range, focus                                                                         | `ObservableMap<SelectionStoreState>`                           | `undefined` |
| `type` _(required)_ | `type`            | Column type                                                                                     | `"colPinEnd" \| "colPinStart" \| "rgCol" \| "rowHeaders"`      | `undefined` |
| `viewportCol`       | `viewport-col`    | Viewport X                                                                                      | `ObservableMap<ViewportState>`                                 | `undefined` |


## Events

| Event                     | Description                                                                                    | Type                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterheaderrender`       | After all header cells rendered. Finalizes cell rendering.                                     | `CustomEvent<ProvidersColumns<DimensionCols \| "rowHeaders">>`                                                                                                                                                                                                                                                                                                            |
| `beforegroupheaderrender` | Before each group header cell render function. Allows to override group header cell properties | `CustomEvent<{ start: number; end: number; group: Group; providers: ProvidersColumns<DimensionCols \| "rowHeaders">; additionalData: any; canResize?: boolean \| undefined; onResize?(e: ResizeEvent): void; } & Partial<Pick<ResizeProps, "active">>>`                                                                                                                   |
| `beforeheaderclick`       | On initial header click                                                                        | `CustomEvent<{ index: number; originalEvent: MouseEvent; column: ColumnRegular; providers: ProvidersColumns<DimensionCols \| "rowHeaders">; }>`                                                                                                                                                                                                                           |
| `beforeheaderrender`      | Before each header cell render function. Allows to override cell properties                    | `CustomEvent<{ column: VirtualPositionItem; additionalData: any; data: ColumnTemplateProp; range?: RangeArea \| null \| undefined; canResize?: boolean \| undefined; canFilter?: boolean \| undefined; onResize?(e: ResizeEvent): void; onClick?(data: InitialHeaderClick): void; onDblClick?(data: InitialHeaderClick): void; } & Partial<Pick<ResizeProps, "active">>>` |
| `beforeheaderresize`      | On before header resize                                                                        | `CustomEvent<ColumnRegular[]>`                                                                                                                                                                                                                                                                                                                                            |
| `headerdblclick`          | On header double click                                                                         | `CustomEvent<{ index: number; originalEvent: MouseEvent; column: ColumnRegular; providers: ProvidersColumns<DimensionCols \| "rowHeaders">; }>`                                                                                                                                                                                                                           |
| `headerresize`            | On header resize                                                                               | `CustomEvent<{ [x: string]: number; }>`                                                                                                                                                                                                                                                                                                                                   |


## Dependencies

### Used by

 - [revo-grid](../revoGrid)
 - [revogr-row-headers](../rowHeaders)

### Graph
```mermaid
graph TD;
  revo-grid --> revogr-header
  revogr-row-headers --> revogr-header
  style revogr-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with ❤️ by Revolist OU*
