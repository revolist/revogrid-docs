import type { DataGridContextMenuConfig } from '@revolist/revogrid-pro'
import { excelFormattingContextMenu } from './excelFormattingPlugins'

const dataMutationItems = {
  'cell.edit': true,
  'cell.clear': true,
  'clipboard.cut': true,
  'clipboard.paste': true,
  'row.clear': true,
  'row.insertAbove': true,
  'row.insertBelow': true,
  'row.duplicate': true,
  'row.delete': true,
  'column.insertLeft': true,
  'column.insertRight': true,
  'column.duplicate': true,
  'column.delete': true,
} as const

/**
 * Preserve the maintained Pro formatting domain while optionally treating
 * source values as immutable. Formatting remains a presentation operation;
 * edit, paste, row, and schema mutation commands stay unavailable.
 */
export function resolveExcelContextMenu(
  contextMenu: DataGridContextMenuConfig = {},
  dataReadonly = false,
) {
  return {
    ...excelFormattingContextMenu,
    ...contextMenu,
    formatting: {
      ...excelFormattingContextMenu.formatting,
      ...(contextMenu.formatting ?? {}),
    },
    hiddenItems: {
      ...(dataReadonly ? dataMutationItems : {}),
      ...contextMenu.hiddenItems,
    },
  }
}
