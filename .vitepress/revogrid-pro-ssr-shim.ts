export class AdvanceFilterPlugin {}
export class ColumnHidePlugin {}
export class CorePlugin {}
export class RowOddPlugin {}

export const COLUMN_COLLAPSE_EVENT = 'columnCollapse'
export const COLUMN_EXPAND_EVENT = 'columnExpand'
export const DeleteButton = {}
export const LOADER_EVENT = 'loader'
export const PAGE_CHANGE_EVENT = 'pageChange'
export const PIVOT_CFG_UPDATE_EVENT = 'pivotCfgUpdate'

export const bindObservableProp = () => undefined

export const commonAggregators = {
  sum: (values: unknown[]) => values.reduce((total, value) => total + Number(value || 0), 0),
  avg: (values: unknown[]) => {
    const numericValues = values.map(value => Number(value || 0))
    return numericValues.length
      ? numericValues.reduce((total, value) => total + value, 0) / numericValues.length
      : 0
  },
}
