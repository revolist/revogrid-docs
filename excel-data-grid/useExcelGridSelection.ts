import { onBeforeUnmount } from 'vue'

export interface ExcelGridSelectionPayload {
  range: { x: number; y: number; x1: number; y1: number } | null
  visibleSource: Record<string, unknown>[]
  visibleColumns: Record<string, unknown>[]
  columnOffset: number
}

type GridElementGetter = () => HTMLRevoGridElement | undefined

export function useExcelGridSelection(
  getGridElement: GridElementGetter,
  onSelectionChange: (payload: ExcelGridSelectionPayload) => void,
) {
  let selectionEventsGrid: HTMLElement | null = null
  let selectionTimer: number | undefined

  async function emitSelectionChange() {
    const grid = getGridElement()
    if (!grid?.getSelectedRange || !grid?.getVisibleSource || !grid?.getColumns) return
    const [range, visibleSource, visibleColumns] = await Promise.all([
      grid.getSelectedRange(),
      grid.getVisibleSource(),
      grid.getColumns(),
    ])
    const colType = range?.colType ?? 'rgCol'
    const pinnedStartCount = visibleColumns.filter((column) => column.pin === 'colPinStart').length
    const pinnedEndCount = visibleColumns.filter((column) => column.pin === 'colPinEnd').length
    const rangeColumns = visibleColumns.filter((column) => (column.pin ?? 'rgCol') === colType)
    const columnOffset = colType === 'rgCol'
      ? pinnedStartCount
      : colType === 'colPinEnd'
        ? visibleColumns.length - pinnedEndCount
        : 0
    onSelectionChange({
      range,
      visibleSource,
      visibleColumns: rangeColumns as Record<string, unknown>[],
      columnOffset,
    })
  }

  function scheduleSelectionChange() {
    if (typeof window === 'undefined') {
      void emitSelectionChange()
      return
    }
    if (selectionTimer !== undefined) window.clearTimeout(selectionTimer)
    selectionTimer = window.setTimeout(async () => {
      selectionTimer = undefined
      await emitSelectionChange()
    }, 0)
  }

  function startSelectionTracking() {
    const grid = getGridElement()
    if (!grid || selectionEventsGrid === grid) return
    selectionEventsGrid?.removeEventListener('setrange', scheduleSelectionChange)
    selectionEventsGrid = grid
    selectionEventsGrid.addEventListener('setrange', scheduleSelectionChange)
  }

  async function selectRange(
    start: { x: number; y: number },
    end?: { x: number; y: number },
  ) {
    const grid = getGridElement()
    if (!grid?.setCellsFocus) return
    await grid.setCellsFocus(start, end)
    await emitSelectionChange()
  }

  onBeforeUnmount(() => {
    selectionEventsGrid?.removeEventListener('setrange', scheduleSelectionChange)
    if (selectionTimer !== undefined && typeof window !== 'undefined') window.clearTimeout(selectionTimer)
  })

  return { emitSelectionChange, scheduleSelectionChange, selectRange, startSelectionTracking }
}
