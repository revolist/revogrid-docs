// @vitest-environment happy-dom

import { describe, expect, it } from 'vitest'
import { formattingExample } from './example'
import { budgetValueFormat, projectFormattingConfig } from './formatting'

describe('Data formatting example', () => {
  it('uses the RevoGrid Pro 2.7.15 coordinate formatting contract', () => {
    expect(projectFormattingConfig.columns?.map(({ column }) => column)).toEqual([2, 3])
    expect(projectFormattingConfig.cells?.[0]).toEqual(expect.objectContaining({
      range: { start: { row: 0, column: 0 } },
    }))
    expect(budgetValueFormat).toEqual(expect.objectContaining({
      kind: 'preset',
      preset: 'currency',
    }))
    expect(formattingExample.code).toContain('column: 2')
    expect(formattingExample.code).toContain("kind: 'preset'")
    expect(formattingExample.code).not.toContain('rowKeyProp')
  })
})
