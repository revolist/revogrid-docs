[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `additionalData?` | `any` | Additional data to pass to renderer. |
| `applyChangesOnClose?` | `boolean` | If true applys changes when cell closes if not Escape. |
| `canDrag?` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. |
| `colData?` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](Type.DimensionCols.md)\>\> | Column data store. |
| `dataStore?` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`DataType`](Type.DataType.md), [`DimensionRows`](Type.DimensionRows.md)\>\> | Row data store. |
| `dimensionCol?` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. |
| `dimensionRow?` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. |
| `editors?` | [`Editors`](Type.Editors.md) | Custom editors register. |
| `isMobileDevice?` | `boolean` | Is mobile view mode. |
| `lastCell?` | [`Cell`](Interface.Cell.md) | Last cell position. |
| `onApplyfocus?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before cell get focused. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. |
| `onBeforeapplyrange?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before range applied. |
| `onBeforecellfocusinit?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`BeforeSaveDataDetails`](Type.BeforeSaveDataDetails.md)\>) => `void` | Before cell focus. |
| `onBeforecellsave?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | Runs before cell save. Can be used to override or cancel original save. |
| `onBeforecopyregion?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | Before clipboard copy happened. Validate data before copy. To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`. |
| `onBeforeeditrender?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before editor render. |
| `onBeforekeydown?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`KeyboardEvent`\>) => `void` | Before key up event proxy, used to prevent key up trigger. If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic. Call preventDefault(). |
| `onBeforekeyup?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`KeyboardEvent`\>) => `void` | Before key down event proxy, used to prevent key down trigger. If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic. Call preventDefault(). |
| `onBeforepasteregion?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | Before region paste happened. |
| `onBeforerangecopyapply?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`ChangedRange`](Type.ChangedRange.md)\>) => `void` | Before range copy. |
| `onBeforerangedataapply?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Range data apply. |
| `onBeforesetrange?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | Before range selection applied. |
| `onCanceledit?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | Used for editors support when editor close requested. |
| `onCelleditapply?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`BeforeSaveDataDetails`](Type.BeforeSaveDataDetails.md)\>) => `void` | Cell edit apply to the data source. Triggers datasource edit on the root level. |
| `onClipboardrangecopy?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | Range copy. |
| `onClipboardrangepaste?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | - |
| `onFocuscell?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`ApplyFocusEvent`](Interface.ApplyFocusEvent.md)\>) => `void` | Cell get focused. To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. |
| `onRangeeditapply?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`BeforeRangeSaveDataDetails`](Type.BeforeRangeSaveDataDetails.md)\>) => `void` | Range data apply. Triggers datasource edit on the root level. |
| `onSelectall?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<`any`\>) => `void` | Select all. |
| `onSelectionchangeinit?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`ChangedRange`](Type.ChangedRange.md)\>) => `void` | Selection range changed. |
| `onSetedit?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`BeforeSaveDataDetails`](Type.BeforeSaveDataDetails.md)\>) => `void` | Set edit cell. |
| `onSetrange?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`RangeArea`](Type.RangeArea.md) & \{ `type`: [`MultiDimensionType`](Type.MultiDimensionType.md); \}\>) => `void` | Set range. |
| `onSettemprange?` | (`event`: [`RevogrOverlaySelectionCustomEvent`](Interface.RevogrOverlaySelectionCustomEvent.md)\<[`TempRange`](Type.TempRange.md)\>) => `void` | Set temp range area during autofill. |
| `range?` | `boolean` | Range selection allowed. |
| `readonly?` | `boolean` | Readonly mode. |
| `selectionStore?` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> | Selection, range, focus. |
| `useClipboard?` | `boolean` | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. |
