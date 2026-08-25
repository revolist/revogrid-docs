// @vitest-environment happy-dom

import { describe, expect, it } from 'vitest'
import { DataGridContextMenuPlugin, DataGridFormattingPlugin, FIlTER_SLIDER } from '@revolist/revogrid-pro'
import { controlColumns, controlExample } from './example'
import { statusColumn } from '../../shared/columns'
import { capabilityColumnTypes } from '../../shared/columnTypes'
import { createFilterConfig } from '../../shared/filterConfig'

describe('Filtering & Data Control templates', () => {
  it('synchronizes the authored Pro badge template for Status options', () => {
    const owner = controlColumns.find(({ prop }) => prop === 'owner')
    const status = controlColumns.find(({ prop }) => prop === 'health')

    expect(owner?.syncCellTemplate).toBe(true)
    expect(status?.syncCellTemplate).toBe(true)
    expect(status?.cellTemplate).toBe(statusColumn.cellTemplate)
    expect(status?.badgeStyles).toBe(statusColumn.badgeStyles)
    expect((capabilityColumnTypes.select as { syncCellTemplate?: boolean }).syncCellTemplate).toBe(true)
    expect(createFilterConfig({ syncCellTemplate: true }).selection?.syncCellTemplate).toBe(true)
    expect(controlExample.code).not.toContain('syncCellTemplate')
    expect(controlExample.code).toContain(']\n\nconst formatting')
    expect(controlExample.code).toContain('}] }\n\n<RevoGrid')

    const rendered = status?.cellTemplate?.(
      ((tag: string, data: unknown, children: unknown) => ({ tag, data, children })) as never,
      { value: 'On track', column: status } as never,
    ) as { data?: { style?: Record<string, string> } }

    expect(rendered.data?.style).toMatchObject({
      backgroundColor: 'color-mix(in srgb, var(--badge-cell-value-background-color) 60%, transparent)',
      color: 'var(--badge-cell-value-color, inherit)',
      borderRadius: '12px',
      padding: '4px 8px',
    })
  })

  it('starts Growth at -11.8% and formats normalized values as percentages', () => {
    const growthFormats = controlExample.formatting?.columns?.find(({ column }) => column === 2)
    const growthFilters = typeof controlExample.filter === 'object'
      ? controlExample.filter.multiFilterItems?.growth
      : undefined

    expect(controlExample.source.map(row => row.growth)).toEqual([0.08, 0.14, -0.03, -0.12, 0.21])
    expect(controlExample.plugins).toContain(DataGridContextMenuPlugin)
    expect(controlExample.plugins).not.toContain(DataGridFormattingPlugin)
    expect(growthFormats?.format.value).toEqual({ kind: 'preset', preset: 'percent', decimalPlaces: 1 })
    expect(growthFilters).toEqual([
      expect.objectContaining({
        type: FIlTER_SLIDER,
        value: { fromValue: -0.118, toValue: 0.21 },
      }),
    ])

    const contextMenu = controlExample.contextMenu || undefined
    const customHeatmap = contextMenu?.formatting && contextMenu.formatting !== false
      ? contextMenu.formatting.advancedFormats?.customFormats?.find(({ id }) => id === 'heatmap')
      : undefined
    const rendered = customHeatmap?.cellTemplate(
      ((tag: string, data: unknown, children: unknown) => ({ tag, data, children })) as never,
      { value: 0.21, column: { prop: 'growth', ...customHeatmap.defaults } } as never,
    ) as { children?: unknown }

    expect(rendered.children).toBe('21.0%')
  })
})
