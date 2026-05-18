export class AdvanceFilterPlugin {}
export class CellFlashPlugin {}
export class CellValidatePlugin {}
export class ColumnCollapsePlugin {}
export class ColumnHidePlugin {}
export class ColumnGroupPanelPlugin {}
export class ColumnStretchPlugin {}
export class CorePlugin {}
export class DimensionAnimationPlugin {}
export class EventManagerPlugin {}
export class ExportExcelPlugin {}
export class FilterHeaderPlugin {}
export class RowOddPlugin {}
export class RowOrderPlugin {}
export class RowSelectPlugin {}
export class SameValueMergePlugin {}
export class StickyCellsPlugin {}
export class SummaryChartHeaderPlugin {}
export class TooltipPlugin {}
export class TreeDataPlugin {}
export class ColumnDropdown {}

export const COLUMN_COLLAPSE_EVENT = 'columnCollapse'
export const COLUMN_EXPAND_EVENT = 'columnExpand'
export const DeleteButton = {}
export const LOADER_EVENT = 'loader'
export const PAGE_CHANGE_EVENT = 'pageChange'
export const PIVOT_CFG_UPDATE_EVENT = 'pivotCfgUpdate'

export const bindObservableProp = () => undefined
export const avatarWithTextRenderer = () => null
export const avatarRenderer = () => null
export const avatarTemplate = () => null
export const arrayRenderer = () => null
export const barChartRenderer = () => null
export const cellFlashArrowTemplate = () => null
export const changeRenderer = () => null
export const circularProgressRenderer = () => null
export const columnTypeRenderer = () => null
export const createNumeralExcelExportColumnOptions = () => ({})
export const createSelectExcelExportColumnOptions = () => ({})
export const defineDropdown = () => ({})
export const editorSlider = () => ({})
export const editorTimeline = () => ({})
export const extendTemplates = () => ({})
export const getGroupingData = () => undefined
export const ignoreCellEvents = () => undefined
export const linkRenderer = () => null
export const mergeCellProperties = () => ({})
export const pieChartRenderer = () => null
export const progressLineRenderer = () => null
export const progressLineWithValueRenderer = () => null
export const ratingStarRenderer = () => null
export const summaryAggregateRenderer = () => null
export const summaryHeaderRenderer = () => null
export const thresholdRenderer = () => null
export const thumbsRenderer = () => null
export const validateBoolean = () => true
export const validateInteger = () => true
export const validateRange = () => true
export const TREE_COLLAPSE_ALL_EVENT = 'treeCollapseAll'
export const TREE_EXPAND_ALL_EVENT = 'treeExpandAll'
export const EXPAND_ICON = ''

export const commonAggregators = {
  sum: (values: unknown[]) => values.reduce((total, value) => total + Number(value || 0), 0),
  avg: (values: unknown[]) => {
    const numericValues = values.map(value => Number(value || 0))
    return numericValues.length
      ? numericValues.reduce((total, value) => total + value, 0) / numericValues.length
      : 0
  },
}
