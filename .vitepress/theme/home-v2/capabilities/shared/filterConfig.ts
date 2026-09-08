import type { ColumnFilterConfig } from '@revolist/revogrid'
import { FIlTER_SLIDER } from '@revolist/revogrid-pro'

type FilterConfigOptions = {
  applyGrowthFilter?: boolean
  syncCellTemplate?: boolean
}

export function createFilterConfig({
  applyGrowthFilter = false,
  syncCellTemplate = false,
}: FilterConfigOptions = {}): ColumnFilterConfig {
  const formatGrowthPercent = (value: number) => `${(value * 100).toFixed(1)}%`

  return {
    allowDuplicateOperators: true,
    multiFilterItems: applyGrowthFilter
      ? {
          growth: [
            {
              id: 0,
              type: FIlTER_SLIDER,
              value: { fromValue: -0.118, toValue: 0.21 },
              relation: 'and',
              hidden: true,
            },
          ],
        }
      : {},
    selection: {
      sortDirection: 'asc',
      syncCellTemplate,
      sourceRowTypes: ['rgRow'],
      cascadeOptions: { enabled: true, showDependencyNumbers: true },
    },
    slider: {
      showRangeDisplay: true,
      showRangeInputs: true,
      formatValue: applyGrowthFilter ? formatGrowthPercent : (value) => `${value}%`,
      formatInputValue: applyGrowthFilter ? formatGrowthPercent : undefined,
      parseInputValue: applyGrowthFilter
        ? (value) => Number(value.replace('%', '').trim()) / 100
        : undefined,
    },
  }
}
