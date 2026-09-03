import { DataGridFormattingPlugin } from '@revolist/revogrid-pro'
import type { GridPlugin } from '@revolist/revogrid'

/**
 * The maintained Pro formatting plugin owns Excel HTML clipboard import/export
 * and installs its ClipboardPlugin dependency for these editable examples.
 */
/** Add the maintained formatting and menu runtimes without duplicating section plugins. */
export function withExcelFormattingPlugins(plugins: GridPlugin[] = []) {
  const sectionPlugins = plugins.filter((plugin) => plugin !== DataGridFormattingPlugin)
  return [...sectionPlugins, DataGridFormattingPlugin]
}

/** Opt in to the plugin-owned spreadsheet formatting toolbar. */
export const excelFormattingPanel = true

/** Keep the maintained Format Cells commands available from the grid menu. */
export const excelFormattingContextMenu = {
  formatting: {},
}

/** Reusable authored appearances, owned by DataGridFormattingPlugin. */
export const excelBoldFormat = {
  appearance: { bold: true },
}

export const excelMonoFormat = {
  appearance: { fontFamily: 'var(--xl-mono)' },
}

export const excelMonoRightFormat = {
  appearance: {
    fontFamily: 'var(--xl-mono)',
    horizontal: 'right',
  },
}

export const excelNumberFormat = {
  value: { kind: 'code', formatCode: '#,##0' },
  appearance: {
    fontFamily: 'var(--xl-mono)',
    horizontal: 'right',
  },
}

export const excelDecimalFormat = {
  value: { kind: 'code', formatCode: '#,##0.00' },
  appearance: {
    fontFamily: 'var(--xl-mono)',
    horizontal: 'right',
  },
}

export const excelSignedNumberFormat = {
  value: { kind: 'code', formatCode: '+#,##0.0;-#,##0.0;0.0' },
  appearance: {
    fontFamily: 'var(--xl-mono)',
    horizontal: 'right',
  },
}

export const excelSignedIntegerFormat = {
  value: { kind: 'code', formatCode: '+#,##0;-#,##0;0' },
  appearance: {
    fontFamily: 'var(--xl-mono)',
    horizontal: 'right',
  },
}

export const excelPercentFormat = {
  value: { kind: 'code', formatCode: '0%' },
  appearance: {
    fontFamily: 'var(--xl-mono)',
    horizontal: 'right',
  },
}

export function createBadgeFormat(styles: Record<string, { backgroundColor: string; color: string }>) {
  return ({ model, prop }: { model?: Record<string, unknown>; prop?: string }) => {
    const value = String(model?.[String(prop)] ?? '')
    const style = styles[value]
    return {
      presentation: { id: 'badge' },
      appearance: style
        ? { fillColor: style.backgroundColor, textColor: style.color }
        : undefined,
    }
  }
}

export const excelProgressFormat = {
  presentation: {
    id: 'progress-line',
    options: { minValue: 0, maxValue: 100 },
  },
}

type HierarchyFormattingRow = {
  depth?: number
  hasChildren?: boolean
  variance?: unknown
}

/** Build source-backed row/cell presets for grouping and tree hierarchy levels. */
export function createHierarchyFormattingState(
  rows: HierarchyFormattingRow[],
  varianceColumn?: number,
  options: { groupStyle?: 'fill' | 'border' | 'plain' } = {},
) {
  const rowPresets = rows.map((row, index) => ({
    row: index,
    format: {
      appearance: options.groupStyle === 'plain'
        ? { bold: Boolean(row.hasChildren) }
        : options.groupStyle === 'border'
          ? {
              bold: Boolean(row.hasChildren),
              borders: row.hasChildren
                ? { bottom: { width: 1, style: 'solid' as const, color: 'var(--xl-line)' } }
                : undefined,
            }
          : {
              fillColor: row.hasChildren
                ? Number(row.depth ?? 0) === 0
                  ? 'var(--xl-hierarchy-level-0)'
                  : 'var(--xl-hierarchy-level-1)'
                : 'var(--xl-surface)',
              bold: Boolean(row.hasChildren),
            },
    },
  }))
  const cellPresets = varianceColumn === undefined
    ? []
    : rows.map((row, index) => ({
        range: { start: { row: index, column: varianceColumn } },
        format: {
          appearance: {
            textColor: Number(row.variance) < 0
              ? 'var(--xl-danger)'
              : 'var(--xl-accent)',
          },
        },
      }))

  return { rows: rowPresets, cells: cellPresets }
}
