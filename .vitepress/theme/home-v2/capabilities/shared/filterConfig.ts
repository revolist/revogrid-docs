import type { ColumnFilterConfig } from '@revolist/revogrid'
import { FIlTER_SLIDER } from '@revolist/revogrid-pro'

export function createFilterConfig(applyGrowthFilter = false): ColumnFilterConfig {
  return {
    allowDuplicateOperators: true,
    multiFilterItems: applyGrowthFilter
      ? {
          growth: [
            {
              id: 0,
              type: FIlTER_SLIDER,
              value: { fromValue: 0, toValue: 21 },
              relation: 'and',
              hidden: true,
            },
          ],
        }
      : {},
    selection: {
      sortDirection: 'asc',
      sourceRowTypes: ['rgRow'],
      cascadeOptions: { enabled: true, showDependencyNumbers: true },
    },
    slider: {
      showRangeDisplay: true,
      showRangeInputs: true,
      formatValue: (value) => `${value}%`,
    },
  }
}
