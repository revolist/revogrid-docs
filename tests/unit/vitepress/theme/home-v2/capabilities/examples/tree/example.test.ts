// @vitest-environment happy-dom

import { describe, expect, it } from 'vitest'
import { ownerColumn, statusColumn } from '../../../../../../../../.vitepress/theme/home-v2/capabilities/shared/columns'
import { treeColumns, treeExample } from '../../../../../../../../.vitepress/theme/home-v2/capabilities/examples/tree/example'

describe('Tree data selection filters', () => {
  it('synchronizes Owner and Status options with their cell templates', () => {
    const owner = treeColumns.find(({ prop }) => prop === 'owner')
    const growth = treeColumns.find(({ prop }) => prop === 'growth')
    const status = treeColumns.find(({ prop }) => prop === 'health')
    const filter = typeof treeExample.filter === 'object' ? treeExample.filter : undefined

    expect(owner?.cellTemplate).toBe(ownerColumn.cellTemplate)
    expect(status?.cellTemplate).toBe(statusColumn.cellTemplate)
    expect(filter?.selection?.syncCellTemplate).toBe(true)

    const h = (tag: string, data: unknown, children: unknown) => ({ tag, data, children })
    const ownerOption = owner?.cellTemplate?.(h as never, {
      value: 'maya chen',
      prop: 'owner',
      column: owner,
      model: { owner: 'maya chen', label: 'maya chen', ownerIndex: 1 },
    } as never) as { children?: Array<{ children?: unknown }> }
    const statusOption = status?.cellTemplate?.(h as never, {
      value: 'on track',
      prop: 'health',
      column: status,
      model: { health: 'on track', label: 'on track' },
    } as never) as { data?: { style?: Record<string, string> }, children?: unknown }

    expect(ownerOption.children?.[1]?.children).toBe('Maya Chen')
    expect(statusOption.children).toBe('On track')
    expect(statusOption.data?.style?.backgroundColor).toContain('#dcfce7')

    const growthCell = growth?.cellTemplate?.(h as never, {
      value: 12,
      prop: 'growth',
      column: growth,
      model: { growth: 12 },
    } as never) as { data?: { style?: Record<string, string> }, children?: unknown }
    expect(growthCell.children).toBe('12%')
    expect(growthCell.data?.style?.backgroundColor).toBeTruthy()
  })
})
