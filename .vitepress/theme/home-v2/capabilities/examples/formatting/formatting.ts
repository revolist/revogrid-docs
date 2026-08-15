import type { DataGridFormattingConfig } from '@revolist/revogrid-pro'
import type { FormattingRow } from './data'

export const budgetValueFormat = {
  preset: 'currency',
  currency: 'USD',
  decimalPlaces: 0,
} as const

export const projectFormattingConfig: DataGridFormattingConfig<FormattingRow> = {
  rowKeyProp: 'id',
  columns: [
    {
      prop: 'progress',
      format: {
        presentation: { id: 'progress-line', options: { minValue: 0, maxValue: 100 } },
      },
    },
    {
      prop: 'budget',
      format: {
        value: budgetValueFormat,
      },
    },
  ],
  cells: [
    { rowKey: 'FMT-00001', prop: 'project', format: { appearance: { bold: true } } },
    { rowKey: 'FMT-00002', prop: 'project', format: { appearance: { italic: true } } },
    { rowKey: 'FMT-00003', prop: 'project', format: { appearance: { bold: true, underline: true } } },
    { rowKey: 'FMT-00004', prop: 'project', format: { appearance: { strike: true, textColor: '#64748b' } } },
    { rowKey: 'FMT-00005', prop: 'project', format: { appearance: { bold: true, italic: true } } },

    { rowKey: 'FMT-00001', prop: 'progress', format: { presentation: { id: 'progress-line', options: { minValue: 0, maxValue: 100 } } } },
    { rowKey: 'FMT-00002', prop: 'progress', format: { presentation: { id: 'circular-progress', options: { minValue: 0, maxValue: 100, showValue: true } } } },
    { rowKey: 'FMT-00003', prop: 'progress', format: { presentation: { id: 'rating', options: { maxStars: 5 } } } },
    { rowKey: 'FMT-00004', prop: 'progress', format: { presentation: { id: 'change' } } },
    { rowKey: 'FMT-00005', prop: 'progress', format: { presentation: { id: 'progress-line-value', options: { minValue: 0, maxValue: 100 } } } },

    { rowKey: 'FMT-00001', prop: 'budget', format: { value: budgetValueFormat, appearance: { textColor: '#2563eb' } } },
    { rowKey: 'FMT-00002', prop: 'budget', format: { value: budgetValueFormat, appearance: { textColor: '#059669' } } },
    { rowKey: 'FMT-00003', prop: 'budget', format: { value: budgetValueFormat, appearance: { bold: true, textColor: '#dc2626' } } },
    { rowKey: 'FMT-00004', prop: 'budget', format: { value: budgetValueFormat, appearance: { textColor: '#d97706' } } },
    { rowKey: 'FMT-00005', prop: 'budget', format: { value: budgetValueFormat, appearance: { textColor: '#7c3aed' } } },
  ],
}
