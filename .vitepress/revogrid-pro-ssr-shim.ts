export class AdvanceFilterPlugin {}
export class AutoFillPlugin {}
export class AutoFillPreviewPlugin {}
export class CellColumnFocusVerifyPlugin {}
export class CellFlashPlugin {}
export class CellMergePlugin {}
export class CellValidatePlugin {}
export class ClipboardJsonPlugin {}
export class CollaborativePresencePlugin {}
export class ColumnAddPopupPlugin {}
export class ColumnCollapsePlugin {}
export class ColumnDropdown {}
export class ColumnGroupPanelPlugin {}
export class ColumnHidePlugin {}
export class ColumnMoveAdvancedPlugin {}
export class ColumnStretchPlugin {}
export class ContextMenuPlugin {}
export class CorePlugin {}
export class DimensionAnimationPlugin {}
export class EventManagerPlugin {}
export class ExportExcelPlugin {}
export class FilterHeaderPlugin {}
export class FormulaBarPlugin {}
export class FormulaDependencyHighlightPlugin {}
export class FormulaPlugin {}
export class HistoryPlugin {
  undo() {}
  redo() {}
}
export class MasterRowPlugin {}
export class MultiRangeSelectionPlugin {}
export class NamedRangesPlugin {}
export class OverlayPlugin {}
export class RowExpandPlugin {}
export class RowHeaderPlugin {}
export class RowOddPlugin {}
export class RowOrderPlugin {}
export class RowSelectPlugin {}
export class SameValueMergePlugin {}
export class ServerSideGroupingPlugin {}
export class SummaryChartHeaderPlugin {}
export class TooltipPlugin {}
export class TreeDataPlugin {}

export class MultiColumn {}
export class ProgressColumnType {}
export class RatingColumnType {}
export class RowSelectColumnType {}
export class TextAreaEditor {}

export const COLUMN_COLLAPSE_EVENT = 'columnCollapse'
export const COLUMN_EXPAND_EVENT = 'columnExpand'
export const DeleteButton = {}
export const EXPAND_ICON = ''
export const LOADER_EVENT = 'loader'
export const PAGE_CHANGE_EVENT = 'pageChange'
export const PIVOT_CFG_UPDATE_EVENT = 'pivotCfgUpdate'

export const bindObservableProp = () => undefined
export const ignoreCellEvents = () => undefined
export const createFormulaConditionalCellProperties = () => ({})
export const changeRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const columnTypeRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const createNamedRangeDropdown = () => []
export const ratingStarRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const thumbsRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const heatmapRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const sparklineRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const timelineRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const circularProgressRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const badgeRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const avatarWithTextRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const avatarRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const avatarTemplate = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const linkRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const arrayRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const barChartRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const pieChartRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const summaryHeaderRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const summaryAggregateRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const progressLineWithValueRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const progressLineRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const rowHeaders = {}
export const thresholdRenderer = () => undefined
export const validationRenderer = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const cellFlashArrowTemplate = (_h?: unknown, props?: { value?: unknown }) => props?.value ?? ''
export const editorTimeline = {}
export const editorSlider = {}
export const editorCounter = {}
export const editorCheckbox = {}
export const extendTemplates = (...templates: Array<(...args: unknown[]) => unknown>) => {
  return (...args: unknown[]) => templates.map(template => template(...args)).filter(Boolean)
}
export const getGroupingData = () => undefined
export const defineDropdown = () => undefined
export const validateRange = () => true
export const validateBoolean = () => true
export const validateInteger = () => true
export const mergeCellProperties = (...callbacks: Array<(...args: unknown[]) => unknown>) => {
  return (...args: unknown[]) => Object.assign({}, ...callbacks.map(callback => callback(...args)))
}

export const commonAggregators = {
  sum: (values: unknown[]) => values.reduce((total, value) => total + Number(value || 0), 0),
  avg: (values: unknown[]) => {
    const numericValues = values.map(value => Number(value || 0))
    return numericValues.length
      ? numericValues.reduce((total, value) => total + value, 0) / numericValues.length
      : 0
  },
  min: (values: unknown[]) => Math.min(...values.map(value => Number(value || 0))),
  max: (values: unknown[]) => Math.max(...values.map(value => Number(value || 0))),
}
