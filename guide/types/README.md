# @revolist/revogrid

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
| [Cell](Interface.Cell.md) | - |
| [CellTemplate](Interface.CellTemplate.md) | - |
| [CellTemplateProp](Interface.CellTemplateProp.md) | Template property for each cell, extends the column data schema model. Additionally, it provides access to the providers injected into the template. |
| [ColumnProperties](Interface.ColumnProperties.md) | Configuration for header inner template properties |
| [ColumnRegular](Interface.ColumnRegular.md) | ColumnRegular interface represents regular column definition. Regular column can be any column that is not a grouping column. |
| [ColumnTemplateProp](Interface.ColumnTemplateProp.md) | Column template property. Contains extended properties for column. |
| [ColumnType](Interface.ColumnType.md) | Interface for regular column definition. Regular column can be any column that is not a grouping column. |
| [DimensionCalc](Interface.DimensionCalc.md) | Object containing information about calculated dimensions. Used for both columns and rows. |
| [DimensionSettingsState](Interface.DimensionSettingsState.md) | Represents the settings state of a dimension. It extends the calculation properties of a dimension. It also includes the real size and origin item size of the dimension. |
| [DragStartEvent](Interface.DragStartEvent.md) | Represents the event object that is emitted when the drag operation starts. |
| [EditCellStore](Interface.EditCellStore.md) | - |
| [EditorBase](Interface.EditorBase.md) | - |
| [EditorCtrCallable](Interface.EditorCtrCallable.md) | - |
| [EditorCtrConstructible](Interface.EditorCtrConstructible.md) | - |
| [ElementScroll](Interface.ElementScroll.md) | - |
| [FocusRenderEvent](Interface.FocusRenderEvent.md) | Represents the event object that is emitted before focus rendering. It includes information about the dimension type and range area. |
| [Group](Interface.Group.md) | Configuration for header inner template properties |
| [HyperFunc](Interface.HyperFunc.md) | - |
| [PluginBaseComponent](Interface.PluginBaseComponent.md) | - |
| [PluginConstructor](Interface.PluginConstructor.md) | - |
| [PluginExternalConstructor](Interface.PluginExternalConstructor.md) | - |
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
| [ColumnDataSchema](TypeAlias.ColumnDataSchema.md) | - |
| [ColumnDataSchemaModel](TypeAlias.ColumnDataSchemaModel.md) | - |
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
| [DispatchDetail](TypeAlias.DispatchDetail.md) | - |
| [EditCell](TypeAlias.EditCell.md) | - |
| [EditorCtr](TypeAlias.EditorCtr.md) | - |
| [Editors](TypeAlias.Editors.md) | - |
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
| [PluginProviders](TypeAlias.PluginProviders.md) | - |
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
| [SelectionStoreState](TypeAlias.SelectionStoreState.md) | - |
| [ShowData](TypeAlias.ShowData.md) | - |
| [SlotType](TypeAlias.SlotType.md) | - |
| [Target](TypeAlias.Target.md) | - |
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
