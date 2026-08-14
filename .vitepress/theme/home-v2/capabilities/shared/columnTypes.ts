import type { ColumnTypes } from '@revolist/revogrid'
import NumberColumnType from '@revolist/revogrid-column-numeral'
import SelectColumnType from '@revolist/revogrid-column-select'
import { ownerCellTemplate } from './columns'

const ownerSelectColumnType = new SelectColumnType()
ownerSelectColumnType.cellTemplate = ownerCellTemplate
ownerSelectColumnType.syncCellTemplate = true

export const capabilityColumnTypes: ColumnTypes = {
  ownerSelect: ownerSelectColumnType,
  select: new SelectColumnType(),
  growthNumber: new NumberColumnType('0,0'),
  progressNumber: new NumberColumnType('0.0'),
  budgetCurrency: new NumberColumnType('$0,0'),
}
