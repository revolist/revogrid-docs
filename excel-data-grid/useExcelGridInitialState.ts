import { onBeforeUnmount } from 'vue'

export interface ExcelGridInitialRange {
  start: { x: number; y: number }
  end?: { x: number; y: number }
}

export interface ExcelGridInitialEdit {
  row: number
  prop: string
}

type GridElementGetter = () => HTMLRevoGridElement | undefined

export function useExcelGridInitialState(options: {
  getGridElement: GridElementGetter
  getInitialRange: () => ExcelGridInitialRange | undefined
  getInitialEdit: () => ExcelGridInitialEdit | undefined
  afterRangeApplied: () => Promise<void>
}) {
  let initialRangeApplied = false
  let initialRangeVisible = false
  let initialEditApplied = false
  let initialRangeObserver: IntersectionObserver | null = null

  async function applyInitialRange() {
    const initialRange = options.getInitialRange()
    if (!initialRange || !initialRangeVisible || initialRangeApplied) return
    const grid = options.getGridElement()
    if (!grid?.setCellsFocus) return
    await grid.setCellsFocus(initialRange.start, initialRange.end)
    const end = initialRange.end ?? initialRange.start
    // setCellsFocus paints the programmatic range but does not emit the public
    // range event consumed by Pro surfaces such as the formatting toolbar.
    grid.dispatchEvent(new CustomEvent('setrange', {
      detail: {
        x: initialRange.start.x,
        y: initialRange.start.y,
        x1: end.x,
        y1: end.y,
        type: 'rgCol',
      },
    }))
    initialRangeApplied = true
    await options.afterRangeApplied()
  }

  async function applyInitialState() {
    await applyInitialRange()
    const initialEdit = options.getInitialEdit()
    if (!initialEdit || initialEditApplied) return
    const grid = options.getGridElement()
    if (!grid?.setCellEdit) return
    await grid.setCellEdit(initialEdit.row, initialEdit.prop)
    initialEditApplied = true
  }

  function startInitialRangeObserver() {
    if (!options.getInitialRange() || initialRangeVisible || initialRangeObserver || typeof window === 'undefined') return
    const grid = options.getGridElement()
    if (!grid) return
    if (typeof IntersectionObserver === 'undefined') {
      initialRangeVisible = true
      void applyInitialState()
      return
    }
    initialRangeObserver = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting) return
      initialRangeVisible = true
      initialRangeObserver?.disconnect()
      initialRangeObserver = null
      void applyInitialState()
    }, { threshold: 0.15 })
    initialRangeObserver.observe(grid)
  }

  function resetInitialState() {
    initialRangeApplied = false
    initialEditApplied = false
  }

  onBeforeUnmount(() => initialRangeObserver?.disconnect())

  return { applyInitialState, resetInitialState, startInitialRangeObserver }
}
