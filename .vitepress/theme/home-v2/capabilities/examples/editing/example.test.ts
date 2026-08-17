// @vitest-environment happy-dom

import { describe, expect, it } from 'vitest'
import { editingColumns, editingExample } from './example'
import { spreadsheetFormatting } from './formatting'

describe('Spreadsheet editing example', () => {
  it('uses spreadsheet column labels and numbered row headers', () => {
    expect(editingColumns.map(({ name }) => name)).toEqual(['A', 'B', 'C', 'D'])
    expect(editingExample.rowHeaders).toBe(true)
    expect(editingExample.code).toContain('rowHeaders')
    expect(spreadsheetFormatting.columns).toEqual([
      expect.objectContaining({ prop: 'units' }),
    ])
    const formulaColumn = editingColumns.find(({ prop }) => prop === 'formula')
    const formulaProperties = typeof formulaColumn?.cellProperties === 'function'
      ? formulaColumn.cellProperties({} as never)
      : formulaColumn?.cellProperties
    expect(formulaProperties).toMatchObject({
      style: { fontWeight: '700', textAlign: 'right' },
    })
    expect(editingExample.code).not.toContain('rows.map')
    expect(editingExample.code).toContain("rowKey: 'SHEET-00002'")
  })
})
