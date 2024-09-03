# Events

| Name | Type | Component | Description |
| ---- | ---- | --------- | ----------- |
| contentsizechanged | `"colPinEnd" \| "colPinStart" \| "rgCol" \| "rgRow" \| "rowPinEnd" \| "rowPinStart"` | revo-grid | New content size has been applied. The size excludes the header. Currently, the event responsible for applying the new content size does not provide the actual size. To retrieve the actual content size, you can utilize the `getContentSize` function after the event has been triggered. |
| beforeedit | `{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }` | revo-grid | This event is triggered before the data is edited. To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`. To override the edit result with your own value, set the `e.val` property to your desired value. |
| beforerangeedit | `{ data: DataLookup; models: Partial<DataLookup>; type: DimensionRows; }` | revo-grid | This event is triggered before applying range data, specifically when a range selection occurs. To customize the data and prevent the default edit data from being set, you can call `e.preventDefault()`. |
| afteredit | `{ data: DataLookup; models: Partial<DataLookup>; type: DimensionRows; } \| { prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }` | revo-grid | Triggered after data applied or range changed. |
| beforeautofill | `{ type: DimensionRows; colType: DimensionCols; newRange: RangeArea; oldRange: RangeArea; mapping: OldNewRangeMapping; newData: { [key: number]: DataType; }; }` | revo-grid | This event is triggered before autofill is applied. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. |
| beforerange | `{ type: DimensionRows; colType: DimensionCols; newRange: RangeArea; oldRange: RangeArea; mapping: OldNewRangeMapping; newData: { [key: number]: DataType; }; }` | revo-grid | Triggered before range applied. Use e.preventDefault() to prevent range. |
| afterfocus | `FocusAfterRenderEvent` | revo-grid | Triggered after focus render finished. Can be used to access a focus element through `event.target`. This is just a duplicate of `afterfocus` from `revogr-focus.tsx`. |
| roworderchanged | `{ from: number; to: number; }` | revo-grid | This event is triggered before the order of `rgRow` is applied. To prevent the default behavior of changing the order of `rgRow`, you can call `e.preventDefault()`. |
| beforesortingapply | `{ column: ColumnRegular; order: "desc" \| "asc"; additive: boolean; }` | revo-grid | Triggered by sorting.plugin.ts Before sorting apply. Use e.preventDefault() to prevent sorting data change. |
| beforesorting | `{ column: ColumnRegular; order: "desc" \| "asc"; additive: boolean; }` | revo-grid | Triggered by sorting.plugin.ts Before sorting event. Initial sorting triggered, if this event stops no other event called. Use e.preventDefault() to prevent sorting. |
| rowdragstart | `{ pos: PositionItem; text: string; }` | revo-grid | This event is triggered when the row order change is started. To prevent the default behavior of changing the row order, you can call `e.preventDefault()`. To change the item name at the start of the row order change, you can set `e.text` to the desired new name. |
| headerclick | `ColumnRegular` | revo-grid | On header click. |
| beforecellfocus | `{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }` | revo-grid | This event is triggered before the cell focus is changed. To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`. |
| beforefocuslost | `null \| { model: any; cell: Cell; colType: DimensionCols; rowType: DimensionRows; column?: ColumnRegular \| undefined; }` | revo-grid | This event is triggered before the grid focus is lost. To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`. |
| beforesourceset | `{ type: DimensionRows; source: DataType[]; }` | revo-grid | Before main source/rows data apply. You can override data source here |
| beforeanysource | `{ type: DimensionRows; source: DataType[]; }` | revo-grid | Before data apply on any source type. Can be source from pinned and main viewport. You can override data source here |
| aftersourceset | `{ type: DimensionRows; source: DataType[]; }` | revo-grid | After main source/rows updated |
| afteranysource | `{ type: DimensionRows; source: DataType[]; }` | revo-grid | Emitted after each source update, whether from the pinned or main viewport. Useful for tracking all changes originating from sources in both the pinned and main viewports. |
| beforecolumnsset | `{ columns: Record<DimensionCols, ColumnRegular[]>; columnByProp: Record<ColumnProp, ColumnRegular[]>; columnGrouping: ColumnGroupingCollection; maxLevel: number; sort: Record<ColumnProp, ColumnRegular>; }` | revo-grid | Emitted before a column update is applied. Listeners can use this event to perform any necessary actions or modifications before the column update is finalized. |
| beforecolumnapplied | `{ columns: Record<DimensionCols, ColumnRegular[]>; columnByProp: Record<ColumnProp, ColumnRegular[]>; columnGrouping: ColumnGroupingCollection; maxLevel: number; sort: Record<ColumnProp, ColumnRegular>; }` | revo-grid | Emitted before a column update is applied, after the column set is gathered and the viewport is updated. Useful for performing actions or modifications before the final application of the column update. |
| aftercolumnsset | `{ columns: ColumnCollection; order: Record<ColumnProp, "desc" \| "asc" \| undefined>; }` | revo-grid | Column updated |
| beforefilterapply | `{ collection: FilterCollection; }` | revo-grid | Emitted before applying a filter to the data source. Use e.preventDefault() to prevent cell focus change. Modify if you need to change filters. |
| beforefiltertrimmed | `{ collection: FilterCollection; itemsToFilter: Record<number, boolean>; }` | revo-grid | Emitted before applying a filter to the data source. Use e.preventDefault() to prevent the default behavior of trimming values and applying the filter. Modify the `collection` property if you want to change the filters. Modify the `itemsToFilter` property if you want to filter the indexes for trimming. |
| beforetrimmed | `{ trimmed: Record<number, boolean>; trimmedType: string; type: string; }` | revo-grid | Emitted before trimming values. Use e.preventDefault() to prevent the default behavior of trimming values. Modify the `trimmed` property if you want to filter the indexes for trimming. |
| aftertrimmed | `any` | revo-grid | Emitted after trimmed values have been applied. Useful for notifying when trimming of values has taken place. |
| viewportscroll | `{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }` | revo-grid | Emitted when the viewport is scrolled. Useful for tracking viewport scrolling events. |
| beforeexport | `{ data: DataType[]; } & ColSource` | revo-grid | Before export Use e.preventDefault() to prevent export Replace data in Event in case you want to modify it in export |
| beforeeditstart | `{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }` | revo-grid | Emitted before editing starts. Use e.preventDefault() to prevent the default edit behavior. |
| aftercolumnresize | `{ [index: number]: ColumnRegular; }` | revo-grid | Emitted after column resizing. Useful for retrieving the resized columns. |
| beforerowdefinition | `{ vals: any; oldVals: any; }` | revo-grid | Emitted before the row definition is applied. Useful for modifying or preventing the default row definition behavior. |
| filterconfigchanged | `any` | revo-grid | Emitted when the filter configuration is changed |
| rowheaderschanged | `any` | revo-grid | Emmited when the row headers are changed. |
| beforegridrender | `any` | revo-grid | Emmited before the grid is rendered. |
| aftergridrender | `any` | revo-grid | Emmited after the grid is rendered. |
| aftergridinit | `any` | revo-grid | Emmited after the grid is initialized. Connected to the DOM. |
| additionaldatachanged | `any` | revo-grid | Emmited after the additional data is changed |
| afterthemechanged | `string` | revo-grid | Emmited after the theme is changed |
| beforepaste | `{ raw: string; isHTML: boolean; event: ClipboardEvent; dataText: string; }` | revogr-clipboard | Paste 1. Fired before paste applied to the grid defaultPrevented - if true, paste will be canceled |
| beforepasteapply | `{ raw: string; parsed: string[][]; event: ClipboardEvent; }` | revogr-clipboard | Paste 2. Fired before paste applied to the grid and after data parsed |
| pasteregion | `string[][]` | revogr-clipboard | Paste 3. Internal method. When data region is ready pass it to the top. |
| afterpasteapply | `{ raw: string; parsed: string[][]; event: ClipboardEvent; }` | revogr-clipboard | Paste 4. Fired after paste applied to the grid defaultPrevented - if true, paste will be canceled |
| beforecut | `{ event: ClipboardEvent; }` | revogr-clipboard | Cut 1. Fired before cut triggered defaultPrevented - if true, cut will be canceled |
| clearregion | `DataTransfer` | revogr-clipboard | Cut 2. Clears region when cut is done |
| beforecopy | `{ event: ClipboardEvent; }` | revogr-clipboard | Copy 1. Fired before copy triggered defaultPrevented - if true, copy will be canceled |
| beforecopyapply | `{ event: DataTransfer; data?: string[][] \| undefined; }` | revogr-clipboard | Copy Method 1. Fired before copy applied to the clipboard from outside. defaultPrevented - if true, copy will be canceled |
| copyregion | `DataTransfer` | revogr-clipboard | Copy 2. Fired when region copied defaultPrevented - if true, copy will be canceled |
| beforerowrender | `BeforeRowRenderEvent<any>` | revogr-data | Before each row render |
| afterrender | `{ type: DimensionRows; }` | revogr-data | When data render finished for the designated type |
| beforecellrender | `BeforeCellRenderEvent<ColumnDataSchemaModel>` | revogr-data | Before each cell render function. Allows to override cell properties |
| dragstartcell | `DragStartEvent` | revogr-data | Event emitted on cell drag start |
| celledit | `{ rgRow: number; rgCol: number; type: DimensionRows; prop: ColumnProp; val: any; preventFocus?: boolean \| undefined; }` | revogr-edit | Cell edit event |
| closeedit | `boolean \| undefined` | revogr-edit | Close editor event pass true if requires focus next |
| filterChange | `{ [prop: string]: FilterData[]; }` | revogr-filter-panel |  |
| resetChange | `number \| string` | revogr-filter-panel |  |
| beforefocusrender | `FocusRenderEvent` | revogr-focus | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. |
| beforescrollintoview | `{ el: HTMLElement; }` | revogr-focus | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() |
| afterfocus | `FocusAfterRenderEvent` | revogr-focus | Used to setup properties after focus was rendered |
| beforeheaderclick | `{ index: number; originalEvent: MouseEvent; column: ColumnRegular; providers: Providers<DimensionCols \| "rowHeaders">; }` | revogr-header | On initial header click |
| headerresize | `{ [x: string]: number; }` | revogr-header | On header resize |
| beforeheaderresize | `ColumnRegular[]` | revogr-header | On before header resize |
| headerdblclick | `{ index: number; originalEvent: MouseEvent; column: ColumnRegular; providers: Providers<DimensionCols \| "rowHeaders">; }` | revogr-header | On header double click |
| beforeheaderrender | `{ column: VirtualPositionItem; additionalData: any; data: ColumnTemplateProp; range?: RangeArea \| null \| undefined; canResize?: boolean \| undefined; canFilter?: boolean \| undefined; onResize?(e: ResizeEvent): void; onClick?(data: InitialHeaderClick): void; onDblClick?(data: InitialHeaderClick): void; } & Partial<Pick<ResizeProps, "active">>` | revogr-header | Before each header cell render function. Allows to override cell properties |
| afterheaderrender | `{ type: DimensionCols \| "rowHeaders"; readonly: boolean; data: Observable<DataSourceState<any, any>> \| ColumnRegular[]; viewport: Observable<ViewportState>; dimension: Observable<DimensionSettingsState>; selection: Observable<SelectionStoreState>; }` | revogr-header | After all header cells rendered. Finalizes cell rendering. |
| rowdragstartinit | `{ cell: Cell; text: string; pos: PositionItem; event: MouseEvent; rowType: DimensionRows; }` | revogr-order-editor | Row drag started |
| rowdragendinit | `{ rowType: DimensionRows; }` | revogr-order-editor | Row drag ended started |
| rowdragmoveinit | `PositionItem & { rowType: DimensionRows; }` | revogr-order-editor | Row move started |
| rowdragmousemove | `Cell & { rowType: DimensionRows; }` | revogr-order-editor | Row mouse move started |
| rowdropinit | `{ from: number; to: number; rowType: DimensionRows; }` | revogr-order-editor | Row dragged, new range ready to be applied |
| roworderchange | `{ from: number; to: number; rowType: DimensionRows; }` | revogr-order-editor | Row drag ended finished. Time to apply data |
| beforecopyregion | `any` | revogr-overlay-selection | Before clipboard copy happened. Validate data before copy. To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`. |
| beforepasteregion | `any` | revogr-overlay-selection | Before region paste happened. |
| celleditapply | `{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }` | revogr-overlay-selection | Cell edit apply to the data source. Triggers datasource edit on the root level. |
| beforecellfocusinit | `{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }` | revogr-overlay-selection | Before cell focus. |
| beforenextvpfocus | `Cell` | revogr-overlay-selection | Fired when change of viewport happens. Usually when we switch between pinned regions. |
| setedit | `{ prop: ColumnProp; model: DataType; val?: string \| undefined; rowIndex: number; colIndex: number; colType: DimensionCols; type: DimensionRows; }` | revogr-overlay-selection | Set edit cell. |
| beforeapplyrange | `FocusRenderEvent` | revogr-overlay-selection | Before range applied. First step in triggerRangeEvent. |
| beforesetrange | `any` | revogr-overlay-selection | Before range selection applied. Second step in triggerRangeEvent. |
| beforeeditrender | `FocusRenderEvent` | revogr-overlay-selection | Before editor render. |
| setrange | `RangeArea & { type: MultiDimensionType; }` | revogr-overlay-selection | Set range. |
| selectall | `any` | revogr-overlay-selection | Select all. |
| canceledit | `any` | revogr-overlay-selection | Used for editors support when editor close requested. |
| settemprange | `null \| { type: string \| null; area: RangeArea \| null; }` | revogr-overlay-selection | Set temp range area during autofill. |
| beforesettemprange | `{ tempRange: Nullable<TempRange> \| null; } & EventData & AllDimensionType` | revogr-overlay-selection | Before set temp range area during autofill. |
| applyfocus | `FocusRenderEvent` | revogr-overlay-selection | Before cell get focused. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. |
| focuscell | `ApplyFocusEvent` | revogr-overlay-selection | Cell get focused. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. |
| beforerangedataapply | `FocusRenderEvent` | revogr-overlay-selection | Range data apply. |
| selectionchangeinit | `{ type: DimensionRows; colType: DimensionCols; newRange: RangeArea; oldRange: RangeArea; mapping: OldNewRangeMapping; newData: { [key: number]: DataType; }; }` | revogr-overlay-selection | Selection range changed. |
| beforerangecopyapply | `{ type: DimensionRows; colType: DimensionCols; newRange: RangeArea; oldRange: RangeArea; mapping: OldNewRangeMapping; newData: { [key: number]: DataType; }; }` | revogr-overlay-selection | Before range copy. |
| rangeeditapply | `{ data: DataLookup; models: Partial<DataLookup>; type: DimensionRows; }` | revogr-overlay-selection | Range data apply. Triggers datasource edit on the root level. |
| clipboardrangecopy | `{ data: any[][]; range: RangeArea; mapping: OldNewRangeMapping; } & AllDimensionType` | revogr-overlay-selection | Range copy. |
| clipboardrangepaste | `{ data: DataLookup<any>; models: Partial<DataLookup<any>>; range: RangeArea \| null; } & AllDimensionType` | revogr-overlay-selection | Range paste event. |
| beforekeydown | `{ original: KeyboardEvent; } & EventData` | revogr-overlay-selection | Before key up event proxy, used to prevent key up trigger. If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic. Call preventDefault(). |
| beforekeyup | `{ original: KeyboardEvent; } & EventData` | revogr-overlay-selection | Before key down event proxy, used to prevent key down trigger. If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic. Call preventDefault(). |
| beforecellsave | `any` | revogr-overlay-selection | Runs before cell save. Can be used to override or cancel original save. |
| scrollview | `{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }` | revogr-row-headers | Scroll viewport |
| ref | `ElementScroll` | revogr-row-headers | Register element to scroll |
| scrollvirtual | `{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }` | revogr-scroll-virtual | Scroll event |
| scrollviewport | `{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }` | revogr-viewport-scroll | Before scroll event |
| resizeviewport | `{ dimension: DimensionType; size: number; rowHeader?: boolean \| undefined; }` | revogr-viewport-scroll | Viewport resize |
| scrollchange | `{ type: DimensionType; hasScroll: boolean; }` | revogr-viewport-scroll | Triggered on scroll change, can be used to get information about scroll visibility |
| scrollviewportsilent | `{ dimension: DimensionType; coordinate: number; delta?: number \| undefined; outside?: boolean \| undefined; }` | revogr-viewport-scroll | Silently scroll to coordinate Made to align negative coordinates for mobile devices |
| html | `{ html: string; vnodes: VNode[] \| null; }` | vnode-html |  |